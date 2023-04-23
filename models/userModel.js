const mongoose = require('mongoose');
const userSchema= new mongoose.Schema({
    name:{
        type:String, 
        trim:true
    },
    lastName:{
        type:String, 
        trim:true
    },
    email:{
        type:String, 
        required:true, 
        lowercase:true,
        unique:true
    },
    password:{
        type:String, 
        required:true
    },
    courses: [{
        type:mongoose.Schema.Types.ObjectId, 
        ref:"Course"
    }],
    subscribedAccount: {
        type:mongoose.Schema.Types.ObjectId, 
        ref:"Subscriber"
    },  
}, {
    timestamps: true
    })

    let User = module.exports = mongoose.model("users", userSchema);
// const User= mongoose.model('User',userSchema);
// module.exports = User;

