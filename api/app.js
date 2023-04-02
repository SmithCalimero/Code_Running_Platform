const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const userRoute = require('./routes/user');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
    res.end('hello from server');
});

app.use('/users', userRoute);

mongoose.connect('mongodb+srv://usercrp:tGzpTL2DK5rz6gaX@coderpex.0fyvvut.mongodb.net/crp?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('connected to db');
    })
    .catch((err) => {
        console.log(err);
});

app.listen(3000, ()=>{
    console.log('server is running in port 3000');
})