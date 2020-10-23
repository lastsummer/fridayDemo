


module.exports.showMessage = function(req,res,next){
  console.log('this is middleware')
  next()
}