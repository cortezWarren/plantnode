const {Router} = require('express');
const router = Router();
const {UserSignControllers} = require('../controllers/user-sign-controllers');
const { Validators } = require('../validators/validators');

router.get('/', UserSignControllers.authUser);
router.get('/allusers', UserSignControllers.allUsers);
router.post('/signup', Validators.loginValidator, UserSignControllers.userSignup)
router.post('/login', Validators.loginValidator, UserSignControllers.userLogin)

module.exports = router;