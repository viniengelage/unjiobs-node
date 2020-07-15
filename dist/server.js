"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }require("dotenv").config();

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);

var _database = require('./config/database'); var _database2 = _interopRequireDefault(_database);
var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);

const app = _express2.default.call(void 0, );

app.use(_express2.default.json());
app.use(_routes2.default);
app.use(_cors2.default.call(void 0, ));

_mongoose2.default.connect(_database2.default.uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

app.listen(process.env.PORT || 3333, ()=>{
    console.log('Servidor Iniciado!')
});