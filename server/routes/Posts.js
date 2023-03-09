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
    try {        
        const allPosts = await sequelize.query(
            `SELECT Posts.id as id, title, categories, postText, userName, profileImage FROM Posts, Users WHERE Users.id = Posts.UserId`, 
            {type: sequelize.QueryTypes.SELECT}
        )
        return res.json(allPosts);
    } catch (error) {
        return res.json({ error: error });
    }
});

// getting single post from allposts

router.get('/byId/:id', async (req, res) => {
    const id = req.params.id;
    try {        
        const post = await sequelize.query(
            `SELECT Posts.id as id, title, categories, postText, userName, profileImage FROM Posts, Users WHERE Posts.id = ${id} AND Users.id = Posts.UserId`, 
            {type: sequelize.QueryTypes.SELECT}
        )
        return res.json(post[0]);
    } catch (error) {
        return res.json({ error: error });
    }
   
});


module.exports = router;