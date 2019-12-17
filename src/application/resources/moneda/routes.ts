import { router } from '../../../infrastructure/server';
import { RestController } from './controller';

router.get('/moneda',  new RestController().getMonedas);
router.get('/moneda/:id', new RestController().getMonedaById);
 

export = router;