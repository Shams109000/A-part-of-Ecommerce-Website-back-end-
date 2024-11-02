





const  User  = require("../model/user");


// }
exports.fetchUserById= async (req, res) => {
    const {id}=req.params
    try {
        let result = await User.findById(id)
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error)

    }

}
exports.updateUser = async (req, res) => {
    let { id } = req.params
    try {
        const result = await User.findByIdAndUpdate(id, req.body, { new: true }).exec();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};