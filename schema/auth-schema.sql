CREATE TABLE users (
  id SERIAL UNIQUE,
  username VARCHAR(25) PRIMARY KEY,
  password TEXT NOT NULL,
  email TEXT NOT NULL
);


INSERT INTO users (username, password, email)
VALUES ('testuser',
        '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
        'joel@joelburton.com'
        ),
       ('testadmin',
        '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q',
        'joel@joelburton.com'
        ),
       ('Battistanic90',
        '$2b$12$1Cr3ZbtOghx4Ym2oIsBT5.RY89l3PW4mDqRPMYCF3PlxOx0.ryaCK',
        'test@test.com'
        );