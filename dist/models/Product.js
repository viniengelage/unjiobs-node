"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');

const ProductSchema = new (0, _mongoose.Schema)({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  image: {
    type: Array,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

exports. default = _mongoose.model.call(void 0, "Products", ProductSchema);