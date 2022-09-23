# Crear entidad

Para crear una entidad se requiere los siguientes datos de usuario: `id`, `nombre` ,`usuario` , `proyecto`, `password` y un `mail` de forma obligatoria.

Sin embargo el campo `telefono` es de forma opcional.
El `usuario` y `contraseña` ahora son denominados como credenciales de acceso.


## Descripción de datos
|Campo|Nombre|Tipo|Obligatorio|Descripción|
|--|--|--|--|--|
|`id`|ID del usuario|`String`|Si|ID único del usuario|
|`nombre`|Nombre del usuario|`String`|Si|Nombre de usuario que se registrará en la BD|
|`usuario`|Identificador del usuario|`String`|Si|Credencial de acceso para cada usuario|
|`proyecto`|Nombre del proyecto|`String`|Si|Proyecto al que pertenece el usuario|
|`password`|Contraseña del usuario|`String`|Si|Contraseña de acceso creada por cada usuario|
|`mail`|Correo electrónico del usuario|`String`|Si|Correo del usuario para el envío de información|
|`telefono`|Contacto del usuario|`String`|No|Contacto del usuario en caso de ser necesario|

## Creacion de usuario

El `id`, `nombre` ,`usuario` , `password`, `mail` y `telefono` si es el caso se envian en formato `JSON` en el `body` de la siguiente petición:
  - `[ POST ] ${endpoint}/crear`
  
Que posteriormente nos retorna un `mensaje` como respuesta.

## Ejemplo de petición 
  - Así se envian las datos de usuario hacia la base de datos.

```json
{
	"id": "1721944088",
	"nombre": "Alex",
	"usuario": "operador1",
    "proyecto":"upconta",
	"password": "123",
	"mail": "test@test.com"
	
}
```
  - En los 'Header' de la petición se envía: 
  

```json

   'Content-Type' : 'application/json'

```

## Ejemplo de respuesta 
- Una vez realizada la petición, esta responderá un `String` como mensaje.

```json

	"Entidad creada exitosamente"

```

