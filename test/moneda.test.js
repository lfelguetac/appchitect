/* eslint-disable no-undef */
require('dotenv').config();
const request = require("request-promise-native");

const API_PATH = process.env.DOMAIN_PATH + process.env.BASE_PATH;


describe("probamos recurso moneda", () => {
    
    let parametroMonedaId = 0;

    it('valida que venga array de recursos moneda', async () =>{
        const response = await request.get(API_PATH + '/moneda');
        const dataParsed = JSON.parse(response);
        parametroMonedaId = dataParsed.result[0].CODIGO;

        expect( dataParsed.result).toBeDefined();
        expect( Array.isArray(dataParsed.result) ).toBe(true);
        
    });


    it('valida recuperar recurso especifico moneda', async () => {
        const response = await request.get(API_PATH + '/moneda/' + parametroMonedaId);
        const dataParsed = JSON.parse(response);

        expect( dataParsed.result).toBeDefined();
        expect( dataParsed.error ).toBeUndefined();
    });

});


