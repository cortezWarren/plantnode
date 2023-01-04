const { validationResult } = require("express-validator");
const {users} = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserSignControllers = {
  authUser: async (req, res) => {
    res.send('working auth');
  },

  allUsers: async (req, res) => {
    res.json({
      users
    });
  },

  userSignup: async (req,res) => {
    const { email, password } = req.body;
    const errors = validationResult(req);
    let hashPassword = await bcrypt.hash(password, 10);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }

    const user = users.find(user => {
      return user.email === email;
    });

    if (user) {
      return res.status(400).json({
        errors: [
          {
            "msg": "Email already exist"
          }
        ]
      });

    } else{

      const token = jwt.sign({
        email
      }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 3600000});

      users.push({
        email,
        password: hashPassword
      });

      return res.json({
        token,
        msg: "success"
      });

    }
    
  },
  userLogin: async (req,res) => {
    const { email, password } = req.body;
    const user = users.find(user => {
      return user.email === email;
    });
    const token = jwt.sign({
      email
    }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 36000000});
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({error: errors.array()});
    }
    
    if (!user) {
      return res.status(400).json({
        errors: [
          {
            "msg": "Invalid Credentials"
          }
        ]
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        errors: [
          {
            "msg": "Invalid Credentials"
          }
        ]
      });
    }
    
    return res.json({
      token
    });
  }
}

module.exports = {
  UserSignControllers,
};