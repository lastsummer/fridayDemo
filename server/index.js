const http = require('http')
const fs = require('fs')
http.createServer(function(req, res){
  if(req.url === '/'){
    fs.createReadStream(__dirname + '/index.html','utf8').pipe(res)
  }else if(req.url === '/json'){
    res.writeHead(200, {
      'Content-Type': 'application/json'
    })
    let obj = {
      firstname:'Summer',
      lastname: 'Wang'
    }
    res.end(JSON.stringify(obj))
  }else{ 
    console.log('nn')
    res.writeHead(404)
    res.end()
  }
  
  
}).listen(1337,'127.0.0.1')