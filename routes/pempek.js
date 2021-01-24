const router = require('express').Router();
const pempekController = require('../controllers/pempekController');
const isAdmin = require('../middlewares/isAdmin');

router.get('/', pempekController.getAll);
router.get('/:id', pempekController.get);
router.post('/', isAdmin, pempekController.store);
router.put('/:id', isAdmin, pempekController.update);
router.delete('/:id', isAdmin, pempekController.destroy);

module.exports = router