const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const SensorData=new Schema({
    Year:{
        type:String,

    },
    Month:{
        type:String
    },
    Day:{
        type:String
    },
    Time:{
        type:String
    },
    MethaneStatus:{
        type:Number
    },
    Humidity:{
        type:Number
    },
    Temprature:{
        type:Number
    }
});
const Sensorinfo=mongoose.model('sensorinfo',SensorData);
module.exports=Sensorinfo;
const EchoInfo=new Schema({
    Name:{
        type:String,
        required:[true,"Name field is required"]
    },
    Password:{
        type:String,
        required:[true,"Password field required"]
    },
    Email:{
        type:String,
        required:[true,"Email field is required"]
    },
    NIC:{
        type:String,
        required:[true,"NIC field is required"]
    },
    JoinDate:{
        type:String,
        required:[true,"JoinDate field required"]
    },
    Data:{
        type:Array
    }
});
const Echoinfo=mongoose.model('echoinfo',EchoInfo);
module.exports=Echoinfo;