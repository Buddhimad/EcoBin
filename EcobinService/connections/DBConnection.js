const app=require("express")();
const mongoose=require('mongoose');

function dbConnection(mongo){
  if(!(this instanceof dbConnection)){
    return new dbConnection(mongo);
  }
  this.mongoose=mongo
}

dbConnection.prototype.mongoconnection=function(){
  var mongodb='mongodb://ecobintm:buddhima123@ds231749.mlab.com:31749/echobindb';

  mongoose.connect(mongodb,{
    useMongoClient:true
  });

  mongoose.Promise=global.Promise;

  var db=mongoose.connection;

  db.on('error',console.error.bind(console,'MongoDB Connection error'))
}
module.exports=dbConnection;
