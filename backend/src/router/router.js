const { createRoleValidation, updateRoleValidation } = require("../validators/role.validator.js");

module.exports = function (app) {
	// Import controllers
	const UserController = require("../controller/userController.js");
	const RolesController = require("../controller/role.controller.js");
  
	// User routes
	app.post("/api/auth/signup", UserController.signup); // User signup route
	app.post("/api/auth/signin", UserController.signin); // User signup route
	app.get("/users", UserController.getAllUsers); // Get all users
  
	// Role routes
	app.post("/roles", createRoleValidation, RolesController.createRole); // Create a new role
	app.get("/roles", RolesController.getAllRoles); // Get all roles
	app.get("/roles/:id", RolesController.getRoleById); // Get role by ID
	app.put("/roles/:id", updateRoleValidation, RolesController.updateRole); // Update a role by ID
	app.delete("/roles/:id", RolesController.deleteRole); // Delete a role by ID
  
  };
  