const { getAll } = require("./getAll");
const { getById } = require("./getById");
const { add } = require("./add");
const { deleteById } = require("./deleteById");
const { editById } = require("./editById");
const { editFavorite } = require("./editFavorite");

module.exports = {
  getAll,
  getById,
  add,
  deleteById,
  editById,
  editFavorite,
};
