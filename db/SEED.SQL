DROP TABLE IF EXISTS houses;

CREATE TABLE houses(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    address VARCHAR(100),
    city VARCHAR(100),
    state VARCHAR(2),
    zip INTEGER
);

INSERT INTO houses
(name, address, city, state, zip)
VALUES ('Name 1', 'Address 1', 'City 1', 'UT', 93536);

INSERT INTO houses
(name, address, city, state, zip)
VALUES ('Name 2', 'Address 2', 'City 1', 'WA', 93536);

INSERT INTO houses
(name, address, city, state, zip)
VALUES ('Name 3', 'Address 3', 'City 2', 'IL', 93536);

INSERT INTO houses
(name, address, city, state, zip)
VALUES ('Name 4', 'Address 4', 'City 2', 'CA', 93536);

INSERT INTO houses
(name, address, city, state, zip)
VALUES ('Name 5', 'Address 5', 'City 5', 'CA', 93536);

ALTER TABLE houses
ADD COLUMN img TEXT;

ALTER TABLE houses
ADD COLUMN mortgage DECIMAL;

ALTER TABLE houses
ADD COLUMN rent DECIMAL;