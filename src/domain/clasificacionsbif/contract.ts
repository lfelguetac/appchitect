import { ClasificacionSbif } from "../../infrastructure/repository/entity/clasificacionsbif";

export interface  ClasificacionSbifServices {

    getClasificacionSbif(): Promise<ClasificacionSbif[]>;

}