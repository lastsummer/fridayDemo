const showMessage = function(req,res,next){
  console.log('this is middleware')
  next()
}

const errorOccur = function(req,res,next){
  console.log('this is error middleware')
  throw new Error()
}
module.exports = {showMessage, errorOccur}