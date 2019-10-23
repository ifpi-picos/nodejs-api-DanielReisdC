const mongosse = require('mongoose');
const schema = new mangoose.Schema({
    titulo: {
        type: String,
    },
    texto:{
        type: String,
    },
    dataAlteracao:{
        type: Date,
        default:Date.now()
    },
    autor:{
        type: String
    }
});
const postagem = mongoose.model('postagem', schema);
module.exports = Postagem;Error: Cannot find module '../models/postagem'