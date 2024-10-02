const bcrypt = require("bcrypt");
const userService = require("../services/userServices");


exports.signup = async (req, res) => {
  const { register_name, register_email, register_password, register_number } = req.body;

  if (!register_name || !register_email || !register_password || !register_number) {
    return res.send({ status: false, msg: "Please fill required fields." });
  }

  try {

    const isUserEmail = await userService.isRegisteredUser(register_email);
    
    if (isUserEmail) {
      return res.send({ status: false, msg: "User Already Registered", data: {} });
    }


    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(register_password, saltRounds);


    await userService.registerUser(register_name, register_email, hashedPassword, register_number);
    return res.send({
      status: true,
      msg: "User Registered Successfully",
      data: { register_name, register_email, register_number , hashedPassword },
    });
  } catch (err) {
    console.error("Error during user registration:", err.message);
    return res.status(500).send({ status: false, msg: "Server Error", error: err.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();

    if (users.length === 0) {
      return res.send({ status: false, msg: "No users found." });
    }
    res.send({
      status: true,
      msg: "Users fetched successfully",
      data: users,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ status: false, msg: "Server Error", error: err.message });
  }
};

exports.signin = async (req, res) => {
  try {
 const { register_email, register_password } = req.body;
 
    const user = await User.findOne({
      where: {
      register_email: register_email
    } 
      
    });
 
   
    if (user) {
      const isSame = await bcrypt.compare(register_password, hashedPassword);
 
 
      if (isSame) {
        let token = jwt.sign({ id: user.id }, process.env.secretKey, {
          expiresIn: 1 * 24 * 60 * 60 * 1000,
        });
 
        res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
        console.log("user", JSON.stringify(user, null, 2));
        console.log(token);
  
        return res.status(201).send(user);
      } else {
        return res.status(401).send("Authentication failed");
      }
    } else {
      return res.status(401).send("Authentication failed");
    }
  } catch (error) {
    console.log(error);
  }
 };