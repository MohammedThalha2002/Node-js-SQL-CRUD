const express = require("express");
const router = express.Router();
const {
  getallPosts,
  getonlyPosts,
  getPostById,
  addPost,
  updatePost,
  deletePostById,
} = require("../controller/PostsController");

router.get("/allposts", getallPosts);

router.get("/onlyposts", getonlyPosts);

router.post("/postById", getPostById);

router.post("/addpost", addPost);

router.post("/updatepost", updatePost);

router.post("/deletepost", deletePostById);

module.exports = router;
