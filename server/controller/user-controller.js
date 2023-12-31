import User from "../model/User.js"


export const addUser = async (req, res) => {
    try {
        const exist = await User.findOne({ sub: req.body.sub });
        if (exist) {
            res.status(200).json({
                msg: 'User Already Exist'
            })
            return;
        }

        const newUser = new User(req.body)
        await newUser.save();
        return res.json({ newUser })
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

export const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json(error.message)

    }
}