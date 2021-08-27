-- Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e 
-- mês no qual foi contratado (exiba somente o mês).

SELECT EMPLOYEE_ID, FIRST_NAME,
substring(HIRE_DATE, 6, 2) FROM employees;