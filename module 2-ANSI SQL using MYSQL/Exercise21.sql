SELECT
    YEAR(registration_date) AS year,
    MONTH(registration_date) AS month,
    COUNT(*) AS total_registrations
FROM Registrations
GROUP BY YEAR(registration_date), MONTH(registration_date)
ORDER BY year, month;