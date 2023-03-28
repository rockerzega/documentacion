# Notificaciones

En esta sección se describe el proceso para generar las notificaciones dentro del aplicativo sean estas notificaciones generales o específicas.

## Funciones

Estas son las funciones que se encuentran integradas en la actual versión.

- [Creación de notificación general](#notificación-general).
- [Creación de notificación específica](#notificación-específica).
- [Actualizar notificaciones](#actualizar-notificaciones).
- [Consultar notificaciones](#consultar-notificaciones).
- [Consultar notificación específica](#consultar-notificación-específica).
- [Consultar opciones de notificación](#consultar-opciones-de-notificación).
- [Eliminar todas las notificaciones](#eliminar-notificaciones).
- [Eliminar notificación específica](#eliminar-notificación-específica).
- [Eliminar notificación específica por argumentos](#eliminar-notificación-específica-mediante-argumentos).



## Notificación General

`POST /notificaciones`

Esta función permite crear al usuario una notificación general dentro del aplicativo.

### Parametros para enviar notificaciones generales

- @param {string} `proyecto` - nombre del proyecto al que se quiere enviar la notificación.
- @param {bolean} `eliminar` - opción de eliminar notificación en cualquier momento. (este campo debe ir estrictamente en `false`)
- @param {string} `args` - descripción específica de la notificación.
- @param {date} `fechaInicio` - fecha inicio de la notificación.
- @param {date} `fechaFin` - fecha fin de la notificación.

>los `Headers` de petición deben contar con:
>>Content-Type `application/json`
 >
>>Authorization `token`

Para crear la notificación se debe enviar en el `body` de la petición lo siguiente:

- El `proyecto` constituye el nombre específico del proyecto que se va a enviar la notificación.
- El `eliminar` constituye la opción de eliminar la notificación sin un determinado tiempo.
- El `args` constituye la descripción o parametros específicos de la notificación.
- La `fechaInicio` constituye la fecha de inicio de la notificación.
  > dentro de una notificación general se vuelve un campo obligatorio.
- La `fechaFin` constituye la fecha que finallizará la notificación.
  > dentro de una notificación general se     vuelve un campo obligatorio.

| Campo      | Nombre                | Tipo      | Oblig. |
| ---------- | --------------------- | --------- | ------ |
| `proyecto` | nombre de proyecto    | `string`  | Si     |
|  `eliminar`| opcion de notificación| `bolean`  | Si     |
|  `args`    | descripcion de notificación| `string`| Si  |
|  `fechaInicio`|fecha inicio notificación| `date`| Si    |
|  `fechaFin`    | fecha fin notificación| `date` | Si    |



**Ejemplo de Petición**

```json
{
	"proyecto": "upconta",
	"eliminar": false,
	"args": "{\"modulo\":\"continuidad\",\"titulo\":\"Mantenimiento 2\",\"mensaje\":\"Se realizará mantenimiento a la plataforma el fin de semana\"}",
	"fechaInicio": "2022-07-22T04:59:59.999Z",
	"fechaFin": "2022-08-30T05:00:00.999Z"
}
```

**Ejemplo de Respuesta**

```text
"success"
```


## Notificación Específica

`POST /notificaciones`

Esta función permite crear al usuario una notificación específica dentro del aplicativo.

### Parametros para enviar notificaciones a una o más empresas específicas

- @param [{string}] `business` - id de la empresa o empresas específicas que se quiere enviar la notificación.
- @param {string} `proyecto` - nombre del proyecto al que se quiere enviar la notificación.
- @param {bolean} `eliminar` - opción de eliminar notificación en cualquier momento. (este campo debe ir estrictamente en `true`)
- @param {string} `args` - descripción específica de la notificación donde llevará 3 argumentos principales 
1) "modulo"  a donde va dirigido la notificación. 
2) "titulo"  título de la notificación.
3) "mensaje" mensaje de notificación para el receptor.

>*Estos parámetros pueden varias de empresa a empresa*.

>los `Headers` de petición deben contar con:
>>Content-Type `application/json`
 >
>>Authorization `token`

Para crear la notificación se debe enviar en el `body` de la petición lo siguiente:

- El `business` constituye el id de la o las empresas que se desea enviar la notificación.
 > dentro de una notificación específica se  vuelve un campo obligatorio.
- El `proyecto` constituye el nombre específico del proyecto que se va a enviar la notificación.
- El `eliminar` constituye la opción de eliminar la notificación sin un determinado tiempo.
- El `args` constituye la descripción o parametros específicos de la notificación.

| Campo      | Nombre                | Tipo      | Oblig. |
| ---------- | --------------------- | --------- | ------ |
| `business` | id de Empresas        | [`string`]| Si     |
|  `proyecto`| nombre de proyecto    | `string`  | Si     |
| `eliminar` | opción de notificación| `bolean`  | Si     |
|   `args`   | descripción de notificación| `string`| Si  |


**Ejemplo de Petición**
**Ejemplo de Petición**

```json
{
	"business": [
		"5a2ac49cbbbce212f885529c",
		"5be305eaf1df82001243978e",
		"5c702be3658772001c7565ce"
	],
	"proyecto": "upconta",
	"eliminar": true,
	"args": { "modulo": "continuidad",
		  "titulo": "Correccion 3",
		  "mensaje": "Se realizará mantenimiento a la plataforma el fin de semana"}
}
```

**Ejemplo de Respuesta**

```text
"success"
```

## Actualizar notificaciones

`PUT /notificaciones/:id`

Esta función permite editar al usuario una notificación creada dentro del aplicativo.


>los `Headers` de petición deben contar con:
>>Content-Type `application/json`
 >
>>Authorization `token`

Para editar una notificación se debe enviar en el `body` la petición con el parámetro que se desea cambiar.



Este es un ejemplo de parámetro que se va a modificar:
- @param {string} `revisado` - hace referencia al estado de la notificación.

( `Nota:` pueden ir más parámetros según lo que se desea modificar.)


| Campo      | Nombre                | Tipo      | Oblig. |
| ---------- | --------------------- | --------- | ------ |
| `revisado` | estado de la notificación| `bolean`|si |

**Ejemplo de Petición (cambio de estado)**

```json
{
	"revisado": true
}
```
**Ejemplo de Respuesta**

```text
"El registro se actualizó correctamente"
```


## Consultar notificaciones

`GET /notificaciones`

Esta función permite visualizar al usuario todas las notificación creadas dentro del aplicativo.

- @returns [{Record<string, any>}]

>los `Headers` de petición deben contar con:
>>Content-Type `application/json`
 >
>>Authorization `token` 


**Ejemplo de Respuesta con token válido**

```json
{
	"data": [
		{
			"_id": "641dc7ad07fb8c03868cbe60",
			"proyecto": "upconta",
			"eliminar": false,
			"args": "\"{\\\"modulo\\\":\\\"continuidad\\\",\\\"titulo\\\":\\\"Mantenimiento 2\\\",\\\"mensaje\\\":\\\"Se realizará mantenimiento a la plataforma el fin de semana\\\"}\"",
			"revisado": false,
			"fechaInicio": "2022-07-22T04:59:59.999Z",
			"fechaFin": "2022-08-30T05:00:00.999Z",
			"createdAt": "2023-03-24T15:54:21.488Z",
			"updatedAt": "2023-03-24T15:54:21.488Z",
			"__v": 0
		},
		{
			"_id": "6411d8a6b8f222afa072849f",
			"business": "5be305eaf1df82001243978e",
			"proyecto": "upconta",
			"eliminar": true,
			"args": "{\"modulo\":\"continuidad\",\"titulo\":\"Saludo\",\"mensaje\":\"Saludo usuario\"}",
			"revisado": false,
			"createdAt": "2023-03-15T14:39:34.964Z",
			"updatedAt": "2023-03-15T14:39:34.964Z",
			"__v": 0
		},
		{
			"_id": "640b92ad275dc6af85d4a267",
			"proyecto": "upconta",
			"eliminar": false,
			"args": "{\"modulo\":\"continuidad\",\"titulo\":\"Notificacion general\",\"mensaje\":\"General desde notificaciones\"}",
			"revisado": false,
			"fechaInicio": "2023-03-10T20:27:07.404Z",
			"fechaFin": "2023-03-22T20:27:12.039Z",
			"createdAt": "2023-03-10T20:27:25.707Z",
			"updatedAt": "2023-03-10T20:28:48.759Z",
			"__v": 0
		}
	],
	"total": 3,
	"page": 1
}
```

## Consultar notificación específica

`GET /notificaciones/:id`

Esta función permite visualizar al usuario una notificación específica creada dentro del aplicativo.

- @returns {Record<string, any>}

>los `Headers` de petición deben contar con:
>>Content-Type `application/json`
 >
>>Authorization `token`


**Ejemplo de Respuesta con token válido**

```json
        {
			"_id": "6411d8a6b8f222afa072849f",
			"business": "5be305eaf1df82001243978e",
			"proyecto": "upconta",
			"eliminar": true,
			"args":"{\"modulo\":\"continuidad\",\"titulo\":\"Saludo\",\"mensaje\":\"Saludo usuario\"}",
			"revisado": false,
			"createdAt": "2023-03-15T14:39:34.964Z",
			"updatedAt": "2023-03-15T14:39:34.964Z",
			"__v": 0
		}
```


## Consultar opciones de notificación 

`GET /notificaciones/get-options`

Esta función permite visualizar
las opciones que tienen para rellenar campos
dentro de notificaciones, esta petición no contiene `body`.
>los `Headers` deben contar con:

>>Authorization `token` 
 >
>>Content-Type `application/json` 



**Ejemplo de Respuesta con token válido**

```json
       {
	"proyectos": [
		{
			"value": "upconta",
			"label": "UpConta"
		},
		{
			"value": "pdf-ecuador",
			"label": "PDF Ecuador"
		},
		{
			"value": "firmas-ec",
			"label": "Firmas Electrónicas"
		}
	],
	"modulos": [
		{
			"value": "continuidad",
			"label": "Continuidad"
		},
		{
			"value": "restaurantes",
			"label": "Restaurantes"
		},
		{
			"value": "activos-fijos",
			"label": "Activos Fijos"
		}
	]
}
```





## Eliminar notificaciones

`DEL /notificaciones`

Esta función permite eliminar al usuario todas las notificación creadas. esta petición no contiene `body`.

Para eliminar todas las notificaciones basta con tener los `Headers`.

>los `Headers` de petición deben contar con:
>>Content-Type `application/json`
 >
>>Authorization `token` 


**Ejemplo de Respuesta al eliminar todas las notificaciones**


```text
"eliminado correctmente"

```





## Eliminar notificación específica

`DEL /notificaciones/:id`

Esta función permite al usuario eliminar una notificación específica creada por medio del id, esta petición no contiene `body`.

Para eliminar una notificación específica basta con ingresar el id de la notificación y contar con los `Headers`.

>los `Headers` de petición deben contar con:
>>Content-Type `application/json`
 >
>>Authorization `token`


**Ejemplo de Respuesta al eliminar una notificación específica**


```text
"Se elimino exitosamente"
```


### Eliminar notificación específica (mediante argumentos)

`POST /notificaciones//eliminar-notificaciones`

Esta función permite al usuario eliminar una notificación específica buscando en los argumentos de la notificación.

##### Parametros para buscar argumentos de eliminación

- @param [{string}] `business` - id de la empresa o empresas específicas que se quiere buscar el argumento.
- @param {string} `proyecto` - nombre del proyecto al que se quiere buscar el argumento.

Para eliminar una notificación específica mediante los argumentos de debe enviar por el `body` los siguientes parametros que son obligatorios.

- El `business` constituye el id de la o las empresas que se desea enviar la notificación.

- El `proyecto` constituye el nombre específico del proyecto que se va a enviar la notificación.

>la `Query` de petición deben contar con:
 >> `args` es obligatoria y esta debe contener un texto con in identificador para la busqueda de la notificación.

>los `Headers` de petición deben contar con:
>>Content-Type `application/json`
 >
>>Authorization `token`


**Ejemplo de Respuesta al eliminar una notificación específica**


```text
"Se elimino exitosamente"
```





