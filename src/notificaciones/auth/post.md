# Generación del token

Para autentificarse se otorgará un `username` y `password` con los cuales se puede
generar un token válido. 


## Autentificación

<!--NotificacionPath method="POST" path="" :auth="true" /-->

Para iniciar sesión de un se debe se debe otorgar por medio del `body` de la petición lo siguiente:

- `business`: ID del proyecto toc
- `proyecto`: Proyecto toc
- `password`: Contraseña del proyecto

|Campo|Nombre|Tipo|Obligatorio|Descripción|
|--|--|--|--|--|
|`business`|ID del proyecto|`String`|Si|ID único del proyecto|
|`proyecto`|Nombre del proyecto|`String`|Si|Usuario único del proyecto|
|`password`|Contraseña|`String`|Si|Contraseña del proyecto|

**Importante:** A partir de aquí todas las peticiones HTTP deben tener un `Header` de `Authorization` junto con el token, resultado de la petición.

## Ejemplo de petición 

```json
{
	"business": "5a2ac49cbbbce212f885529c",
	"proyecto": "upconta",
	"password": "1234"
}
```

## Ejemplo de respuesta token

```json
"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJidXNpbmVzcyI6IjVhMmFjNDljYmJiY2UyMTJmODg1NTI5YyIsInByb3llY3RvIjoidXBjb250YSIsImNyZWFjaW9uIjoiMjAyMi0wNy0xOVQwMjoyMjozOS4xMThaIiwiZXhwaXJhY2lvbiI6IjIwMzItMDctMTlUMDI6MjI6MzkuMTE0WiJ9.J-MJ_72FD0fK4etILB6bxK8-rukxbZxNspXDUE3_N4w"
```



Este token permitirá el acceso al proyecto mediante el `Header`: `Authorization`
de la petición HTTP.

Se puede poner parametros para el tiempo de expiración dentro de la query `http://127.0.0.1:2999/auth?`, por ejemplo se añade `withoutExpiration=true` que genera un token sin caducidad.
## Ejemplo de la query
```json
{
	http://127.0.0.1:2999/auth?withoutExpiration=true
}
```
## Respuesta de  verificación


```json
{
	"business": "63126da7a2be69b68452bae0",
	"creacion": "2022-09-07T15:54:47.631Z",
	"proyecto": "pdf-ecuador"
	
}
```
- podemos observar que no tiene tiempo de expiración.

 Añadiendo `="año de expiración"` genera un token con un numero de años determinado y si se envía `sin query` se crea por defecto un token con caducidad de 2 años.

## Ejemplo 2 de la query
```json
{
	http://127.0.0.1:2999/auth?withoutExpiration=4
}
```
## Respuesta de  verificación


```json
{
	"business": "63126da7a2be69b68452bae0",
	"creacion": "2022-09-07T16:03:15.518Z",
	"proyecto": "pdf-ecuador",
	"expiracion": "2026-09-07T16:03:15.518Z"
	
}
```
- podemos observar que el tiempo de expiración esta para 4 años.




