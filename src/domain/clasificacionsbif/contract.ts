import { ClasificacionSbifDTO } from "./model";

export interface ClasificacionSbifServices {

    getClasificacionSbif(): Promise<ClasificacionSbifDTO>;

}