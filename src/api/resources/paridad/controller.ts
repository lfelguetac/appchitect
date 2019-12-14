import { Response, Request } from "express";
import { errorFormated, esNumero } from "../../common/utils";
import { HttpStatusCode } from "../../common/constants";
import { ParidadDomain } from "../../../domain/paridad/services";
import { ParidadDTO } from "../../../domain/paridad/model";


export class RestController{

    constructor(){}
    
    static getParidadMoneda = async (req: Request, res: Response) => {
        const paridadDto = new ParidadDTO();
        try {
            if (!esNumero(req.params.id)) throw new Error("Parametro id no puede ser string");
            const paridadDomain = new ParidadDomain();
            const monedaId = parseInt(req.params.idMoneda);
            paridadDto.result =  await paridadDomain.getParidadMoneda(monedaId);
            res.status(HttpStatusCode.OK).send(paridadDto);
            
        } catch (error) {
            paridadDto.error = error.message;
            res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(paridadDto);  
        }
    }
      
    
    static getParidad = async(req: Request, res: Response) => {
        const paridadDto = new ParidadDTO();
        try {
            const paridadDomain = new ParidadDomain();
            paridadDto.result = await paridadDomain.getListaParidades();

            res.status(HttpStatusCode.OK).send(paridadDto);
        } catch (error) {
            paridadDto.error = error.message;
            res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(paridadDto);  
        }
    
    }


}
