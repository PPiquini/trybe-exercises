-- Escreva uma query que exiba o sobrenome e a data de contratação de todos 
-- os funcionário contratados em julho de 1987.

SELECT LAST_NAME, HIRE_DATE FROM employees
WHERE LEFT(HIRE_DATE, 7) = '1987-07';