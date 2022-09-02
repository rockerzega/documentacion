# Notificaciones - Api

Api para gestión de notificaciones, con manejo de sockets, esta API consta de
un menajo de peticiones simples, la cual tiene como objetivo enviar notificaciones
de manera centralizada, la cual puede se utilizada por cualquier aplicativo de TOC.

Para esto, será necesario saber que el apartado de **Autenticación** es 
de gran importancia para cada petición que realice el API. Dichas peticiones
deberán ser autentificadas con su respectivo token que es generado en el apartado 
[Generar token], dicho token será necesario enviar en 
el `Header`: `Authorizaton` para que el Api valide el proyecto/aplicativo que realiza la
petición.



