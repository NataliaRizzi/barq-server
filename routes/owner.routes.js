import ctrl from '../controllers/owner';
import authorize from '../middleware/authorization';

const router = require('express').Router();

router
  .post('/', ctrl.owner.register)
  .get('/', ctrl.owner.login)
  .get('/me', ctrl.owner.me)
  .delete('/', authorize, ctrl.owner.deleteOne)
  .post('/bars', authorize, ctrl.bars.postOne)
  .delete('/bars/:barId', authorize, ctrl.bars.deleteOne)
  .get('/bars/:barId/code', authorize, ctrl.bars.generateCode)
  .post('/bars/:barId/iban', authorize, ctrl.bars.setIban)
  .post('/bars/:barId/menus', authorize, ctrl.menu.postOne)
  .delete('/bars/:barId/menus/:menuId', authorize, ctrl.menu.deleteOne)
  .put('/bars/:barId/menus/:menuId', authorize, ctrl.menu.makeActive);

export default router;