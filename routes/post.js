const { addPost, getPost, deletePost, updatePost } =  require("../controllers/postControllers");
const { postValidation, postValidator } = require( "../middleware/post.validator");
const express = require("express");
const postRouter = express.Router();

postRouter.post("/addPost", postValidator(), postValidation, addPost);
postRouter.get("/getPost", getPost);
postRouter.delete("/deletePost/:id", deletePost);
postRouter.put("/updatePost/:id", updatePost);

module.exports = postRouter;