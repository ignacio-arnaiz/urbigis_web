---
title: "Mapas de Datos Abiertos en urbiThings"
date: 2019-02-18
---

Los Datos Abiertos están siendo un aspecto importante de las estrategias de Transparencia de las Instituciones, de las  grandes Corporaciones y también de algunas empresas. Por ahora es una preocupación principalmente pública y todo Organismo de buen ver tiene su correspondiente página de Datos Abiertos. No siempre cumplen las expectativas que ponemos en ellas, en realidad casi nunca, pero sin duda existe un interés en demostrar la predisposición a compartir información. Creo que esta tendencia se incrementará en los próximos años y podremos empezar a penalizar a las instituciones poco transparentes.

Habitualmente las páginas de datos abiertos se organizan con un buscador: por nombre, tema, organización de origen, formato… En el caso de los formatos hay una considerable diversidad, los más habituales son CSV, GEOJSON, GPX, JSON, KML, KMZ, MDB, PDF, RDF, RSS, SHP, TXT, WMS, XML, ZIP… Un poco de todo, quizá se echa de menos un esfuerzo por normalizar los formatos. En el caso de España el portal público de datos abiertos estatal es <https://datos.gob.es> , donde se van reuniendo, ordenados por temas, todo lo que aportan las instituciones públicas del Estado. 

Cuando los ficheros compartidos contienen geometría se pueden visualizar gráficamente. Hay algunos sitios web de datos abiertos que en estos casos proporcionan la funcionalidad de abrir un mapa y verlos. Pero esta posibilidad no es muy habitual. Los sitios web de datos abiertos no suelen tener detrás la parafernalia suficiente para publicar mapas. Con la excepción de los ficheros  KML/KMZ porque estos formatos los puede presentar Google Maps de forma nativa. (Con esta estrategia Google se lleva el gato al agua y fuerza a que los datos se formateen en KML).

Cada día hay más información georreferenciada en los sitios de datos abiertos, y no solo como KML/KMZ, hay ficheros SHP, Geojson, WMS, WFS, GML, ECW, WCS…, todos ellos representables en un mapa. El futuro, sin duda, estará en los geoPackages, un formato de intercambio de datos espaciales que admite toda clase de información raster y vectorial sin limitaciones de tamaño ni complejidad de los datos.

Desde urbiThings nuestra intención en proporcionar a todas estas instituciones que publican información espacial y no pueden servirla en forma de Mapa, la posibilidad de permitir a sus usuarios de datos abiertos la visualización gráfica de estos ficheros, mediante dos estrategias:

La primera es como Conjuntos de Datos descargados en el repositorio de datos de urbiThings. Como vimos en el post anterior, es sencillo asignar geometría a ficheros que contienen referencia a entidades territoriales conocidas, tales como municipios, provincias, regiones, espacios protegidos y otras, o que contienen direcciones de calle que puedan ser interpretadas por un geocoder como Google, Bing, OSM y geocoders diversos propios de instituciones : callejeros, parcelarios… Esta opción almacena los datos en urbiThings. Para nosotros es genial porque controlamos la seguridad y disponibilidad del dato en todo momento. Pero no siempre las instituciones están de acuerdo en que sus datos residan fuera de sus sistemas y además, alcanzado un cierto volumen máximo de datos, nosotros tenemos que establecer un Plan de Costes, un coste muy pequeño pero un coste. A nosotros el almacenamiento nos cuesta y no tenemos otro remedio que repercutirlo en los usuarios que ocupan mucho espacio.

La segunda es como Servicios de Mapa que utilizan como fuente de datos los propios portales de datos abiertos. De esta forma los datos sólo están en el portal del publicador. urbiThings se limita a proporcionar un servicio que genera un mapa leyendo esos datos remotos y por ello no ocupa su espacio de almacenamiento con esos datos. En todo caso incrementa la carga de sus servidores de mapas para prestar este servicio. Por ahora esta opción no tiene coste alguno. Cualquier organización que disponga de un servidor de datos abiertos con ficheros georreferenciados puede generar en urbiThings un Servicio de Mapa y publicarlo en el Catálogo, junto con los más de 300.000 mapas que ya tiene urbiThings. Como el control del dato lo tiene la institución propietaria estamos un poco vendidos, ya que un cambio de nombre o formato del fichero, una nueva política de datos institucional, una modificación en la URL de descarga o una caída del sistema propietario, implican que el Mapa no se podrá ver por causas ajenas a urbiThings. Será un Mapa con enlace roto que los servicios de urbiThings en algún momento eliminarán.

Publicar mapas en urbiThings tiene la ventaja que se puede escoger cualquier mapa de fondo y superponer sobre los mapas servidos en ese mismo lugar por otras instituciones, no es preciso limitarse a verlo con Google Maps.

Pongamos un ejemplo utilizando datos del portal de datos abiertos de España, el de «Parcelas Feria San Fernando Cáceres 2017» publicado por el Ayuntamiento de Cáceres (<https://datos.gob.es/es/catalogo/l01100377-parcelas-feria-san-fernando-caceres-2017>) con licencia CC-BY. Si copiamos el enlace al fichero geojson (http://opendata.caceres.es/GetData/GetData?dataset=om:Parcela&format=geojson) en el constructor de Servicios de Mapa de urbiThings:

![](https://info.urbigis.com/wp-content/uploads/2019/02/ver-mapa.png)

Pulsando el botón de «Ver Mapa», urbiThings presentará el mapa en su Escritorio:

![](https://info.urbigis.com/wp-content/uploads/2019/02/mapas2.png)

Si indicamos todos los datos precisos: nombre, territorio, organización propietaria, tipo de licencia, tema del datos… y pulsamos «Guardar» se añadirá al Catálogo un nuevo Mapa:

![](https://info.urbigis.com/wp-content/uploads/2019/02/parcelas.png)

Un Mapa que será directamente accesible desde su enlace propio: <http://urbithings.com/fadc6f6d-d6ca-4251-8a6e-1131705829b6.ms> y superponible sobre cualquier otro mapa, en la imagen siguiente sobre la ortofoto de Google y el planeamiento de 2010 de Cáceres:

![](https://info.urbigis.com/wp-content/uploads/2019/02/ejemplo.png)

En otro post haré una pequeña explicación de cómo modificar la simbología del Mapa que acabamos de crear. Por supuesto podemos volver a utilizar el mismo acceso a ese geojson para crear otros Servicios de Mapas con simbología ligada a los datos de sus objetos contenidos. De la misma forma podemos añadir al Catálogo datos en formatos WFS, WMS, REST(ImageServer), REST(MapServer), REST(FeatureServer), SHP, KML, KMZ, GML… Y siempre sin coste, ya que los datos no se guardan en urbiThings, se mantienen en el repositorio de datos de la entidad que los publica.

Ignacio Arnaiz Eguren

Director