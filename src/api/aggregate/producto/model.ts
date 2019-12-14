
import { ClasificacionSbif } from "../../../infrastructure/repository/entity/clasificacionsbif";
import { Moneda } from "../../../infrastructure/repository/entity/moneda";
import { Paridad } from "../../../infrastructure/repository/entity/paridad";
import { TipoTasa } from "../../../infrastructure/repository/entity/tipotasa";

export class ProdutoAggregate{
    moneda: Moneda[];
    paridad: Paridad[];
    clasificacionsbif: ClasificacionSbif[];
    tipotasa: TipoTasa[];
    error: string;
}
