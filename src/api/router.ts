
import { router } from '../infrastructure/server';
import application =  require("../infrastructure/config/api");
import clasificacionsbif = require('./resources/clasificacionsbif/routes');
import moneda = require('./resources/moneda/routes');
import paridad = require('./resources/paridad/routes') ;
import estadoproducto = require('./resources/estadoproducto/routes');
import tipotasa = require('./resources/tipotasa/routes');

const API_BASE = application.api.base + application.api.name;

router.use( API_BASE, moneda )
router.use( API_BASE, paridad ); 
router.use( API_BASE, clasificacionsbif );
router.use( API_BASE, estadoproducto );
router.use( API_BASE, tipotasa );

export = router;
