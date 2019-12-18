import { esNumero, keysToLowerCase } from "../../common/utils";
import { HttpStatusCode, PARAMETER_NO_NUMBER } from "../../common/constants";
import { ParidadServices } from "../../../domain/paridad/services";
import { ParidadDTO } from "../../../domain/paridad/model";
import { ParidadContract } from "../../../domain/paridad/contract";
import logger = require("../../../infrastructure/config/logger");


export class RestController{

    private paridadServices: ParidadContract;
    constructor(){
        this.paridadServices = new ParidadServices();
    }
    
    getParidad = async(_req, res) => {
        const paridadDto = new ParidadDTO();
        try {
            
            const jsonOracle = await this.paridadServices.obtenerListaDeParidades();
            paridadDto.result = keysToLowerCase(jsonOracle);
            res.status(HttpStatusCode.OK).send(paridadDto);
        } catch (error) {
            paridadDto.error = error.message;
            logger.error(error.message);
            res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(paridadDto);  
        }
    
    }
    
    getParidadMoneda = async (req, res) => {
        const paridadDto = new ParidadDTO();
        try {

            if (!esNumero(req.params.idMoneda)) throw new Error(PARAMETER_NO_NUMBER);
            const monedaId = parseInt(req.params.idMoneda);
            const oraceJson  =  await this.paridadServices.obtenerParidadMoneda(monedaId);
            paridadDto.result = keysToLowerCase(oraceJson);
            res.status(HttpStatusCode.OK).send(paridadDto);
            
        } catch (error) {
            paridadDto.error = error.message;
            logger.error(error.message);
            res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(paridadDto);  
        }
    }
      

}
