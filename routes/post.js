const {Router} = require('express');
const router = Router();
const {Post} = require('../controllers/posts-controllers');
const authToken = require('../middleware/checkAuth');

router.get('/private', authToken, Post.privatePost);
router.get('/public', Post.publicPost);

module.exports = router;