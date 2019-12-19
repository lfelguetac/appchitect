import { esNumero, keysToLowerCase } from "../../common/utils";
import { MonedaServices } from "../../../domain/moneda/services";
import { HttpStatusCode, PARAMETER_NO_NUMBER } from "../../common/constants";
import { MonedaDTO } from "../../../domain/moneda/model";
import { MonedaContract } from "../../../domain/moneda/contract";
import logger = require("../../../infrastructure/config/logger");
// import { MonedaRepositoryMock } from "../../../infrastructure/repository/persistence/moneda.mock";


export class RestController {

  private monedaServices: MonedaContract;
  constructor(){ 

    this.monedaServices = new MonedaServices();
    
    // una implementacion distinta
    // this.monedaServices = new MonedaServices(new MonedaRepositoryMock);

  }

  getMonedas = async (_req, res) => {

    const monedaDto = new MonedaDTO();
    try {
      
      const jsonOracle = await this.monedaServices.obtenerListaDeMonedas();
      monedaDto.result = keysToLowerCase(jsonOracle);
      res.status(HttpStatusCode.OK).send(monedaDto);

    } catch (e) {
      monedaDto.error = e.message;      
      logger.error(e.message);
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(monedaDto);
    }

  }
   

  getMonedaById = async (req, res) => {

    const monedaDto = new MonedaDTO();
    try {
      if (!esNumero(req.params.id)) throw new Error(PARAMETER_NO_NUMBER);
      const monedaId = parseInt(req.params.id);
      const jsonOracle = await this.monedaServices.obtenerMonedaEspecifica(monedaId);
      monedaDto.result = keysToLowerCase(jsonOracle);
      res.status(HttpStatusCode.OK).send(monedaDto);
    } catch ( e ) {
      monedaDto.error = e.message;      
      logger.error(e.message);
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(monedaDto);
    }
    
  }


}
