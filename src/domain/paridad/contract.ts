import { Paridad } from "../../infrastructure/repository/entity/paridad";

export interface ParidadServices {

    getParidadMoneda(monedaId : number): Promise<Paridad>

    getListaParidades(): Promise<Paridad[]>;

}
