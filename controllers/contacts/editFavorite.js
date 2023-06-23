const { Contact } = require("../../models/contact");

const { updateFavoriteSchema } = require("../../models/contact");
const { ctrlWrapper, HttpError } = require("../../helpers");

const editFavorite = async (req, res) => {
  const { error } = updateFavoriteSchema.validate(req.body);
  if (error) {
    throw HttpError(400, "missing field favorite");
  }

  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });

  if (!result) throw HttpError(404, "Not Found");

  res.json(result);
};

module.exports = {
  editFavorite: ctrlWrapper(editFavorite),
};
