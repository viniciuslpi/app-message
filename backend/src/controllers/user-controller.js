const User = require('../models/user');

module.exports = {
    async add(req, res) { //refatorar
        const { name, email, password } = req.body;

        try {
            const user = new User({
                name,
                email,
            });

            user.addPassword(password);
            await user.add();

            res.status(201).json();

        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async list(req, res) { //refatorar
        const users = await User.list();
        if (users) {
            res.status(200).send(users);
        } else {
            res.status(500).json({ erro: "There are no users." });
        }
    },


    async findByID(req, res) { //refatorar
        const user = await User.findByID(req.params.id);
        if (user) {
            res.status(200).send(user);
        } else {
            res.status(500).json({ erro: "Usuario nao encontrado" });
        }
    },


    async findByEmail(req, res) { //refatorar

        try {
            const user = await User.findByEmail(req.params.email);
            res.status(200).send(user);
        } catch (err) {
            res.status(404).json({ erro: "Usuario nao encontrado" });
        }
    },


    async update(req, res) { //refatorar
        try {
            const message = await User.update(req.params.id, req.body);
            res.status(201).send({ message: message })
        } catch (err) {
            res.status(500).send({ message: err.message })
        }
    },


    async addPost(req, res) {
        const { post } = req.body;
        const { id } = req.params;
        try {
            const message = await User.findByIDAndInsert(id, post);
            res.status(201).send({ message: message })
        } catch (err) {
            res.status(500).send({ message: err.message })
        }

    },

    async findByIDAndListPosts(req, res) {
        const user = await User.findByIDAndListPosts(req.params.id);
        if (user) {
            res.status(200).send(user.posts);
        } else {
            res.status(500).json({ erro: "Usuario nao encontrado" });
        }
    }
    ,


    async delete(req, res) { //refatorar
        try {
            const message = await User.delete(req.params.id);
            res.status(200).send({ message: message })
        } catch (err) {
            res.status(500).send({ message: err.message })
        }
    }
}