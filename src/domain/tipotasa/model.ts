import { TipoTasa } from "../../infrastructure/repository/entity/tipotasa";

export class TipoTasaDTO {
    result: TipoTasa[] | TipoTasa;
    error: string;
};
