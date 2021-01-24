const decodeToken = require('../helpers/decodeToken');
const { User } = require('../models')

const isLogin = async(req, res, next) => {
  try {
    const { access_token } = req.headers;
    if (!access_token) next({ name: 'jwtProvided' });

    const decoded = decodeToken(access_token);
    const user = await User.findOne({ where: { email: decoded.email } });

    if (!user) return next({ name: 'authValidation' });

    req.user = decoded;

    return next()
  } catch (error) {
    return next(error)
  }
}

module.exports = isLogin;