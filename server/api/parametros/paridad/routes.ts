import { RestController } from './controller';
import express = require('express');

const router = express.Router();
router.get('/paridad/:idMoneda', RestController.getParidadMoneda);
router.get('/paridad', RestController.getParidad);


export = router;