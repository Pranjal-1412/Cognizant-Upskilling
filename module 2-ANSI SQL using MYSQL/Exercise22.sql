SELECT
    event_id,
    title,
    city,
    TIMESTAMPDIFF(HOUR, start_date, end_date) AS duration_hours
FROM Events;