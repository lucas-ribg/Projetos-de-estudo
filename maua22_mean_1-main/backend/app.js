require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Cliente = require('./models/cliente');

const {
  MONGODB_USER,
  MONGODB_PASSWORD,
  MONGODB_CLUSTER,
  MONGODB_DATABASE,
  MONGODB_ADDRESS,
} = process.env

mongoose.connect(`mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_CLUSTER}.${MONGODB_ADDRESS}.mongodb.net/${MONGODB_DATABASE}?retryWrites=true&w=majority`)
.then(()=>{
  console.log("Conexão Ok")
}).catch(()=>{
  console.log("Conexão NOK")
});

//aplicação de middlewere
app.use(bodyParser.json());
app.use(cors());

//http://localhost:3000/api/clientes
app.post('/api/clientes', (req, res, next) => {
  const cliente = new Cliente({
    nome:req.body.nome,
    fone:req.body.fone,
    email:req.body.email,
  })
  cliente.save();
  console.log(cliente);
  res.status(201).json({mensagem: 'Cliente inserido'});
});

app.get('/api/clientes', (req, res, next) => {
  Cliente.find().then((documents) => {
    res.status(200).json({
      mensagem: "Tudo OK!",
      clientes: documents
    })
  })
});

module.exports = app;
