# Verificar vigencia del token

Es posible verificar la vigencia del token que permitirá el acceso al resto de
los servicios del api.  
Para esto se envía el token mediante el `Header`:`Authorization` de la petición
HTTP.

## Obtener vigencia del token

<!--NotificacionPath method="GET" path="" :auth=true /-->

Se debe enviar por cabecera el token que se obtiene de [Generación de Token](/executive/auth/post.html#autentificacion) en el campo de `Authorization`.

## Ejemplo de respuesta de token vigente

Donde se reciben los siguientes campos de verificación:

|Campo|Descripción|
|--|--|
|`business`|ID del proyecto|
|`proyecto`|Nombre del proyecto|
|`creacion`|Fecha y hora de creación del token|
|`expiracion`|Fecha y hora de expiración del token|

```json
{
	"business": "5a2ac49cbbbce212f885529c",
	"proyecto": "upconta",
	"creacion": "2022-07-19T02:22:39.118Z",
	"expiracion": "2032-07-19T02:22:39.114Z"
}
```

## Ejemplo de respuesta de token vencido

```json
{
    "code": "UnauthorizedError",
    "message": "El token ha expirado",
    "typeCode": "TokenExpired"
}
```