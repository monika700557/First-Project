const Sequelize = require("sequelize");
const { sequelize } = require("../config/db.config");
const { Tblpermission } = require("./permission.model");

const Tblrole = sequelize.define(
  "Tblrole",
  {
    role_name: {
      type: Sequelize.STRING,
      allowNull: true,
    },

    active: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    //   underscored: false,
    timestamps: true, // Automatically add createdAt and updatedAt fields
    tableName: "Tblrole", // Custom table name if necessary
  }
);

Tblrole.hasMany(Tblpermission, {
  foreignKey: "role_id",
});

module.exports = { Tblrole };
