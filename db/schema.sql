DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db; 

USE company_db;

CREATE TABLE  department (
    
    id INT AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(100)
);

CREATE TABLE role (
    
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);


CREATE TABLE employee ( 
    
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    role_id INT,
    manager_id VARCHAR(100),
    FOREIGN KEY (role_id)
    REFERENCES role(id)
    ON DELETE SET NULL

);