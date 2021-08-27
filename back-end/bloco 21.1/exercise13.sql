-- Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e 
-- ano no qual foi contratado (exiba somente o ano).

SELECT employee_id, FIRST_NAME, year(HIRE_DATE) FROM employees;