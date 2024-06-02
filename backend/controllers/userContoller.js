import mongoose from "mongoose";
import User from "../model/userModel.js";


const userRegister = async (req, res) => {

    const { userName, email, password } = req.body;

    console.log(userName, email, password)

    if ([userName, email, password].some(field => field?.trim() === "")) {
        return res.status(400).json({
            success: false,
            message: "All Fields are required",
        })
    }


    // check if user is already register

    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ sucess: false, message: "User alredy register with this email" })

    const newUser = await User.create({ userName, email, password })

    res.status(200).json({
        success: true,
        message: "User Register sucessfully",
        user: newUser
    })
}



// user login

const userLogin = async (req, res) => {

    const { email, password } = req.body;

    if ([email, password].some(field => field?.trim() === "")) {
        return res.status(400).json({
            success: false,
            message: "All Fields are required",
        })
    }

    // check  if user exits or not

    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ success: false, message: "User not found with this email" })

    if (user.password !== password) {
        return res.status(402).json({ success: false, message: "email or password is wrong" })
    }

    if (user && user.password === password) {
        res.status(200).json({
            success: true,
            message: "User Login sucessfully",
        })
    }
}



export { userLogin, userRegister }