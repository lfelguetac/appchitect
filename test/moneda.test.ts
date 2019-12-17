import { MonedaContract } from '../src/domain/moneda/contract';
import { MonedaServices } from '../src/domain/moneda/services';
import { createConnection, getConnection } from 'typeorm';
import { Moneda } from '../src/infrastructure/repository/entity/moneda';
import { MonedaRepoContract } from '../src/infrastructure/repository/interfaces/moneda';

describe("probamos recurso moneda", () => {

    it ('Valida metodo obtenerListaDeMonedas() devuelve lista - mockeado', async () => {
        const monedaServices: MonedaContract = new MonedaServices(new MonedaRepositoryMock);
        const listaMonedas = await monedaServices.obtenerListaDeMonedas();
        expect(Array.isArray(listaMonedas)).toBe(true);
    });

    it ('Valida metodo obtenerMonedaEspecifica() devuelve objeto data - mockeado', async () => {
        const monedaServices: MonedaContract = new MonedaServices(new MonedaRepositoryMock);
        const listaMonedas = await monedaServices.obtenerMonedaEspecifica(123);
        expect(Array.isArray(listaMonedas)).toBe(false);
    });


    it ('Valida metodo obtenerMonedaEspecifica() devuelve objeto data - metodo real', async () => {
        await createConnection();

        const monedaServices: MonedaContract = new MonedaServices();
        const listaMonedas: Moneda[] = await monedaServices.obtenerListaDeMonedas();
        expect(Array.isArray(listaMonedas)).toBe(true);
    });


    it ('Valida metodo obtenerListaDeMonedas() devuelve un registro - metodo real', async () => {
        const monedaServices: MonedaContract = new MonedaServices();
        const listaMonedas: Moneda = await monedaServices.obtenerMonedaEspecifica(999);
        expect(Array.isArray(listaMonedas)).toBe(false);
    });


    it ('verifica que haya una conexion de typeorm activa', async () => {
        expect((getConnection().isConnected)).toBe(true);
    });



});




export class MonedaRepositoryMock implements MonedaRepoContract {

    async traeMonedas(): Promise<Moneda[]> {
        const mock: Moneda[] = [{codigo : 123, descripcion: 'euro', simbolo: '$ ', decimales: 1}];
        return mock;
    }


    async getMonedaById(monedaId: number): Promise<Moneda> {
        const mock: Moneda = {codigo : 123, descripcion: 'euro', simbolo: '$ ', decimales: 1};
        return mock;

    }

}  