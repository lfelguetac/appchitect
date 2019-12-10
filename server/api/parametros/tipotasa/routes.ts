import express = require('express');
import { RestController } from './controller';

const router = express.Router();
router.get('/tipotasa', RestController.getTipoTasa);
    
export = router;