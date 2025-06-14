// const express = require('express');
// const mysql = require('mysql12/promise');
// const fs = require('fs');
// const path = require('path');
// const dogwalksRouter = require('./routes/index');

// const app = express();
// const port = 3000;
// const SQL_SCHEMA_FILE = 'dogwalks.sql';

// const dbConfig = {
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'DogWalkService'
// };

// let connection;

// app.use(express.json());

// const sqlSchemaPath = path.join(__dirname, SQL_SCHEMA_FILE);

// async function connectToDatabase(){
//     try {
//         connection = await mysql.createConnection(dbConfig);
//         console.log('Connected to MySQL database:', dbConfig.database);
//     } catch (err) {
//         console.error('Failed to connect:', err.message);
//         process.exit(1);
//     }
// }

// connectToDatabase();

// // var router = express.Router();

// // // endpoints
// // router.get('/api/dogs', async(req, res) => {
// //     try {
// //         const [rows] = await connection.execute(`
// //             SELECT Dogs.name as dog_name, Dogs.size, Users.username as owner_username
// //             FROM Dogs
// //             INNER JOIN Users ON Dogs.owner_id=Users.user_id;
// //             `);
// //             res.json({
// //                 data: rows
// //             });
// //     } catch (err) {
// //         console.error('Error getting dogs:', err.message);
// //         res.status(500).json({ error: 'Failed to retrieve dogs' });
// //     }
// // });

// // router.get('/api/walkrequests/open', async(req, res) => {
// //     try {
// //         const [rows] = await connection.execute(`
// //             SELECT WalkRequests.request_id, Dogs.name as dog_name, WalkRequests.requested_time,
// //             WalkRequests.duration_minutes, WalkRequests.location, Users.username AS owner_username
// //             FROM WalkRequests
// //             INNER JOIN Dogs ON WalkRequests.dog_id=Dogs.dog_id
// //             INNER JOIN Users ON Dogs.owner_id=Users.user_id
// //             WHERE WalkRequests.status='open';
// //     `);
// //     res.json({
// //         data: rows
// //     });
// //     } catch (err) {
// //         console.error('Error getting walkrequests:', err.message);
// //         res.status(500).json({ error: 'Failed to retrieve walkrequests' });
// //     }
// // });

// // router.get('/api/walkers/summary', async(req, res) => {
// //     try {
// //         const [rows] = await connection.execute(`
// //             SELECT
// //                 u.username AS walker_username,
// //                 COALESCE(COUNT(wr.rating_id), 0) AS total_ratings,
// //                 AVG(wr.rating) AS average_rating,
// //                 COALESCE(COUNT(CASE WHEN wa.status='accepted' AND wreq.status='completed' THEN wreq.request_id ELSE NULL END), 0) AS completed_walks
// //             FROM
// //                 Users u
// //             LEFT JOIN
// //                 WalkApplications wa ON u.user_id = wa.walker_id
// //             LEFT JOIN
// //                 WalkRequests wreq ON wa.request_id = wreq.request_id
// //             LEFT JOIN
// //                 WalkRatings wr ON u.user_id = wr.walker_id
// //             WHERE
// //                 u.role='walker'
// //             GROUP BY
// //                 u.user_id, u.username;
// //     `);
// //     res.json({
// //         data: rows
// //     });
// //     } catch (err) {
// //         console.error('Error getting walkrequests:', err.message);
// //         res.status(500).json({ error: 'Failed to retrieve walkers' });
// //     }
// // });