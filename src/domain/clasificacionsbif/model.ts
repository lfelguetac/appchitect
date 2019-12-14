import { ClasificacionSbif } from "../../infrastructure/repository/clasificacionsbif/entity";

export class ClasificacionSbifDTO {
    result: ClasificacionSbif[] | ClasificacionSbif;
    error: string;
};
