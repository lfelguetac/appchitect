import { Response, Request } from "express";
import { HttpStatusCode } from "../../common/constants";
import { errorFormated } from "../../common/utils";
import { ClasificacionSbifDomain } from "../../../domain/clasificacionsbif/services";


export class RestController {

    constructor(){ }

    static getClasificacionSbif = async (req: Request, res: Response) => {
        try {
            const clasificacionsbifDomain = new ClasificacionSbifDomain();
            const clasificaciones = await clasificacionsbifDomain.getClasificacionSbif();
            res.status( HttpStatusCode.OK ).send( clasificaciones );
        } catch (error) {
            res.status( HttpStatusCode.INTERNAL_SERVER_ERROR ).send(errorFormated(error));
        }
    }
    
}
