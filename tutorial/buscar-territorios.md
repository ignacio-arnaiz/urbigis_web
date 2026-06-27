---
title: "Buscar Territorios"
---

Los Territorios forman una base de datos propia de [urbiGIS](https://urbigis.com) mantenida por su equipo de trabajo. Sirve para localizar rápidamente un ámbito en cualquier parte de del mundo por su nombre. No es un localizador basado en Direcciones puntuales como los habituales de Google o Bing. Se parece más a los polígonos administrativos de Open Street Map pero con un propósito más amplio. Contiene ámbitos administrativos, geográficos, de protección y otras categorías. También sirve para localizar datos que les afecten, porque en [urbiGIS](https://urbigis.com) todos los conjuntos de datos y los mapas deben obligatoriamente referirse a un Territorio, de esa forma son un mecanismo sencillo para encontrarlos.

Hay varias formas para localizar un territorio en concreto y seleccionar los elementos de [urbiGIS](https://urbigis.com) que tenga asociados:

#### Método de Búsqueda sencilla

Seleccionando el contexto de Territorios en la pestaña del buscador podremos realizar dos formas de búsqueda:

**Búsqueda por nombre**: al ir tecleando el nombre del territorio se presentarán en la lista de resultados los que contengan ese texto en su nombre.

**Búsqueda gráfica**:  el menú desplegable del icono del pincho nos permite seleccionar tres modos gráficos: por un punto, por un rectángulo o por una forma libre. En estos dos últimos modos hay una limitación de superficie, no es posible buscar en áreas superiores a 1 km2. El sistema presentará en la lista de resultados todos los territorios que intersecten con esa geometría.

![](img/tutorial/Captura19.png)

### 

#### Método de Búsqueda avanzada

Utilizando el icono de filtro \*\*![](img/tutorial/2.1.12-Busqueda-Avanzada-14.jpg) \*\*se despliegan las diferentes condiciones de filtro aplicables, condiciones que se suman a la de búsqueda por nombre.

En este modo avanzado podremos incluir tres conceptos de filtro: por uno o varios Niveles porque a cada territorio [urbiGIS](https://urbigis.com) le asigna un nivel jerárquico en el que el nivel 1 corresponde al mundo, por una o varias Categorías porque a cada territorio[urbiGIS](https://urbigis.com) le asigna su naturaleza (administrativo, de protección, geográfico…) y uno o varios Tipos que habitualmente vienen definido por la institución que lo haya delimitado. Todos estos criterios, incluido el nombre del Territorio, se aplican en la selección para afinar la búsqueda.

![](img/tutorial/Captura25.png)

#### Resultados

Una vez realizada la consulta los Territorios localizados se presentan de forma paginada en la **Lista de Resultados** situado en la parte inferior del panel de herramientas y que tiene los siguientes componentes:

**A) Control de orden**:  permite ordenar de tres formas diferentes: estándar (según un criterio interno de [urbiGIS](https://urbigis.com) que prioriza los niveles), alfabéticamente por su nombre y por dimensión superficial de mayor a menor tamaño.

![](img/tutorial/Captura32.png)

**B) Control de Anulación**: el criterio actual de selección se puede eliminar utilizando el botón de anulación, el sistema volverá a presenta la lista completa de Territorios.

![](img/tutorial/Captura24.png)

**C) Controles de Selección**: permiten seleccionar varios territorios en la página actual de la lista. ¡Atención!: la selección se pierde al cambiar de página. La selección se puede realizar uno por uno utilizando el recuadro a la derecha de cada Territorio o de forma masiva utilizando el recuadro situado en el encabezado de la Lista:

![](img/tutorial/panel-de-resultados-7.jpg)

**D) Control de Carga en el Escritorio**: permite colocar los Territorios seleccionados en el Escritorio de forma que sean visibles de forma permanente (o hasta que se retiren o desactiven en el Escritorio)

![](img/tutorial/Captura35.png)

**E) Visualización y zoom**: haciendo clic sobre el Territorio en la Lista el sistema hará zoom a su extensión y lo presentará con borde exterior rojo.

![](img/tutorial/Captura33.png)

**F) Menú de Opciones de Territorio**: cada Territorio en la lista tiene un menú de opciones que se despliega haciendo clic sobre el icono de menú (tres puntos) y que consta de las siguientes funciones

![](img/tutorial/Captura34.png)**1) Mostrar Mapas**: selecciona los Mapas referidos a ese Territorio moviendo el buscador a la pestaña de Mapas, equivale a hacer un filtro de búsqueda avanzada de Mapas por Territorio.

**2) Mostrar GeoInformes**: selecciona los Geoinformes referidos a ese Territorio moviendo el buscador a la pestaña de Geoinformes, equivale a hacer un filtro de búsqueda avanzada de Geoinformes por Territorio

**3) Mostrar Conjuntos**: selecciona los Conjuntos referidos a ese Territorio moviendo el buscador a la pestaña de Conjuntos, equivale a hacer un filtro de búsqueda avanzada de Conjuntos por Territorio

**4) Mostrar Localizadores**: selecciona los Localizadores referidos a ese Territorio moviendo el buscador a la pestaña de Localizadores, equivale a hacer un filtro de búsqueda avanzada de Localizadores por Territorio

**5) Ir al Territorio padre:** presenta en la lista de resultados el Territorio jerárquicamente superior al actual

**6) Ir a los Territorios hijos:** presenta en la lista de resultados los Territorios jerárquicamente inferiores al actual

**7) Ir a los Territorios hermanos:** presenta en la lista de resultados los Territorios con el mismo Territorio padre que el actual

**8) Zoom al Territorio**: hace zoom a la extensión del territorio sin dibujar su borde externo

**9) Exportar**: descarga un fichero SHP comprimido como ZIP con el polígono del Territorio actual en la carpeta de descargas del cliente.

**10) Exportar hijos**: descarga un fichero SHP comprimido como ZIP con los polígonos de todos los Territorios hijos del actual en la carpeta de descargas del cliente.

**11) Añadir al Cubo**: coloca en el Cubo de Geometrías el polígono del Territorio, de esa forma puede ser utilizado para cualquier otro propósito dentro de [urbiGIS](https://urbigis.com) donde se necesite esa geometría.

#### Método con la herramienta de consulta gráfica  del encabezado

Muestra el cursor con el icono ![](img/tutorial/Cursor_ES.png) y presenta el Informe de Posición en el Panel de Datos:

![](img/tutorial/2.1.14-Busqueda-de-territorios-2-1-1024x425.jpg)