import { Response, Request } from "express";
import { HttpStatusCode } from "../../common/constants";
import { ClasificacionSbifServices } from "../../../domain/clasificacionsbif/services";
import { ClasificacionSbifDTO } from "../../../domain/clasificacionsbif/model";
import { ClasificacionSbifContract } from "../../../domain/clasificacionsbif/contract";

export class RestController {

    private clasificacionSbifServices: ClasificacionSbifContract;
    constructor(){
        this.clasificacionSbifServices = new ClasificacionSbifServices();
    }


    getClasificacionSbif = async (_req: Request, res: Response) => {
        const clasificacionDto = new ClasificacionSbifDTO(); 
        try {
            clasificacionDto.result = await this.clasificacionSbifServices.obtenerClasificacionSbif();

            res.status( HttpStatusCode.OK ).send( clasificacionDto );
        } catch (error) {
            clasificacionDto.error = error.message;
            res.status( HttpStatusCode.INTERNAL_SERVER_ERROR ).send(clasificacionDto);
        }
    }
    
}
