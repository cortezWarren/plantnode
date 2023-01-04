const express = require('express');
const auth = require('./routes/auth');
const post = require('./routes/post');
const app = express();
require('dotenv').config();
const port = 8000;

app.use(express.json());
app.use('/auth', auth);
app.use('/post', post);

app.get('/', async (req,res) => {
   await res.send('success');
})

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});