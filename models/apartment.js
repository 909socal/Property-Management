'use strict';

var mongoose = require('mongoose');
var moment = require('moment');
var Apartment = require('../models/apartment');
var Tenant; 

var tenantSchema = new mongoose.Schema({
  name:{type:String}, 
  apartment: { type: mongoose.Schema.Types.ObjectId, ref: "Apartment" }, 
  home: {type:Boolean, default:false}
});
  

  cost: { type: String }, 
  tenant: { type: String },  
  rooms: { type: String },
  roomsA: [{ type: String }],
  image: {type:String}



Tenant = mongoose.model('Tenant', tenantSchema);

module.exports = Tenant;