const db = require('../models')
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const User = db.users;
const Op = db.Sequelize.Op;

exports.signup = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  var usr = {
    name : req.body.name,
    email : req.body.email,
    password : await bcrypt.hash(req.body.password, salt)
  };
  created_user = await User.create(usr);
  console.log(created_user)
  res.status(201).json(created_user);
};

exports.login = async (req,res) =>{
    const user = await User.findOne({ where : {email : req.body.email }});
    if(user){
       const password_valid = await bcrypt.compare(req.body.password,user.password);
       if(password_valid){
           token = jwt.sign({ "id" : user.id,"email" : user.email,"name":user.name },process.env.SECRET);
           res.status(200).json({ token : token });
       } else {
         res.status(400).json({ error : "Password Incorrect" });
       }    
     }else{
       res.status(404).json({ error : "User does not exist" });
     }
}