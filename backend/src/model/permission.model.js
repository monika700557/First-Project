const Sequelize = require("sequelize");
const { sequelize } = require("../config/db.config");

const Tblpermission = sequelize.define(
  "Tblpermission",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    role_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    voucher_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    seqno: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    sadd: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    sedit: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    sdelete: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    sprint: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    sprice: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    sview: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
    tableName: "Tblpermission", // Custom table name if necessary
  }
);

module.exports = { Tblpermission };
