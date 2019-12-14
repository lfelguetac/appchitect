import { router } from '../../../infrastructure/server';
import { RestController } from './controller';

router.get('/moneda',  RestController.getMonedas);
router.get('/moneda/:id', RestController.getMonedaById);
 
export = router;
