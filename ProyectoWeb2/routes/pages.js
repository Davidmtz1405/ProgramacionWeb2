const express = require("express");
const path = require("path");
const router = express.Router();

router.get('/edit', (req, res) =>{
    res.render(path.join(__dirname,'../views','/edit.ejs'))
});


router.get('/registrar', (req, res) =>{
    res.render(path.join(__dirname,'../views','/registrar.ejs'))
});

router.get('/estilos', (req, res) =>{
    res.sendFile(path.join(__dirname,'../estilos','/styles.css'))
});

module.exports=router;