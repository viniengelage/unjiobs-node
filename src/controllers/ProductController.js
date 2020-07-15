import Product from "../models/Product";

class ProductController {
  async index(req, res) {
    const {page, perPage} = req.query;

    const options = {
      page: parseInt(page, 10),
      limit: parseInt(perPage, 10)
    }

    const products = await Product.paginate({}, options);

    return res.json(products);
  }

  async categorie(req, res) {
    const {page, perPage} = req.query;

    const options = {
      page: parseInt(page, 10),
      limit: parseInt(perPage, 10)
    }

    const products = await Product.paginate({type: req.params.type}, options);

    return res.json(products);
  }

  async show(req, res) {
    const { id } = req.params;
    const product = await Product.findById(id);

    return res.json(product);
  }

  async store(req, res) {
    const { body } = req;
    const product = await Product.create(body);

    return res.json(product);
  }

  async update(req, res) {
    const { id } = req.params;
    const { body } = req;

    const product = await Product.findByIdAndUpdate(id, body, {
      new: true
    });

    return res.json(product);
  }

  async destroy(req, res) {
    const { id } = req.params;

    await Product.findByIdAndDelete(id);

    return res.send();
  }
}

export default new ProductController();