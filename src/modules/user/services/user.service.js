const { AppError } = require("../../../utils/appError");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

const registerUser = async({name, email, password}) =>{

        const isExistingUser = await User.findOne({email});
        if(isExistingUser){
            throw new AppError("EmailId already Exist!!",400);
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
    try {
        return 'user';
    } catch (error) {
        console.log
    }
}

module.exports = {
    registerUser,
    getAllUsers
}