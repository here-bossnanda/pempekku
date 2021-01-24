const errorHandler = (err, req, res, next) => {
  switch (err.name) {
    case 'SequelizeValidationError':
      const errors = err.errors.map(el => el.message);

      res.status(400).json({
        errors
      })
      break;
    case 'SequelizeUniqueConstraintError':
      const unique = err.errors.map(el => el.message);

      res.status(400).json({
        errors: unique
      })
      break;
    case 'unathorize':
      res.status(401).json({
        errors: 'unathorize'
      })
      break;
    case 'jwtProvided':
      res.status(401).json({
        errors: 'jwt must provided'
      })
      break;
    case 'authValidation':
      res.status(401).json({
        errors: 'username or password wrong'
      })
      break;
    case 'notFound':
      res.status(404).json({
        errors: 'not found!'
      })
    default:
      res.status(500).json({
        errors: err.errors.message
      })
      break;
  }
}

module.exports = errorHandler