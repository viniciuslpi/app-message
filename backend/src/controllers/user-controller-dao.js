const users = require('../models/user-dao');

module.exports = {
    create: async user => {
        const newUser = new users(user);

        try {
            await newUser.save();
            return await newUser.findByEmail(user.email);
        } catch (err) {
            return `${err.message} - Falha ao cadastrar novo usuario.`
        }
    },
    findByID: id => {
        users.findById(id).exec((err, users) => {
            if (err) {
                return err.message;
            } else {
                return users;
            }
        });
    },
    list: () => {
        users.find((err, users) => {
            if (err) {
                return err.message;
            } else {
                return users;
            }
        });
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