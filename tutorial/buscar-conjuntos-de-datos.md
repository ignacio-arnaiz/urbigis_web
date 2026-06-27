---
title: "Buscar Conjuntos de Datos"
---

Todos los usuarios de [urbiGIS](http://urbiGIS.com/) están habilitados para crear Conjuntos de Datos, en [urbiGIS](http://urbiGIS.com/) se almacenan de dos tipos:

- Raster: aquellos integrados por imágenes representadas en celdas regulares de una cuadrícula. Se importan desde ficheros con los siguientes formatos: JPG, JPEG, PNG, TIF, TIFF y GEOTIFF
- Vectoriales: aquellos cuya componente espacial se basa en la representación mediante vectores de objetos gráficos (polígonos, líneas y puntos). Se pueden crear con las herramientas de diseño de [urbiGIS](http://urbiGIS.com/) , importar desde ficheros con siguientes formatos: SHP (comprimido en .ZIP), KML, KMZ, GML, JSON, GEOJSON y WKT. o creados mediante las herramientas de geoproceso de [urbiGIS](http://urbiGIS.com/) a partir de otros Conjuntos de Datos.

Se pueden crear Conjuntos en cualquier posición del mundo, los vectoriales pueden tener los atributos que su creador determine, no hay limitación en el número de elementos ni en el número de atributos.

Hay varias formas para localizar Conjuntos:

#### Método de Búsqueda sencilla

Seleccionando el contexto de Conjuntos de Datos en la pestaña del buscador podremos realizar dos formas de búsqueda:

**Búsqueda por nombre**: al ir tecleando el nombre del Conjunto se presentarán en la lista de resultados los que contengan ese texto en su nombre.

**Búsqueda gráfica**:  el menú desplegable del icono del pincho nos permite seleccionar tres modos gráficos: por un punto, por un rectángulo o por una forma libre. En estos dos últimos modos hay una limitación de superficie, no es posible buscar en áreas superiores a 1 km2. El sistema presentará en la lista de resultados todos los Conjuntos que intersecten con esa geometría.

![](img/tutorial/Captura52.png)

#### Método de Búsqueda avanzada

Utilizando el icono de filtro \*\*![](img/tutorial/2.1.12-Busqueda-Avanzada-14.jpg) \*\*se despliegan las diferentes condiciones de filtro aplicables, condiciones que se suman a la de búsqueda por nombre.

En este modo avanzado podremos incluir cinco conceptos de filtro: los Conjuntos que tengan uno o varios Territorios de referencia, los que tengan una o varias Cuentas propietarias, los que correspondan con uno varios Temas, los que estén en uno o varios Estados  y los que sean de uno u otro Tipo. Todos estos criterios, incluido el nombre del Conjunto, se aplican en la selección para afinar la búsqueda.

![](img/tutorial/Captura53.png)

#### Resultados

Una vez realizada la consulta, los Conjuntos localizados se presentan de forma paginada en la **Lista de Resultados** situado en la parte inferior del panel de herramientas y que tiene los siguientes componentes:

**A) Control de orden**:  permite ordenar la lista de dos formas diferentes: cronológicamente colocando primero los más modernos o alfabéticamente por su nombre.

![](img/tutorial/Captura54.png)

**B) Control de Anulación**: el criterio actual de selección se puede eliminar utilizando el botón de anulación, el sistema volverá a presenta la lista completa de Conjuntos.

![](img/tutorial/Captura24.png)

**C) Controles de Selección**: permiten seleccionar varios Conjuntos en la página actual de la lista. ¡Atención!: la selección se pierde al cambiar de página. La selección se puede realizar uno por uno utilizando el recuadro a la derecha de cada Conjuntos o de forma masiva utilizando el recuadro situado en el encabezado de la Lista:

![](img/tutorial/Captura55.png)

**D) Control de Carga en el Escritorio**: permite colocar los Conjuntos seleccionados en el Escritorio de forma que sean visibles de forma permanente (o hasta que se retiren o desactiven en el Escritorio)

![](img/tutorial/Captura56.png)

**E) Zoom**: haciendo clic sobre el Conjunto en la Lista el sistema hará zoom a su extensión.

![](img/tutorial/Captura57.png)

**F) Menú de Opciones de Conjunto**: cada Conjunto en la lista tiene un menú de opciones que se despliega haciendo clic sobre el icono de menú (tres puntos) y que consta de las siguientes funciones

**![](img/tutorial/Captura58.png)1) Descargar como Fichero**: cuando el Conjunto es vectorial guarda en la carpeta de Descargas del cliente un fichero SHP comprimido como ZIP del Conjunto de Datos.

**2) Descargar como Dibujo**: cuando el Conjunto es raster guarda en la carpeta de Descargas del cliente un fichero GEOTIFF con la imagen.

**3)** **Documentos**: presenta en un diálogo separado los Documentos adjuntos al Conjunto.

**4) Datos:** si el Conjunto es vectorial abre el módulo de Conjuntos de Datos para la visualización de sus elementos y presenta su entidades en el Escritorio abriendo un nodo para el  Conjunto en el nodo de Edición del Escritorio.

**5) Metadatos**: presenta en el Panel de Datos las propiedades que el Conjunto tiene en el Catálogo de [urbiGIS](https://urbigis.com/).

**6) Zoom al Territorio**: el Mapa hace zoom a la extensión del Territorio al que haga referencia el Conjunto.

**7) Cargar Mapas**: abre el buscador de Mapa filtrando los que pertenecen al Conjunto.