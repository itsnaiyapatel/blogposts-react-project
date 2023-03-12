const express = require("express");
const router = express.Router();
const {Likes, sequelize} = require("../models");
const validationToken = require('../middleware/validationToken');
const { where } = require("sequelize");


// sending data to the database

router.post("/", validationToken, async (req, res) => {
  const { postId } = req.body;
  const userId = req.user.id;

  const foundLike = await Likes.findOne({
    where: {PostId: postId, UserId: userId }
  });
  
  if (foundLike) {
    await Likes.destroy({
      where: {PostId: postId, UserId: userId }
    });
    return res.json({isLiked: false });
  }
  else {
    await Likes.create({PostId: postId, UserId: userId});
    return res.json({isLiked: true});
  }  
});


module.exports = router;
