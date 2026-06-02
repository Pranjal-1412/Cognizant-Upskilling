SELECT
    e.event_id,
    e.title,
    e.city,
    e.status,
    COUNT(DISTINCT r.registration_id) AS total_registrations,
    COUNT(DISTINCT s.session_id) AS total_sessions,
    COUNT(DISTINCT res.resource_id) AS total_resources,
    ROUND(AVG(f.rating), 2) AS average_rating
FROM Events e
LEFT JOIN Registrations r
    ON e.event_id = r.event_id
LEFT JOIN Sessions s
    ON e.event_id = s.event_id
LEFT JOIN Resources res
    ON e.event_id = res.event_id
LEFT JOIN Feedback f
    ON e.event_id = f.event_id
GROUP BY
    e.event_id,
    e.title,
    e.city,
    e.status;