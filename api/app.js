const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
    res.end('hello from server');
});

app.listen(3000, ()=>{
    console.log('server is running in port 3000');
})