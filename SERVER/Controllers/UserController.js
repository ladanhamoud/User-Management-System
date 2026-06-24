import Users from "../Models/UserModel.js";

// Create
export const create = async (req, res) => {
    try {
        const newUser = new Users(req.body)
        const { email } = newUser

        const isEmailexist = await Users.findOne({ email })

        if (isEmailexist) {
            return res.status(400).json({
                message: "User already exist"
            })
        }

        const savedData = await newUser.save()
        res.status(201).json({
            message: "User Created Successfully"
        })
    } catch (error) {
        res.status(500).json({
            errorMessage: error.message
        });
    }
};

// get users function
export const getAllUsers = async (req, res) => {
    try {
        const AllData = await Users.find()
        if (!AllData || AllData.length === 0) {
            return res.status(404).json({ message: "Users Data Not Found" })
        }
        res.status(200).json(AllData)

    } catch (error) {
        res.status(500).json({
            errorMessage: error.message
        });
    }
}

// get users by id function
export const getUserbyId = async (req, res) => {
    try {
        const id = req.params.id
        const userExist = await Users.findById(id)
        if (!userExist) {
            return res.status(404).json({ message: "User Not Found" })
        }
        res.status(200).json(userExist)
    } catch (error) {
        res.status(500).json({
            errorMessage: error.message
        });
    }
}

//updata Function
export const Update = async (req, res) => {
    try {
        const id = req.params.id
        const userExist = await Users.findById(id)
        if (!userExist) {
            return res.status(404).json({ message: "User Not Found" })
        }
        const updatedData = await Users.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json({ message: "User Updated Successfully" })
    } catch (error) {
        res.status(500).json({
            errorMessage: error.message
        });
    }
}

//Delete Function
export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        const userExist = await Users.findById(id)
        if (!userExist) {
            return res.status(404).json({ message: "User Not Found" })
        }
        await Users.findByIdAndDelete(id)
        res.status(200).json({ message: "user deleted succeffully " })
    } catch (error) {
        res.status(500).json({
            errorMessage: error.message
        });
    }
}