

const express = require('express')
const app = express()

app.get('/a', function (req, res) {
  res.send('Hello World')
})

app.post('/data', function (req,res){
    res.send('pankaj rathore')
})
app.get('/adress',function( req,res){
    res.status(201).jason('javi')
})

app.get('/b', function (req, res) {
    res.send('Hello World b')
  })

  app.get('/c', function (req, res) {
    res.send('Hello Worldc')
  })

  app.get('/d', function (req, res) {
    res.send('Hello World d')
  })
  app.get('/e', function (req, res) {
    res.send('Hello World e')
  })
  app.get('/f', function (req, res) {
    res.send('Hello World f')
  })



  app.listen(3000)
  

  

  