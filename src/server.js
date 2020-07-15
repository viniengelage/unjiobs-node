import express from 'express';
import mongoose from 'mongoose';

import databaseConfig from "./config/database";
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

mongoose.connect(databaseConfig.uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

app.listen(3333, ()=>{
    console.log('Servidor Iniciado!')
});