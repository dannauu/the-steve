const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const CustomerModel = require('./models/Customers')
const bodyParser = require('body-parser')


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

app.post('/create-customer', async (req, res) => {
  const customer = req.body
  console.log(customer)
  const newCustomer = new CustomerModel(customer)
  await newCustomer.save();
  res.json(customer)
})

app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})