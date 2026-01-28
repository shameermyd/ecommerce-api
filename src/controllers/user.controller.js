const { registerUser } = require("../services/user.service")

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const user = await registerUser({ name, email, password });

        return res.json({
            message: "User Registered Successfully!",
            userId: user.id,
        })

    } catch (error) {
        res.status(400).json({
            message: "User Registration Failed !!",

        })
    }

}

