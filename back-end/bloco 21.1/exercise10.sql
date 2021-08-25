-- Escreva um query que exiba média salarial e o número de funcionários de todos os 
-- departamentos com mais de dez funcionários. Dica: agrupe pelo department_id .

SELECT DEPARTMENT_ID, COUNT(DEPARTMENT_ID) AS qty ,AVG(SALARY) AS SALARY FROM employees
GROUP BY DEPARTMENT_ID
HAVING qty > 10;