
const {Response,request} = require('express');


const usuariosGet = (req=request,res=response) =>{
    const {q,nombre} = req.query;

    res.json({
        msg:'Get API',
        q,
        nombre
    })

}
const usuariosPost = (req,res=response) =>{
    const {nombre,edad} = req.body;

    res.json({
        msg:'Post API',
        nombre,
        edad

    })

}
const usuariosDelete = (req,res=response) =>{
    const id = req.params.id

    res.json({
        msg:'Delete API',
        id
    })

}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosDelete

}