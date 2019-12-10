import express = require('express');
import { RestController } from './controller';

const router = express.Router();
router.get('/moneda',  RestController.getMonedas);
router.get('/moneda/:id', RestController.getMonedaById);
 
export = router;
