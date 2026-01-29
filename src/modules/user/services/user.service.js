const { AppError } = require("../../../utils/appError");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

const registerUser = async({name, email, password}) =>{

        const isExistingUser = await User.findOne({email});
        if(isExistingUser){
            throw new AppError("EmailId already Exist!!",409);
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const savedUser = await User.create({
            name,
            email,
            password: hashedPassword
        });

        return savedUser;
}

const getAllUsers = async() =>{
    const users = await User.find().select("name email");
    return users;
}

module.exports = {
    registerUser,
    getAllUsers
}