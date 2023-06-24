const express = require("express");

const { ctrlContacts } = require("../../controllers");

const {
  ContactModel: { addSchema },
} = require("../../models");

const { isValidId, validateBody, authenticate } = require("../../middlewares");

const router = express.Router();

router.get("/", authenticate, ctrlContacts.getAll);

router.get("/:contactId", authenticate, isValidId, ctrlContacts.getById);

router.post("/", authenticate, validateBody(addSchema), ctrlContacts.add);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  ctrlContacts.editFavorite
);

router.delete("/:contactId", authenticate, isValidId, ctrlContacts.deleteById);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(addSchema),
  ctrlContacts.editById
);

module.exports = router;
