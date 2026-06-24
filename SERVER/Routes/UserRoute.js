import express from "express"
import { create, deleteUser, getAllUsers, getUserbyId, Update } from "../Controllers/UserController.js"
import { login, logout, register } from "../Controllers/AuthController.js"
import { AuthMiddleWare } from "../Middleware/AuthMiddleware.js"

const route = express.Router()

route.post("/register", register)
route.post("/login", login)
route.post("/logout", logout)

route.post("/user", create)
route.get("/users", AuthMiddleWare, getAllUsers)
route.get("/user/:id", getUserbyId)
route.put("/update/:id", Update)
route.delete("/delete/:id", deleteUser)

export default route