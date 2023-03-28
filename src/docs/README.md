# Introduccíon

 notificaciones es un aplicativo para la generacion de notificaciones en aplicativos asociados a TOC.

 A continuación se realizan los siguientes pasos para obtener 
 satisfactoriamente la información requerida:

 - Paso 1 [Proceso de login](/docs/Auth.md)
 - Paso 2 [Manejo de entidades](/docs/Entidades.md)
 - Paso 3 [Manejo de proyectos](/docs/proyectos.md)
 - Paso 3 [Proceso de notificaciones](/docs/notificaciones.md)
 
 

  >Considerar
  >>_Correr el aplicativo con node.js v16_

  ## Importante
 - Todas peticiones a realizar excepto,
  /auth/ y /auth/crear-proyecto
 [Generación de token](/guide/CreacionToken/POST), se deben enviar en los `Headers`:
   - Content-Type: `application/json`
   - Authorization: `${token}`