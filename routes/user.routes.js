import express from "express";
import { signUp,signIn } from "../controller/user.controller.js";
import { body } from "express-validator";
import multer from "multer";
const upload = multer({dest:'public/images'});
const router = express.Router();

router.post("/signup",upload.single("profile"),body("email","Invalid email id").isEmail(),
body("email","Email can not empty").notEmpty(),
body("password","password is must").notEmpty(),
body("contact","contact number is required").notEmpty(),
body("contact","only digit are allowed").isNumeric(),signUp);

router.post("/signin",signIn);
export default router;