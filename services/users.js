const User = require('../db/models/user');

module.exports = {
    async createUser(user) {
        let newUser = new User(user);
        await newUser.hashPassword();
        try {
            await newUser.save();
        } catch (e) {
            throw new Error('UserAlreadyExists');
        }
    },
    async getUserByID(userID) {
        try {
            return await User.findById(userID)
        } catch (e) {
            console.log(e);
            return null;
        }
    },
    async getUserByEmail(emailAddress) {
        return User.findOne({emailAddress: emailAddress})
    },
    async deleteUser(userID) {

    }
}