const express = require('express');
const router = express.Router();
const car = require('./schema');

router.use(express.json());

router.get('/get', async (req, res) => {
    try {
        const sports = await car.find();
        res.json(sports);
    } catch (err) {
        console.error('error', err);
        res.status(500).json({ error: 'internal server error' });
    }
});

router.post('/post', (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

router.put('/put', (req, res) => {
    res.send("put request");
});

router.delete('/delete', (req, res) => {
    res.send("delete request");
});

module.exports = router;
