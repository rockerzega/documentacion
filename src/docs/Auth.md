# Login

En esta sección se describe el proceso para generar un token de autorizacion para el uso del aplicativo.

## Funciones

Estas son las funciones que se encuentran integradas en la actual versión.

- [Obtención del token](#obtener-token).
- [Validación del token](#validar-token).

## Obtener Token

`POST /auth/login`

Esta función permite obtener el token para acceder al aplicativo.

- @param {string} `usuario` - contiene el nombre usuario para autenticarse.
- @param {string} `password` - contiene la contraseña para la autenticación.
- @returns {Record<string, any>}

Para obtener un token se debe otorgar por medio del `body` de la petición lo siguiente:

- El `usuario` constituye el nombre de usuario de la entidad a autenticarse.
- El `password` es el password que se requiere para autenticarse.

| Campo      | Nombre            | Tipo     | Oblig. |
| ---------- | ----------------- | -------- | ------ |
| `usuario`  | nombre de usuario | `string` | Si     |
| `password` | contraseña        | `string` | Si     |

**Ejemplo de Petición Válida**

```json
{
	"usuario": "operador2",
	"password": "123"
}
```

**Ejemplo de Respuesta**

```json
{
	"id": "1721944087",
	"nombre": "Alex",
	"admin": true,
	"proyecto": null,
	"token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE3MjE5NDQwODciLCJub21icmUiOiJBbGV4IiwiYWRtaW4iOnRydWUsInByb3llY3RvIjpudWxsLCJkYXRlIjoiMjAyMy0wMS0xNlQxODozNjo0NS44MDRaIiwiZW5kRGF0ZSI6IjIwMjMtMDEtMTdUMTg6MzY6NDUuODAzWiJ9.W4mnUQxaDBpphNQCabPdGtXaOsKNucGOnO1qqYYZ-gA"
}
```

**Ejemplo de Petición no Válida**

```json
{
	"usuario": "operador54",
	"password": "123"
}
```

**Ejemplo de Respuesta**

```json
{
	"code": "NotFoundError",
	"message": "No se encontró el operador: undefined",
	"typeCode": "OperatorNotFound"
}
```

## Validar token

`GET /auth`

Esta función permite determinar la validez del token, para lo cual el token


- @returns {Record<string, any>}

**Ejemplo de Respuesta Válida**

```json
{
	"id": "1721944089",
	"nombre": "Alex",
	"admin": false,
	"proyecto": "upconta",
	"validoDesde": "2022-10-12T16:21:22.173Z",
	"validoHasta": "2022-10-13T16:21:22.173Z",
	"modules": [
		{
			"key": "admin",
			"label": "Administrador",
			"icon": "SolutionOutlined",
			"submodules": [
				{
					"key": "operadores",
					"label": "Operadores",
					"icon": "UsergroupAddOutlined"
				}
			]
		},
		{
			"key": "notificaiones",
			"label": "Notificaciones",
			"icon": "BellOutlined"
		}
	]
}
```

**Ejemplo de Respuesta con token caducado**

```json
{
	"code": "RequestExpired",
	"message": "El token ha expirado"
}
```

**Ejemplo de Respuesta sin Token**

```json
{
	"code": "BadRequest",
	"message": "No se proporcionó el token"
}
```
