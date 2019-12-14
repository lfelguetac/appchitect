import { TipoTasa } from "../../infrastructure/repository/tipotasa/entity";

export class TipoTasaDTO {
    result: TipoTasa[] | TipoTasa;
    error: string;
};
