export function errorFormated( error ) {
    return { error: error.message }
}

export function esNumero( num ){
    return !isNaN( num )
  }

export class DTO {
    result: [] | {};
    error: string;
};
