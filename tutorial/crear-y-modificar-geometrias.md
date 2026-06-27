---
title: "Crear y Modificar geometrías"
---

#### Añadir Geometrías

En [urbiGIS](http://urbigis.com/) se pueden dibujar geometrías de tres tipos: poligonales, lineales y puntuales. Las geometrías se dibujan en el Conjunto de Datos que en ese momento esté en edición (con el icono ![](img/tutorial/graphicedition-300x284.png) activado) y de no estar ninguno en edición, se activará el Conjunto de Datos por defecto “Nuevo Conjunto de Datos”.

![](img/tutorial/Captura110.png)

La barra de herramientas de **Edición** permite seleccionar el tipo de geometría a añadir mediante las siguientes opciones::

**Añadir Polígonos**: despliega un submenú de tipos de polígono:

**Regular:** dibuja un polígono según se va pulsando la posición de cada vértice, para finalizarlo se hace doble clic.

**Cuadrado**: dibuja un cuadrado, pulsando en su centro, y escalándose según el tamaño que interese.

**Caja**: dibuja un rectángulo, pudiendo graduarse tanto el ancho como el alto.

**Círculo**: dibuja un círculo, pinchando en su centro y escalándolo a voluntad.

**Mano alzada**: al mover el ratón por la pantalla y siempre sin dejar de pulsar, se irá dibujando la geometría.

**Rastreo poligonal**: permite reseguir las líneas de otros elementos para garantizar la yuxtaposición perfecta entre ellas.

**Añadir Líneas**: despliega un submenú de tipos de línea:

**Línea:** se pulsan los vértices de inicio y el final de una línea recta

**Mano alzada**: al mover el ratón por la pantalla y siempre sin dejar de pulsar, se irá dibujando la geometría

**Arco**: dibuja un arco por tres puntos

**Rastreo lineal**: permite reseguir las líneas de otros elementos para garantizar la yuxtaposición perfecta entre ellas.

**Añadir puntos**: despliega un submenú de modos de dibujo puntual:

**Punto**: dibuja un punto en el mapa.

**Mostrar coordenadas** : se mostrarán/esconderán las coordenadas de los puntos dibujados.

**Pintar halo**: se mostrará/esconderá un halo rodeando los puntos dibujados.

**Tipo de marcador**: cambiará el modelo de icono que representa al punto.

También se pueden utilizar los atajos de teclado Shft-p para dibujar un polígono regular, Shift-l para dibujar una línea y Shift-x para dibujar un punto. Una vez finalizado el dibujo de la geometría, incluirá la **medición** de su área en el caso de polígonos, de su longitud en el caso de líneas y de sus coordenadas en el caso de puntos, en las unidades que estén determinadas en la pestaña de[Unidades de Medida](javascript:htLoadSlug('unidades-de-medida')). Si se necesita modificar estas unidades (por ejemplo en vez de medir en metros las líneas medirlas en kilómetros) accediendo a la pestaña de [Unidades de Medida](javascript:htLoadSlug('unidades-de-medida')) en el panel de herramientas, se pueden  cambiar.

Cuando al dibujar, el cursor se acerca a menos de cinco pixeles de un vértice de cualquier otra geometría ya dibujada (snap distance), se reajustará automáticamente para coincidir con él. De esta forma el sistema se asegura de que geometrías muy cercanas ajusten sus bordes exactamente.

#### Seleccionar

El Conjunto de Datos en edición puede contener multitud de geometrías de los tres tipos indicados: poligonales, lineales y puntuales. Una vez dibujadas las geometrías, para poder efectuar operaciones con ellas es preciso seleccionarlas previamente. Las geometrías seleccionadas cambian su forma de representación. En la imagen siguiente se observan dos geometrías sin seleccionar y otra seleccionada.

![](img/tutorial/2.3.b.3-seleccionar-geometrias-1.jpg)

Para seleccionar geometrías, se utilizará cualquiera de las 7 opciones que nos ofrece la herramienta de Seleccionar situada en la pestaña de Edición del panel de herramientas:

**Seleccionar por clic:** selecciona mediante un clic dentro de la geometría (si hay varias superpuestas en ese punto las seleccionará todas)

**Seleccionar por caja**: se seleccionan todas las geometrías que estén contenidas en un marco rectangular

**Seleccionar por lazo**: se seleccionan todas las geometrías que sean atravesadas por la línea poligonal que se dibuje.

**Seleccionar todo**: selecciona todas las geometrías

**Invertir selección:** invierte la selección, de modo que las geometrías seleccionadas pasan a no estarlo y las que no estaban seleccionadas pasan a estarlo.

**Anular selección**: se deja de seleccionar lo que se tuviese seleccionado.

También es posible seleccionar entidades marcándolas directamente en el módulos de Conjuntos de Datos:

![](img/tutorial/2.3.b.3-seleccionar-geometrias-3.jpg)

#### Editar

Una vez dibujadas una o varias geometrías se pueden modificar mediante la Herramienta de Editar. La modificación se realizará sobre las geometrías que estén seleccionadas, es decir, hay que tener seleccionada previamente alguna geometría.

Una vez seleccionada una geometría, nos mostrará sus vértices para moverlos, en el caso de los polígonos y las líneas al pasar el cursor por el punto medio entre dos vértices presenta un nuevo vértice que arrastrándolo servirá para modificar la geometría.

La herramienta de Editar, despliega un submenú compuesto de la siguientes opciones:

![](img/tutorial/2.3.b.4-modificar-geometrias.jpg)

**Editar geometría:** permite mover, eliminar e insertar vértices en la geometría seleccionada

**Mover:** permite mover el conjunto de las geometrías seleccionadas

**Rotar**: permite rotar el conjunto de las geometrías. aparecerá un diálogo donde tendremos la opción de elegir un punto sobre el que realizaremos la rotación. Una vez seleccionado, pulsando el signo ![](img/tutorial/rotate-300x254.png) que aparecerá al lado, y manteniendo pulsado, podremos rotar las geometrías. También da opciones avanzadas para el giro, seleccionando tanto las unidades (Radianes, Grados o Gonios) como el mismo ángulo, o dos referencias inicial y final del ángulo.

**Cortar:** permite eliminar las geometrías seleccionadas y las coloca en el portapapeles, pueden ser recuperadas con la herramienta de Pegar

**Remodelar**: permite redibujar un tramo de la geometría seleccionada, el segmento remodelado debe iniciar y terminar dentro de la geometría a remodelar

**Eliminar vértices**: permite definir una forma rectangular que eliminará los vértices de la geometría seleccionada que estén contenidos en ella

**Mover seleccionados adelante**: coloca las geometrías seleccionadas encima de las demás

**Mover seleccionados atrás**: coloca las geometrías seleccionadas debajo de las demás

#### Eliminar

Para eliminar Geometrías existentes hay dos métodos:

A) Utilizar la herramienta de “Eliminar”  de la barra de Edición, que presenta un submenú con las siguientes opciones

