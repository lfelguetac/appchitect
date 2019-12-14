import { ClasificacionSbif } from "../../infrastructure/repository/entity/clasificacionsbif";

export class ClasificacionSbifDTO {
    result: ClasificacionSbif[] | ClasificacionSbif;
    error: string;
};
