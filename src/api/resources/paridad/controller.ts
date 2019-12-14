import { Response, Request } from "express";
import { errorFormated, esNumero } from "../../common/utils";
import { HttpStatusCode } from "../../common/constants";
import { ParidadDomain } from "../../../domain/paridad/services";
import { ParidadDTO } from "../../../domain/paridad/model";


export class RestController{

    constructor(){}
    
    static getParidadMoneda = async (req: Request, res: Response) => {
    
        try {
            if (!esNumero(req.params.id)) throw new Error("Parametro id no puede ser string");
            const paridadDomain = new ParidadDomain();
            const monedaId = parseInt(req.params.idMoneda);
            const paridad: ParidadDTO = await paridadDomain.getParidadMoneda(monedaId);
            res.status(HttpStatusCode.OK).send(paridad);
            
        } catch (error) {
            res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(errorFormated(error));  
        }
    }
      
    
    static getParidad = async(req: Request, res: Response) => {
        try {
            const paridadDomain = new ParidadDomain();
            const paridad: ParidadDTO = await paridadDomain.getListaParidades();
            res.status(HttpStatusCode.OK).send(paridad);
            
        } catch (error) {
            res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(errorFormated(error));  
        }
    
    }


}
