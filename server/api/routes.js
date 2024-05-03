import express from "express";
import User from "../model/userSchema.js";
import Prod from "../model/productSchema.js"
import order from "../model/userSchema.js"
const router = express.Router()

// root api
router.get(("/"), (req, res) => {
    res.json({ message: "hellow world" })
})

// user apis
router.post(("/signup"), async (req, res) => {
    try {
        const { email, name, age, password } = req.body
        const userExist = await User.findOne({ email: email })
        if (userExist) {
            // error    
            res.status(400).json({ status: false, data: [], message: "user already exist" })
        }
        const newUser = new User({ email, name, age, password })
        await newUser.save()
        res.status(200).json({ status: true, data: newUser, message: "user created !" })
        // success

    } catch (error) {
        res.status(404).json({ message: error.message })
    }

})

router.post(("/login"), async (req, res) => {
    try {
        const { email, password } = req.body
        const userExist = await User.find({ email: email, password: password })
        if (userExist.length > 0) {
            // sucess
            res.json({ status: true, data: userExist, message: "user logged in " })
            console.log(userExist)
        } else {
            // user is not in db
            res.json({ status: false, data: [], message: "user is not exist" })
        }
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

})

router.put(('/updateuser/:id'), async (req, res) => {
    try {
        const _id = req.params.id
        const updUser = await User.findByIdAndUpdate(_id, req.body)
        res.json({ status: true, message: "user updated" })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


// Product Apis
router.post(("/addproduct"), async (req, res) => {
    try {
        const { name, price, description, category, img, uid } = req.body;
        const prodExist = await Prod.findOne({ name: name })
        if (prodExist) {
            res.status(400).json({ data: [], status: false, message: "Product already exist" })
            return
        }
        const product = new Prod({ name, price, description, category,uid });
        await product.save();
        res.status(201).json({ data: product, status: true, message: "product added!" });
    } catch (error) {
        res.status(400).json({ data: [], status: false, message: error.message });
    }
})

router.get(("/getprod"), async (req , res)=>{
    try {
        const product = await Prod.find({})
        res.status(200).json({ data: product , message:"agiya maal agiya!" })
    } catch (error) {
        res.status(404).json({data:[], message : "product not found!"})
    }
})

router.put(("/updateprod/:id"), async (req, res) => {
    try {
        const _id = req.params.id
        const updProd = await Prod.findByIdAndUpdate(_id, req.body)
        res.json({ status: true, message: "Prod updated" })
    } catch (error) {
        res.json({status : false , message : error.message})
    }
})

router.delete(("/deleteprod/:id"), async (req, res)=>{
    try {
        const _id = req.params.id
        const deleteprod = await Prod.findByIdAndDelete(_id)
        res.status(200).json({ message: "user deleted", status: true })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})




export default router