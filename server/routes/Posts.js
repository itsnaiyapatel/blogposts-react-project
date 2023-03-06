const express = require('express');
const router = express.Router();
const { Posts, sequelize } = require('../models');

// sending post to the database

router.post('/addpost', async (req, res) => {
    const post = req.body;
    try {
        await Posts.create(post);
        return res.json({ message: 'Post submitted.' });
    } catch (error) {
        return res.json({ error: error });
    }
});

//getting posts from the database

router.get('/', async (req, res) => {
    const allPosts = await Posts.findAll();
    return res.json(allPosts);
});

module.exports = router;