const express = require('express');
const router=express.Router();
const Echoinfo=require('../models/EchoInfo.js');

router.post('/echosave',function(req,res,next){
   Echoinfo.create(req.body).then(function(){
       res.send({msg:'ok'});
   });

});
router.post('/echoaccess',function(req,res,next){
    Echoinfo.findOne({Email:req.body.email}).then(function(information){
        if(information!=null){
            if(information.password==req.body.password){
                res.send({access:true});
            }else{
                res.send({access:false});
            }

        }
    });
});
router.get('/echoshowinfo',function(req,res,next){
    Echoinfo.findOne({Email:req.body.email}).then(function(information){
        if(information!=null){
            res.send(information);
        }else{
            res.send(null);
        }
    });
});
router.put('/echoupdate',function(req,res,next){
    Echoinfo.updateOne({Email:req.body.email},req.body).then(function(){
        res.send({msg:true});
    });
});
/*
not required
router.delete('/echodelete',function(){
    console.log(req);
});*/

module.exports=router;
