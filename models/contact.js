const { Schema, model } = require("mongoose");

// const userSchema = mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: [true, "Duplicated email.."] },
//   password: { type: String, required: true },
// });

const contactSchema = new Schema({
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
  favorite: {
    type: Boolean,
    default: false,
  },
});

const Contact = model("contact", contactSchema);
// const Contact = model("contacts", contactSchema);

module.exports = Contact;
