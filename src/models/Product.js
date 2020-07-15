import { Schema, model } from "mongoose";
import mongoosePaginate from 'mongoose-paginate';

const ProductSchema = new Schema({
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
ProductSchema.plugin(mongoosePaginate);

export default model("Products", ProductSchema);