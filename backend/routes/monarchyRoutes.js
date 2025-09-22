const express = require('express');
const upload=require('./multer');
const router=express.Router();
const {getMonarchs, getMonarch, createMonarch, updateMonarch, deleteMonarch} = require('../controllers/monarchController.js');


router.get('/', getMonarchs);
router.get("/:id", getMonarch);
router.post("/",upload.single('image'), createMonarch);
router.put("/",upload.single('image'), updateMonarch);
router.delete("/:id", deleteMonarch);

module.exports=router;