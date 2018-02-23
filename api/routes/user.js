const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        router: 'GET',
        message: 'Hello, this is GET router'
    });
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    res.status(200).json({
        router: 'GET by id',
        message: 'Hello, this is GET router, request by : ' + id,
        sample: [
            {
                test1: '1',
                test11: '11'
            },
            {
                test1: '2',
                test11: '22'
            }
            ],
        test: "Testing!"
    });
});

module.exports = router;