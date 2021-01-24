const { User } = require('../models')

const isAdmin = async(req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id);

    if (!user) return next({ name: 'unathorize' });
    if (user.role !== 'admin') return next({ name: 'unathorize' });

    return next();
  } catch (error) {
    return next(error)
  }
}

module.exports = isAdmin