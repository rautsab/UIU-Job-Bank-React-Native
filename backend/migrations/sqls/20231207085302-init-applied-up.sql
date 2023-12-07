CREATE TABLE applied
(
    id         SERIAL PRIMARY KEY,
    job_id     int          NOT NULL,
    user_email VARCHAR(255) NOT NULL
);