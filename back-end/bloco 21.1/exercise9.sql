--  Escreva uma query que exiba em ordem decrescente a média salarial 
-- de todos os cargos, exceto das pessoas programadoras ( IT_PROG ).

SELECT JOB_ID, AVG(SALARY) FROM employees
WHERE JOB_ID <> 'IT_PROG'
GROUP BY JOB_ID
ORDER BY AVG(SALARY) DESC;
