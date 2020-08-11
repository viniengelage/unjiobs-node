require("dotenv").config();

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import databaseConfig from "./config/database";
import routes from './routes';

const app = express();

app.use(cors({origin: 'http://unijobs.uniamerica.br'}));
app.use(express.json());
app.use(routes);

mongoose.connect(databaseConfig.uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

app.listen(process.env.PORT || 3333, ()=>{
    console.log('Servidor Iniciado!')
});