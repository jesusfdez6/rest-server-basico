
const {Router} = require('express');
const {
    usuariosGet,
    usuariosPost,
    usuariosDelete
      } =require('../controller/user')

const router = Router();

  router.get('/',usuariosGet);
  router.post('/',usuariosPost);  
  router.delete('/:id',usuariosDelete);

module.exports = router;