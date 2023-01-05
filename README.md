# E-commerce. Hecho por [Gonzalo Irazabal](https://github.com/girazabal)

# [![CSS](https://img.shields.io/badge/Link%20al%20sitio-blueviolet)]

# Nivel-x - Aplicacion desarrolada con React.js

## Comandos

Init Proyect
`npm i`

Develop mode
`npm start`

Deploy
`npm run build`

# Construido con:
* [React] (http://es.reactjs.org/) - Javascript Framework
* [React-Toastify] (https://fkhadra.github.io/react-toastify/introduction/) - React Toastify
* [Firebase] (https://firebase.google.com/) - NoSQL Database




## Descripción

Nivel-X es una single-page application basado en un emprendemiento de venta de consolas, videojuegos y accesorios gamers. Los productos y la orden de compra con los pedidos se almacenan en firebase.

La pagina consiste en una pagina principal, donde se muestran los productos que se ofrecen, se puede ver su nombre y su precio. Se puede agregar productos al carrito haciendo click.

### Items

Asimismo, si se hace click en la imagen del producto se llevara a la card con el detalle del mismo, en donde se dara una descripcion del producto y una botonera para poder agregar productos al carrito. 

### Categorías
 En la barra de navegación se puede elegir entre las dos categorías de productos para visualizar. 

### Carrito

El carrito muestra la totalidad de los productos elegidos.
Finalmente consta de un boton para poder finalizar la compra, el cual te dirige hacia un formulario en el cual se debe introducir nombre y apellido, DNI, dirección, telefono y mail para poder generar una orden (la genera firebase una vez validado el formulario).

