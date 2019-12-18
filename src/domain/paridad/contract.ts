import { Paridad } from "../../infrastructure/repository/entity/paridad";

export interface ParidadContract {

    obtenerParidadMoneda(monedaId : number): Promise<Paridad>;

    obtenerListaDeParidades(): Promise<Paridad[]>;

}
