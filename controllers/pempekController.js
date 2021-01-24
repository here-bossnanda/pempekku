const { Pempek } = require('../models');

class PempekController {
  static async getAll(req, res, next) {
    try {
      const pempek = await Pempek.findAll();

      return res.status(200).json(pempek)
    } catch (error) {
      return next(error);
    }
  }

  static async get(req, res, next) {
    try {
      const pempek = await Pempek.findByPk(req.params.id);

      if (!pempek) return next({ name: 'notFound' })

      return res.status(200).json(pempek)
    } catch (error) {
      return next(error)
    }
  }

  static async store(req, res, next) {
    try {
      const { name, image_url, price, stock } = req.body;
      const input = { name, image_url, price, stock };

      const create = await Pempek.create(input);

      return res.status(201).json(create);
    } catch (error) {
      return next(error);
    }
  }

  static async update(req, res, next) {
    try {
      const { id } = req.params
      const { name, image_url, price, stock } = req.body;
      const input = { name, image_url, price, stock };

      const pempek = Pempek.findByPk(id);

      if (!pempek) return next({ name: 'notFound' })

      await pempek.update(input, { where: id });
      await pempek.reload();

      return res.status(200).json(pempek)

    } catch (error) {
      return next(error);
    }
  }

  static async destroy(req, res, next) {
    try {
      const pempek = User.findByPk(req.params.id);
      if (!pempek) return next({ name: 'notFound' })

      await pempek.destroy();

      return res.status(200).json({
        message: 'successfully deleted pempek'
      })
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = PempekController