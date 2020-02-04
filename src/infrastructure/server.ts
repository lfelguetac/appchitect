import "reflect-metadata";
import { createConnection } from "typeorm";
import { runDocuSwagger } from "./middleware/apidoc";
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

        //aplica seguridad jwt
        // app.use( (req, res, next) => {
        //     verifyToken(req, res, next);
        // });

        //swagger UI para ver docu
        runDocuSwagger(app);

        //crea una sola conexion global para TypeOrm
        createConnection();

        //midleware de rutas
        app.use(rutas);

        
        //runs server
        http.createServer(app).listen(puerto);
        logger.info(`escuchando en puerto ${puerto}`);

    }

}

export const router = Router;

