const users = require('../models/user-dao');

module.exports = {
    create: async user => {
        const newUser = new users(user);

        try {
            await newUser.save();
            //return await newUser.findByEmail(user.email);
        } catch (err) {
            return `${err.message} - There is no possible create a new user.`
        }
    },
    findByID: async id => {
        try {
            return await users.findById(id).exec();
        } catch (err) {
            return `${err.message} - User not found.`
        }
    },
    list: async () => {
        try {
            return await users.find();
        } catch (err) {
            return `${err.message} - Users not found.`
        }
    },
    findByEmail: async email => {
        return await users.findOne({ email });
    },
    update: user => {
        users.findByIdAndUpdate(user.id, { $set: user }, err => {
            if (!err) {
                return 'Usuario atualizado com sucesso';
            } else {
                return err.message;
            }
        });
    },
    delete: id => {
        users.findByIdAndDelete(id, err => {
            if (!err) {
                return `Usuario excluído com sucesso.`;
            } else {
                return `${err.message} - Não foi possível excluir o usuario.`;
            }
        });
    }
}