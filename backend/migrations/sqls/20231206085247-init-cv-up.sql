CREATE TABLE CV
(
    id         SERIAL PRIMARY KEY,
    firstname  VARCHAR(255),
    lastname   VARCHAR(255),
    email      VARCHAR(255),
    phone      VARCHAR(255),
    address    VARCHAR(255),
    summary    TEXT,
    education  TEXT[],
    experience TEXT[],
    skills     TEXT[],
    languages  TEXT[]
);