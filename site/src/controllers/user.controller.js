const UserModel = require('../models/user.model');

class UserCtrl {

    async createUser(fName) {
        try {
            const user = new UserModel({ fName })
            await user.save();
            console.log("User saved ! >> ", user);
            return user;
        } catch (err) {
            return null;
        }
    }

    async getAllUsers() {
        try {
            const users = await UserModel.find()
            return users;
        } catch (err) {
            return null;
        }
    }
}

module.exports = new UserCtrl();