const { Tblcompany } = require("../model/company.model");
const { Tblregister } = require("../model/register.model");

// Function to check if the user is already registered using their email
const isRegisteredUser = async (register_email) => {
  try {
    const isEmail = await Tblregister.findOne({ where: { register_email } });
    if (isEmail) {
      return true;
    }

    return false;
  } catch (error) {
    console.error("Error fetching user by email:", error.message);
    throw new Error("Error checking if user is registered.");
  }
};

// Function to register a new user
const registerUser = async (
  register_name,
  register_email,
  register_password,
  register_number
) => {
  try {
    // Create the company entry first
    const company = await Tblcompany.create({
      register_name,
      register_email,
      register_password,
      register_number,
    });

    // Create the registered user and associate it with the company
    const registeredUser = await Tblregister.create({
      register_name,
      register_email,
      register_password,
      register_number,
      company_id: company.id, // Assuming you have a foreign key `companyId` in TblRegister
    });

    return registeredUser; // Return the newly created user
  } catch (err) {
    console.error("Error creating user:", err.message);
  }
};



const getAllUsers = async () => {
  try {
    // Fetch all users from the database
    const users = await Tblregister.findAll(); // Assuming you're using Sequelize for ORM
    return users; // Return the users
  } catch (err) {
    console.error("Error fetching users:", err.message);
    throw new Error(`Unable to fetch users: ${err.message}`);
  }
};



module.exports = { isRegisteredUser, registerUser , getAllUsers};
