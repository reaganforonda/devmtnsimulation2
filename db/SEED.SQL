DROP TABLE IF EXISTS houses;

CREATE TABLE houses(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    address VARCHAR(100),
    city VARCHAR(100),
    state VARCHAR(2),
    zip INTEGER,
    img TEXT,
    mortgage DECIMAL,
    rent DECIMAL
);

INSERT INTO houses
(name, address, city, state, zip, img, mortgage, rent)
VALUES ('Name 1', 'Address 1', 'City 1', 'UT', 93536, 'http://www.fillmurray.com/200/300', 80000, 7000);

INSERT INTO houses
(name, address, city, state, zip, img, mortgage, rent)
VALUES ('Name 2', 'Address 2', 'City 1', 'WA', 93536, 'http://www.fillmurray.com/200/300', 80000, 7000);

INSERT INTO houses
(name, address, city, state, zip, img, mortgage, rent)
VALUES ('Name 3', 'Address 3', 'City 2', 'IL', 93536, 'http://www.fillmurray.com/200/300', 80000, 7000);

INSERT INTO houses
(name, address, city, state, zip, img, mortgage, rent)
VALUES ('Name 4', 'Address 4', 'City 2', 'CA', 93536, 'http://www.fillmurray.com/200/300', 80000, 7000);

INSERT INTO houses
(name, address, city, state, zip, img, mortgage, rent)
VALUES ('Name 5', 'Address 5', 'City 5', 'CA', 93536, 'http://www.fillmurray.com/200/300', 80000, 7000);