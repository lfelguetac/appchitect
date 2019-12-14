import { Response, Request } from "express";
import { HttpStatusCode } from "../../common/constants";
import { errorFormated } from "../../common/utils";
import { TipotasaDomain } from "../../../domain/tipotasa/services";

export class RestController{
    
    constructor(){ }
    
    static getTipoTasa = async(req: Request, res: Response) => {
        try {
            const tipotasaDomain = new TipotasaDomain();
            const listadoTipoTasa = await tipotasaDomain.getTipoTasa();
            res.status(HttpStatusCode.OK).send(listadoTipoTasa);
        } catch (error) {
            res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(errorFormated(error));             
        }
        
    }
   
}
