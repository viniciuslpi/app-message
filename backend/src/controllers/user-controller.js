const User = require('../models/user');

module.exports = {
    async add(req, res) {
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
            if (err) {
                res.status(500).json({ error: err.message });
            }
        }
    },
    async list(req, res) {
        const users = await User.list();
        if (users) {
            res.status(200).send(users);
        } else {
            res.status(500).json({ erro: "There are no users" });
        }
    },
    async delete(req, res) {
        try {
            await User.delete(req.params.id);
            res.status(200).send({ message: `User deleted.`})
        } catch (err) {
            res.status(500).send({ message: err.message })
        }

    }
}