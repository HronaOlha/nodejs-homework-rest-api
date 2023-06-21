const express = require("express");

const ctrl = require("../../controllers");

const { addSchema } = require("../../models/contact");

// FIXME: isValidId
const { validateBody } = require("../../middlewares");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", validateBody(addSchema), ctrl.add);

router.patch("/:contactId/favorite", ctrl.editFavorite);

router.delete("/:contactId", ctrl.deleteById);

router.put("/:contactId", validateBody(addSchema), ctrl.editById);

module.exports = router;
