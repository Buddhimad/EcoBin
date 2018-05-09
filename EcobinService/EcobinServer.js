const app=require("express")();
const http=require("http").Server(app);
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const dbAccess=require('./connections/DBConnection.js')(mongoose);

dbAccess.mongoconnection();

/*set body parser*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api/sensor',require('./controllers/SensorController'));
app.use('/api/transact',require('./controllers/TransactionController'));

/*error handeling*/
app.use(function(err,res,req,next){
  res.send({error:err.message});
});

http.listen(1300,function(){
    console.log('Server running on port 1300....');
  });
