const User = require("../models/user");
const bcrypt = require("bcryptjs");

const registerUser = async({name, email, password}) =>{
    try {
        const isExistingUser = await User.findOne({email});
        if(isExistingUser){
            throw new Error("EmailId already Exist!!");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const savedUser = await User.create({
            name,
            email,
            password: hashedPassword
        });

        return savedUser;

    } catch (error) {
        console.error("Error: ",error);
    }
}

module.exports = {
    registerUser,
}