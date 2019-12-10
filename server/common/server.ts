import "reflect-metadata";
import express = require('express');
import http = require("http");
import helmet = require('helmet');
import bodyParser = require('body-parser');
import swaggerUi = require('swagger-ui-express');
import swaggerDocument = require('./swagger.json');
import swaggerMiddleware = require('swagger-express-middleware');
import path = require('path');
import application =  require("../config/api");
import { createConnection } from "typeorm";
import { applyGraphqlMiddleware } from "./graphql";

const app = express();

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

        //prueba de humo graphql
        applyGraphqlMiddleware(app);

        //crea una sola conexion global para TypeOrm
        createConnection();

    }

    router(routes) { 
        app.use(routes);
        // this.swaggerify(app, routes);
        return this; 
    } 
    

    listen(port = process.env.PORT) {
        const API_BASE = application.api.base + application.api.name;
        http.createServer(app).listen(port);
        console.log(`${API_BASE} escuchando en puerto ${port}`);
        return app;
    } 


    swaggerify(app, routes){

        swaggerMiddleware( path.join(path.normalize(`${__dirname}/../../../server/common`), 'swagger.json'), app, (error, mdw) => {
            app.enable('case sensitive routing');
            app.enable('strict routing');  

            app.use(
                mdw.metadata(),
                mdw.parseRequest(),
                mdw.CORS(),  
                mdw.validateRequest()
            );
    
            // app.use((err, res) => {
            //     res.status(err.status);
            //     res.send(
            //         '<h1>' + err.status + ' Error</h1>' +
            //         '<pre>' + err.message + '</pre>'
            //     );
            // });

            routes(app);
            // app.use(moneda);

        });
    } 
};

