# Obtener notificaciones

Mediante esta petición se podrá obtener un `Array` de `Objects` de las
notificaciones de manera general que puede pueden ser filtradas por
medio de parametros que son asignados por parte de las peticiones de
los `sockets`
Además se debe enviar un token mediante el `Header`: `Authorization` de la
petición HTTP que se obtiene de [Generación de Token](/bank/auth/post.html#autentificacion).

<!--Params methodtwo="GET"/-->

## Ejemplo de respuesta

```json
[
	{
    "_id": "62d4cb2e4c2ad72bcafe43e4",
		"business": "5a2ac49cbbbce212f885529c",
		"proyecto": "upconta",
		"eliminar": false,
		"args": {
			"id": "0001",
			"modulo": "continuidad",
			"submodulo": "campaign-orders",
			"titulo": "Factura  vencida",
			"mensaje": "La factura 001-002-000000234 se encuentra vencida por 39 días"
		}
	},
	{
    "id": "62d4cb2e4c2ad72bcafe43e7",
		"business": "5a2ac49cbbbce212f885529c",
		"proyecto": "upconta",
		"eliminar": false,
		"args": {
			"id": "0002",
			"modulo": "continuidad",
			"submodulo": "campaign-orders",
			"titulo": "Factura  vencida",
			"mensaje": "La factura 001-002-000000233 se encuentra vencida por 36 días"
		}
	}
]
```
