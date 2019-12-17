import { RestController } from './controller';
import { router } from '../../../infrastructure/server';

router.get('/tipotasa', new RestController().getTipoTasa);
    
export = router;