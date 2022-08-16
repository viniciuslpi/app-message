const users = require('../models/User');

class UserController {

    static getUsers = (req, res) => {
        users.find((err, users) => {
            if (err) {
                res.status(400).send({ message: err.message })
            } else {
                res.status(200).json(users);
            }
        });
    }

    static getUser = (req, res) => {
        const { id } = req.params;

        users.findById(id).exec((err, users) => {
            if (err) {
                res.status(400).send({ message: err.message });
            } else {
                res.status(200).send(users);
            }
        });
    }

    static createUser = (req, res) => {
        const user = new users(req.body);

        user.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - falha ao cadastrar novo usuario.` })
            } else {
                res.status(201).json(user);
            }
        });
    }

    static updateUser = (req, res) => {
        const { id } = req.params;

        users.findByIdAndUpdate(id, { $set: req.body }, err => {
            if (!err) {
                res.status(200).send({ message: 'Usuario atualizado com sucesso' })
            } else {
                res.status(500).send({ message: err.message })
            }
        });
    }

    static deleteUser = (req, res) => {
        const { id } = req.params;

        users.findByIdAndDelete(id, err => {
            if (!err) {
                res.status(200).send({ message: `Usuario excluído com sucesso.` })
            } else {
                res.status(500).send({ message: `${err.message} - Não foi possível excluir o usuario.` })
            }
        })
    }


}

module.exports = UserController;