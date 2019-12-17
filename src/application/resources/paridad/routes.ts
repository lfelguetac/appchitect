import { RestController } from './controller';
import { router } from '../../../infrastructure/server';

router.get('/paridad/:idMoneda', new RestController().getParidadMoneda);
router.get('/paridad', new RestController().getParidad);

export = router;