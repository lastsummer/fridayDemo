const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.port || 3000

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })


app.use('/assets', express.static(__dirname + '/public'))

app.set('view engine','ejs')


app.use('/', function(req, res, next){
  console.log('Request Url: ' + req.url);
  next();
});

app.get('/', function(req, res){
  res.render('index')
})

app.get('/person/:id', function(req, res){
  res.render('person', {ID:req.params.id, QSTR: req.query.qstr})
})

app.post('/person', urlencodedParser, function(req, res){
  res.send('Thank you')
  console.log('req.body--->', req.body)
})


app.get('/api', function(req, res){
  res.json({name:'summer'})
})
app.listen(port)