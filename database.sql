CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');

-- favouriate table
CREATE TABLE "favourites" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL,
    "categories" INTEGER,
    "embedded_url" VARCHAR (100) NOT NULL
);

INSERT INTO "favourites"
    ("name", "categories", "embedded_url")
VALUES
    ('Cheer Up Hug GIF By Chibird', 3, 'https://giphy.com/embed/9JnRMIFMYAKpaHRXRF'),
    ('No Idea Idk GIF By SomeGoodNews', 1, 'https://giphy.com/embed/Ur8XCl98PfFqEmyNIE');