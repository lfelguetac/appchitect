import "reflect-metadata";
import { createConnection } from "typeorm";
import express = require('express');
import http = require("http");
import helmet = require('helmet');
import bodyParser = require('body-parser');
import swaggerUi = require('swagger-ui-express');
import swaggerDocument = require('../api/common/contract.json');
import application =  require("./config/api");

const app = express();
const Router = express.Router();

export class ServerExpress {
    
    constructor(){
 
        app.use( helmet() );
        app.use( bodyParser.json() );
        app.use( (req, res, next) => {
            console.log(`CATCHED! ${req.method}:${req.path} at ${Date.now()}`);
            next();
        });

        //swagger UI para ver docu
        app.use( '/apidoc', swaggerUi.serve, swaggerUi.setup(swaggerDocument) );

        //crea una sola conexion global para TypeOrm
        createConnection();
        
    }
  
    routesHandler(routes) { 
        app.use(routes);
        return this; 
    } 
    

    listen(port = process.env.PORT) {
        const API_BASE = application.api.base + application.api.name;
        http.createServer(app).listen(port);
        console.log(`${API_BASE} escuchando en puerto ${port}`);
        return app;
    } 


};

export const router = Router;