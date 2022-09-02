# Eliminar notificaciones

Para eliminar notificaciones se requiere un `proyecto`, un `business`
ademas si desea una busqueda especial, debe colocar una `query` con el
nombre `args` la cual indicará que se requiere buscar.

  
Para realizar la petición se neceita un token  que se enviará por el 
`Header`: `Authorization` de la petición HTTP.

## Petición

<!--NotificacionPath method="POST" path="" :auth="true" /-->

Para eliminar las notificaciones se envia la información por el `body` de
la petición lo siguiente:

- `business`: ID del proyecto toc
- `proyecto`: Proyecto toc

ademas de una `query` con algo especifico a buscar en el campo `args`

|Campo|Nombre|Tipo|Obligatorio|Descripción|
|--|--|--|--|--|
|`business`|ID del proyecto|`String`|Si|ID único del operador|
|`proyecto`|Nombre del proyecto|`String`|Si|Proyecto de toc|


## Ejemplo de petición

Aqui se mostrara como eliminar las notificaciones que poseen el texto `id`
dentro del parametro `args`

`http://localhost:2999/notificaciones/eliminar-notificaciones?args=id`

y el `body` requerido

```json
{
	"business": "5a2ac49cbbbce212f885529c",
	"proyecto": "upconta",
}
```

## Ejemplo de respuesta

```json
{
	"mensaje": "Se ha eliminado correctamente",
}
```
