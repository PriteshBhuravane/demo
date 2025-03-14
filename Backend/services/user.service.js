const userModel = require('../models/user.model');

module.exports.createUser = async ({ firstname, lastname, email, password }) => {
    if (!firstname || !email || !password) {
        throw new Error('All Fields are Required');
    }

    // Check if the user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
        throw new Error('User with this email already exists');
    }

    // Create new user
    const user = await userModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password
    });

    return user;
};
