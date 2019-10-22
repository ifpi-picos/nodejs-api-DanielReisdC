const express = require('express');

const router = express.Router();

router.get('/', (req, res)=>{
    res.send('App Online :)');
});

module.exports = router;