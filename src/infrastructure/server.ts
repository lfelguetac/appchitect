import "reflect-metadata";
import { createConnection } from "typeorm";
import { runDocuSwagger } from "./middleware/apidoc";
import express = require('express');
import http = require("http");
import helmet = require('helmet');
import bodyParser = require('body-parser');
import application =  require("./config/api");
import logger = require("./config/logger");

const app = express();
const Router = express.Router();

export class ServerExpress {
    
    constructor () {
 
        app.use( helmet() );
        app.use( bodyParser.json() );
        app.use( (req, _res, next) => {
            logger.info(`${req.method}:${req.path}`);
            next();
        });

        //swagger UI para ver docu
        runDocuSwagger(app);

        //crea una sola conexion global para TypeOrm
        createConnection();
        
    }
  
    routesHandler( routes ) { 
        app.use(routes);
        return this; 
    } 
    

    listen( port ) {
        const API_BASE = application.api.base + application.api.name;
        http.createServer(app).listen(port);
        logger.info(`${API_BASE} escuchando en puerto ${port}`);
        return app;
    } 


};

export const router = Router;
