SELECT
    city,
    COUNT(CASE WHEN status = 'completed' THEN 1 END) AS completed_events,
    COUNT(*) AS total_events,
    ROUND(
        COUNT(CASE WHEN status = 'completed' THEN 1 END) * 100.0
        / COUNT(*),
        2
    ) AS completion_percentage
FROM Events
GROUP BY city;