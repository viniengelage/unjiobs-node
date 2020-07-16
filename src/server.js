require("dotenv").config();

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import databaseConfig from "./config/database";
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);
app.use(cors({origin: true}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

mongoose.connect(databaseConfig.uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

app.listen(process.env.PORT || 3333, ()=>{
    console.log('Servidor Iniciado!')
});