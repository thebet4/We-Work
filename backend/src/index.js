const express = require("express")
const mongoose = require('mongoose');
const routes = require('./routes')

mongoose.connect('mongodb+srv://name:password@cluster0-xr5ho.gcp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express()

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
    next();
  });

app.use(express.json())
app.use(routes)

app.listen(3333)