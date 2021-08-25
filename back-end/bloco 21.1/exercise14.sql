-- Escreva uma query que exiba as seguintes informações de cada funcionário: id , 
-- primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).

SELECT employee_id, first_name,
RIGHT(hire_date, 2) from employees;

