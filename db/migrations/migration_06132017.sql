\connect animal_awareness_development;

DROP DATABASE IF EXISTS animal_awareness_development;
CREATE DATABASE animal_awareness_development;
DROP TABLE IF EXISTS stories;
DROP TABLE IF EXISTS animals;


CREATE TABLE stories(
  id BIGSERIAL PRIMARY KEY,
  users varchar(255) NOT NULL,
  content varchar(255) NOT NULL
);


CREATE TABLE animals(
  id BIGSERIAL PRIMARY KEY,
  animal_type VARCHAR(255),
  animal_pic_url VARCHAR(255),
  animal_info VARCHAR(255),
  stories_id INTEGER REFERENCES stories(id) 
);





