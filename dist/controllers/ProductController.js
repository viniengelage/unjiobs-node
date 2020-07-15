"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Product = require('../models/Product'); var _Product2 = _interopRequireDefault(_Product);

class ProductController {
  async index(req, res) {
    const products = await _Product2.default.find();

    return res.json(products);
  }

  async categorie(req, res) {
    const {page, perPage} = req.query;

    const options = {
      page: parseInt(page, 10),
      limit: parseInt(perPage, 10)
    }

    const products = await _Product2.default.paginate({type: req.params.type}, options);

    return res.json(products);
  }

  async show(req, res) {
    const { id } = req.params;
    const product = await _Product2.default.findById(id);

    return res.json(product);
  }

  async store(req, res) {
    const { body } = req;
    const product = await _Product2.default.create(body);

    return res.json(product);
  }

  async update(req, res) {
    const { id } = req.params;
    const { body } = req;

    const product = await _Product2.default.findByIdAndUpdate(id, body, {
      new: true
    });

    return res.json(product);
  }

  async destroy(req, res) {
    const { id } = req.params;

    await _Product2.default.findByIdAndDelete(id);

    return res.send();
  }
}

exports. default = new ProductController();