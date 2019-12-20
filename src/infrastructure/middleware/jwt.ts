import jwt = require("jsonwebtoken");
import logger = require("../config/logger");
import application =  require("../config/api");
import { Request, Response } from "express";
import { CodigoHttp } from "../../application/common/constants";

export function securitize (app){
    //generador de token
    const API_BASE = application.api.base + application.api.name;
    app.use(API_BASE + '/login/:idUsuario', (req: Request, res: Response) => {
        const user = req.params.idUsuario;
        const token = registerToken(user);
        res.send({ auth: true, token: token });
        logger.info('Token generado exitosamente');
    });
}

function registerToken( payload ) {
    return jwt.sign({ payload }, process.env.SECRET_JWT, {
        expiresIn: 6000
    });
}


export function verifyToken(req, res, next) {

    const authorization: string = req.headers['authorization'];
    if (!authorization){ 
        res.status(CodigoHttp.UNAUTHORIZED).send({ auth: false, message: 'Token no enviado' }); 
        logger.error('Token no enviado');
        return; 
    }

    if (authorization.substr(0,6) !== 'Bearer'){
        res.status(CodigoHttp.UNAUTHORIZED).send({ auth: false, message: 'Token invalido' }); 
        logger.error('Formato de token invalido.');
        return;
    }
    
    const token = authorization.replace('Bearer ', '');
    
    jwt.verify(token, process.env.SECRET_JWT, (err) => {
        if (err) {
            res.status(CodigoHttp.UNAUTHORIZED).json({ auth:false, message: err });
            logger.error('Token expirado');
            return;
        };
        logger.info('Token validado correctamente');
        next();
    });

}


