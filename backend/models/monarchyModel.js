const express = require('express')
const mongoose = require('mongoose');
const monarchySchema = require('../schemas/monarchySchema');

const monarchyModel = mongoose.model('monarchyModel', monarchySchema,'Monarchs');
module.exports=monarchyModel;