/*
04/25/2025
Challenge
Create a table called videos with the following columns:

id of type INTEGER with no default value
name of type TEXT with a default value of 'Untitled'
is_published of type BOOLEAN with a default value of false
*/

CREATE TABLE videos (
    id INTEGER,
    name TEXT DEFAULT 'Untitled',
    is_published BOOLEAN DEFAULT false
);