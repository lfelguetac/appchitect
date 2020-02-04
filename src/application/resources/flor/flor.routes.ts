import { router } from '../../../infrastructure/server';
import { FlorController } from './flor.controller';

router.get('/moneda',  new FlorController().getFlores);
router.get('/moneda/:id', new FlorController().getFlorById);
 

export = router;