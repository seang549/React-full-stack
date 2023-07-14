DROP DATABASE IF EXISTS song_db;
CREATE DATABASE song_db;

\c song_db;

DROP TABLE IF EXISTS song_tb;
CREATE TABLE song_tb (
    id SERIAL PRIMARY KEY,
    song VARCHAR(255),
    author VARCHAR(255)
);

INSERT INTO song_tb (song, author) VALUES ('Chop Suey!', 'System Of A Down');
INSERT INTO song_tb (song, author) VALUES ('Bulls On Parade', 'Rage Against the Machine');
INSERT INTO song_tb (song, author) VALUES ('The Spins', 'Mac Miller');
INSERT INTO song_tb (song, author) VALUES ('Best Friend', 'Foster the People');
INSERT INTO song_tb (song, author) VALUES ('The River', 'Aurora');
INSERT INTO song_tb (song, author) VALUES ('The Kids Aren''t Alright', 'The Offspring');