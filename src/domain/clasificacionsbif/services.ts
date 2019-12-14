import { ClasificacionSbifServices } from "./contract";
import { ClasificacionSbifRepository } from "../../infrastructure/repository/store/clasificacionsbif";
import { ClasificacionSbif } from "../../infrastructure/repository/entity/clasificacionsbif";

export class ClasificacionSbifDomain implements ClasificacionSbifServices {

    private repoClasificacionSbif: ClasificacionSbifRepository;
    constructor(){
        this.repoClasificacionSbif = new ClasificacionSbifRepository();
    }

    async getClasificacionSbif(): Promise<ClasificacionSbif[]> {
        try {
            const clasificacionsbifDto: ClasificacionSbif[] = await  this.repoClasificacionSbif.getClasificacionSbif();
            
            return clasificacionsbifDto;            
        } catch (error) {
            throw new Error(error.message)
        }


    }
    
}