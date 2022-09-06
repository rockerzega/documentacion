# Enviar Mensaje
 Para enviar un mensaje se debe contar con un `proyecto`, un  `titulo` y un `mensaje` que se requiera enviar.
 
 ###  Ejemplo 

 - `proyecto`: Nombre del proyecto
 - `titulo`: nombre del mensaje
-  `mensaje`: mensaje que se quiere enviar 
  

|Campo|Nombre|Tipo|Obligatorio|Descripción|
|--|--|--|--|--|
|`proyecto`|Nombre del proyecto|`String`|Si|es un nombre único de proyecto|
|`titulo`|nombre del mensaje|`String`|Si|un titulo para el mensaje|
|`mensaje`|mensaje que se enviará|`String`|Si|mensaje que se enviará al receptor|

## Petición
- Para realizar la petición nos dirigimos a la ruta: `localhost:2999/web-push/enviar-mensaje` 
  posteriormente ingresamos el siguiente formato de petición `JSON` en el body del `POST` 

```json
{
	"proyecto": "upconta",
    "titulo": "Nueva notificacion",
    "mensaje": "Mensaje de prueba"
}
```
### Respuesta de la petición 
```json
{
	"Mensaje enviado"

}
```
__***Obteniendo esta respuesta queda verificado el correcto funcionamiento de la ruta `/enviar-mensaje`***__ .