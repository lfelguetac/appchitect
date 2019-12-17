export enum AppTypeError {
  APPLICATION = 'APP',
  DOMAIN = 'DOMAIN',
  INFRASTRUCTURE = 'INFRA'
}

export enum HttpStatusCode {

    // Ver más.. https://developer.mozilla.org/es/docs/Web/HTTP/Status

    /**
     * La solicitud ha tenido éxito. El significado de un éxito varía dependiendo del método HTTP:
        GET: El recurso se ha obtenido y se transmite en el cuerpo del mensaje.
        HEAD: Los encabezados de entidad están en el cuerpo del mensaje.
        PUT o POST: El recurso que describe el resultado de la acción se transmite en el cuerpo del mensaje.
     */
    OK = 200,

    /**
     * La solicitud ha tenido éxito y se ha creado un nuevo recurso como resultado de ello. Ésta es típicamente la respuesta enviada después de una petición PUT.
     */
    CREATED = 201,

    /**
     * La solicitud se ha recibido, pero aún no se ha actuado. Es una petición "Sin compromiso", lo que significa que no hay manera en HTTP que permita enviar una respuesta asíncrona que indique el resultado del procesamiento de la solicitud. Está pensado para los casos en que otro proceso o servidor maneja la solicitud, o para el procesamiento por lotes 
     */
    ACCEPTED = 202,

    /**
     * La petición se ha completado con éxito pero su respuesta no tiene ningún contenido, aunque los encabezados pueden ser útiles. El agente de usuario puede actualizar sus encabezados en caché para este recurso con los nuevos valores.
     */
    NO_CONTENT = 204,

    /**
     * Esta respuesta significa que el servidor no pudo interpretar la solicitud dada una sintaxis inválida.
     */
    BAD_REQUEST = 400,  



    /**
     * Es necesario autenticar para obtener la respuesta solicitada. Esta es similar a 403, pero en este caso, autenticación es posible.
     */
    UNAUTHORIZED = 401,

    /**
     * Este código de respuesta está reservado para futuros usos. El objetivo inicial de crear este código fue para ser utilizado en sistemas digitales de pagos. Sin embargo, no está siendo usado actualmente.
     */
    PAYMENT_REQUIRED = 402,

    /**
     * El cliente no posee los permisos necesarios para cierto contenido, por lo que el servidor está rechazando otorgar una respuesta apropiada.
     */
    FORBIDDEN = 403,

    /**
     * El servidor no pudo encontrar el contenido solicitado. Este código de respuesta es uno de los más famosos dada su alta ocurrencia en la web.
     */
    NOT_FOUND = 404,

    /**
     * El método solicitado es conocido por el servidor pero ha sido deshabilitado y no puede ser utilizado. Los dos métodos obligatorios, GET y HEAD, nunca deben ser deshabilitados y no debiesen retornar este código de error.
     */
    METHOD_NOT_ALLOWED = 405,

    /**
     * Esta respuesta es enviada cuando el servidor, despues de aplicar una negociación de contenido servidor-impulsado, no encuentra ningún contenido seguido por la criteria dada por el usuario.
     */
    NOT_ACCEPTABLE = 406,

    /**
     * Esta respuesta es enviada en una conexión inactiva en algunos servidores, incluso sin alguna petición previa por el cliente. Significa que el servidor quiere desconectar esta conexión sin usar. Esta respuesta es muy usada desde algunos navegadores, como Chrome, Firefox 27+, o IE9, usa mecanismos de pre-conexión HTTP para acelerar la navegación. También hay que tener cuenta que algunos servidores simplemente desconectan la conexión sin enviar este mensaje.
     */
    REQUEST_TIMEOUT = 408,

    /**
     * Esta respuesta puede ser enviada cuando una petición tiene conflicto con el estado actual del servidor.
     */
    CONFLIC = 409,

    /**
     * El código de estado 422 (entidad no procesable) significa que el servidor 
   comprende el tipo de contenido de la entidad de solicitud (por lo tanto, un 
   código de estado 415 (tipo de medio no admitido) es inapropiado) y la 
   sintaxis de la entidad de solicitud es correcta (por lo tanto, un 400 (solicitud incorrecta) ) el 
   código de estado es inapropiado) pero no pudo procesar las 
   instrucciones contenidas .
     */
    UNPROCESSABLE_ENTITY = 409,
    



    /**
     * El servidor ha encontrado una situación que no sabe como manejarla.
     */
    INTERNAL_SERVER_ERROR = 500,

    /**
     * El método solicitado no esta soportado por el servidor y no puede ser manejada. Los unicos métodos que los servidores requieren soporte (y por lo tanto no deben retornar este código) son GET y HEAD.
     */
    NOT_IMPLEMENTED = 501,

    /**
     * Esta respuesta de error significa que el servidor, mientras trabaja como una puerta de enlace para obtener una respuesta necesaria para manejar la petición, obtuvo una respuesta inválida.
     */
    BAD_GATEWAY = 502,

    /**
     * El servidor no esta listo para manejar la petición. Causas comunes puede ser que el servidor está caido por mantenimiento o está sobrecargado. Hay que tomar en cuenta que junto con esta respuesta, una página usuario-amigable explicando el problema debe ser enviada. Estas respuestas deben ser usadas para condiciones temporales y el encabezado HTTP Retry-After: debería, si es posible, contener el tiempo estimado antes de la recuperación del servicio. El webmaster debe también cuidar los encabezados relacionados al caché que son enviados junto a esta respuesta, ya que estas respuestas de condicion temporal deben usualmente no estar en el caché.
     */
    SERVICES_UNAVAILABLE = 503,

    /**
     * Esta respuesta de error es dada cuando el servidor está actuando como una puerta de enlace y no puede obtener una respuesta a tiempo.
     */
    GATEWAY_TIMEOUT = 504

}
