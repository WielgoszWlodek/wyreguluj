const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: false,
      
    },
    desc: {
      type: String,
      required: false,
    },
    opis: {
      type: String,
      required: false,
    },
    photo: {
      type: String,
      required: false,
    },
    stan: {
      type: String,
      required: false,
    },
    bodzce: {
      type: Array,
      required: false,
    },
    ratingSlaby: {
      type: Array,
      required: false,
    },
     ratingSzczesliwy: {
      type: Array,
      required: false,
    },
    ratingZaskoczony: {
      type: Array,
      required: false,
    },
     ratingSmutny: {
      type: Array,
      required: false,
    },
    ratingZniesmaczony: {
      type: Array,
      required: false,
    },
     ratingRozgniewany: {
      type: Array,
      required: false,
    },
    ratingLekliwy: {
      type: Array,
      required: false,
    },
    ratingLekliwy1: {
      type: Array,
      required: false,
    },
    ratingSlaby1: {
      type: Array,
      required: false,
    },
     ratingSzczesliwy1: {
      type: Array,
      required: false,
    },
    ratingZaskoczony1: {
      type: Array,
      required: false,
    },
     ratingSmutny1: {
      type: Array,
      required: false,
    },
    ratingZniesmaczony1: {
      type: Array,
      required: false,
    },
     ratingRozgniewany1: {
      type: Array,
      required: false,
    },
    username: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);