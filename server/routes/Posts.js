const express = require("express");
const router = express.Router();
const {Posts, Likes, Users, Comments, sequelize} = require("../models");

// sending post to the database

router.post("/addpost", async (req, res) => {
  const post = req.body;
  try {
    await Posts.create(post);
    return res.json({message: "Post submitted."});
  } catch (error) {
    return res.json({error: error});
  }
});

//getting all posts from the database

router.get("/", async (req, res) => {
  try {
    const allPosts = await Posts.findAll({include: [Likes, Users]});
    return res.json(allPosts);
  } catch (error) {
    return res.json({error: error});
  }
});

// getting single post from allposts

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const post = await Posts.findOne({
      where: {id: id},
      include: [Likes, Comments, Users],
    });
    return res.json(post);
  } catch (error) {
    return res.json({error: error});
  }
});

// Delete the post - Single-post

router.delete("/byId/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await Posts.destroy({
      where: {
        id: id,
      },
    });
    return res.json({message: "Post deleted..."});
  } catch (error) {
    return res.json({error: error});
  }
});

// Updating post

router.put("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const updatePost = req.body;
  try {
    await Posts.update(updatePost, {
      where: {
        id: id,
      },
    });
    return res.json({message: "Post updated..."});
  } catch (error) {
    return res.json({error: error});
  }
});

module.exports = router;
