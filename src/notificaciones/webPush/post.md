# Nuevo usuario push
 para crear un nuevo usuario se solicita un `usuario` y una `contraseña` de manera obligatoria
 
 # Ejemplo 

 - `proyecto`: Nombre del proyecto
- `contraseña`: Contraseña del proyecto
  

|Campo|Nombre|Tipo|Obligatorio|Descripción|
|--|--|--|--|--|
|`proyecto`|Nombre del proyecto|`String`|Si|es un nombre único de proyecto|
|`contraseña`|Contraseña|`String`|Si|Contraseña para el  proyecto|

### Salida

```json
{
	"proyecto": "pdf-ecuador",
	"password": "1234"
}
```
### Respuesta de la petición 
```json
{
	"password": "1234",
	"proyecto": "pdf-ecuador",
	"_id": "63126da7a2be69b68452bae0",
	"createdAt": "2022-09-02T20:55:03.277Z",
	"updatedAt": "2022-09-02T20:55:03.277Z",
	"__v": 0

}
```





## Obtener token

- el token se obtiene de la siguiente manera y tiene una validación indefinida cuando la _query_ del `POST` esta definida como: **withOutTime=true**
    -   ejemplo de salida 
    
 ```json
{
	

	"business": "63126da7a2be69b68452bae0",
	"creacion": "2022-09-02T21:47:00.567Z",
	"proyecto": "pdf-ecuador"

}
```

- el token tendra una validacion de 2 años cuando en la _query_ se defina  con la siguiente sintaxis: **req.query.years : '2'**
   - ejemplo de salida 

```json
{
	{
	"business": "63126da7a2be69b68452bae0",
	"creacion": "2022-09-02T21:34:00.211Z",
	"proyecto": "pdf-ecuador",
	"expiracion": "2024-09-02T21:34:00.211Z"
}
}
```

## Verificación de token 
se verificara mediante el token otorgado 


	eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJidXNpbmVzcyI6IjYzMTI2ZGE3YTJiZTY5YjY4NDUyYmFlMCIsImNyZWFjaW9uIjoiMjAyMi0wOS0wMlQyMTo0NzowMC41NjdaIiwicHJveWVjdG8iOiJwZGYtZWN1YWRvciJ9.xSmgMvvxcgcqeVXJ6Dn-LsPlbgDeQq66tX5cbloIy6w


este token se pega en el apartado  header junto al __Authorization__ y tendria la respuesta de la fecha determinada en el  `GET`
	
  


 ```json
{
	

	"business": "63126da7a2be69b68452bae0",
	"creacion": "2022-09-02T21:47:00.567Z",
	"proyecto": "pdf-ecuador"

}
```
- en este caso no tiene una fecha límite solo tiene la fecha de creación.


[comment]: <> (This is a comment)