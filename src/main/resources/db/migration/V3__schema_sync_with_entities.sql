-- === FAVORITES: проверка на наличие ограничений и корректности ===
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_constraint WHERE conname = 'favorites_user_tour_unique'
    ) THEN
        ALTER TABLE favorites
            ADD CONSTRAINT favorites_user_tour_unique UNIQUE(user_id, tour_id);
    END IF;
END $$;

-- === LOCATIONS: Удаление NOT NULL с поля tour_count (в коде не используется) ===
ALTER TABLE locations
    ALTER COLUMN tour_count DROP NOT NULL;

-- === TOURS: убеждаемся, что location_id NOT NULL и ON DELETE CASCADE ===
DO $$
BEGIN
    IF EXISTS (
        SELECT 1 FROM information_schema.columns
        WHERE table_name = 'tours' AND column_name = 'location_id'
    ) THEN
        ALTER TABLE tours
            ALTER COLUMN location_id SET NOT NULL;

        -- Переопределяем внешний ключ с ON DELETE CASCADE
        DO $inner$
        DECLARE
            constraint_name TEXT;
        BEGIN
            SELECT tc.constraint_name INTO constraint_name
            FROM information_schema.table_constraints tc
            JOIN information_schema.key_column_usage kcu
                ON tc.constraint_name = kcu.constraint_name
            WHERE tc.table_name = 'tours'
              AND kcu.column_name = 'location_id'
              AND tc.constraint_type = 'FOREIGN KEY';

            IF constraint_name IS NOT NULL THEN
                EXECUTE format('ALTER TABLE tours DROP CONSTRAINT %I', constraint_name);
            END IF;

            ALTER TABLE tours
                ADD CONSTRAINT fk_tours_location
                FOREIGN KEY (location_id) REFERENCES locations(id) ON DELETE CASCADE;
        END $inner$;
    END IF;
END $$;

-- === REVIEWS: Удаление старого поля review_text, если он есть ===
DO $$
BEGIN
    IF EXISTS (
        SELECT 1 FROM information_schema.columns
        WHERE table_name = 'reviews' AND column_name = 'review_text'
    ) THEN
        ALTER TABLE reviews DROP COLUMN review_text;
    END IF;
END $$;

-- === DESCRIPTION: убеждаемся, что tour_id действительно UNIQUE и NOT NULL ===
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.table_constraints
        WHERE table_name = 'description'
        AND constraint_type = 'UNIQUE'
        AND constraint_name = 'uk_description_tour'
    ) THEN
        ALTER TABLE description
            ADD CONSTRAINT uk_description_tour UNIQUE (tour_id);
    END IF;
END $$;
