import UserModel from "../Models/UserModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

//register function

export const register = async (req, res) => {
    try {
        const { name, email, password, address } = req.body
        const userExist = await UserModel.findOne({ email })
        if (userExist) {
            return res.status(400).json({
                message: "User already exist"
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new UserModel({
            name,
            email,
            password: hashedPassword,
            address
        })
        await newUser.save()
        res.status(201).json({ message: "user registered successfully" })
    } catch (error) {
        res.status(500).json({
            errorMessage: error.message
        });
    }
}

//login function
export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const userExist = await UserModel.findOne({ email })
        if (!userExist) {
            return res.status(400).json({
                message: "invalid user"
            })
        }
        const isMatch = await bcrypt.compare(password, userExist.password)
        if (!isMatch) {
            return res.status(400).json({
                message: "invalid password"
            })
        }
        const token = jwt.sign(
            { id: userExist._id },
            process.env.JWT_SECRET,
            { expiresIn: "20d" }
        )
        res.status(200).json({ message: "User login Successfully ", token })
    } catch (error) {
        res.status(500).json({
            errorMessage: error.message
        });
    }
}

// logout function
export const logout = async (req, res) => {
    try {
        res.status(201).json({ message: "user logout successfully" })
    } catch (error) {
        res.status(500).json({
            errorMessage: error.message
        });
    }
}