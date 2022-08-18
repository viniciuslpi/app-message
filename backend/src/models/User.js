const usersDao = require('../controllers/user-controller-dao');


class User {
    constructor(user) {
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
    }

    async add() {
        if (await User.findByEmail(this.email)) {
            throw new Error('This user already exists');
        }
        usersDao.create(this);
    }

    static async findByID(id) {
        const user = await usersDao.findByID(id);
        if (!user) {
            return null;
        }
        return new User(user);
    }

    static async findByEmail(email) {
        const user = await usersDao.findByEmail(email);
        console.log(user)
        if (!user) {
            return null;
        }
        return new User(user);
    }

    static async list() {
        return await usersDao.list();
    }

    addPassword(password) {
        this.password = password;
    }

    static async delete(id) {
        return await usersDao.delete(id);
    }
}

module.exports = User;
