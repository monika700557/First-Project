const { body } = require("express-validator");

// Validation for creating a new role
exports.createRoleValidation = [
  body("role_name").notEmpty().withMessage("Role name is required"),
  body("active").isBoolean().withMessage("Active status must be a boolean"),
];

// Validation for updating a role
exports.updateRoleValidation = [
  body("role_name").optional().notEmpty().withMessage("Role name must not be empty"),
  body("active").optional().isBoolean().withMessage("Active status must be a boolean"),
];
