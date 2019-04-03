DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30),
    price INTEGER(10) NOT NULL,
    stock_quantity INTEGER(10) NOT NULL,
    item_id INTEGER(10) NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Plumbus', 'General', 240, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Playstation', 'Electronics', 400, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Angry Cat', 'Pets', 1, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Tie Fighter', 'Auto', 999, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Penguins', 'Pets', 33, 33);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Nimbus Cloud', 'Auto', 77, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Adventurers Cloak', 'Clothing', 50, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Teleporter', 'Wacky SciFi Stuff', 489, 52);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Sega Game Gear', 'Electronics', 134, 45);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Plumbus', 'Wacky SciFi Stuff', 24, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Shrink Ray', 'Wacky SciFi Stuff', 653, 6);

DELETE FROM products WHERE item_id = 13;
DELETE FROM products WHERE item_id = 14;
DELETE FROM products WHERE item_id = 11;

SELECT * FROM products;