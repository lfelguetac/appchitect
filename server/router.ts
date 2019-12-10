import express = require('express') ; 
import application =  require("./config/api");

import clasificacionsbif = require('./api/parametros/clasificacionsbif/routes');
import moneda = require('./api/parametros/moneda/routes');
import paridad = require('./api/parametros/paridad/routes') ;
import estadoproducto = require('./api/parametros/estadoproducto/routes');
import tipotasa = require('./api/parametros/tipotasa/routes');

const router = express.Router();
const API_BASE = application.api.base + application.api.name;

router.use( API_BASE, moneda )
router.use( API_BASE, paridad ); 
router.use( API_BASE, clasificacionsbif );
router.use( API_BASE, estadoproducto );
router.use( API_BASE, tipotasa );


export = router;
