import { RestController } from './controller';
import { router } from '../../../infrastructure/server';

router.get( '/clasificacionesbif', new RestController().getClasificacionSbif );

export = router;