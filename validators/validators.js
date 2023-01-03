const { check } = require('express-validator');

const Validators = {
 loginValidator: [ check('email', 'Please provide a valid email').isEmail(), check('password', 'Password must equal or greater than 5').isLength({ min: 5 })]
}

module.exports = {
 Validators
}