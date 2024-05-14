import express from "express";
import { getUser, login, signup, updateUser } from "../controllers/userController.js";
import { addProd, deleteProd, getProd, updateProd } from "../controllers/productController.js";

const router = express.Router()

// root api
router.get(("/"), (req, res) => {
    res.json({ message: "hellow world" })
})

// user apis
router.post(("/signup"), signup)

router.post("/login", login);

router.put(('/updateuser/:id'), updateUser)

router.get(('/getuser/:id'), getUser)


// Product Apis
router.post(("/addproduct"), addProd)

router.get(("/getprod"), getProd)

router.put(("/updateprod/:id"),updateProd)

router.delete(("/deleteprod/:id"), deleteProd)




export default router