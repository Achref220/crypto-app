const Post = require('../model/Post');

// add post

exports.addPost = async (req, res) => {
    try {
        const newPost = new Post({ ...req.body })
        await newPost.save();
        res.status(200).send({ message: "Post is created", newPost })
    } catch (err) {
        res.status(500).send(err)
    }
};

exports.getPost = async (req, res) => {
    try {
        const allPosts = await Post.find();
        res.status(200).send(allPosts);
    } catch (err) {
        res.status(500).send(err);
    }
};

// delete post

exports.deletePost = async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id)
        res.send("Post successfully deleted")
    } catch (err) {
        res.status(500).send(err)
    }
};

// update post

exports.updatePost = async (req, res) => {
    try {
        let updatedPost = await Post.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
        res.status(200).send({ message: "updated succ", updatedPost })
    } catch (error) {
        res.status(500).send(err)
    }
};