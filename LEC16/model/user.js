// Models are defined through the Schema interface.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BlogPost = new Schema({
  title: String,
  body: String,
  date: Date
});
module.exports=mongoose.model('Blog', BlogPost);
