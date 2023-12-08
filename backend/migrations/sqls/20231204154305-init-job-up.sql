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
    "academic"         TEXT,
    "responsibilities" TEXT,
    "description"      TEXT,
    "published_date"   DATE DEFAULT CURRENT_DATE,
    "author_email"     VARCHAR(255);
);