import { router } from '../../../infrastructure/server';
import { FlorController } from './flor.controller';

router.get('/flor',  new FlorController().getFlores);
router.get('/flor/:id', new FlorController().getFlorById);
 
export = router;
