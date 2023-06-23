const express = require("express");

const { ctrlAuth } = require("../../controllers");

const router = express.Router();

const { validateBody } = require("../../middlewares");
const {
  UserModel: { userSchemas },
} = require("../../models");

router.post(
  "/register",
  validateBody(userSchemas.registerSchema),
  ctrlAuth.register
);

router.post("/login", validateBody(userSchemas.loginSchema), ctrlAuth.login);

module.exports = router;
