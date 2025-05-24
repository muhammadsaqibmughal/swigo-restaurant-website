import mongoose from "mongoose";



//for homepage reservation
const reserveSchema1=mongoose.Schema({
    name:String,
    phone:String,
    email:String,
    persons:String,
    date:String,
    time:String,
})

export const reserveModel1=mongoose.model("reserve1",reserveSchema1);


//for contact page resvervation
const reserveSchema2=mongoose.Schema({
    name:String,
    phone:String,
    email:String,
    persons:String,
    messsage:String,
})

export const reserveModel2=mongoose.model("reserve2",reserveSchema2);





///for signup

const singupSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
})

export const signupModel=mongoose.model("singup",singupSchema);
