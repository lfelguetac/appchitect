import { ClasificacionSbif } from "../../infrastructure/repository/entity/clasificacionsbif";

export interface  ClasificacionSbifContract {

    obtenerClasificacionSbif(): Promise<ClasificacionSbif[]>;

}