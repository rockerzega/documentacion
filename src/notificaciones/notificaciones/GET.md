# Eliminar notificación

Para la eliminación de una notificación se requiere tener creado un proyecto con su respectivo `${token}`.Se envía la toda la información del proyecto por el `body` de la petición de la siguiente manera:

- `business`: ID del proyecto toc
- `proyecto`: Proyecto toc
- `eliminar`: opcion de elimnar la notificación 

|Campo|Nombre|Tipo|Obligatorio|Descripción|
|--|--|--|--|--|
|`business`|ID del proyecto|`String`|Si|ID único del operador|
|`proyecto`|Nombre del proyecto|`String`|Si|Proyecto de toc|
|`eliminar`|Se permite eliminar|`Boolean`|Si|Determina si se puede eliminar la notificación|

## Petición de eliminación

Para realizar la petición de `eliminación` se necesita un `${token}` también un `application/json` que se enviará por el `Header`: en el apartado `Content-Type` y `Authorization` en la petición HTTP.

- `[POST] ${endpoint}/notificaciones/eliminar-notificaciones`
  
Que posteriormente nos retorna como `respuesta` un valor tipo `String`.
### Ejemplo de petición 

La petición deberá contener la parte anteriormente descritas en su `body`, como por ejemplo se detalla en el siguiente `JSON`:

```json
{
	"business": "5a2ac49cbbbce212f885529c",
	"proyecto": "upconta",
    "eliminar": false,
	
}
```

Es importante que los `Headers` contengan los valores de `Content-Type` y `Authorization` de la siguente manera:

```json

    "Content-Type": "application/json"
    "Authorization": ${token}
	
```

Además también es importante que en el `Query` contenga el valor `args` de la siguente manera:

```json

     "args": "id"
  

```

Como `respuesta` de la petición obtendremos lo siguiente:

```json

    "Eliminado correctamente"
  

```


 ## Eliminar notificaciones vencidas 


Para la eliminación de una petición vencida se requiere tener un `${token}` de proyecto.
 
- Se realizar una petición ingresando en el `Header`: en el apartado `Authorization` se ingresa el `${token}` del proyecto en la ruta HTTP.
  
- `[GET] ${endpoint}/notificaciones/vencidas`

Que posteriormente nos retorna como `respuesta` un valor tipo `String`.
### Ejemplo de petición 

La petición deberá contener la parte anteriormente descritas en su `body`, como por ejemplo se detalla en el siguiente `JSON`:

```json

	"Authorization": ${token}

```

### Ejemplo de respuesta

- A continuación obtendremos una `respuesta` a la petición similiar a lo siguiente:
  
```json
[
    {
        "_id": "631b7c80cdd3f6a9b0d3e402",
        "proyecto": "upconta",
        "eliminar": false,
        "args": "{\"modulo\":\"continuidad\",\"titulo\":\"Mantenimiento x2\",\"mensaje\":\"Se realizará mantenimiento a la plataforma el fin de semana\"}",
        "revisado": false,
        "fechaInicio": "2022-07-22T04:59:59.999Z",
        "fechaFin": "2022-07-30T05:00:00.999Z",
        "createdAt": "2022-09-09T17:48:48.277Z",
        "updatedAt": "2022-09-09T17:48:48.277Z",
        "v": 0
    },
    {
        "_id": "631b7d788984c6e0cc487929",
        "proyecto": "upconta",
        "eliminar": false,
        "args": "{\"modulo\":\"continuidad\",\"titulo\":\"Mantenimiento x2\",\"mensaje\":\"Se realizará mantenimiento a la plataforma el fin de semana\"}",
        "revisado": false,
        "fechaInicio": "2022-07-22T04:59:59.999Z",
        "fechaFin": "2022-07-30T05:00:00.999Z",
        "createdAt": "2022-09-09T17:52:56.871Z",
        "updatedAt": "2022-09-09T17:52:56.871Z",
        "v": 0
    }
]


  
```
