
import { router } from '../infrastructure/server';

import application =  require("../infrastructure/config/api");
import flores = require('./resources/flor/flor.routes');

import florAgg = require('./aggregate/flores/flor.routes.agg');

const API_BASE = application.api.base + application.api.name;

router.use( API_BASE, florAgg );
router.use( API_BASE, flores );


export = router;
