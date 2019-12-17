import { AppTypeError } from "./constants";

export function errorFormated( error ) {
    return { error: error.message };
}

export function esNumero( num ){
    return !isNaN( num );
}


export class TrebolError extends Error {
    code: string;
    constructor(message: string, codeError?: AppTypeError){
        super();
        this.code = codeError;
        this.message = message;
        // if (this.name === undefined || this.name === 'Error') this.name = name; 
    }
}

