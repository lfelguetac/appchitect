import "reflect-metadata";
import { createConnection } from "typeorm";
import { securitize } from "./middleware/jwt";
import express = require('express');
import http = require("http");
import helmet = require('helmet');
import bodyParser = require('body-parser');
import logger = require("./config/logger");

const app = express();
const Router = express.Router();

export class ServerExpress {

    constructor (rutas: any, puerto: string) {

        app.use( helmet() );
        app.use( bodyParser.json() );

        securitize(app);

        app.use( (req, res, next) => {
            logger.info(`${req.method}:${req.path}`);
            next();
        });  

        createConnection();

        app.use(rutas);

        http.createServer(app).listen(puerto);
        logger.info(`escuchando en puerto ${puerto}`);

    }
}

export const router = Router;

