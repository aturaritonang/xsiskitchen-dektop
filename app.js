const express = require('express');
const app = express();

const userRouters = require('./api/routes/user');

app.use('/user', userRouters);
// app.use('/user', (req, res, next) => {
//     let users = [
//         { user: "user1", name: "Phil" },
//         { user: "user2", name: "Mark" },
//         { user: "user3", name: "John" }
//     ];
//     res.status(200).json({
//         count: users.length,
//         users: users
//     });
// });

app.use((req, res, next) => {
    res.status(200).send("Express is works!");
});

module.exports = app;