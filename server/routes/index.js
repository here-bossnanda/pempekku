const router = require('express').Router();
const authRouter = require('./auth');
const pempekRouter = require('./pempek');
const isLogin = require('../middlewares/isLogin')

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'hello from pempek'
  })
})

router.use(authRouter);
router.use(isLogin);
router.use('/pempeks', pempekRouter);

module.exports = router