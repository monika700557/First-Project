const Sequelize = require('sequelize');
const env = process.env;

// Initialize Sequelize with environment variables
const sequelize = new Sequelize(env.DB_DATABASE, env.DB_USER, env.DB_PASSWORD, {
  host: env.DB_HOST,
  dialect: 'postgres',
  logging: env.DB_LOGS === 'true' ? console.log : false, // Enables logging if DB_LOGS is 'true'
  dialectOptions: {
    ssl: env.DB_SSLMODE === 'require' // Set SSL mode if required
  }
});

const db = {};

// Assign Sequelize and sequelize instance to db object
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Authenticate database connection
async function authenticateDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

authenticateDatabase();

// Force sync the database if DB_FORCE is set to 'true'

  if (env.DB_FORCE === 'true') {
  db.sequelize.sync({ force: true }).then(() => {
    console.log('Drop and Resync with { force: true }');
  }).catch(err => console.error(`Sync Error: ${err.message}`));
 }


// Alter the database if DB_ALTER is set to 'true'
if (env.DB_ALTER === 'true') {
  db.sequelize.sync({ alter: true }).then(() => {
    console.log('All tables have been altered and synced');
  }).catch(err => console.error(`Sync Error: ${err.message}`));
}



// Import models

// db.TblRegister = require('../model/register.model')(sequelize, Sequelize);
// db.TblRole = require('../model/role.model')(sequelize, Sequelize);
// db.TblPermission = require('../model/permission.model')(sequelize, Sequelize);


// Uncomment and set up relations as needed
// db.user = require('../model/user.model.js')(sequelize, Sequelize);
// db.role = require('../model/role.model.js')(sequelize, Sequelize);

// Define relationships (if needed)
// db.role.belongsToMany(db.user, { through: 'user_roles', foreignKey: 'roleId', otherKey: 'userId' });
// db.user.belongsToMany(db.role, { through: 'user_roles', foreignKey: 'userId', otherKey: 'roleId' });

module.exports = db;
