const express = require("express");
const router = express.Router();
const {Comments, sequelize} = require("../models");

// sending data to the database

router.post("/", async (req, res) => {
  const comment = req.body; // 
  try {
    await Comments.create(comment);
    return res.json({message: 'Comment Submitted!'});
  } catch (error) {
    return res.json({error: error});
  }
});

// Getting data from the database- on single-post

router.get('/:postId', async (req, res) => {
  const postId = req.params.postId;
  const comments = await sequelize.query(
    `SELECT Comments.id as id, commentBody, userName FROM Users, Comments WHERE Comments.PostId = ${postId} AND Comments.UserId = Users.id`, {
      type: sequelize.QueryTypes.SELECT
    }
  );
  return res.json(comments);
});

// Delete the comment

router.delete('/:commentId', async (req, res) => {
  const commentId = req.params.commentId;
  await Comments.destroy({
    where: {
      id: commentId,
    }
  });
  return res.json({message: 'Comment deleted..'});
});

module.exports = router;


