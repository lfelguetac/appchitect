import { Response, Request } from "express";
import { ClasificacionSbifRepository } from "./store";
import { errorFormated } from "../../../common/utils";
import { getCustomRepository } from "typeorm";
import { HttpStatusCode } from "../../../common/constants";

export class RestController {

    constructor(){ }

    static getClasificacionSbif = async (req: Request, res: Response) => {
        try {
            const clasificaciones = await getCustomRepository(ClasificacionSbifRepository).getClasificacionSbif();
            res.status( HttpStatusCode.OK ).send( clasificaciones );
        } catch (error) {
            res.status( HttpStatusCode.INTERNAL_SERVER_ERROR ).send(errorFormated(error));
        }
    }
    
}
