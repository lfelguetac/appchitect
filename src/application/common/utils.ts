import { AppTypeError } from "./constants";

export function errorFormated( error ) {
    return { error: error.message };
}

export function esNumero(n) { 
    return !isNaN(parseFloat(n)) && !isNaN(n - 0); 
}

export function keysToLowerCase(obj) {

    if(obj instanceof Array) {
        for (let i in obj) {
            obj[i] = keysToLowerCase(obj[i]);
        }
    }

    if (!isObject(obj)|| typeof(obj) === "string" || typeof(obj) === "number" || typeof(obj) === "boolean") {
        return obj;
    }
    let keys = Object.keys(obj);
    let n = keys.length;
    let lowKey;
    while (n--) {
        let key = keys[n];
        if (key === (lowKey = key.toLowerCase()))
            continue;
        obj[lowKey] = keysToLowerCase(obj[key]);
        delete obj[key];
    }
    return (obj);
}


export function isObject (value) {
    return value && typeof value === 'object' && value.constructor === Object;
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

