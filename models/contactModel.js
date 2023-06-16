const mongoose = require("mongoose");

// const userSchema = mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: [true, "Duplicated email.."] },
//   password: { type: String, required: true },
// });

const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  // favorite: {
  //   type: Boolean,
  //   default: false,
  // },
});

const Contact = mongoose.model("contact", contactSchema);

module.exports = Contact;
