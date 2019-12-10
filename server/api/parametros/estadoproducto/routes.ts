import * as express from 'express';
import { metodos } from './controller';

const router = express.Router();

router.get('/estadoproducto', metodos.getEstadoProducto);

export = router;
