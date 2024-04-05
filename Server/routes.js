const express = require('express');
const router = express.Router();
const { Car, carJoiSchema } = require('./schema');
const {userModel} = require("./userschema")
const jwt = require('jsonwebtoken')

router.use(express.json());

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
        const { error } = carJoiSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        
        const newCar = await Car.create(req.body);
        res.status(200).json(newCar);
    } catch (err) {
        console.error('Error creating new car:', err); 
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.put('/update/:id', async (req, res) => {
    try {
        const { error } = carJoiSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        
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
   

router.post('/Signup',async(req,res)=>{
    try{
        const user = await userModel.create({
            username:req.body.username,
            password:req.body.password
        })
        res.send(user)
    }catch(err){
        console.error(err)
    }
  
})
router.post('/Login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await userModel.findOne({ username, password });
        
        if (!user) {
            return res.status(201).json({ error: 'Invalid username / password' });
        }

        
        res.status(200).json({ user });
        
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/logout',(req,res)=>{
    res.clearCookie('username')
    res.clearCookie('password')

    res.status(200).json({message:'Logout succesful'})
})








router.post('/auth', async(req,res) => {
    try{const {username,password} = req.body
    const user = {
        "username" : username,
        "password" : password
    }
    const TOKEN = jwt.sign(user,process.env.TOKEN)
    res.cookie('token',TOKEN,{maxAge:365*24*60*60*1000})
    res.json({"acsessToken" : TOKEN})
}catch(err){
    console.error(err)
    res.status(500).json({error:'Internal Server Error'})
}
});


module.exports = router;
