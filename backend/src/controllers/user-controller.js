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
            res.status(500).json({ error: err.message });
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
    async findByID(req, res) {
        const user = await User.findByID(req.params.id);
        if (user) {
            res.status(200).send(user);
        } else {
            res.status(500).json({ erro: "There are no user" });
        }
    }
}