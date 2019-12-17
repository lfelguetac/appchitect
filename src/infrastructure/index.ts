import "./config/env";
import { ServerExpress as Server } from './server';
import rutas = require('../application/router');

export function Run() {
    new Server()
      .routesHandler(rutas)
      .listen(process.env.PORT);
}
