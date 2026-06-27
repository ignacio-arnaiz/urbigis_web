---
title: "Herramientas básicas"
---

Están contenidas en el panel de Herramientas dentro de la pestaña de Básicas:

### 

#### Zoom Inicial

Devuelve el mapa al zoom de partida, si se ha accedido a un geoportal irá al zoom inicial del geoportal, también se puede ir al zoom global haciendo clic sobre el botón del mapa de fondo en el encabezado

#### Compartir la Selección

Los usuarios de [urbiGIS](http://urbigis.com/), sin necesidad de haberse registrado como usuarios, pueden compartir sus configuraciones de mapas favoritas con otros usuarios de forma que no sea preciso volver a realizar su búsqueda e inserción en el Catálogo. Al no estar registrados como usuarios estas selecciones de mapas no se guardan en su perfil y por lo tanto se comparten como ficheros de configuración con extensión .txt. El fichero en el que se guarda la configuración actual de mapas se compone de los siguientes elementos:

- El mapa base actualmente en uso y su nivel de transparencia
- Los servicios de Mapa y Datos que estuviesen en el apartado “Selección” en el Escritorio.
- El orden de visualización y el nivel de transparencia de cada Mapa.
- El encuadre actual del Mapa

![](img/tutorial/Captura77.png)

#### Ir a Coordenada

Se puede indicar una coordenada para mover el mapa a esa posición, la coordenada se puede indicar como World Geodesic System, en Grados, minutos y segundos o en Grados decimales. Una vez elegido el sistema pedirá ingresar la coordenada y tras aceptar hará zoom a ese punto:

![](img/tutorial/2.3.a.5-coordenadas-1.jpg)

![](img/tutorial/2.3.a.5-coordenadas-4.jpg) ![](img/tutorial/2.3.a.5-coordenadas-3.jpg) ![](img/tutorial/2.3.a.5-coordenadas-2.jpg)

#### Imprimir

Presentará un diálogo para definir el Título del mapa, este título dará nombre al fichero PDF de salida y se imprimirá en el papel. Tiene un desplegable para seleccionar las dimensiones de papel, siempre se imprime en horizontal. Y un campo numérico para indicar la escala. En cuanto se introduce una escala, aparecerá un recuadro para indicar el ámbito espacial que cabe en el tamaño de papel seleccionado. Al cambiar el papel o la escala este recuadro se reajustará. E mapa se puede mover arrastrando con el ratón para que el recuadro ocupe el área de mapa que se desea imprimir. El resultado genera un fichero PDF en la carpeta de descargas del usuario.

![](img/tutorial/Captura78-267x300.png)

![](img/tutorial/2.3.a.2-imprimir-2.jpg)

#### Añadir mapas externos

Es posible agregar al mapa información espacial externa en cinco formatos:

![](img/tutorial/Captura79.png)

Los mapas Raster son imágenes georreferenciadas en formatos JPG, PNG, TIF o TIFF. Se seleccionará tanto el fichero de imagen como su correspondiente world file (jgw, pgw o tgw), además también se incluirá el  fichero .prj de georreferenciación, si no se dispone de ese fichero se fijará manualmente la proyección EPSG.

![](img/tutorial/Captura80.png)

Se podrán cargar ficheros vectoriales en formatos Geopackage, SHP, KML, KMZ, GML y GeoJson. La capa añadida se incluirá dentro del [Escritorio](javascript:htLoadSlug('buscar-mapas')) , en la parte del árbol de “Selección” y en estado de edición.

![](img/tutorial/Captura82.png)

Los servicios WMS, WMTS y WFS se cargarán indicando su URL, dispone de tres botones para borrar el texto de la URL, para copiarlo desde el portapapeles y para lanzar la petición al servidor remoto. La relación de servicios disponibles se presenta en la lista de servicios y el botón de Cargar coloca los servicios marcados en el Escritorio dentro de nodo de Selección.

![](img/tutorial/Captura83.png)

#### Dividir Escritorio

Normalmente se trabaja con un único escritorio, pero es útil tener la posibilidad de comparar visualmente un escenario con mapas distintos. Para ello se puede utilizara la función de Dividir Escritorio, a la que se accede desde el menú de opciones ![](img/tutorial/menu-bolas-68x300.png) del Mapa Base en el Encabezado o desde la herramienta de Dividir Escritorio:

![](img/tutorial/Captura11.png)             ![](img/tutorial/Captura12.png)

Al ejecutar estas opciones, el Escritorio de [urbiGIS](http://urbigis.com/) se “partirá”, dando la posibilidad al usuario de establecer Mapas distintos en cada lado.

![](img/tutorial/2.5-Dividir-Escritorio-1.jpg)

De los dos Mapas Base, podemos ver que están indicados como “izquierdo” y “derecho”, .

![](img/tutorial/2.5-Dividir-Escritorio-3-1.jpg)                  ![](img/tutorial/2.5-Dividir-Escritorio-2-1.jpg)

Los dos escritorios por defecto están sincronizados, desplazándose simultáneamente. Pero si se quisiera que esto no fuese así, y que cada uno fuera independiente, en el menú de opciones ![](img/tutorial/menu-bolas-68x300.png) del Escritorio **derecho,** existe la opción para  Desincronizar los Escritorios. La misma opción ocurrirá en caso contrario, llamándose Sincronizar Escritorios.

![](img/tutorial/2.5-Dividir-Escritorio-4-1.jpg)

Si se quiere revertir y volver a un único Escritorio, tanto desde el menú de opciones ![](img/tutorial/menu-bolas-68x300.png) del Mapa Base izquierdo como del derecho podemos ver la opción de Unir Escritorios.

![](img/tutorial/2.5-Dividir-Escritorio-5.jpg)

Los mapas que se añadan al Escritorio se ubicarán por defecto en el Escritorio Izquierdo, para moverlos se utilizará las opciones de  “Colocar en el Escritorio Derecho”  y “Colocar en el Escritorio Izquierdo” del menú de opciones de cada mapa:

![](img/tutorial/cap15.png)   ![](img/tutorial/cap16.png)