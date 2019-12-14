import "./config/env";
import { ServerExpress as Server } from './server';
import rutas = require('../api/router');

export function Run() {
    new Server()
      .routesHandler(rutas)
      .listen(process.env.PORT);
}
