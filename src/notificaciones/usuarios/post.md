# Generación del token

Para autentificarse se otorgará un `username` y `password` con los cuales se puede
generar un token válido por 10 años.  
Este token permitirá el acceso al proyecto mediante el `Header`: `Authorization`
de la petición HTTP.

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

## Ejemplo de respuesta

```json
"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJidXNpbmVzcyI6IjVhMmFjNDljYmJiY2UyMTJmODg1NTI5YyIsInByb3llY3RvIjoidXBjb250YSIsImNyZWFjaW9uIjoiMjAyMi0wNy0xOVQwMjoyMjozOS4xMThaIiwiZXhwaXJhY2lvbiI6IjIwMzItMDctMTlUMDI6MjI6MzkuMTE0WiJ9.J-MJ_72FD0fK4etILB6bxK8-rukxbZxNspXDUE3_N4w"
```
