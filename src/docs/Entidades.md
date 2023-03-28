# Entidades

En esta sección se describe el proceso para generar un token de autorizacion para el uso del aplicativo.

## Funciones

Estas son las funciones que se encuentran integradas en la actual versión.

- [Creación de la entidad](#crear-entidad).
- [Obtención de entidades](#obtener-entidades).
- [Editar de entidades](#editar-entidades).
- [Obtener entidad](#obtener-entidad).
- [Eliminar entidad](#eliminar-entidad).
- [Contar coincidencias](#conteo-docuementos).
- [Cambiar contraseña](#cambiar-contraseña).
- [Resetear contraseña](#resetear-contraseña).

## Crear entidad

`POST /entidades`

Esta función permite crear el usuario que podrá usar el aplicativo.

- @param {string} `id` - numero de identificacion personal (C.I.)
- @param {string} `nombre` - Nombre de la entidad / operador.
- @param {string} `usuario` - nombre de usuario para iniciar la sesión.
- @param {string} `mail` - correo electronico para el registro de la entidad.
- @param {boolean} `admin` - determina si la entidad va a ser de rol adminsitrador.
- @param {string} `telf` - representa el número de telefono de la entidad / operador.

- @returns {string}

Para crear el usuario se debe enviar en el `body` de la petición lo siguiente:

- El `id` constituye el id personal de la entidad - operador (C.I.)
- El `nombre` es el nombre real de la entidad / operador.
- El `usuario` es el nombre que usara la endidad / operador para inicar sesión.
- El `mail` correo electronico requerido para la creacion de la entidad - operador.
- El `admin` constituye un identificador que determina si la entidad tendrá un rol de de administrador.
- El `telf` constituye el número de telefono de la entidad / operador.


| Campo      | Nombre                | Tipo      | Oblig. |
| ---------- | --------------------- | --------- | ------ |
|    `id`    | C.I. de usuario       | `string`  | Si     |
|  `nombre`  | nombre entidad        | `string`  | Si     |
| `usuario`  | nombre de usuario     | `string`  | Si     |
|   `mail`   | email de entidad      | `string`  | Si     |
|  `admin`   | identificador de rol  | `boolean` | Si     |
|   `telf`   | telf de entidad      | `string`  | No     |

**Ejemplo de Petición**

```json
{
	"id": "1721944090",
	"nombre": "Test Eliminar",
	"usuario": "operador-eliminar",
	"mail": "test@test10.com",
	"admin": true
}
```

**Ejemplo de Respuesta**

```text
"Entidad creada exitosamente"
```

## Obtener entidades
`GET /entidades`

Esta función permite consultar todas las entidades / operadores, para esto es necesario que el usuario tenga el rol de administrador.

- @returns {Record<string, any>}

**Ejemplo de Respuesta con token válido**

```json
{
	"data": [
		{
			"_id": "632dedc3e9df692c02f0a5e6",
			"id": "1721944080",
			"nombre": "Alex",
			"usuario": "operador4",
			"password": "cc206f50dc17edced4d62834ffead5e3",
			"mail": "test@test.com",
			"createdAt": "2022-09-23T17:32:51.649Z",
			"updatedAt": "2022-10-07T23:00:16.997Z",
			"__v": 0,
			"admin": true,
			"telf": "0956784596",
			"proyecto": null
		},
		{
			"_id": "632deca5a58528a383d089de",
			"id": "1721944089",
			"nombre": "Alex",
			"usuario": "operador3",
			"password": "cc206f50dc17edced4d62834ffead5e3",
			"mail": "test@test.com",
			"createdAt": "2022-09-23T17:28:05.397Z",
			"updatedAt": "2022-10-07T02:05:48.267Z",
			"__v": 0,
			"admin": true,
			"telf": "0956127811"
		},
		{
			"_id": "6331c2673de3e7196b4d71e2",
			"id": "1721944087",
			"nombre": "Alex",
			"usuario": "operador2",
			"proyecto": null,
			"password": "cc206f50dc17edced4d62834ffead5e3",
			"mail": "test@test.com",
			"createdAt": "2022-09-26T15:16:56.084Z",
			"updatedAt": "2022-10-07T19:14:34.538Z",
			"__v": 0,
			"admin": true
		},
		{
			"_id": "6341c069d9c22f5a5d3ec9fc",
			"id": "1721944090",
			"nombre": "Test Eliminar",
			"usuario": "operador-eliminar",
			"password": "bf28718eafd420ede0720f58157b27ea",
			"mail": "test@test10.com",
			"admin": true,
			"createdAt": "2022-10-08T18:24:41.256Z",
			"updatedAt": "2022-10-08T18:33:07.114Z",
			"__v": 0
		},
		{
			"_id": "633ca0b20d23504550b91660",
			"id": "1721944081",
			"nombre": "Esteban Semblates",
			"usuario": "EstebanOpr",
			"password": "bf28718eafd420ede0720f58157b27ea",
			"mail": "test@test1.com",
			"admin": true,
			"createdAt": "2022-10-04T21:08:03.019Z",
			"updatedAt": "2022-10-07T19:00:09.991Z",
			"__v": 0,
			"telf": "0989563174",
			"proyecto": null
		}
	],
	"total": 5,
	"page": 1
}
```

**Ejemplo de Respuesta con token operador**

```json
{
	"code": "BadRequest",
	"message": "El recurso al que intenta acceder, no esta disponible para su rol"
}
```

## Obtener Entidad
`GET /entidades/:id`

Esta función permite consultar una entidad / operador, para esto es necesario que el usuario tenga el rol de administrador.

- @returns {Record<string, any>}

**Ejemplo de Respuesta con token válido**

```json
{
	"_id": "632dedc3e9df692c02f0a5e6",
	"id": "1721944080",
	"nombre": "Alex",
	"usuario": "operador4",
	"mail": "test@test.com",
	"admin": true
}
```

**Ejemplo de Respuesta con token operador**

```json
{
	"code": "BadRequest",
	"message": "El recurso al que intenta acceder, no esta disponible para su rol"
}
```

## Editar entidades

`PUT /entidades:id`

Esta función permite crear el usuario que podrá usar el aplicativo.

- @param {string} `id` - numero de identificacion personal (C.I.)
- @param {string} `nombre` - Nombre de la entidad / operador.
- @param {string} `usuario` - nombre de usuario para iniciar la sesión.
- @param {string} `mail` - correo electronico para el registro de la entidad.
- @param {boolean} `admin` - determina si la entidad va a ser de rol adminsitrador.
- @returns {string}

Para crear el usuario se debe enviar en el `body` de la petición lo siguiente:

- El `id` constituye el id personal de la entidad - operador (C.I.)
- El `nombre` es el nombre real de la entidad / operador.
- El `usuario` es el nombre que usara la endidad / operador para inicar sesión.
- El `mail` correo electronico requerido para la creacion de la entidad - operador.
- El `admin` constituye un identificador que determina si la entidad tendrá un rol de de administrador.


| Campo      | Nombre                | Tipo      | Oblig. |
| ---------- | --------------------- | --------- | ------ |
|    `id`    | C.I. de usuario       | `string`  | No     |
|  `nombre`  | nombre entidad        | `string`  | No     |
| `usuario`  | nombre de usuario     | `string`  | No     |
|   `mail`   | email de entidad      | `string`  | No     |
|  `admin`   | identificador de rol  | `boolean` | No     |
|   `telf`   | telf de entidad       | `string`  | No     |

**Ejemplo de peticion correcta**

```json
{
	"nombre": "Juan Padilla"
}
```

**Ejemplo respuesta correcta**

```text
"El registro se actualizó correctamente"
```

## Eliminar Entidad
`DEL /entidades/:id`

Esta función permite eliminar una entidad / operador, para esto es necesario que el usuario tenga el rol de administrador.

- @returns {Record<string, any>}

**Ejemplo de Respuesta con token válido**

```text
"Se elimino exitosamente"
```

## Conteo documentos

`HEAD /entidades/:id`

Esta funcion permite obtener el total de documentos con determinado id, para evitar la duplicidad en la crecacion de entidades / operadores

## Cambiar contraseña
`POST /entidades/change-password`

Esta función permite crear el usuario que podrá usar el aplicativo.

- @param {string} `password` - reperesenta la contraseña actual de la entidad /operador
- @param {string} `newPassword` - representa la nueva contraseña de la entidad / operador.

- @returns {string}

Para cambiar la contraseña `body` de la petición lo siguiente:

- El `password` constituye la contraseña de la entidad - operador (actual)
- El `newPassword` constituye la nueva contraseña de la entidad / operador.

| Campo         | Nombre            | Tipo      | Oblig. |
| ------------- | ----------------- | --------- | ------ |
|   `password`  | contraseña actual | `string`  | Si     |
| `newPassword` | contraseña nueva  | `string`  | Si     |

**Ejemplo de Petición**

```json
{
	"password": "123",
	"newPassword": "nuevoPass123"
}
```

**Ejemplo de Respuesta**

```text
"Cambio de contraseña realizado exitosamente"
```

## Resetear contraseña
`POST /entidades/reset/:id`

Esta función permite crear al administrador reiniciar .

- @param {string} `password` - reperesenta la contraseña nueva temporal que el administrador asigna a la entidad / operador.

- @returns {string}

Para resetear la contraseña `body` de la petición lo siguiente:

- El `password` constituye la contraseña que el adminitrador le otorga a la entidad / operador.

| Campo         | Nombre            | Tipo      | Oblig. |
| ------------- | ----------------- | --------- | ------ |
|   `password`  | contraseña actual | `string`  | Si     |

**Ejemplo de Petición**

```json
{
	"password": "123",
}
```

**Ejemplo de Respuesta**

```text
"Se ha reseteado la contraseña"
```
