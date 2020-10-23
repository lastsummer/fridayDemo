const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

const { showMessage } = require('./middleware/showMessage')

const app = express()
const port = process.env.port || 2368

app.use(
  bodyParser.json({
    limit: '50mb'
  })
)
app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: true
  })
)

app.get('/', showMessage, function(req, res, next){
  res.sendFile(__dirname + '/page/index.html',{},(err)=>{
    if(err) console.log(err)
  })
});

function render(filename, params) {
  var data = fs.readFileSync(filename, 'utf8');
  for (var key in params) {
    data = data.replace('{' + key + '}', params[key]);
  }
  return data;
}

app.post('/test', showMessage, function(req, res, next){
 res.send(render(__dirname + '/page/show.html', {
   fname: req.body.fname
 }))
});

app.listen(port, 'localhost', err => {
  if (err) throw err
  console.log(`> endpoint: http://localhost:${port}`)
})