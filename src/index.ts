import 'reflect-metadata';
import express from 'express';
import { router } from './routes';
import createConnection from './database';

createConnection();
const server = express();

server.use(express.json());
server.use(router);

server.listen(process.env.PORT || 5000, ()=> {
    console.log('Servidor on na porta 5000');
});

//Constiligue - 0800-520-305