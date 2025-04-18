/*
https://www.codewars.com/kata/5802e32dd8c944e562000020

Description:
For this challenge you need to create a simple SELECT statement that will return all columns from the products table, and join to the companies table so that you can return the company name.
products table schema
id
name
isbn
company_id
price
companies table schema
id
name
You should return all product fields as well as the company name as "company_name".
*/

SELECT products.id, products.name, products.isbn, products.company_id, products.price, companies.name as company_name
FROM products
    JOIN companies ON companies.id = products.company_id;

-- REFACTOR --
SELECT products.*, companies.name AS company_name
FROM
    products
    JOIN companies ON company_id = companies.id;
