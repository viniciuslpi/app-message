const users = require('../models/User');

module.exports = {
    create: user => {
        const newUser = new users(user);

        newUser.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - falha ao cadastrar novo usuario.` })
            } else {
                res.status(201).json(newUser);
            }
        });
    },
    findByID: id => {
        users.findById(id).exec((err, users) => {
            if (err) {
                res.status(400).send({ message: err.message });
            } else {
                res.status(200).send(users);
            }
        });
    },
    list: () => {
        users.find((err, users) => {
            if (err) {
                res.status(400).send({ message: err.message })
            } else {
                res.status(200).json(users);
            }
        });
    },
    findByEmail: email => {
        users.findOne({ email }, (err, user) => {
            if (err) {
                res.status(400).send({ message: err.message });
            } else {
                res.status(200).json(user);
            }
        });
    },
    update: user => {
        users.findByIdAndUpdate(user.id, { $set: user }, err => {
            if (!err) {
                res.status(200).send({ message: 'Usuario atualizado com sucesso' })
            } else {
                res.status(500).send({ message: err.message })
            }
        });
    },
    delete: id => {
        users.findByIdAndDelete(id, err => {
            if (!err) {
                res.status(200).send({ message: `Usuario excluído com sucesso.` })
            } else {
                res.status(500).send({ message: `${err.message} - Não foi possível excluir o usuario.` })
            }
        });
    }
}