const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const Users = require('../models/users');

router.get('/', (req, res, next) => {
    Users.find()
        .exec()
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
    // res.status(200).json({
    //     message: 'Handling GET requests to /users'
    // });
});

router.post('/', (req, res, next) => {
    // const user = {
    //     userId: req.body.userId,
    //     password: req.body.password
    // };
    Users.find({userId: req.body.userId})
        .exec()
        .then(result => {
            if(result.length > 0){
                res.status(500).json({
                    message: 'duplicate, userId does exists',
                    userId: req.body.userId
                });
            } else {
                const users = new Users({
                    _id: new mongoose.Types.ObjectId(),
                    userId: req.body.userId,
                    password: req.body.password,
                    fullName: req.body.fullName
                });

                users.save()
                    .then(result => {
                        console.log(result);
                    })
                    .catch(err => console.log(err));

                res.status(200).json({
                    message: 'Handling POST requests to /users',
                    user: users
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });

});

router.get('/:userId', (req, res, next) => {
    const id = req.params.userId;
    if(id === 'special') {
        res.status(201).json({
            message: 'You discovered special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed ID'
        });
    }
});

router.patch('/:userId', (req, res, next) => {
    const id = req.params.userId;
    res.status(200).json({
        message: 'Updated user : ' + id
    });
});

router.delete('/:userId', (req, res, next) => {
    const id = req.params.userId;
    res.status(200).json({
        message: 'Deleted user : ' + id
    });
});

module.exports = router;