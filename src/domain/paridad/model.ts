import { Paridad } from "../../infrastructure/repository/paridad/entity";

export class ParidadDTO {
    result: Paridad[] | Paridad;
    error: string;
};
