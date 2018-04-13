DROP TABLE IF EXISTS houses;

CREATE TABLE houses(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    address VARCHAR(100),
    city VARCHAR(100),
    state VARCHAR(2),
    zip INTEGER
);

ALTER TABLE houses
ADD COLUMN img TEXT;

ALTER TABLE houses
ADD COLUMN mortgage DECIMAL;

ALTER TABLE houses
ADD COLUMN rent DECIMAL;


INSERT INTO houses
(name, address, city, state, zip, img, mortgage, rent)
VALUES ('Name 6', 'Address 6', 'City 6', 'CA', 93536, 'http://www.fillmurray.com/200/300', 9000,800);
INSERT INTO houses
(name, address, city, state, zip, img, mortgage, rent)
VALUES ('Name 7', 'Address 7', 'City 7', 'CA', 93536, 'http://www.fillmurray.com/200/300', 9000,800);
INSERT INTO houses
(name, address, city, state, zip, img, mortgage, rent)
VALUES ('Name 8', 'Address 8', 'City 8', 'CA', 93536, 'http://www.fillmurray.com/200/300', 9000,800);
INSERT INTO houses
(name, address, city, state, zip, img, mortgage, rent)
VALUES ('Name 9', 'Address 9', 'City 9', 'TX', 93536, 'http://www.fillmurray.com/200/300', 9000,800);
INSERT INTO houses
(name, address, city, state, zip, img, mortgage, rent)
VALUES ('Name 10', 'Address 10', 'City 10', 'FL', 93536, 'http://www.fillmurray.com/200/300', 9000,800);