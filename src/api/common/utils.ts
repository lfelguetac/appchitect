export function errorFormated( error ) {
    return { error: error.message }
}

export function esNumero( num ){
    return !isNaN( num )
  }
