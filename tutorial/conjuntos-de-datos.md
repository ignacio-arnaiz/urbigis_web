---
title: "Conjuntos de datos"
---

Son colecciones de datos espaciales que se han creado con las herramientas de dibujo de [urbiGIS](http://urbiGIS.com/), se han importado de un fichero espacial o se han construido mediante geoprocesos.

Para [urbiGIS](http://urbiGIS.com/) existen dos tipos de conjuntos de datos:

- Raster: aquellos integrados por imágenes representadas en celdas regulares de una cuadrícula. Solo se pueden crear por Importación de una imagen georreferenciada.
- Vectoriales: aquellos cuya componente espacial se basa en la representación mediante vectores de objetos gráficos (polígonos, líneas y puntos).

#### Panel de Conjuntos

El Módulo de Conjuntos de Datos presenta la relación de todos los asignados a la Cuenta del Usuario mas aquéllos que están asignados a las Cuentas de las que el usuario es miembro de su Equipo de Trabajo:

![](img/tutorial/Captura91.png)

Se presenta como una lista paginada donde cada Conjunto presenta sus datos y composición y da acceso a sus Mapas, Documentos y Localizadores. Dispone de un menú principal de opciones desde el que se pueden efectuar las siguientes operaciones:

![](img/tutorial/Captura92.png)

#### Añadir Conjuntos

Genera un nuevo Conjunto de Datos de tipo vector presentando una ficha de datos:

![](img/tutorial/Captura93.png)

Los campos marcados con un asterisco son obligatorios, si se marca la opción de “Agregar al Escritorio por defecto” este conjunto se colocará en el Escritorio en el geoportal de la Cuenta. Los campos del Conjunto pueden ser renombrados, eliminados o añadidos posteriormente.

También se puede crear un nuevo Conjunto poniendo en Edición el “Nuevo Conjunto de Datos” del nodo de Edición en el Escritorio, o simplemente seleccionando una herramienta de Dibujo de la pestaña de Herramientas de Edición. En ambos casos el panel de datos de nuevo Conjunto se presentará si se opta por guardar el nuevo Conjunto en urbiGIS.

#### Importar desde archivo

Permite crear un Conjunto a partir de un fichero local raster o vector. Si el fichero no contiene información sobre su proyección, el sistema solicitará un código EPSG válido. El nombre del Conjunto no es una clave primaria, por tanto para una misma Cuenta pueden existir dos Conjuntos con el mismo nombre. Para evitar confusiones verifique antes que no va a generar nombres duplicados.

Se pueden importar ficheros raster en los siguientes formatos:  JPEG (*.jpeg (jpw,prj,aux.xml)), JPG (*.jpg (jpw,prj,aux.xml)), PNG (*.png (pgw,prj,aux.xml)), TIF (*.tif (tfw,prj,aux.xml)), TIFF (*.tiff (tfw,prj,aux.xml)), GeoTIFF (*.tif) y ECW (\*.ecw).

Y vector en los siguientes formatos:  GeoPackage (*.gpkg), Shapefile ESRI(*.shp (*.zip)), Shapefile ESRI (*.shp (cpg,dbf,idx,prj,qpj,sbx,sbn,shp.xml,shx)), Keyhole Markup Language (*.kml), Keyhole Markup Language (*.kmz), Geography Markup Language GML (*.gml), GeoJSON (*.geojson), EsriJSON (*.json) y geo (*.geo)

Además se pueden importar tablas Excel (*.xlsx), Excel 97-2003 (*.xls) y csv (\*.csv). En estos casos será necesario obtener la geometría de cada elemento mediante dos opciones: que el fichero contenga columnas con datos identificables coordenadas o que contenga columnas con datos que se pueden georreferenciar con un Localizador.

En el primer caso el sistema nos solicitará las columnas origen de las coordenadas x e y:

![](img/tutorial/Captura96.png)

En el segundo caso el sistema nos solicitará las columnas origen de los datos a enviar el Localizador y cual de los Localizadores activos será utilizado, recuerde que si va a utilizar algún Localizador diferente de los Localizadores “base” deberá buscarlo y activarlo previamente en la pestaña de Localizadores del Buscador.

![](img/tutorial/Captura95.png)

El sistema intentará georreferenciar los elementos de la tabla solicitándolos al Localizador, los que no encuentre los mostrará en el Panel de Datos para su revisión.

#### Construir por Integración

Utiliza tablas de dos bases de datos locales o remotas, una aporta la geometría y otra aporta datos alfanuméricos utilizando un campo de unión. Dispone de un servicio de actualización que refresca el Conjunto de Datos de forma periódica para reflejar los cambios de las tablas de origen, así como de un informe de los casos huérfanos en cada tabla.

#### Construir por Geoproceso

Crea un Conjunto a partir de otros Conjuntos mediante operaciones de análisis espacial. Las operaciones disponibles son las siguientes:

**Intersección**: el Conjunto de Datos resultante combina las entidades del Conjunto de Entrada que solapan con las del Conjunto Operacional y contendrá todos los campos existentes en ambos Conjuntos.

**Zona de Influencia**: el Conjunto de Datos resultante contiene nuevos polígonos rodeando las entidades del Conjunto de Entrada a la distancia marcada. Si la distancia es positiva los polígonos creados serán exteriores a los existentes, si es negativo serán interiores a los existentes. La distancia puede estar definida en un campo del Conjunto de Entrada.

**Polígonos a Punto**: elConjunto de Datos resultante se construye creando entidades puntuales dentro de cada polígono del Conjunto de Entrada. Los atributos del Conjunto resultante son los mismos que los del Conjunto de entrada.

**Combinación**: el Conjunto de Datos resultante es la suma de todas las entidades contenidas en los Conjuntos de entrada que se señalen y cada entidad tendrá todos los campos existentes en los Conjuntos de entrada.

**Recorte**: el Conjunto de Datos resultante contiene las entidades recortadas del Conjunto de Entrada que solapan con las del Conjunto Operacional y contendrá solo los campos existentes en el Conjunto de entrada.

**Diferencia**: el Conjunto de Datos resultante contiene las entidades recortadas del Conjunto de Entrada que no solapan con las del Conjunto Operacional.

**Disolver**: el Conjunto de Datos resultante se construye fusionando las entidades adyacentes del Conjunto de entrada que tengan un valor común para los campos señalados. Si no se indica ningún campo fundirá todas las entidades adyacentes.

**Recuento de puntos por polígono**: realiza un recuento de los puntos del conjunto operacional incluidos en cada polígono del conjunto de entrada añadiendo un campo “count” en el conjunto de resultado, que tendrá tantos polígonos como el de entrada. Si indica una distancia de tolerancia moverá los puntos del conjunto operacional dentro del polígono más cercano del conjunto de entrada según la distancia de tolerancia.

**Multiparte a Monoparte**: el Conjunto de Datos resultante contendrá una entidad separada para cada una de las partes de aquéllas entidades que estén compuestas de varias partes. Los campos de cada parte serán idénticos.

**Líneas a Polígonos**: el Conjunto de Datos resultante se construye creando entidades poligonales a partir de las áreas cerradas de líneas del Conjunto de entrada. Los atributos del Conjunto resultante son los mismos que los del Conjunto de entrada.

**Reparar geometría**: verifica la geometría de las entidades existentes en el Conjunto de entrada y corrige los defectos que existan.

**Diferencia simétrica**: el Conjunto de Datos resultante contiene las entidades recortadas del Conjunto de Entrada y del Conjunto Operacional que no se solapan entre ellas y contendrá todos los campos existentes en ambos Conjuntos.

Para establecer los Conjuntos de Entrada y Operacional hay un buscador de Conjuntos por su nombre con el que se añaden Conjunto a una lista:

![](img/tutorial/Captura97.png)

La lista de Conjuntos encontrados se utiliza para seleccionar de entre ellos a los Conjuntos de Entrada y Operacional:

![](img/tutorial/Captura98.png)

O formar la Lista de Conjuntos Combinar:

![](img/tutorial/Captura99.png)