const User = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    console.log("Signup Route Hit");

    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: false,
      secure: false,
  sameSite: "lax",
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    
  } catch (error) {
    console.error(error);
  }
};


module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await User.findOne({ email });
    if(!user){
      return res.json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
     const token = createSecretToken(user._id);
     res.cookie("token", token, {
       httpOnly: false,
       secure: false,
  sameSite: "lax",
     });
     res.status(201).json({ message: "User logged in successfully", success: true });
     
  } catch (error) {
    console.error(error);
  }
};

module.exports.Logout = async (req, res, next) => {
  try {
    // res.clearCookie se browser me save "token" naam ki cookie delete ho jayegi
    res.clearCookie("token", {
      httpOnly: false,
      secure: false,
      sameSite: "lax",
      path: "/", // Yeh zaroori hai taaki poore app se cookie clear ho jaye
    });

    return res.status(200).json({ 
      message: "User logged out successfully", 
      success: true 
    });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
    next(error);
  }
};