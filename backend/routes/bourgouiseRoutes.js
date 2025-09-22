const express = require('express');
const Bourgouise = require('../models/bourgouiseModel.js');
const router=express.Router();
const {getBourgouises, getBourgouise, createBourgouise, updateBourgouise, deleteBourgouise} = require('../controllers/bourgouiseController.js');


router.get('/', getBourgouises);
router.get("/:id", getBourgouise);
router.post("/", createBourgouise);
router.put("/:id", updateBourgouise);
router.delete("/:id", deleteBourgouise);

module.exports=router;