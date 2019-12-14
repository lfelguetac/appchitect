import { ClasificacionSbifServices } from "./contract";
import { ClasificacionSbifDTO } from "./model";
import { ClasificacionSbifRepository } from "../../infrastructure/repository/clasificacionsbif/repository";

export class ClasificacionSbifDomain implements ClasificacionSbifServices {

    repoClasificacionSbif: ClasificacionSbifRepository;
    constructor(){
        this.repoClasificacionSbif = new ClasificacionSbifRepository();
    }

    async getClasificacionSbif(): Promise<ClasificacionSbifDTO> {

        const clasificacionsbifDto: ClasificacionSbifDTO = await  this.repoClasificacionSbif.getClasificacionSbif();
        return clasificacionsbifDto;

    }
    
}