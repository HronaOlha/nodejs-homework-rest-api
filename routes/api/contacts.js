const express = require("express");

const { ctrlContacts } = require("../../controllers");

const {
  ContactModel: { addSchema },
} = require("../../models");

// FIXME: isValidId
const { validateBody } = require("../../middlewares");

const router = express.Router();

router.get("/", ctrlContacts.getAll);

router.get("/:contactId", ctrlContacts.getById);

router.post("/", validateBody(addSchema), ctrlContacts.add);

router.patch("/:contactId/favorite", ctrlContacts.editFavorite);

router.delete("/:contactId", ctrlContacts.deleteById);

router.put("/:contactId", validateBody(addSchema), ctrlContacts.editById);

module.exports = router;
