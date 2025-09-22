const express = require('express')
const mongoose = require('mongoose');
const clergySchema = require('../schemas/clergySchema');

const clergyModel = mongoose.model('clergyModel',clergySchema,'Clergy');
module.exports=clergyModel;