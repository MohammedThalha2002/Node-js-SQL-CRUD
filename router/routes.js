const express = require("express");
const router = express.Router();
const postController = require("../controller/PostsController");

router.get("/allposts", postController.getallPosts);

module.exports = router;
