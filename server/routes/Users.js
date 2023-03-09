const express = require('express');
const router = express.Router();
const {Users} = require('../models');
const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken')
const validationToken = require('../middleware/validationToken')
require('dotenv').config();
const secret = process.env.JWT_SECRET;


// Registration

router.post('/registration', async (req, res) => {
   const { userName, password } = req.body;
   if (!req.body.profileImage) {
    var profileImage = 'images/defaultProfileImage.jpg';
   }

    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            userName: userName,
            password: hash,
            profileImage: profileImage,
        });
        return res.json({message: 'Registration Successful.'});
    });
});


// Login

router.post('/login', async (req, res) => {
    const { userName, password } = req.body;
    const user =  await Users.findOne({ where: {
        userName: userName,
    }});

    if (!user) return res.json({ message : 'User does not found..'});

    bcrypt.compare(password, user.password).then((match) => {
        if (!match) {
            return res.json({ message : 'Incorrect Password!'});
        }
        else {
            const accessToken = sign({id: user.id, userName: userName, profileImage:user.profileImage}, `${secret}`);
            return res.json({accessToken: accessToken, user: user, message : 'Login successful!'});
        }
    });

});

// Auth Context Request
router.get('/authContext', validationToken, async (req, res) => {
    return res.json(req.user);
});


module.exports = router;