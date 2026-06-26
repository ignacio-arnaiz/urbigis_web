---
title: "Cuadros de Mando en urbiGIS"
date: "2021-07-26"
excerpt: "Cada día es más necesario presentar nuestra información geoespacial de forma intuitiva. Para ello los Cuadros de Mando nos ayudan a sintetizar indicadores y gráficos dinámicos y atractivos. Desde urbi"
---

##### 

Cada día es más necesario presentar nuestra información geoespacial de forma intuitiva. Para ello los Cuadros de Mando nos ayudan a sintetizar indicadores y gráficos dinámicos y atractivos. Desde [urbiGIS](https://urbigis.com) llevamos tiempo trabajando en un sistema de gráficos que sea sencillo y potente al mismo tiempo.

Nuestros primeros esfuerzos ya están visibles, aún falta mucho por hacer para que la interfaz de diseño sea más completa y potente, pero las bases de funcionamiento ya están creadas.

Por ahora solo es posible crear gráficas de mando sobre los Conjuntos de Datos, en una segunda etapa los ampliaremos para que también se puedan hacer sobre los Inventarios. 

Hemos decidido utilizar como plataforma de desarrollo Google Charts que nos ofrece una funcionalidad suficiente y una integración aceptable en nuestro modelo de datos y nuestra interfaz de trabajo.

El procedimiento es sencillo. Se selecciona el Conjunto de Datos sobre el que trabajar y se hace clic sobre la opción de «Editar Gráficos»:

El sistema presentará la lista de gráficos asociados al Conjunto de Datos y su menú de opciones permite agregar o editar gráficos seleccionando sus propiedades:

– El título del gráfico

– El tipo: líneas, áreas, barras, columnas…

– La consulta: una query que sirva para obtener los datos a representar

– La lista de opciones del gráfico: dimensiones, colores, textos…, siguiendo las guías de opciones definidas por [Google Charts](https://developers.google.com/chart)

Una vez definidos todos los gráficos del Conjunto y guardados sus datos se ejecuta la opción de «Mostrar los Gráficos», bien desde el panel de Conjuntos de Datos o bien desde el buscador de Conjuntos de Datos.

Los gráficos se presentarán en el Panel inferior de Datos y se ordenan rellenando el espacio disponible según sus dimensiones. Si son muchos será preciso ampliar el panel o utilizar la barra de deslizamiento vertical para llegar a verlos todos. Hay que tener en cuenta que intentamos que los usuarios no tengan que programar un Cuadro de Mandos donde cada pieza encaja perfectamente en un panel, ya que eso supondría complicar de forma innecesaria la estructura del Panel de Datos.

En la imagen siguiente vemos a la izquierda el panel de diseño de Gráficos con tres gráficos definidos, a la derecha el panel de Escritorio que presenta el mapa con el Conjunto de Datos seleccionado (o de cualquiera de los mapas que se hayan generado con sus datos) y en la parte inferior el Panel de Datos con los tres gráficos creados para ese Conjunto.

A partir de aquí se abren muchas posibilidades para ampliar la funcionalidad inicial, con nuevos tipos de gráficos, con gráficos de tipo tabla, con gráficos de tipo datos unitario, con leyendas interactivas, con integración entre el mapa y el gráfico, con un constructor interactivo de consultas, extendiendo la posibilidad de gráficos que hagan join entre varios conjuntos de datos…

**Conclusión**

El objetivo es conseguir un sistema potente y sencillo que facilite al usuario construir Cuadros de Mando interactivos y creo que estamos en la vía correcta para conseguirlos y recuerde que utilizar [urbiGIS](https://urbigis.com) es gratuito y solo es preciso solicitar una cuenta de usuario.

Ignacio Arnaiz Eguren

Director
