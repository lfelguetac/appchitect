import { RestController } from './controller';
import { router } from '../../../infrastructure/server';

router.get('/tipotasa', RestController.getTipoTasa);
    
export = router;