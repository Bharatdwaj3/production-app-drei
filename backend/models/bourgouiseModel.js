const express = require('express')
const mongoose = require('mongoose');
const bourgouiseSchema = require('../schemas/bourgouiseSchema');

const bourgouiseModel = mongoose.model('bourgouiseModel',bourgouiseSchema,'Bourgouise');
module.exports=bourgouiseModel;