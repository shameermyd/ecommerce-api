const { registerUser } = require("../services/user.service")

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const user = await registerUser({ name, email, password });

        res.json({
            message: "User Registered Successfully!",
            userId: user.id,
        })

    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message || "Internal Server Error",

        })
    }

}

