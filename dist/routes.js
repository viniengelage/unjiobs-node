"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _ProductController = require('./controllers/ProductController'); var _ProductController2 = _interopRequireDefault(_ProductController);

const routes = _express.Router.call(void 0, );

/* Tasks */
routes.get("/items", _ProductController2.default.index);
routes.get("/items/:id", _ProductController2.default.show);
routes.post("/items", _ProductController2.default.store);
routes.put("/items/:id", _ProductController2.default.update);
routes.delete("/items/:id", _ProductController2.default.destroy);

exports. default = routes;