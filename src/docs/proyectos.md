# Proyectos

En esta sección se describe el proceso para crear proyectos dentro del aplicativo de notificaciones.

## Funciones

Estas son las funciones que se encuentran integradas en la actual versión.

- [Crear proyecto](#crear-proyecto).
- [Consultar todos los proyectos](#consultar-proyectos).
- [Consultar proyecto específico](#consultar-proyecto-específico).
- [Actualizar proyecto](#actualizar-proyecto).
- [Consultar opciones de proyecto](#consultar-opciones-de-proyecto).
- [Eliminar proyecto](#eliminar-proyecto).





## Crear proyecto

`POST /proyectos`

Esta función permite crear al usuario un nuevo proyecto dentro del aplicativo notificaciones.

### Parámetros para crear proyectos

- @param {string} `proyecto` - nombre del proyecto en general que se va a crear.
- @param {string} `nombre` - nombre interno del proyecto.
- @param {string} `usuario` - nombre de usuario.
- @param {string} `password` - contraseña de usuario.
- @param {string} `descripcion` - breve descripción del proyecto.

>los `Headers` de petición deben contar con:
>>Content-Type `application/json`
 >
>>Authorization `token` 


Para crear los `proyectos` se debe enviar por el `body` de la petición lo siguiente:

- El `proyecto` constituye el nombre general del proyecto que se va a crear.
- El `nombre` constituye el nombre interno que llevará el proyecto para hacer refrencia dentro el aplicativo.
- El `usuario` constituye el usuario que tendrá acceso al proyecto.
- El `password` constituye la contraseña para ingresar al proyecto.
- El `descripcion` constituye una descripción de lo que realizará el proyecto.

| Campo      | Nombre                | Tipo      | Oblig.   |
| ---------- | --------------------- | --------- | ---------|
| `proyecto` | nombre de proyecto    | `string`  | Si       |
|  `nombre`  | nombre interno        | `string`  | Si       |
|  `usuario` |usuario de acceso al proyecto| `string`| Si   |
|  `password`|contraseña de acceso al proyecto| `string`|Si |
|  `descripcion` | fecha fin notificación| `string` | Si    |



**Ejemplo de Petición**

```json
{
	"proyecto":"firmas electronicas",
	"nombre":"firmas-ec",
	"usuario":"conexions",
	"password":"12345678",
	"descripcion":"proyecto que gestiona frimas electronicas"
}
```

**Ejemplo de Respuesta**

```json
{
	"proyecto": "firmas electronicas",
	"nombre": "firmas-ec",
	"usuario": "conexions",
	"password": "12345678",
	"descripcion": "proyecto que gestiona frimas electronicas",
	"_id": "642308a4bdfeb3d3522b4026",
	"createdAt": "2023-03-28T15:32:53.067Z",
	"updatedAt": "2023-03-28T15:32:53.067Z",
	"__v": 0
}
```

## Consultar proyectos

`GET /proyectos`

Esta función permite consultar al usuario todos los proyectos creados dentro del aplicativo notificaciones.

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
			"_id": "642308a4bdfeb3d3522b4026",
			"proyecto": "firmas electronicas",
			"nombre": "firmas-ec",
			"usuario": "conexions",
			"password": "12345678",
			"descripcion": "proyecto que gestiona frimas electronicas",
			"createdAt": "2023-03-28T15:32:53.067Z",
			"updatedAt": "2023-03-28T15:32:53.067Z",
			"__v": 0
		},
		{
			"_id": "6422fa662572627159d99259",
			"proyecto": "UpConta Ecuador",
			"nombre": "upconta",
			"usuario": "desarrollador",
			"password": "IT2rthANe4",
			"descripcion": "Aplicativo de contabilidad",
			"createdAt": "2023-03-28T14:32:07.079Z",
			"updatedAt": "2023-03-28T14:32:07.079Z",
			"__v": 0
		}
	],
	"total": 2,
	"page": 1
}
	
```


## Consultar proyecto específico

`GET /proyectos/:id`

Esta función permite consultar al usuario un proyecto específico creado dentro del aplicativo notificaciones.

- @returns [{Record<string, any>}]

>los `Headers` de petición deben contar con:
>>Content-Type `application/json`
 >
>>Authorization `token`

**Ejemplo de Respuesta con token válido**

```json
{
	"_id": "642308a4bdfeb3d3522b4026",
	"proyecto": "firmas electronicas",
	"nombre": "firmas-ec",
	"usuario": "conexions",
	"password": "12345678",
	"descripcion": "proyecto que gestiona frimas electronicas",
	"createdAt": "2023-03-28T15:32:53.067Z",
	"updatedAt": "2023-03-28T15:32:53.067Z",
	"__v": 0
}
	
```

# Actualizar proyecto

`PUT /proyectos/:id`

Esta función permite editar al usuario un proyecto creado dentro del aplicativo notificaciones.

>los `Headers` de petición deben contar con:
>>Content-Type `application/json`
 >
>>Authorization `token`


Para editar un proyecto se debe enviar por el `body` la petición con el parámetro que se desea cambiar.

Este es un ejemplo del parámetro que se va a modificar:
- @param {string} `proyecto` - hace referencia al nombre del proyecto en general.

( `Nota:` pueden ir más parámetros según lo que se desea modificar.)


| Campo      | Nombre                | Tipo      | Oblig. |
| ---------- | --------------------- | --------- | ------ |
| `proyecto` | nombre del proyecto en general| `string`|si|



```json
{
	"proyecto": "Firmas ElectrónicasV2"
}
```
**Ejemplo de Respuesta**

```text
"El registro se actualizó correctamente"
```

## Consultar opciones de proyecto

`GET /proyectos/get-options`

Esta función permite visualizar
las opciones que  se tiene para rellenar campos
dentro del proyecto, esta petición no contiene `body`.

>los `Headers` de petición deben contar con:
>>Content-Type `application/json`
 >
>>Authorization `token`


**Ejemplo de Respuesta con token válido**

```json
       {
	"proyectos": [
		{
			"value": "upconta",
			"label": "UpConta Ecuador"
		},
		{
			"value": "firmas-ec",
			"label": "Firmas ElectrónicasV2"
		}
	]
}
```


## Eliminar proyecto

`DEL /proyectos/:id`

Esta función permite eliminar al usuario un proyecto específico creado dentro de la aplicativo notificaciones, esta petición no contiene `body`.

Para eliminar un proyecto específico basta con ingresar el id del proyecto y contar con los `Headers`.

>los `Headers` de petición deben contar con:
>>Content-Type `application/json`
 >
>>Authorization `token`


**Ejemplo de Respuesta**

```text
"Se elimino exitosamente"
```


