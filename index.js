const express = require('express');
const auth = require('./routes/auth');
const app = express();
const port = 3000;

app.use('/auth', auth);

app.get('/', (req,res) => {
    res.send('success');
})

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});