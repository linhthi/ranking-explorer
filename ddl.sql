CREATE DATABASE ranking;
USE ranking;

DROP TABLE posts;
CREATE TABLE posts(
	id VARCHAR(20) NOT NULL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    source TEXT,
	content TEXT,
    media TEXT,
    create_time LONG,
    target TEXT
);

CREATE TABLE ranking_data(
	user_id INTEGER NOT NULL,
    provider VARCHAR(50),
    treatment VARCHAR(50),
    request_timestamp timestamp,
	response_timestamp timestamp,
    exist_id TEXT,
    feeds TEXT,
    ranking_metatadata TEXT
);
    