const Sequelize = require("sequelize");
const { sequelize } = require("../config/db.config");
const { Tblrole } = require("./role.model");

const Tblregister = sequelize.define(
  "Tblregister",
  {
    register_email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    register_password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    // register_number: {
    //   type: Sequelize.STRING,
    //   allowNull: true,
    // },
    country_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    state_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    pin_code: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    address1: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    address2: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    city: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    company_name: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    registration_no: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    currency_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    language_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    landLine_no: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    linkedinId: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    facebook: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    instagram: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    whatsapp: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    twitter: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    pinterest: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    taxId_number: {
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
    tableName: "Tblregister", // Custom table name if necessary
  }
);

Tblregister.hasOne(Tblrole, {
  foreignKey: 'role_id',
})

module.exports = { Tblregister };
