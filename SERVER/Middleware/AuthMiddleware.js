import jwt from "jsonwebtoken"

export const AuthMiddleWare = async (req, res, next) => {
    try {
        const token = req.header("Authorization")
        if (!token) {
            res.status(401).json({ message: "No token provided" })
        }
        const varified = jwt.verify(token, process.env.JWT_SECRET)
        req.user = varified
        next()
    } catch (error) {
        res.status(500).json({
            errorMessage: error.message
        });
    }
}