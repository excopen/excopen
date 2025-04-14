-- LOCATION: Добавляем поля country, tour_count, image_url
ALTER TABLE locations
    ADD COLUMN country VARCHAR(255),
    ADD COLUMN tour_count INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN image_url VARCHAR(512);

-- REVIEW: Добавляем новые поля
ALTER TABLE reviews
    ADD COLUMN with_children BOOLEAN NOT NULL DEFAULT FALSE,
    ADD COLUMN person_count DOUBLE PRECISION NOT NULL DEFAULT 1,
    ADD COLUMN positive_text TEXT,
    ADD COLUMN negative_text TEXT;