**Eliminar seleccionados**: elimina solo las geometrías seleccionadas (habrá que tenerlas seleccionadas previamente)

**Eliminar todos:** elimina todas las geometrías dibujadas estén o no seleccionadas

B) [Seleccionar](javascript:htLoadSlug('crear-y-modificar-geometrias')) las geometrías a eliminar y pulsar la tecla Suprimir.

Se elija el método que se elija, aparecerá un dialogo para confirmar la eliminación de la/las geometrías.

![](img/tutorial/2.3.b.5-eliminar-geometrias.jpg)

#### Copiar y Pegar

Una vez dibujadas una o varias geometrías son susceptibles de ser copiadas y pegadas mediante las Herramientas de Copiar y Pegar de la Barra de Edición del panel de herramientas.

**Copia**: envía las geometrías seleccionadas al portapapeles

**Pegar**: recupera las geometrías del portapapeles, colocándolas en el mismo sitio donde estaban.

#### Editar Coordenadas

Una vez dibujadas una o varias geometrías, su contenido geométrico es susceptible de ser modificado como un texto plano en diversos formatos, la herramienta Editar coordenadas  presenta un submenú con las siguientes opciones:

**Formato WKT** [Well Known Text](https://es.wikipedia.org/wiki/Well_Known_Text)

**Formato GeoJSON**

**Formato KML** [Keyhole Markup Language](https://es.wikipedia.org/wiki/KML)

**Formato GML** [Geography Markup Language](https://es.wikipedia.org/wiki/Geography_Markup_Language)

**Formato ESRI JSON** Objects

El editor de texto plano permite insertar, modificar o eliminar vértices, guardar la geometría y pegar desde ficheros externos de geometrías. en esos formatos. Así se vería la edición si eligiésemos el formato WKT

![](img/tutorial/2.3.b.7-editar-coordenadas-2.jpg)

#### Zoom a entidades

El Conjunto de Datos que está en edición puede contener multitud de geometrías, situadas en puntos muy distantes del mundo. Con objeto de poder acercar el mapa a ellas de una forma eficiente se han previsto dos formas de zoom:

Empleando la herramienta de Zoom a entidades  o haciendo clic en la lista de geometrías del módulo de Conjuntos de Datos.

Si se emplea la herramienta de Zoom a entidades, presenta un submenú con las siguientes opciones:

**Seleccionados**: acerca el mapa a las geometrías que estén seleccionadas

**Todos**: acerca el mapa de tal forma que contenga todas las geometrías dibujadas.

![](img/tutorial/2.3.b.8-zoom-a-geometrias-2.jpg)

#### Guardar

Una vez dibujadas Geometrías hay dos formas de guardarlas. La primera es directamente desde el apartado de Edición del panel de herramientas, mediante la orden Guardar. Y la segunda será desde el Escritorio, utilizando la opción de Guardar en el menú del Conjunto de Datos actualmente en edición.

**A)** Utilizar la herramienta de “Guardar Geometría”  de la Barra de Herramientas de Dibujo, que presenta un submenú con los siguientes botones:

**Seleccionados**: Guarda solo las geometrías que estén seleccionadas

**Todos**: Guarda todas las geometrías dibujadas en el Conjunto de Datos que se esté editando.

**B)** Utilizar la opción Guardar del menú del Conjunto de Datos que este en edición:

![](img/tutorial/2.3.b.9-guardar-geometrias-2.jpg)

#### \*\* Deshacer \*\*\*\*y \*\***Rehacer**

**Deshacer**: deshace la última acción realizada

**Rehacer**: recupera la última operación deshecha