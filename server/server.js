const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const CustomerModel = require('./models/Customers')
const UserModel = require('./models/User')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
require("dotenv").config();


const PORT = process.env.PORT || 3001;
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use(express.json());

mongoose.connect('mongodb+srv://dannau:Jesse2020!@thesteve.ueeqqsf.mongodb.net/thesteve?retryWrites=true&w=majority');

app.get('/customer/:name', (req, res) => {
  console.log(req.params.name)
  CustomerModel.findOne({
    name: req.params.name
  }, (err, result) => {
    if (err) {
      res.json(err)
    } else {
      res.json(result)
    }
  })
})

app.get('/all-customers', (req, res) => {
  CustomerModel.find({}, (err, result) => {
    if (err) {
      res.json(err)
    } else {
      res.json(result)
    }
  })
})

app.post('/create-customer', async (req, res) => {
  const customer = req.body
  console.log(customer)
  const newCustomer = new CustomerModel(customer)
  await newCustomer.save();
  res.json(customer)
})

app.post('/create-user', async (req, res) => {
  const newUser = new UserModel({
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    companyName: req.body.companyName
  })
  await newUser.save()
    .then(user => res.json(user))
    .catch(err => res.status(400).json(`Error: ${err}`));
})

app.post('/login', (req, res) => {
  const { loginEmail, loginPassword } = req.body;

  UserModel.findOne({ loginEmail, loginPassword }, (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Error while fetching user' });
    }
    if (!user) {
      return res.status(401).json({ message: 'Invalid Credentials' });
    }
    // create a JWT with the user's information
    const token = jwt.sign({
      id: user._id,
      email: user.email
    }, process.env.SECRET, { expiresIn: '1h' });

    res.status(200).json({ token });
  });
})

app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})