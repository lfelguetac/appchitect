import "./common/env";
import { ServerExpress as Server } from './common/server';
import rutas = require('./router');

export function Run() {
    new Server()
      .router(rutas)
      .listen(process.env.PORT);
}
