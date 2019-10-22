const PostagemModel = require('../models/postagem');
class postagem{

    async get(){
        const postagens = await PostagemModel.find({});
        return postagem;
    }
}

module.exports = new Postagens();