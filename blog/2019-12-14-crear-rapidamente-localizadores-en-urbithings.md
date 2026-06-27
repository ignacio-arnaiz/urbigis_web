---
title: "Crear rápidamente localizadores en urbiThings"
date: 2019-12-14
---

Muchos de nosotros utilizamos localizadores en Internet sin necesidad de saber qué tipo de magia existe detrás de ellos. Ahora es un acto cotidiano buscar una calle en Open Street Maps o en Google, también lo es pinchar un punto del mapa y obtener una dirección o una «ubicación» para navegar hacia ella, para compartirla o para acceder a una realidad extendida conectada con ese punto. Pero no es sencillo montar un localizador, un locator en inglés o un geocoder en lenguaje técnico, que sirva para navegar a nuestros datos, no a los de un Google, sino a mi callejero, a mi parcelario, a mis activos o a mis ofertas geolocalizadas. Hacen falta algunos recursos técnicos y conocimientos específicos. Con [urbiThings](https://urbithings.com) eso ha dejado de ser así. Ya podemos montar un locator en segundos, sin coste ni complicaciones y sin tener que escribir una sola línea de código. Veamos cómo.

Regístrese en [urbiThings](https://urbithings.com), es sencillo y no tiene coste, solo es preciso aportar una cuenta de correo verificable. Una vez que tenga arrancada su sesión podrá crear o subir conjuntos de datos a la plataforma. Conjuntos con contenido y dimensiones libres. Pongamos un ejemplo: la [Prefeitura de Boa Vista de Roraima](https://urbithings.com/boavista.maps) en Brasil, entre los conjuntos de datos que tiene en la plataforma de [urbiThings](https://urbithings.com), tiene uno de parcelario (llamado Lotes PMBV\_01) con los 105.954 lotes del municipio, que subió a [urbiThings](https://urbithings.com)  importándolo desde un SHP.

Ese conjunto de datos tiene publicado un mapa que es el que estamos viendo en la imagen siguiente (podemos acceder directamente a ese mapa en la url: <https://urbithings.com/2a561508-e7c3-470e-91b0-32b6238af828.ms>), visite en este blog el post [Publicar planeamiento vectorial CAD en urbiThings](https://info.urbigis.com/es/publicar-planeamiento-vectorial-cad-en-urbithings/)  para ver lo sencillo que es publicar un mapa. Si en este mapa activamos el botón de pedir información y pinchamos en cualquier lote podemos obtener sus datos:

![](http://info.urbigis.com/wp-content/uploads/2019/12/boa4.png)

La cuestión es ¿como podemos buscar (localizar) un lote por alguno de sus datos?, en este caso el campo mejor candidato es el campo «chave» que para todos los municipios de Brasil se forma mediante la concatenación del sector, manzana y lote de cada parcela. Pues haciendo un localizador y para ello seguiremos los siguientes tres pasos:

**A) Crear un Localizador**

1) En el menú de opciones del Conjunto «Lotes\_PMVB\_01» escogemos la de «Generar Localizador» (lo estamos haciendo con el usuario de Boa Vista que naturalmente tiene su interfaz en portugués)

![](http://info.urbigis.com/wp-content/uploads/2019/12/boa5.png)

2) Nos presentará un cuadro de diálogo para configurar el nuevo servicio, en el que indicaremos el nombre del servicio, el territorio al que afecta, su estado inicial, el tipo de licencia de uso, el tema al que pertenece (en este caso a datos sobre propiedades) y el campo sobre el que se realizará la búsqueda (en este caso el campo chave), también podremos indicar los campos que se presentarán al usuario en la lista de resultados cuando utilice el nuevo localizador (en este caso también hemos escogido el campo chave):

![](http://info.urbigis.com/wp-content/uploads/2019/12/boa7.png)

3) Pulsamos el botón de Guardar y ¡**hemos terminado de crear el nuevo localizador**!

**B) Utilizar el nuevo Localizador**

En [urbiThings](https://urbithings.com) los localizadores tienen su propia pestaña en el buscador:

![](http://info.urbigis.com/wp-content/uploads/2019/12/boa8.png)

Al escribir un texto de búsqueda [urbiThings](https://urbithings.com) utilizará los localizadores por defecto, los podemos ver si pulsamos el icono de filtro:

![](http://info.urbigis.com/wp-content/uploads/2019/12/boa10.png)

Si, como en este caso, buscamos el texto «boa vista», la lista de resultados nos presenta lo que han devuelto todos esos localizadores de base, pinchando en cualquiera de ellos el mapa hará zoom a su posición marcándolo. Pero no queremos utilizar los localizadores de base, así que indicamos a [urbiThings](https://urbithings.com) que busque nuestro nuevo localizador «Lotes de Boavista de Roraima (2019)». Lo haremos mediante un filtro que lo encuentre entre los miles de localizadores que los usuarios de [urbiThings](https://urbithings.com) hayan creado: por nombre, por territorio, por propietario o por tema. Para este localizador con poner su nombre es suficiente, [urbiThings](https://urbithings.com) nos lo presenta, activamos su checkbox y buscamos un texto:

![](http://info.urbigis.com/wp-content/uploads/2019/12/boa11.png)

Esta vez [urbiThings](https://urbithings.com) ya no usará los localizadores por defecto, sino nuestro flamante nuevo localizador de parcelas de Boa Vista, el resultado serán las parcelas que en su campo chave tengan el texto «967», pinchando en cualquiera de ellas el mapa hará zoom a su posición resaltando su geometría en amarillo. De la misma forma pinchando una posición de mapa nuestro localizador nos mostrará qué parcela hay en ese punto.

**Conclusión**

Montar un localizador, locator o geocoder como quiera llamarlo, nunca ha sido más sencillo.

Ignacio Arnaiz Eguren

Director