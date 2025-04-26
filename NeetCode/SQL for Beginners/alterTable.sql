/*
04/25/2025
Challenge
You are given a table called books with the following columns:

id of type INTEGER
title of type TEXT
author of type TEXT
Your task is to:

Add a new column called published_year of type INTEGER to the table
Modify the id column to be called isbn instead
Drop the author column from the table
*/

--Add a new column called published_year of type INTEGER to the table--
ALTER TABLE books ADD COLUMN published_year INTEGER;

--Modify the id column to be called isbn instead--
ALTER TABLE books RENAME COLUMN id TO isbn;

--Drop the author column from the table--
ALTER TABLE books DROP COLUMN author;
