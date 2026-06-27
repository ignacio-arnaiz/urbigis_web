---
title: "Buscar Mapas"
---

El catálogo de Mapas de [urbiGIS](https://urbigis.com) está formado por servicios web de acceso abierto para visualización y descarga de Mapas y datos procedentes de miles de servidores distribuidos por todo el mundo. Entre ellos el propio servidor de Mapas de [urbiGIS](https://urbigis.com) que publica los Mapas y datos creado por sus usuarios.

Es un catálogo que se expande diariamente porque los usuarios de [urbiGIS](https://urbigis.com) producen nuevos Mapas constantemente y porque el equipo de [urbiGIS](https://urbigis.com) explora Internet buscando nuevos servidores de Mapas para incluirlos.

Como resultado, buscar Mapas entre los cientos de miles de Mapas del catálogo puede ser una tarea compleja y tediosa, dificultada además por la variabilidad y fragilidad de este tipo de servidores que determina una proporción elevada de enlaces rotos. Los sistemas de [urbiGIS](https://urbigis.com) exploran constantemente el catálogo para eliminar estos enlaces rotos, aunque en muchos casos no es sencillo separar los que son producidos por cambios en la estructura de capas del servidor de origen, de los que son producidos por caídas momentáneas del servidor o fallos de conectividad.

Los servicios que contiene el catálogo de [urbiGIS](https://urbigis.com) responden a dos tipos básicos: los servicios **raster** como WMS, WMTS, MapServer o ImageServer, que proporcionan una imagen del Mapa y los servicios **vector** como WFS, FeatureServer, Geojson, KML, GML y otros, que traen al cliente la geometría de sus elementos, unas veces con simbología asociada y otras en crudo. Los servicios vector, cuando su propietario así lo establece, son susceptibles de descarga de geometrías, con lo que adquieren la facultad de servir a los clientes de [urbiGIS](https://urbigis.com) para posteriores análisis o tratamientos. En los casos en que un servicio se publica tanto en formato imagen como vector, el catálogo de [urbiGIS](https://urbigis.com) presenta siempre por defecto su versión raster, dado que habitualmente tienen una visualización más ágil, pero si el usuario solicita su descarga el sistema de [urbiGIS](https://urbigis.com) verificará de forma automática si tiene una versión vector accesible y en ese caso la utilizará para descargar sus geometrías. Las descargará en formato SHP comprimido como un fichero ZIP en la carpeta de descargas del cliente.

El contexto de Mapas del buscador presenta por defecto todos los Mapas del catálogo a los que tenga acceso el usuario actual. Si el usuario es anónimo serán todos los Mapas con Licencia abierta en sus diferentes modalidades, si el usuario ha iniciado sesión con sus datos de acceso, añadirá además los Mapas privados de su Cuenta de [urbiGIS](https://urbigis.com) y los de las Cuentas en las que su Cuenta forma parte del Equipo de trabajo.

Hay varias formas de localizar un Mapa:

#### Método de Búsqueda sencilla

Seleccionando  el contexto de Mapas en la pestaña del buscador podremos realizar dos formas de búsqueda:

**Búsqueda por nombre**: al ir tecleando (a partir del tercer carácter) el nombre del Mapa se presentarán en la lista de resultados los que contengan ese texto en su nombre.

**Búsqueda gráfica**:  el menú desplegable del icono del pincho nos permite seleccionar cuatro modos gráficos: por un punto, por un rectángulo, por una forma libre o por un círculo. En estos tres últimos modos hay una limitación de superficie, no es posible buscar en áreas superiores a 1 km2. El sistema presentará en la lista de resultados todos los Mapas cuya extensión o territorio de referencia intersecten con esa geometría.

![](img/tutorial/Captura22.png)

#### Método de Búsqueda avanzada

Utilizando el icono de filtro \*\*![](img/tutorial/2.1.12-Busqueda-Avanzada-14.jpg) \*\*se despliegan las diferentes condiciones de filtro aplicables, condiciones que se suman a la de búsqueda por nombre.

En este modo avanzado podremos incluir tres conceptos de filtro: los Mapas que tengan uno o varios Territorios de referencia, los que tengan una o varias Cuentas propietarias o los que correspondan con uno varios temas. Todos estos criterios, incluido el nombre del Mapa, se aplican en la selección para afinar la búsqueda.

![](img/tutorial/Captura23.png)

#### Resultados

Una vez realizada la consulta los Mapas localizados se presentan de forma paginada en la **Lista de Resultados** situado en la parte inferior del panel de herramientas y que tiene los siguientes componentes:

**A) Control de orden**:  permite ordenar la lista de dos formas diferentes: cronológicamente colocando primero los más modernos o alfabéticamente por su nombre.

![](img/tutorial/Captura36.png)

**B) Control de Anulación**: el criterio actual de selección se puede eliminar utilizando el botón de anulación, el sistema volverá a presenta la lista completa de Mapas.

![](img/tutorial/Captura24.png)

**C) Controles de Selección**: permiten seleccionar varios territorios en la página actual de la lista. ¡Atención!: la selección se pierde al cambiar de página. La selección se puede realizar uno por uno utilizando el recuadro a la derecha de cada Mapa o de forma masiva utilizando el recuadro situado en el encabezado de la Lista:

![](img/tutorial/Captura37.png)

**D) Control de Carga en el Escritorio**: permite colocar los Mapas seleccionados en el Escritorio de forma que sean visibles de forma permanente (o hasta que se retiren o desactiven en el Escritorio)

![](img/tutorial/Captura38.png)

**E) Zoom**: haciendo clic sobre el Mapa en la Lista el sistema hará zoom a su extensión.

![](img/tutorial/Captura39.png)

**F) Menú de Opciones de Mapa**: cada Mapa en la lista tiene un menú de opciones que se despliega haciendo clic sobre el icono de menú (tres puntos) y que consta de las siguientes funciones

**![](img/tutorial/Captura40.png)1) Vista previa**: presenta el Mapa sin añadirlo al escritorio. Solo puede haber un Mapa en Vista previa en todo momento, por tanto al poner en Vista previa un Mapa se oculta el que estuviese antes. Para verlos superpuesto es preciso colocarlos en el Escritorio.

**2) Leyendas**: añade la Leyenda del Mapa al visor de Leyendas. Este visor puede ir acumulando las Leyendas de diferentes Mapas.

![](img/tutorial/Captura41-300x300.png)

**3) Metadatos**: presenta en el Panel de Datos las propiedades que el Mapa tiene en el Catálogo de [urbiGIS](https://urbigis.com) y las que proporcione su servidor de origen en el caso de que no esté servido directamente por [urbiGIS](https://urbigis.com).

**4) Copiar Acceso Directo**: coloca en el portapapeles la URL de acceso al Mapa. Arrancando [urbiGIS](https://urbigis.com) desde esa URL cualquier usuario que tenga acceso al Mapa  lo podrá visualizar sin necesidad de localizarlo en el Catálogo.