import { CodigoHttp } from "../../common/constants";
import { ClasificacionSbifServices } from "../../../domain/clasificacionsbif/services";
import { ClasificacionSbifDTO } from "../../../domain/clasificacionsbif/model";
import { ClasificacionSbifContract } from "../../../domain/clasificacionsbif/contract";
import { keysToLowerCase } from "../../common/utils";

export class RestController {

    private clasificacionSbifServices: ClasificacionSbifContract;
    constructor(){
        this.clasificacionSbifServices = new ClasificacionSbifServices();
    }

    getClasificacionSbif = async (_req, res) => {
        const clasificacionDto = new ClasificacionSbifDTO(); 
        try {
            const jsonOracle = await this.clasificacionSbifServices.obtenerClasificacionSbif();
            clasificacionDto.result = keysToLowerCase(jsonOracle);
            res.status( CodigoHttp.OK ).send( clasificacionDto );
        } catch (error) {
            clasificacionDto.error = error.message;
            res.status( CodigoHttp.INTERNAL_SERVER_ERROR ).send(clasificacionDto);
        }
    }
    
}
