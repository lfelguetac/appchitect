import express = require('express');
import { RestController } from './controller';

const router = express.Router();
router.get( '/clasificacionesbif', RestController.getClasificacionSbif );


export = router;