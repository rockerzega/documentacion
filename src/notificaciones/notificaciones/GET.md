# Eliminar notificación

Para la eliminación de una notificación se requiere tener creado un `${token}`.
  
Para realizar la petición se neceita un `${token}` y  `application/json` que se enviará por el 
`Header`:  `Content-Type` y `Authorization` de la petición HTTP.


Para  la eliminación de la notificación se envia la información por el `body` de
la petición lo siguiente:

- `business`: ID del proyecto toc
- `proyecto`: Proyecto toc
- `eliminar`: opcion de elimnar la notificación 

|Campo|Nombre|Tipo|Obligatorio|Descripción|
|--|--|--|--|--|
|`business`|ID del proyecto|`String`|Si|ID único del operador|
|`proyecto`|Nombre del proyecto|`String`|Si|Proyecto de toc|
|`eliminar`|Se permite eliminar|`Boolean`|Si|Determina si se puede eliminar la notificación|

## Ejemplo de petición JSON

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

  "Content-Type": "application/json",
  "Authorization": "${token}"
	

```

 ## Eliminar notificaciones vencidas 


Para la eliminación de una petición vencida se requiere tener creado un  `proyecto` y un
`business` 

  
Para realizar la petición se neceita un token  que se enviará por el 
`Header`: `Authorization` de la petición HTTP.
