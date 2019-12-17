
import { ClasificacionSbifContract } from "./contract";
import { ClasificacionSbifRepository } from "../../infrastructure/repository/persistence/clasificacionsbif";
import { ClasificacionSbif } from "../../infrastructure/repository/entity/clasificacionsbif";
import { ClasificacionSbifRepoContract } from "../../infrastructure/repository/interfaces/clasificacionsbif";

export class ClasificacionSbifServices implements ClasificacionSbifContract {

    private repoClasificacionSbif: ClasificacionSbifRepoContract;
    constructor(repoClasificacionSbifImpl: ClasificacionSbifRepoContract = new ClasificacionSbifRepository){
        this.repoClasificacionSbif = repoClasificacionSbifImpl;
    }

    async obtenerClasificacionSbif(): Promise<ClasificacionSbif[]> {
        try {
            const clasificacionsbifDto: ClasificacionSbif[] = await  this.repoClasificacionSbif.getClasificacionSbif();
            
            return clasificacionsbifDto;            
        } catch (error) {
            throw new Error(error.message);
        }


    }
    
}