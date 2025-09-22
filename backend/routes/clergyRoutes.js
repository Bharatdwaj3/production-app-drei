const express = require('express');
const Clergy = require('../models/clergyModel');
const router=express.Router();
const {getClergys, getClergy, createClergy, updateClergy, deleteClergy} = require('../controllers/clergyController.js');


router.get('/', getClergys);
router.get("/:id", getClergy);
router.post("/", createClergy);
router.put("/:id", updateClergy);
router.delete("/:id", deleteClergy);

module.exports=router;