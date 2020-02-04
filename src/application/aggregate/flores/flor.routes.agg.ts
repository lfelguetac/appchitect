import { router } from "../../../infrastructure/server";
import { FlorControllerAgg } from "./flor.controller.agg";

router.use ("/aggregates/flores", FlorControllerAgg.getFloresAggregate);

export = router;
