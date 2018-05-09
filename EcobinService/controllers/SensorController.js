const express = require('express');
const router=express.Router();
const Echoinfo=require('../models/EchoInfo.js');

const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: '28314025',
  apiSecret: 'WSF7rOcmU7SWI3zv'
});

/* router.post('/ecodata',function(req,res){
    console.log("called");
    res.send({msg:called});
    handleParams(req.body, res);
}); */
router.get('/ecodata',function(req,res,next){
    res.send({msg:"called"});
    handleInboundSms(req,res);
});
router.post('/ecodata',function(req,res,next){
    res.send({msg:"called"});
    handleInboundSms(req,res);
});
 module.exports=router;
function handleInboundSms(request, response) {
    console.log("working");

    const params = Object.assign(request.query, request.body)
    console.log(params)
    //response.status(204).send() 
  } 
/* function handleParams(params, res) {
  if (!params.to || !params.msisdn) {
    console.log('This is not a valid inbound SMS message!');
  } else {
    console.log('Success');
    let incomingData = {
      messageId: params.messageId,
      from: params.msisdn,
      text: params.text,
      type: params.type,
      timestamp: params['message-timestamp']
    };
    res.send(incomingData);
  }
  res.status(200).end();
} */