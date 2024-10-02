const { Tblrole } = require("../model/role.model");

// Create a new role
exports.createRole = async (roleData) => {
  return await Tblrole.create(roleData);
};

// Get all roles
exports.getAllRoles = async () => {
  return await Tblrole.findAll();
};

// Get a role by ID
exports.getRoleById = async (id) => {
  return await Tblrole.findByPk(id);
};

// Update a role
exports.updateRole = async (id, roleData) => {
  const role = await Tblrole.findByPk(id);
  if (!role) {
    return null;
  }
  return await role.update(roleData);
};

// Delete a role
exports.deleteRole = async (id) => {
  const role = await Tblrole.findByPk(id);
  if (!role) {
    return null;
  }
  return await role.destroy();
};
