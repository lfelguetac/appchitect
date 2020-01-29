import { Moneda } from "../../infrastructure/repository/entity/moneda";

export class MonedaDTO {
    result: Moneda[] | Moneda;
    error: string;
};
