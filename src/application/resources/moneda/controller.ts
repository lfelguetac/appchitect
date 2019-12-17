import { esNumero, TrebolError } from "../../common/utils";
import { MonedaServices } from "../../../domain/moneda/services";
import { HttpStatusCode, AppTypeError } from "../../common/constants";
import { MonedaDTO } from "../../../domain/moneda/model";
import { MonedaRepositoryMock } from "../../../infrastructure/repository/persistence/moneda.mock";
import { MonedaContract } from "../../../domain/moneda/contract";
import logger = require("../../../infrastructure/config/logger");


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
      monedaDto.result = await this.monedaServices.obtenerListaDeMonedas();
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
      if (!esNumero(req.params.id)) throw new TrebolError('Parametro id no puede ser string', AppTypeError.APPLICATION);
      const monedaId = parseInt(req.params.id);
      monedaDto.result = await this.monedaServices.obtenerMonedaEspecifica(monedaId);
      res.status(HttpStatusCode.OK).send(monedaDto);
    } catch ( e ) {
      monedaDto.error = e.message;      
      logger.error(e.message);
      res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send(monedaDto);
    }
    
  }


}
