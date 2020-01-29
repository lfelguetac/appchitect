import swaggerUi = require('swagger-ui-express');
import swaggerDocument = require('../openapi.json');

export function runDocuSwagger( app ){
    app.use( '/apidoc', swaggerUi.serve, swaggerUi.setup(swaggerDocument) );
}