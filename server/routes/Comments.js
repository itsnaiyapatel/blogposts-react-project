const express = require('express');
const router = express.Router();
const { Comments } = require('../models');

router.post('/', async (req, res) => {
    const comment = req.body; // comment {commentBody, commentBy, PostId}
    try {
        await Comments.create(comment);
        return res.json({ message: 'Comment submitted.'});
    } catch (error) {
        return res.json({ error: error});
    }  
});

module.exports = router;