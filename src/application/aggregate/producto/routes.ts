import { router } from "../../../infrastructure/server";
import { RestController } from "./controller";

router.use ("/aggregates/producto", RestController.getProductoAggregate);

export = router;
