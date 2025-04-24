const Post = require('../models/Post');

// Create a new post
const createPost = async (req, res) => {
    const { content } = req.body;

    try {
        const post = new Post({ content });
        await post.save();
        res.status(200).json({ message: 'Post created successfully', post });
    } catch (err) {
        res.status(500).json({ error: 'Failed to create post' });
    }
};

// Get all posts
const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
};

module.exports = { createPost, getPosts };
