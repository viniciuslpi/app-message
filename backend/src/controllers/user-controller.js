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
            if(err) {
                res.status(500).json({ error: err.message });
            }
        }
    }
}