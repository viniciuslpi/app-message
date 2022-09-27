const posts = require('../models/posts-dao');

module.exports = {
    create: async (req, res) => { // Refatorar
        const newPost = new posts(req.body);
        try {
            const response = await newPost.save();
            res.status(201).json({ message: response })
        } catch (err) {
            res.status(500).json({ message: `${err.message}: Nao foi possivel criar um post`})
        }
    },
    findByID: async id => { // Refatorar
        try {
            return await posts.findById(id).exec();
        } catch (err) {
            return null;
        }
    },
    list: async (req, res) => { 
        try {
            const post = await posts.find().populate('user');
            res.status(200).json(post);
        } catch (err) {
            res.status(404).json({ erro: err.message });
        }
    },
    update: async (id, post) => {// Refatorar
        try {
            await posts.findByIdAndUpdate(id, { $set: post });
            return 'Post atualizado com sucesso';
        } catch (err) {
            return `Não foi possível alterar o post.`;
        }
    },
    delete: async id => { // Refatorar
        try {
            await posts.findByIdAndDelete(id);
            return `Post excluído com sucesso.`;
        } catch (err) {
            return `Não foi possível excluir o post.`;
        }

    }
}
