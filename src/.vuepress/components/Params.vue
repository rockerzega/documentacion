<template>
  <div>
    <h2>Parámetros aceptados por la query</h2>
    <ul>
      <li>
        <p>
          <code>$fields</code> Este parámetro permite filtrar todos 
          los registros que cumplan con los valores proporcionados
          para la consulta, estos valores enviados serán los arrojados
          en la respuesta y los que no se han especificado se omitiran, 
          en caso de no enviar este parámetro <code>$fields</code> se 
          arrojará en la respuesta todos los campos.
        </p>
        <p v-if="!removetwo"> 
          <b>Ejemplo de petición:</b> <br>
          En este ejemplo se solicita obtener los atributos <code>status</code>
          ,<code>_id</code>,<code>name</code>,
          <code>surname</code> y <code>lastSurname</code>.
          <FirmasPath
            :method= methodtwo
            path="?fields=status _id name surname lastSurname"
          />
        </p>
         <p v-if="removetwo"> 
          <b>Ejemplo de petición:</b> <br>
          En este ejemplo se solicita obtener los atributos <code>status</code>
          , y del objeto <code>subject</code> solo los atributos <code>_id</code>,<code>name</code>,
          <code>surname</code> y <code>lastSurname</code>.
          <FirmasPath
            :method= methodtwo
             path="?fields=status subject {name surname}  "
          />
        </p>
      </li>
      <li>
        <p>
          <code>$q</code> Este parámetro permite agregar un filtro adicional el
          cual buscará coincidencias en los campos entregados por la petición  
        </p>
        <p v-if="!removetwo">
          <b>Ejemplo de petición:</b> <br>
          En este ejemplo se solicita obtener todos los registros que cumplan con las 
          coincidencias del numero <code>1727189365</code>.
          <FirmasPath
            :method= methodtwo
            path="?q=1727189365"
          />
        </p>
        <p v-if="removetwo">
          <b>Ejemplo de petición:</b> <br>
          En este ejemplo se solicita obtener todos los registros que cumplan con las 
          coincidencias del numero <code>1727189365</code>.
          <FirmasPath
            :method= methodtwo
            path="/get-remove?$q=1727189365"
          />
        </p>
      </li>
      <li>
        <p>
          <code>$limit</code> Este parámetro permite agregar un filtro adicional
          el cual devolverá una cantidad limitada de registros según sea
          asignado el parámetro y se los mostrará por defecto en la primera <code>$page</code>.
        </p>
        <p v-if="!removetwo">
          <b>Ejemplo de petición:</b> <br>
          En este ejemplo de petición se solicita obtener 10 registros 
          máximo por página.
          <FirmasPath
            :method= methodtwo
            path="?limit=10"
          />
        </p>
        <p v-if="removetwo">
          <b>Ejemplo de petición:</b> <br>
          En este ejemplo de petición se solicita obtener 10 registros 
          máximo por página.
          <FirmasPath
            :method= methodtwo
            path="/get-remove?limit=10"
          />
        </p>
      </li>
      <li>
        <p>
          <code>$page</code>
          Este parámetro permite obtener los registros de una página en
          específico. Tomar en cuenta que el número de registros de
          página se lo detemina en el parámetro <code>$limit</code>.
        </p>
        <p v-if="!removetwo">
          <b>Ejemplo de petición:</b> <br>
          En este ejemplo de petición se solicita obtener los registros
          de la segunda página, tomando en cuenta que cada página se 
          constituyen de 10 registros.
          <FirmasPath
            :method= methodtwo
            path="?limit=10&page=1"
          />
        </p>
        <p v-if="removetwo">
          <b>Ejemplo de petición:</b> <br>
          En este ejemplo de petición se solicita obtener los registros
          de la segunda página, tomando en cuenta que cada página se 
          constituyen de 10 registros.
          <FirmasPath
            :method= methodtwo
            path="/get-remove?limit=10&page=1"
          />
        </p>
      </li>
      <li>
        <p>
          <code>$sort</code>
          Este parámetro permite ordenar todos los registros devueltos, en caso
          de obtener los registros de forma descendente se antepone un <code>-</code>,
          si no se completa el parámetro <code>$sort</code>.
        </p>
        <p v-if="!removetwo">
          <b>Ejemplo de petición:</b> <br>
          En este ejemplo de petición se obtendra todos los certificados ordenados de forma
          descendente, en este caso ordenado por el campo <code>status</code>.
          <FirmasPath
            :method= methodtwo
            path="?sort=-status"
          />
        </p>
        <p v-if="removetwo">
          <b>Ejemplo de petición:</b> <br>
          En este ejemplo de petición se obtendra todos los certificados ordenados de forma
          descendente, en este caso ordenado por el campo <code>status</code>.
          <FirmasPath
            :method= methodtwo
            path="/get-remove?sort=-status"
          />
        </p>
      </li>
      <li>
        <p>
          En caso de querer filtrar registros que tengan alguna coincidencia
          con un valor determinado se podrá enviar en la query el campo a buscar
          y el valor de busqueda.
        </p>
        <p v-if="!removetwo">
          <b>Ejemplo de petición:</b> <br>
          En este ejemplo se solicita obtener los registros que tengan un <code>status = inprocess</code>. 
          <FirmasPath
            :method= methodtwo
            path="?status=inprocess"
          />
        </p>
        <p v-if="removetwo">
          <b>Ejemplo de petición:</b> <br>
          En este ejemplo se solicita obtener los registros que tengan un <code>status = 8</code>. 
          <FirmasPath
            :method= methodtwo
            path="/get-remove?status=inprocess"
          />
        </p>
      </li>
    </ul>
    <h3>Especificación para atributos tipo objeto</h3>
    <p>
      Mediante esta petición el operador podrá consultar con parámetros
      generales o específicos con cualquiera de los parámetros siguientes,
      para esto se realiza una ejemplicación genérica con el parámetro
      <code>$fields</code> y el atributo <code>file</code>, en la cual 
      traera todos los campos del <code>file</code> de la siguiente forma:
    </p>
    <p v-if="!removetwo">
      Ejemplo de petición:
      <FirmasPath :method= methodtwo path="?fields=file" />
    </p>
    <p v-if="removetwo">
      Ejemplo de petición:
      <FirmasPath :method= methodtwo path= "/get-remove?fields=subject"/>
    </p>
    <p>
      Ejemplicación específica con el parámetro <code>$fields</code> y el atributo <code>file</code>,
      en la cual traerá ciertos campos solicitados del <code>file</code> de la siguiente forma:
    </p>
     <p v-if="!removetwo">
      Ejemplo de petición:
      <FirmasPath :method= methodtwo path= "?fields=file { b64 realName }"/>
    </p>
    <p v-if="removetwo">
      Ejemplo de petición:
      <FirmasPath :method= methodtwo path= "/get-remove?fields=subject { name surname }"/>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    methodtwo: { type: String, required: false },
    removetwo: { type: Boolean, default: false }
  },
};
</script>
