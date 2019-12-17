import { ClasificacionSbif } from "../entity/clasificacionsbif";

export interface ClasificacionSbifRepoContract {

    getClasificacionSbif(): Promise<ClasificacionSbif[]>;

}