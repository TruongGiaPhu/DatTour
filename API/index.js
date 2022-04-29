const express = require('express')
//lay 
const cors = require('cors')
//tra ve json
const bodyParser = require('body-parser')
//database
const mongoose = require('mongoose')
var router = require('./API/routes/index')

mongoose.connect("mongodb+srv://quoctuan:0918372192@cluster0.qbr5w.mongodb.net/tourdulich?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to database ')
})
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router);


app.listen(port, () => {
  console.log(`Server is running on http://localhost/${port}`)
})