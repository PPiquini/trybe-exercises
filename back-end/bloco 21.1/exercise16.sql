-- Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.

SELECT CONCAT(UCASE(FIRST_NAME), ' ', UCASE(LAST_NAME)) 'Names' FROM employees;