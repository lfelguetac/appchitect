import "./config/env";
import { ServerExpress as Server } from './server';
import rutas = require('../application/router');

export function Run() {
    new Server(rutas, process.env.PORT);
}
