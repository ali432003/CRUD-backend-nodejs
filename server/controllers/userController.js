import User from "../model/userSchema.js";
import bcrypt, { hash } from "bcrypt"

export const signup = async (req, res) => {
    try {
        const { email, name, age, password } = req.body
        if (!email || !name || !password || !age) {
            res.json({ message: "Fill all Fields", status: false })
            return
        }
        const userExist = await User.findOne({ email: email })
        if (userExist) {
            // error    
            res.status(400).json({ status: false, data: [], message: "user already exist" })
        }
        const hashPass = await bcrypt.hash(password, 10)
        const obj = { ...req.body, password: hashPass }
        const newUser = new User(obj)
        await newUser.save()
        res.status(200).json({ status: true, data: newUser, message: "user created !" })
        // success

    } catch (error) {
        res.status(404).json({ message: error.message, status: 404 })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                res.json({ status: true, data: user, message: "User logged in successfully" });
            } else {
                res.json({ status: false, data: [], message: "Incorrect password" });
            }
        } else {
            res.json({ status: false, data: [], message: "User does not exist" })
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateUser = async (req, res) => {
    try {
        const _id = req.params.id
        const updUser = await User.findByIdAndUpdate(_id, req.body, { new: true })
        res.json({ status: true, message: "user updated", data: updUser })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


