const User = require('../models/User');


module.exports.createUser = async (req, res, next) => {
    const {body} = req;
    const createdUser = await new User(body);
    const result = await createdUser.save();
     res.status(201).send(result);
}

module.exports.getAllUsers = async (req, res, next) => {
   const users = await User.findAll();
}

module.exports.getOneUser = async (req, res, next) => {
        const {params: {userId}} = req;
        const foundedUser = await User.findOne(Number(userId));
        res.send(foundedUser);
}

module.exports.updateUser = () => {}

module.exports.deleteUser = () => {}