CREATE DATABASE journal;

use journal;

CREATE TABLE entries (
	date VARCHAR(255) NOT NULL, 
    entry TEXT NOT NULL, 
    PRIMARY KEY (date)
);