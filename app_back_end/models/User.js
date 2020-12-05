const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  product_images_name: [],
  cloudinary_id: []
});
module.exports = mongoose.model("User", userSchema);