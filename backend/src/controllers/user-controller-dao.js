const users = require('../models/User-dao');

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
            return null;
        }
    },
    list: async () => {
        try {
            return await users.find();
        } catch (err) {
            throw new Error(err.message);
        }
    },
    findByEmail: async email => {
        return await users.findOne({ email });
    },
    update: async (id, user) => {
        try {
            await users.findByIdAndUpdate(id, { $set: user });
            return 'Usuario atualizado com sucesso';
        } catch (err) {
            return `Não foi possível alterar o usuario.`;
        }
    },
    delete: async id => {
        try {
            await users.findByIdAndDelete(id);
            return `Usuario excluído com sucesso.`;
        } catch (err) {
            return `Não foi possível excluir o usuario.`;
        }

    }
}
