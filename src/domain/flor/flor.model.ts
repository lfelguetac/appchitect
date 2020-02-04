import { Flor } from "../../infrastructure/persistence/entity/flor.entity";

export class FlorDTO {
    result: Flor[] | Flor;
    error: string;
};
