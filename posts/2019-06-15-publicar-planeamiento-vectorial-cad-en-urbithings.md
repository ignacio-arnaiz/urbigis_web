---
title: "Publicar planeamiento vectorial CAD en urbiThings"
date: "2019-06-15"
excerpt: "La planificación territorial y urbana, en gran parte de los territorios del mundo, se está realizando con sistemas CAD. Esto es así porque para los técnicos redactores no es sencillo asumir la complej"
---

La planificación territorial y urbana, en gran parte de los territorios del mundo, se está realizando con sistemas CAD. Esto es así porque para los técnicos redactores no es sencillo asumir la complejidad que supone acometer estos trabajos con sistemas GIS. En Arnaiz Urbimática somos muy conscientes de esta situación, ya que hemos intervenido en la conversión de la planificación urbana a GIS de más de 1.000 municipios españoles y algunos de fuera de España.

Los planes construidos con CAD normalmente se publican como documentos PDF. De esta forma el equipo redactor entrega a su cliente una documentación descargable desde Internet, firmable digitalmente y accesible desde cualquier plataforma. Todo son facilidades. Pero esa publicación en Internet es como «documento», pero no como «conjunto de datos» GIS y por tanto no es susceptible de servir como base para modificaciones o análisis posteriores.

Este es uno de los problemas que en su momento abordó el programa de Urbanismo en Red y que ahora (de forma muy mejorada) intenta resolver urbiThings mediante sus Instrumentos transaccionales Pero es un salto tan grande en la metodología de producción de planes que dificulta enormemente su implantación.

Mientras tanto, la realidad es que los planes CAD no son sencillos de publicar como conjuntos de datos vectoriales y mucho menos como servicios WMS/WFS estándar. Si el organismo planificador decide publicar el Plan en un sistema GIS, se tendrá que enfrentar a una tarea compleja y costosa. En esta entrada del blog voy a poner un ejemplo de cómo urbiThings simplifica de forma extraordinaria esta tarea. Para ello vamos a utilizar el recientemente publicado IOP (Instrumento de Ordenación Provisional) de Abegondo, un municipio cercano a A Coruña, cuyos resultados (también provisionales), ya se pueden observar en http://urbithings.com/abegondo.maps.

La imagen siguiente es una hoja del IOP de Abegondo. En un único documento se han superpuesto diversos aspectos del Plan y hay que alabar la excelente legibilidad del resultado. Sin duda las herramientas CAD permiten construir salidas gráficas de una enorme calidad. Pero en un sistema GIS no es posible, o no es recomendable, agrupar tanta información en un plano. Es preciso desglosar la información en sus componentes esenciales. Si el sistema CAD está bien construido (y este es el caso del IOP de Abegondo) será relativamente sencillo conseguirlo.

Para hacerlo nos fijaremos en la estructura de la Leyenda, porque será ella quien nos guíe sobre la composición del plano, la vemos más ampliada en la imagen siguiente:

La leyenda agrupa cada aspecto del plano en distintos cajetines: construcciones, clasificación, ordenanza, dotaciones, xestión (aún vacío), afecciones y catálogo. En la mayoría de los Planes, cada uno de estos componentes formaría un plano separado. En Abegondo, el redactor ha conseguido concentrarlos en un único plano. Aunque la información digital que ha servido para construirlo realmente está separada siguiendo el mismo criterio. Podemos comprobarlo porque el equipo redactor del IOP (a través del Ayuntamiento) nos ha proporcionado sus ficheros CAD. En la imagen siguiente se puede ver la relación de ficheros que componen el Plan:

Los podemos agrupar por su contenido:

- Un dibujo de base que contiene la cartografía de referencia (Abegondo_base.dwg)

- Los ficheros de Afecciones (de Infrestructuras, Naturales y de Patrimonio)

- Los Equipamientos y Dotaciones

- Los ficheros de Catálogo y Protecciones

- Los ficheros de Clasificación y Ordenación

- Los ficheros de Tipología edificatoria, Instalaciones, Ruido…

