const express = require('express');
const postagensController = require('../controllers/postagens');
const router = express.router();
router.get('/', (req,res)=>{
    res.send('Lista postagens...')

});
router.post('/',(req,res)=>{
    res.send('adicionado com sucesso')
})
module.exports=router;