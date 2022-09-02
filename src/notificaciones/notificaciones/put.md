# Leer notificaciones

Para leer una notificacion hacemos uso del parametro `_id`
el cual modificara el parametro `revisado` que es un booleano
que nos informa si la notificaciónya fue revisada, se debe
recordar que dependiendo de la notificación el parametro `revisado`
puede ser modificado.

  
Para realizar la petición se neceita un token  que se enviará por el 
`Header`: `Authorization` de la petición HTTP.

## Petición

<!--NotificacionPath method="POST" path="" :auth="true" /-->

Para leer la notificación se envia la información del `_id` por medio
del `path_param`:

La ruta de la petición `PUT` tiene la siguiente forma:

`http://localhost:2999/notificaciones/:id`

## Ejemplo de petición

Aqui se mostrara como leer la notificación que poseen un determinado `id`

`http://localhost:2999/notificaciones/62d4c7e84c2ad72bcafe43df`


## Ejemplo de respuesta

```json
{
	"_id": "62d4c7e84c2ad72bcafe43df",
	"business": "5a2ac49cbbbce212f885529c",
	"proyecto": "upconta",
	"eliminar": true,
	"args": {
		"modulo": "continuidad",
		"titulo": "Aviso general",
		"mensaje": "Mensaje emitido para un cliente especifico"
	},
	"revisado": true,
	"createdAt": "2022-07-18T02:39:36.664Z",
	"updatedAt": "2022-07-19T12:11:51.392Z",
	"__v": 0
}
```

## Nota: 
Este ejemplo fue modificado para probarlo con una ruta dado que la lectura
de notificaciones esta ligado a los sockets y no es de uso genenral de peticiones