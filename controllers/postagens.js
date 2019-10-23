const PostagemModel = require('../models/postagem');
class postagem{

    async get(){
        const postagens = await PostagemModel.find({});
        return postagem;
    }
    async create (postagemDT0){
        await new PostagemModel(postagemDT0).save();

    }
}                                                                                                                                                         

module.exports = new Postagens();