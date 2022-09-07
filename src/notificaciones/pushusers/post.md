# Suscripción
 Para crear una nueva  suscripción se solicita un `proyecto` al cual se desea realizar una suscripción.
 
  ### Ejemplo

 - `proyecto`: "Nombre del proyecto"
  
  

|Campo|Nombre|Tipo|Obligatorio|Descripción|
|--|--|--|--|--|
|`proyecto`|Nombre del proyecto|`String`|Si|es un nombre único de proyecto|


## Petición de suscripción
- Para realizar la petición nos dirigimos a la ruta: `localhost:2999/push-user/suscribirse` 
  posteriormente ingresamos el siguiente formato de petición `JSON` en el body del `POST` 

### Ejemplo

```json
{
    "suscripcion": {
    "endpoint": "https://updates.push.services.mozilla.com/wpush/v2/gAAAAABjFk-KqMOt29voK5EnNPGz6ARERAX8gR6qhjL7ctwx1Cyc5Js5g9qnbAuktXty8W7z34AEpImpPRuaSXUvWz_xWXNYABE3y8wRDsml0rZQlDrJWGb67j75z_RMb6vNZ5aL8hny6QxzSVwEB1e_d5BCUkhDls_PYL0ZtDlmh9ugMvVnQnU",
    "expirationTime": null,
    "keys": {
      "auth": "GBhe3sJuJc8NZIkfPRgeQg",
      "p256dh": "BJ3Tf8BfZQKiHFDXmgHWFVcLC0PL_7hTTAz-PVmIFbfuTlmk50ZMeU-PztRj-qSKYzdjMXqglpN3ftD1DivBx0A"
    }
  },
  "expiracion": "2022-09-06T04:59:59.999Z",
  "business": "5a2ac49cbbbce212f885529c",
  "proyecto": "upconta"
```
### Respuesta de la petición 
```json
{
	"éxito"

}
```





# Caducidad de la suscripción

  La caducidad de la suscripción se obtiene mediante el `id` de la suscripción.

## Petición de caducidad
- Para realizar la petición nos dirigimos a la ruta: `localhost:2999/push-user/caducidad-suscripcion` 
  posteriormente ingresamos el siguiente formato de petición `JSON` en el body del `POST` 

 ### Ejemplo
 ```json
{
	

	"business": "5a2ac49cbbbce212f885529c",
    "id": "GBhe3sJuJc8NZIkfPRgeQg"

}
```

### Respuesta de la petición 

```json
{
	
"valido"

}
```

__Obteniendo estas respuestas queda verificado el correcto funcionamiento de las rutas  `/suscribirse` y `/caducidad-suscripcion`__ .

     