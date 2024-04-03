const express = require('express');
const router = express.Router();
const Car = require('./schema');
const joi = require('joi');

router.use(express.json());

const carSchema = joi.object({
    name: Joi.string().required(),
    sport: Joi.string().required(),
    maximumspeed: Joi.number().required(),
    priceofcar: Joi.number().required(),
    company: Joi.string().required(),
    imagelink: Joi.string().required()

});



router.get('/get', async (req, res) => {
    try {
        const cars = await Car.find({});
        res.status(200).json(cars);
    } catch (err) {
        console.error('error', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/get/:id', async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) {
            return res.status(404).json({ error: 'Car not found' });
        }
        res.status(200).json(car);
    } catch (err) {
        console.error('error', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/post', async (req, res) => {
    try {
        const newCar = await Car.create(req.body);
        res.status(200).json(newCar);
    } catch (err) {
        console.error('Error creating new car:', err); 
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.put('/update/:id', async (req, res) => {
    try {
        const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedCar);
    } catch (err) {
        console.error('Error updating car:', err); 
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
      await Car.findByIdAndDelete(req.params.id);
      res.status(204).send();
    } catch (err) {
      console.error('Error deleting car:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

module.exports = router;
