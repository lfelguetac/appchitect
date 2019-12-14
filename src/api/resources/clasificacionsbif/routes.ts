import { RestController } from './controller';
import { router } from '../../../infrastructure/server';

router.get( '/clasificacionesbif', RestController.getClasificacionSbif );

export = router;