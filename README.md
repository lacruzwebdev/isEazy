# 
¡Hola! 🖖
Os dejo por aquí la prueba técnica. 

Para lanzar la aplicacion solo hay que clonar, instalar dependencias:
```
npm install
```
Y lanzar la aplicación + JSON Server
```
npm run dev
```

Accedemos a la app en 
```
http://localhost:5173
```

He usado las cuatro herramientas principales que pedíais:
```
Vue 3
Vite
Pinia
TailwindCSS
```

Y además he usado:

**[JSON-Server](https://www.npmjs.com/package/json-server)** para emular un backend con una API que devuelve los mensajes
**[Axios](https://www.npmjs.com/package/axios)** para hacer fetch a dicha API
**[date-fns](https://www.npmjs.com/package/date-fns)** para darle formato a las fechas
**[Font Awesome](https://www.npmjs.com/package/@fortawesome/fontawesome-svg-core)** para los diferentes iconos en SVG
**[Concurrently](https://www.npmjs.com/package/concurrently)** para lanzar Vue y JSON-Server con un único comando npm y que sea más fácil de usar

Aunque era una proyecto sencillo hacía tiempo que no usaba Vue (hasta ahora he usado React más a menudo) por lo que en general ha sido una experiencia muy interesante.

Había usado Vuex en el pasado, pero ha sido mi primera vez con Pinia, por lo que he tenido que pasar un ratillo leyendo la documentación y me ha parecido una herramienta genial.

## Estructura del proyecto
**/assets**
Carpeta con las fotografías de los usuarios
**/components**
**Modal.vue** - Modal y su lógica para mostrarse y ocultarse
**Conversation.vue** - Aquí hacemos fetch de los mensajes vía el Store previamente creado con Pinia y pasamos los datos al child
**Bubble.vue** - Controla los bocadillos de cada mensaje y formatea en función de si es archivo, mensaje y el usuario origen.
**/stores**
**convo.js** - Store de Pinia donde hacemos fetch de los mensajes a JSON Server, añadimos mensajes nuevos y los guardamos en state.

## Notas
Todos los documentos están comentados explicándolo todo. Si tenéis alguna pregunta no dudéis en poneros en contacto conmigo


