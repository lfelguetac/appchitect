import { Moneda } from "../../infrastructure/repository/moneda/entity";

export class MonedaDTO {
    result: Moneda[] | Moneda;
    error: string;
};
