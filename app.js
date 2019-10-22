const express = require('express');
const app = express(); 
app.get('/',(req,res)=>{
    res.send('tá Funcionando!!');

})


app.listen(3000, ()=> console.log('app Online'));
//npm install --save express