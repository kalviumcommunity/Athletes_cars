const express = require('express');
const router = express.Router();
const { Car, carJoiSchema } = require('./schema');
const { userModel } = require("./userschema");
const jwt = require('jsonwebtoken');

router.use(express.json());

router.get('/users', async (req, res) => {
    try {
        const users = await userModel.find({}, 'username');
        res.status(200).json(users);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/get', async (req, res) => {
    try {
        const { userId } = req.query;
        const query = userId ? { created_by: userId } : {};
        const cars = await Car.find(query);
        res.status(200).json(cars);
    } catch (err) {
        console.error('Error fetching cars:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Other routes...
