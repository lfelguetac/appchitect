import { RestController } from './controller';
import { router } from '../../../infrastructure/server';

router.get('/paridad/:idMoneda', RestController.getParidadMoneda);
router.get('/paridad', RestController.getParidad);

export = router;