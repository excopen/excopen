-- Расширения
CREATE EXTENSION IF NOT EXISTS postgis;
CREATE EXTENSION IF NOT EXISTS vector;

-- Пользователи
CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    google_id VARCHAR(255),
    name VARCHAR(255),
    surname VARCHAR(255),
    email VARCHAR(255),
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    preferences_vector vector(32),
    second_vector vector(32),
    phone_number VARCHAR(255),
    description TEXT,
    city VARCHAR(255),
    avatar_url VARCHAR(512),
    vk_link VARCHAR(512),
    telegram_link VARCHAR(512),
    guide_rating DOUBLE PRECISION DEFAULT 0.0,
    total_reviews INTEGER DEFAULT 0,
    role VARCHAR(32)
);

-- Локации
CREATE TABLE locations (
    id BIGSERIAL PRIMARY KEY,
    city VARCHAR(255),
    region VARCHAR(255)
);

-- Экскурсии
CREATE TABLE tours (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(255),
    location_id BIGINT REFERENCES locations(id),
    price INTEGER,
    duration DOUBLE PRECISION,
    route_length DOUBLE PRECISION,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    vector_representation vector(32),
    creator_id BIGINT NOT NULL REFERENCES users(id),
    min_age INTEGER,
    max_capacity INTEGER,
    rating DOUBLE PRECISION DEFAULT 0.0,
    review_count INTEGER DEFAULT 0,
    tour_type VARCHAR(32),
    transport_type VARCHAR(32)
);

-- Описание экскурсии (OneToOne)
CREATE TABLE description (
    id BIGSERIAL PRIMARY KEY,
    tour_id BIGINT NOT NULL UNIQUE REFERENCES tours(id) ON DELETE CASCADE,
    main_info TEXT,
    what_to_expect TEXT,
    org_details TEXT,
    meeting_place TEXT
);

-- Изображения экскурсии
CREATE TABLE tour_images (
    id BIGSERIAL PRIMARY KEY,
    tour_id BIGINT NOT NULL REFERENCES tours(id) ON DELETE CASCADE,
    image_url VARCHAR(512)
);

-- Теги
CREATE TABLE tags (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255)
);

-- Связь экскурсии с тегами (ManyToMany)
CREATE TABLE tour_tags (
    id BIGSERIAL PRIMARY KEY,
    tour_id BIGINT NOT NULL REFERENCES tours(id) ON DELETE CASCADE,
    tag_id BIGINT NOT NULL REFERENCES tags(id) ON DELETE CASCADE
);

-- Отзывы
CREATE TABLE reviews (
    id BIGSERIAL PRIMARY KEY,
    tour_id BIGINT NOT NULL REFERENCES tours(id) ON DELETE CASCADE,
    user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    rating DOUBLE PRECISION,
    review_text TEXT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

-- Изображения отзывов
CREATE TABLE review_images (
    id BIGSERIAL PRIMARY KEY,
    review_id BIGINT NOT NULL REFERENCES reviews(id) ON DELETE CASCADE,
    image_url VARCHAR(512)
);

-- Избранные экскурсии
CREATE TABLE favorites (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    tour_id BIGINT NOT NULL REFERENCES tours(id) ON DELETE CASCADE,
    UNIQUE(user_id, tour_id)
);

-- Координаты
CREATE TABLE coordinates (
    id BIGSERIAL PRIMARY KEY,
    location GEOGRAPHY(Point, 4326)
);
