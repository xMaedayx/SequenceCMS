SELECT 
role.title AS name, department.name_id AS name_id 
FROM department 
JOIN department ON role.department_id = department.id

SELECT 
employee.first_name AS name_id, role.salary AS salary 
FROM role
JOIN role AS NAME employee.role_id = role.id

SELECT 
  department.name AS department_name, employee.last_name AS last_name 
FROM 
  employee 
  JOIN role ON employee.role_id = role.id 
  JOIN department ON role.department_id = department.id;

SELECT 
employee.manager_id AS role.department_id AS NAME
FROM role 
JOIN role ON employee.title = employee.id

SELECT 
role.salary AS employee.role_id AS role_id
FROM role 
JOIN role ON employee.manager_id = employee.id
