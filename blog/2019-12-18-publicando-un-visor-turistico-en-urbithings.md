---
title: "Publicando un visor turístico en urbiThings"
date: 2019-12-18
---

Los municipios pequeños no tienen un buen altavoz en Internet, aunque dispongan de atractivos culturales, de ocio o artísticos notables. Por eso han aparecido sitios web de turismo que facilitan los viajes y alojamientos o nos muestran sus posibilidades como [Los pueblos mas bonitos](https://www.lospueblosmasbonitosdeespana.org/) y otros. Algunos municipios han creado sitios web de turismo excelentes como los de [Madrid](https://www.esmadrid.com/?utm_referrer=https%3A%2F%2Fwww.google.com%2F) , [Navarra](Con%20medios propios) , [Valencia](https://www.visitvalencia.com/), o [Cádiz](http://www.cadizturismo.com/), con medios propios o al abrigo de proyectos europeos y de smart cities, pero pocos tienen un mapa interactivo, se limitan a escanear o dibujar los mapas típicos de turismo. Como ejemplos de visores geográficos turísticos interactivos podemos ver los de [Campoo de los Valles](https://visorcampoolosvalles.es/), [Menorca](http://ide.cime.es/sitmun/turisme.jsp), [Cantabria](https://visor.esenciadecantabria.com/), [Senderos de Aragón](https://senderosturisticos.turismodearagon.com/visor/), [Ribagorza](http://senderos.turismoribagorza.org/) o  [Villa de Posadas](http://www.posadas.com.es/visorposadas/#13/37.8410/-5.1209), seguro que hay muchos más. En este post vamos a ver cómo crear en [urbiThings](https://urbithings.com) un visor geográfico turístico sencillo, no tendrá ese vistoso aspecto que proporciona el dinero, pero será funcional y de poco o nulo coste.

**1) Primer paso: conseguir los datos**

La primera tarea es recopilar los datos de interés que formarán el contenido del visor según el alcance que le vayamos a dar: elementos del patrimonio cultural o natural, rutas y senderos de interés, museos y monumentos, alojamientos, restaurantes, espectáculos, espacios de deporte u ocio, ferias y mercadillos, oficinas de turismo, aparcamientos, oficinas bancarias, farmacias… Hasta el infinito y más allá.

Os voy a poner un ejemplo del municipio de Chinchón, (no he pedido permiso a su Ayuntamiento pero espero que no les incomode). Chinchón es un municipio turístico por excelencia muy cerca de Madrid. Aprovecharé que hace tiempo creamos su planeamiento digital dentro del proyecto GeoMadrid y por eso tengo un fichero SHP de su Catálogo de Patrimonio (datos por tanto de la Comunidad de Madrid), cada elemento catalogado tiene asignado un grado de protección y un tipo, con estos datos será fácil resaltar los más importantes sin más trabajo.

Si no tuviéramos esta información espacial previa habría que dibujarlos en [urbiThings](https://urbithings.com), pero son elementos sencillos que se dibujan directamente sobre la ortofoto y estamos hablando de unas pocas decenas en el mejor de los casos. Este es un ejemplo rápido, no puedo dedicarle mucho tiempo, pero con mirar algunas guías se pueden incorporar otros elementos también importantes como dónde comer y alojarse, en fin colocar algunos POI en el mapa.

Tras importar el SHP de Catálogo en [urbiThings](https://urbithings.com) ya podemos montar un par de mapas del Patrimonio Cultural, en la imagen siguiente según el grado de protección:

![](http://info.urbigis.com/wp-content/uploads/2019/12/chin1-min.png)

Y en la siguiente por el tipo de elemento:

![](http://info.urbigis.com/wp-content/uploads/2019/12/chin2-min.png)

**2) Segundo paso: enriquecer los datos**

Los monumentos o puntos de interés pueden llegar a tener un montón de información asociada, desde su descripción literal hasta fotografías, vídeos, audios, documentos o enlaces a otros sitios web. En [urbiThings](https://urbithings.com) no es problema adjuntar a cada elemento todo tipo de información, en la imagen siguiente estamos editando el Conjunto de datos del Patrimonio Cultural, hemos seleccionado el Parador Nacional y vemos que tiene cinco documentos adjuntos:

![](http://info.urbigis.com/wp-content/uploads/2019/12/chin3-min.png)

Haciendo clic sobre ese botón de documentos marcado en amarillo, [urbiThings](https://urbithings.com) nos presentará todos los elementos adjuntos a ese elemento y podemos editar su contenido, suprimir o añadir otros nuevos. Mientras escribía este post he añadido dos nuevos así que ahora tiene siete:

![](http://info.urbigis.com/wp-content/uploads/2019/12/chin4-min-1.png)

Como vemos pueden subirse documentos de cualquier tipo, enlaces a páginas web, a vídeos o a aplicaciones como Google Street View. Todos los que permitan al visitante hacerse una idea más completa del elemento sin tener que estar buscando en Internet. En este caso hemos subido un documento PDF que publica Paradores sobre la historia de este parador, fotos bajadas de Kayak.es, enlaces a vídeos de YouTube y al sitio del propio Parador o vistas de Street View. Si este elemento catalogado tuviese documentación normativa o expedientes urbanísticos publicables se añaden en sus carpetas correspondientes.

En función del número de elementos será más o menos tedioso documentarlos, en Chinchón hay 256 elementos catalogados pero en muchos de ellos no tiene sentido añadir más información que un enlace a Street View (los de Grado 2 y 3), mientras que los más importantes de Grado 1 solo son 32 y llevará un par de horas documentarlos de forma suficiente. Seguramente el Parador es del que más información podemos obtener por eso lo he tomado como ejemplo.

**3) Tercer paso: publicar el mapa**

Todo lo que vamos haciendo al crear los mapas que hemos visto o añadir los documentos, es inmediatamente visible en el buscador de [urbiThings](https://urbithings.com), el conjunto de datos y todos los documentos son descargables. Los podemos buscar en la URL estándar de [urbiThings](https://urbithings.com) porque estarán asociados al territorio de Chinchón y a la cuenta de su Ayuntamiento o podemos llegar directamente a ellos en la URL del [visor urbiThings de Chinchón](https://urbithings.com/chinchon.maps) dentro del apartado de Turismo: 

![](http://info.urbigis.com/wp-content/uploads/2019/12/chin5-min-2.png)

Y pinchando en cualquier elemento, (el Parador es el menor documentado) obtendremos sus datos en el panel inferior de datos. Entre ellos hay un botón de acceso los documentos (rodeado con un círculo amarillo) que presenta la lista de sus documentos adjuntos, en este caso he seleccionado una foto:

![](http://info.urbigis.com/wp-content/uploads/2019/12/chin6-min.png)

O en este otro la web de Paradores:

![](http://info.urbigis.com/wp-content/uploads/2019/12/chin7-min.png)

Al que será posible navegar pulsando el icono de link en la pestaña de datos del documento.

**4) Conclusión**

Con [urbiThings](https://urbithings.com) es sencillo crear y publicar información turística. Sin necesidad de diseñar en HTML ni programar un sitio web especial en JAVA, ni tener que alojarlo en un servidor y por tanto sin costes. La información la puede dibujar y completar cualquier persona sin una formación especial, más allá de aprender lo necesario sobre cómo funciona  [urbiThings](https://urbithings.com).

Ah! y pueden utilizar el Localizador del «Patrimonio Cultural de Chinchón» para encontrar algún elemento por su nombre, tipo o grado de protección.

Ignacio Arnaiz Eguren

Director