const express = require('express');
const router = express.Router();
const {Users} = require('../models');
const bcrypt = require('bcrypt');

// Registration

router.post('/registration', async (req, res) => {
   const { userName, password } = req.body;
   if (!req.body.profileImage) {
    var profileImage = 'images/defaultProfileImage';
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
            res.json({ message : 'Login successful!'});
            return res.json(user);
        }
    });

});

module.exports = router;