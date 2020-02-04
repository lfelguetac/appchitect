import swaggerUi = require('swagger-ui-express');
import swaggerDocument = require('../swagger/index.json');

export function runDocuSwagger( app ){
    app.use( '/apidoc', swaggerUi.serve, swaggerUi.setup(swaggerDocument) );
}