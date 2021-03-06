const express = require('express');
const router = express.Router();

const posts = require('../controllers/posts.controller');

router.get('/posts', posts.loadAll);

module.exports = router;