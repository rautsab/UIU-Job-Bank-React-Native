CREATE TABLE jobs
(
    "id"               SERIAL PRIMARY KEY,
    "jobTitle"         VARCHAR(255) NOT NULL,
    "companyTitle"     VARCHAR(255) NOT NULL,
    "location"         VARCHAR(255) NOT NULL,
    "status"           VARCHAR(255) NOT NULL,
    "salary"           VARCHAR(255) NOT NULL,
    "vacancy"          VARCHAR(255) NOT NULL,
    "experience"       VARCHAR(255) NOT NULL,
    "gender"           VARCHAR(255) NOT NULL,
    "skills"           VARCHAR(255) NOT NULL,
    "deadline"         VARCHAR(255) NOT NULL,
    "academic"         VARCHAR(255) NOT NULL,
    "responsibilities" VARCHAR(255) NOT NULL,
    "description"      VARCHAR(255) NOT NULL
);