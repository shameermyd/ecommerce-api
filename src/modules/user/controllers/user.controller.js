const { registerUser, getAllUsers } = require("../services/user.service")

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

exports.getAll = async (req,res) => {
    try {
        const users = await getAllUsers();

        res.status(200).json({
            success: true,
            message: 'Fetch all users',
            users
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

