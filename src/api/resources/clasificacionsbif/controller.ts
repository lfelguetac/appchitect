import { Response, Request } from "express";
import { HttpStatusCode } from "../../common/constants";
import { errorFormated } from "../../common/utils";
import { ClasificacionSbifDomain } from "../../../domain/clasificacionsbif/services";
import { ClasificacionSbifDTO } from "../../../domain/clasificacionsbif/model";


export class RestController {

    constructor(){ }

    static getClasificacionSbif = async (req: Request, res: Response) => {
        const clasificacionDto = new ClasificacionSbifDTO(); 
        try {
            const clasificacionsbifDomain = new ClasificacionSbifDomain();
            clasificacionDto.result = await clasificacionsbifDomain.getClasificacionSbif();

            res.status( HttpStatusCode.OK ).send( clasificacionDto );
        } catch (error) {
            clasificacionDto.error = error.message;
            res.status( HttpStatusCode.INTERNAL_SERVER_ERROR ).send(clasificacionDto);
        }
    }
    
}
