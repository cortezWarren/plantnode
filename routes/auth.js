const {Router} = require('express');
const router = Router();
const {Controllers} = require('../controllers/controllers');

router.get('/',  Controllers.authUser);

module.exports = router;