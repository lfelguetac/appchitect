import { Response, Request } from "express";
import { HttpStatusCode } from "../../common/constants";
import { TipotasaDomain } from "../../../domain/tipotasa/services";
import { TipoTasaDTO } from "../../../domain/tipotasa/model";

export class RestController{
    
    constructor(){ }
    
    static getTipoTasa = async(req: Request, res: Response) => {

        const tipotasaDto = new TipoTasaDTO();
        try {
            const tipotasaDomain = new TipotasaDomain();
            tipotasaDto.result = await tipotasaDomain.getTipoTasa();

            res.status(HttpStatusCode.OK).send(tipotasaDto);
        } catch (error) {
            tipotasaDto.error = error.message;
            res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(tipotasaDto);             
        }
        
    }
   
}
