# Crear notificación

Para crear una notificacion se requiere un `proyecto` y si posee un
`business` los parametros restantes son opcionales, sin embargo si el
parametro `business` no se coloca, los parametros `fechaInicio` y
`fechaFin` se convierten en obligatorios.

  
Para realizar la petición se neceita un token  que se enviará por el 
`Header`: `Authorization` de la petición HTTP.

## Autentificación

<!--NotificacionPath method="POST" path="" :auth="true" /-->

Para crear la notificación se envia la información por el `body` de
la petición lo siguiente:

- `business`: ID del proyecto toc
- `proyecto`: Proyecto toc
- `args`: opciones requeridas para cada proyecto

|Campo|Nombre|Tipo|Obligatorio|Descripción|
|--|--|--|--|--|
|`business`|ID del proyecto|`String`|No|ID único del operador|
|`proyecto`|Nombre del proyecto|`String`|Si|Proyecto de toc|
|`eliminar`|Se permite eliminar|`Boolean`|Si|Determina si se puede eliminar la notificación|
|`args`|Argumentos|`Object`|No|Argumentos que permiten mostrar notificaciones según el proyecto|
|`fechaInicio`|Fecha inicio|`Date`|No (Si existe business)|Fecha inicial que va a mostrarse la notificación|
|`fechaFin`|Fecha fin|`Date`|No (Si existe business)|Fecha final que va a mostrarse la notificación|

## Ejemplo de petición con business

```json
{
	"business": "5a2ac49cbbbce212f885529c",
	"proyecto": "upconta",
  "eliminar": true,
	"args": {
		"modulo": "continuidad",
		"titulo": "Aviso general",
		"mensaje": "Mensaje emitido para un cliente especifico"
	}
}
```

## Ejemplo de respuesta con business

```json
{
	"business": "5a2ac49cbbbce212f885529c",
	"proyecto": "upconta",
	"eliminar": true,
	"args": "{\"modulo\":\"continuidad\",\"titulo\":\"Aviso general\",\"mensaje\":\"Mensaje emitido para un cliente especifico\"}",
	"revisado": false,
	"_id": "62d4c7e84c2ad72bcafe43df",
	"createdAt": "2022-07-18T02:39:36.664Z",
	"updatedAt": "2022-07-18T02:39:36.664Z",
	"__v": 0
}
```

## Ejemplo de petición sin business

```json
{
	"proyecto": "upconta",
	"eliminar": false,
	"args": {
		"modulo": "continuidad",
		"titulo": "Aviso general",
		"mensaje": "Mensaje emitido para un todos los clientes upconta"
	},
	"fechaInicio": "2022-07-22T04:59:59.999Z",
	"fechaFin": "2022-07-30T05:00:00.999Z"
}
```

## Ejemplo de respuesta sin business

```json
{
	"proyecto": "upconta",
	"eliminar": false,
	"args": "{\"modulo\":\"continuidad\",\"titulo\":\"Aviso general\",\"mensaje\":\"Mensaje emitido para un todos los clientes upconta\"}",
	"revisado": false,
	"fechaInicio": "2022-07-22T04:59:59.999Z",
	"fechaFin": "2022-07-30T05:00:00.999Z",
	"_id": "62d62cee24a7aca3339a73ab",
	"createdAt": "2022-07-19T04:02:54.866Z",
	"updatedAt": "2022-07-19T04:02:54.866Z",
	"__v": 0
}
```

## Ejemplo de respuesta con error

```json
{
	"code": "Internal",
	"message": "ValidationError: eliminar: Path `eliminar` is required."
}
```