La primera fase es extraer la información vectorial de los ficheros DWG, hay muchas aplicaciones disponibles en la Red, en este caso he utilizado «[ODA File Converter](https://www.opendesign.com/guestfiles/oda_file_converter)» que nos permite convertir en DXF una carpeta completa. Si los ficheros CAD están bien formados se podrán extraer todos sus puntos, líneas y polígonos, habitualmente identificados por su layer. En este caso no ha habido ningún problema, los ficheros DXF resultantes nos han proporcionado todas las entidades geométricas contenidas en el plano. En Abegondo no ha habido problemas pero en esta operación puede haber algunos muy habituales:

- Que la denominación de los ficheros no responda a su contenido. En este caso habrá que identificar sus entidades por comparación con el PDF, un trabajo tedioso.

- Que los ficheros CAD contengan más información que la grafiada en el Plano, si el redactor no ha tenido cuidado es muy probable que no podamos identificarla

- Que los elementos auxiliares del plano (recuadros, leyendas, logos etc) no tengan una identificación separada, ello supone que los DXF deberán ser editados para eliminarlos porque ya no tienen sentido en una publicación web.

- Que en los ficheros CAD se hayan utilizado componentes «hatch raster» que siempre dan problemas para extraerlos como contornos en DXF.

- Que existan elementos duplicados. En CAD no hay un control estricto de los elementos que componen el plano, mientras el resultado gráfico sea correcto, es muy habitual que un elemento esté duplicado. En este caso es preciso identificarlos en GIS y eliminarlos, de lo contrario cuando un usuario haga clic sobre ellos aparecerán duplicados.

- Que se utilicen geometrías lineales y poligonales de forma simultánea para representar un único elemento, normalmente porque se requiere utilizar un símbolo de un relleno y un símbolo de borde. En GIS esto se resuelve con una única geometría poligonal. En este caso hay que verificar que podemos eliminar todos los elementos lineales sin pérdida de información.

- Si la información está en ED50 hay que tener la precaución de utilizar componentes de NTV2 en QGis para asegurar la precisión de la transformación a WGS84 ya que urbiThings utiliza los algoritmos estándar de transformación que no funcionan bien.

En este caso hemos tenido pocos problemas, con QGIS se han podido extraer y convertir en SHP todos los datos necesarios:

El siguiente paso es importar los SHP resultantes (comprimido cada uno en un fichero ZIP) en urbiThings, creando un Conjunto de datos con cada uno:

Una vez importados creamos un servicio WMS de mapa en cada Conjunto de datos utilizando las herramientas de estilo de urbiThings:

El resultado es un grupo de mapas donde cada uno representa su correspondiente cajetín del plano PDF:

Un resultado que intenta ser lo más semejante posible al grafiado en el plano PDF, pero que al mismo tiempo es muy diferente:

- Cada componente del mapa forma una capa separada, por eso es posible apagar o encenderlas por separado

- Es posible reordenar las capas de forma que objetos que en el PDF están «debajo» tengan otra posición, esto facilita la lectura de capas superpuestas en un mismo punto

- No todos los estilos utilizados en el CAD son trasplantables al GIS por lo que hay diferencias inevitables de simbología

- La leyenda ha dejado de ser una parte integrante del Plano para ser una ventana flotante que solo contiene los significantes de una capa.(cada cajetín del plano PDF ahora es una capa)

Toda la operación ha supuesto cuatro horas de trabajo. El resultado es un Plan completo en CAD publicado como GIS en una plataforma Cloud sin costes y con enormes ventajas:

- Los Conjuntos de Datos son descargables en formato SHP

- Los Servicios de Mapa son usables como servicios WMS desde cualquier plataforma

- De cada Conjunto de Datos es posible crear Mapas con estilos diferentes

- Los documentos originales del Plan son adjuntables a los Conjuntos de Datos o al Instrumento de Planificación y descargables desde la plataforma

- Los Conjuntos y Mapas se pueden organizar en carpetas estructuradas a gusto de la organización publicadora

- A partir de los Conjuntos de datos creados es posible crear nuevos Conjuntos mediante operaciones de geoprocesamiento (Intersección, Unión, Dissolve…)

 

Ignacio Arnaiz Eguren

Director
