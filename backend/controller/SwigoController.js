import { response } from "express";
import { reserveModel1, reserveModel2, signupModel } from "../model/SwigoModel.js";

//send reserve1 data to database
export const handleReserve1 = async (req, res) => {
    try {

        let { name, phone, email, persons, date, time } = req.body;
        name = name.toString();
        email = email.toString();
        phone = phone.toString();
        persons = persons.toString();
        date = date.toString();
        time = time.toString();
        console.log("reserve1");

        const newTable = new reserveModel1({
            name: name,
            phone: phone,
            email: email,
            persons: persons,
            date: date,
            time: time,
        })

        console.log("reserve1");
        let data = await newTable.save();
        res.send({ data: data });
    }
    catch (e) {
        console.log("error in resvere1 database")
        res.send({ error: e.message });
    }
}


//send reserve2 data to database
export const handleReserve2 = async (req, res) => {
    let { name, phone, email, persons, message } = req.body;
    name = name.toString();
    email = email.toString();
    phone = phone.toString();
    persons = persons.toString();
    message = message.toString();

    const newTable = new reserveModel2({
        name: name,
        phone: phone,
        email: email,
        persons: persons,
        message: message,
    })
    try {
        let data=await newTable.save();
        res.send({ data: data });
    }
    catch (e) {
        console.log("error in resvere2 database")
        res.send({ error: e.message});
    }
}


///hanle singup

export const handleSignup = async (req, res) => {
    let { name, email, password } = req.body;
    name = name.toString();
    email = email.toString();
    password = password ? password.toString() : '';

    const findUser = await signupModel.findOne({ email})
    console.log(findUser)

    if(findUser)
    {
        return res.send({ message:'Email already exist' })
    }

    const signup = new signupModel({
        name: name,
        email: email,
        password: password,
    })

    try {
        let data=await signup.save();
        console.log("saved")
        res.send({ Data: data,message:'Account created'  });
    }
    catch (e) {
        console.log("Error in singup Database")
        res.send({ message: e.message });
    }
}


//hanlde login

export const handleLogin = async (req, res) => {
    let { email, password } = req.body;
    email = email.toString();
    password = password ? password.toString() : '';

    try {
        const user = await signupModel.findOne({ email });

        if (user) {
            if (user.password == password) {
                res.send({ message: "Congratulation! You Successfuly Login" });
            }
            else {
                res.send({ message: "password not match" });
            }
        }
        else {
            res.send({ message: "This Email Doesn't Exist! Register Now" });
        }
    }
    catch (e) {
        console.log("something wrong");
    }



}