const {privatePost,publicPost } = require('../db');

const Post = {
 publicPost: (req,res) => {
  res.json(publicPost);
 },
 privatePost: (req,res) => {
  res.json(privatePost);
 }
}

module.exports = {Post};