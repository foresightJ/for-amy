const Post = require('../../models/Post');

module.exports = {
	index,
	create,
};

async function index(req, res) {
	// 1. Get all post from the database,
	let posts = await Post.find({});
	// 2. Use res.join() to send the posts to the frontend
	res.json(posts);
}

async function create(req, res) {
	// 1. Create a post in the database (the data will be incoming via 'req.body')
	await Post.create(req.body);
	// 2. use res.json() to send a response to the frontend
	res.status(200).json('post was created');
}
