const express = require('express');
const mongoose = require('mongoose');
// const db = require('./config/connection');
// const routes = require('./routes');
const cors = require('cors')
const CustomerModel = require('./models/Customers')

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors())

app.use(express.json());

mongoose.connect('mongodb+srv://dannau:Jesse2020!@thesteve.ueeqqsf.mongodb.net/thesteve?retryWrites=true&w=majority');

app.get('/customer', (req, res) => {
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

app.use(express.urlencoded({ extended: true }));

// app.use(routes);
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})