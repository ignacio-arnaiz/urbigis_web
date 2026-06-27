---
title: "Escritorio"
---

#### Descripción

El Escritorio de [urbiGIS](https://urbigis.com) representa la mesa donde se colocan todos los distintos elementos geográficos de trabajo: Territorios, Mapas, Geoinformes, Conjuntos de Datos, Instrumentos o Participaciones. En unos casos sólo para su representación, en otros para su edición según el componente de [urbiGIS](https://urbigis.com) que los haya colocado en él. Cuando los diferentes paneles de Módulos, Herramientas o Datos se colapsan, todo el espacio de la pestaña del navegador queda ocupado por el Escritorio:

![](img/tutorial/Captura68.png)

Su contenido se controla desde la pestaña “Escritorio” del panel de Herramientas, excepto el mapa de fondo y el territorio activo que se controlan desde los botones correspondientes de la barra principal de encabezado.

La pestaña de control del Escritorio se organiza en “Nodos” raíz de los que parten subnodos con los diferentes elementos colocados según su naturaleza o estado. Los nodos raíz principales son los siguientes:

- **Nodo de Edición**: es un nodo por defecto, presenta los elementos geográficos editables por el usuario que pueden proceder de Conjuntos de Datos, Instrumentos o Participaciones contenidas en el repositorio de urbiGIS, de Conjuntos de Datos creados exnovo o de Conjuntos de Datos importados desde ficheros locales o servicios remotos vectoriales.

**Nodo de Selección**: también es un nodo por defecto, presenta los territorios y mapas que el usuario haya seleccionado como resultado de búsquedas. La selección es susceptible de ser guardada para recuperar posteriormente de forma rápida una determinada composición de mapas y puede ser compartida con otros usuarios. Puede tener tres subnodos:

- **Subnodo de Territorios**: contiene los Territorios que se hayan colocado en el Escritorio desde el panel de buscar Territorios
- **Subnodo de Mapas**: contiene los Mapas que se hayan seleccionado desde otros nodos del Escritorio
- **Subnodo de Geoinformes**: contiene los Geoinformes que se hayan seleccionado desde otros nodos del Escritorio
- **Subnodo de Encuadres**: contiene las extensiones guardadas por el usuario a determinadas zonas de su interés

**Nodos de Territorio**: se forman al colocar sobre el escritorio Mapas, Conjuntos, Instrumentos o Geoinformes, se crearán tantos nodos de Territorio como diferentes territorios de referencia tengan los elementos colocados. Pueden tener cuatro subnodos:

- **Subnodo de Mapas**: contiene los Mapas que se hayan colocado en el Escritorio desde el panel de buscar Mapas o por estar ligados a Territorios, Conjuntos o Instrumentos
- **Subnodo de Geoinformes**: contiene los Geoinformes que se hayan colocado en el Escritorio desde el panel de buscar Geoinformes
- **Subnodo de Instrumentos**: contiene los Instrumentos que se hayan colocado en el Escritorio desde el panel de buscar Instrumentos
- **Subnodo de Conjuntos de Datos**: contiene los Conjuntos que se hayan colocado en el Escritorio desde el panel de buscar Conjuntos
- **Nodo de Cuenta:** se forma cuando el acceso a urbiGIS se ha realizado a través de un Geoportal de Cuenta, coloca en el Escritorio todos los servicios de Mapas, Conjuntos, Geoinformes o Instrumentos que esa Cuenta ofrezca con alguno de los tipos de Licencia de datos públicos. Contiene los mismos subnodos que los nodos de Territorio.

Cada tipo de elemento tiene un icono adaptado a su naturaleza:

- Territorio ![](img/tutorial/ambit-300x300.png)
- Carpeta de Mapas ![](img/tutorial/mapservices-300x300.png)
- Mapa ![](img/tutorial/map-300x297.png)
- Carpeta de GeoInformes ![](img/tutorial/dataservices-300x300.png)
- GeoInforme  ![](img/tutorial/report-225x300.png)
- Conjuntos de Datos ![](img/tutorial/dataset-300x300.png)
- Instrumento ![](img/tutorial/instrumentos-234x300.png)
- Carpeta de Temas ![](img/tutorial/folder-300x232.png) (sirven para agrupar los elementos)

La sucesiva incorporación de elementos al Escritorio durante una sesión de uso de urbiGIS puede llegar a complicar su utilización y comprensión. Por eso se recomienda que tenga un contenido lo más sencillo posible. Un escritorio típico es el siguiente:

![](img/tutorial/Captura20-1.png)

(Nota: los elementos en color rojo corresponden a servicios que no han podido ser recuperados desde su servidor, puede ser porque ya no existen, porque su servidor está en baja o porque hay un fallo de conectividad)

#### Funciones generales

En el Escritorio se superponen los diferentes elementos espaciales de trabajo, organizados en sus nodos. Cada elemento tiene un menú de opciones de tres puntos que determina cuáles son las acciones posibles según su naturaleza. Su funcionamiento se realiza mediante las siguientes acciones básicas:

**Colocar elementos**: siempre que se localizan mediante sus correspondientes funciones de búsqueda e identificación un Territorio, un Mapa, un Geoinforme, un Instrumento, un Conjunto de Datos o unas Anotaciones de Participación, existe una opción para colocarlo sobre el Escritorio. En unos casos se visualizarán de forma inmediata por ejemplo si es un Mapa, en otros será preciso especificar qué componentes queremos visualizar, por ejemplo si es un Instrumento. Otros elementos no son directamente visualizables sino que la colocación en el Escritorio hace posible su consulta gráfica como es el caso de los Geoinformes. Cada tipo de elemento se coloca automáticamente en alguno de los nodos del panel de control antes descritos.

**Retirar elementos**: Para evitar una acumulación excesiva de elementos sobre el Escritorio todos los elementos retirables tienen una opción para ejecutarlo

**Reordenar elementos**: la visualización de los elementos contenidos en el Escritorio se realiza empezando por los que estén colocados en la parte inferior de la estructura de nodos, si los elementos son masivos y opacos irán tapando a los elementos anteriores, si no lo son dejarán entrever mejor o peor lo que tienen debajo.  Por ello la lectura y comprensión adecuada de todo lo que está colocado en el Escritorio exige evaluar de forma adecuada el orden de representación y la naturaleza y opacidad de cada capa. No siempre es posible reordenar los contenidos del Escritorio, los nodos raíz no se pueden mover, pero los nodos Carpeta, Mapa, Geoinfome, Conjunto o Instrumento se pueden reordenar dentro de su nodo padre. Para reordenar un elemento se hace clic y arrastrar hasta su posición de destino o se utilizan las opciones de “Subir” y “Bajar” si están habilitadas.

**Activar y Desactivar elementos**: aunque un elemento esté colocado en el Escritorio no será visible sobre el Mapa o susceptible de ser consultado mientras no tenga activada su casilla de estado. Las casillas se pueden activar o desactivar una a una o utilizar las opciones de activación masiva en los menús de opciones de sus nodos padre.

**Opacidad**: todos los elementos susceptibles de ser visualizables tienen en su menú de opciones un control del índice de Opacidad en forma de una barra horizontal deslizable que tiene como mínimo 0 y en este caso es completamente transparente y como máximo 1 y en este caso es completamente opaco. Lo normal que la opacidad sea 1, aunque en el caso de los Mapas y Colecciones de Mapas se puedan establecer por defecto valores intermedios de Opacidad, de forma que cuando se colocan en el Escritorio ya traigan consigo ese valor.

**Zoom**: cada elemento contenido en urbiGIS está situado sobre un Territorio y suele tener una extensión, a modo de caja espacial que lo contiene, las opciones de Zoom lo que hacen es acercar el mapa a una de las dos opciones.

**Metadatos**: ofrece en el Panel de Datos las propiedades y características del elemento correspondiente, pueden ser aportadas por la base de datos de urbiGIS o por el servidor remoto donde se aloje ese servicio que en el caso de los servicios OGC será la respuesta a una consulta getfeatureinfo y en los servicios REST será la respuesta a una consulta identify.

**Deslizar**: si el elemento tiene visualización gráfica como los Mapas, los Conjuntos de Datos, los Territorios o las Entidades de un Instrumento, la opción de Deslizar presenta una línea vertical en el Escritorio, con el icono ![](img/tutorial/2.7-Deslizar-Mapa-2.jpg) que nos permite deslizar a derecha e izquierda, ocultando o presentado el elemento según lo vamos moviendo. La opción “Ocultar Deslizar” desactiva la línea vertical.

![](img/tutorial/2.7-Deslizar-Mapa-1-1.jpg)

#### Funciones específicas del Nodo de Edición

**Commutar edición**: activa o desactiva el estado de edición de un Conjunto de Datos, al activar la edición se abrirá el Módulo de Conjuntos de Datos en el Panel de Módulos, presentando la lista de elementos que contiene ese Conjunto. Si la edición está activa presentará el icono ![](img/tutorial/Captura69-300x284.png) y se podrán utilizar de forma indistinta las herramientas de edición gráfica del Panel de Herramientas o las opciones de Menú de edición del Conjunto de Datos en el Módulo. Véase el tema de [Edición de Conjuntos de Datos](javascript:htLoadSlug('editar-conjuntos-de-datos')).

**Guardar**: actualiza el Conjunto de Datos en edición dentro de la Base de Datos o crea un Conjunto nuevo. El Conjunto se puede guardar como un fichero SHP comprimido en ZIP dentro del sistema local y en este caso sólo se necesita indicar su nombre, o como un Conjunto de Datos dentro de urbiGIS y en este caso es preciso indicar además su Territorio de referencia, el Tema Estándar y modo de Licencia de Uso.

![](img/tutorial/2.3.b.9-guardar-geometrias-4.jpg)![](img/tutorial/2.3.b.9-guardar-geometrias-3.jpg)

**Estilo**: establece la simbología de representación del Conjunto de Datos. Esta asignación de simbología no es permanente, solo se aplica mientras dure la sesión de edición. Véase el Tema de [Estilos](javascript:htLoadSlug('estilos'))

**Limpiar**: elimina todos los elementos geométricos existentes en el Conjunto de Datos

**Reiniciar**: además de eliminar todos los elementos geométricos elimina también la estructura de datos del Conjunto de Datos

#### Funciones específicas del Nodo de Selección

**Guardar Selección**: los Mapas añadidos en el Escritorio se pueden mover a la carpeta de Selección, de forma que se simplifique el manejo de las capas que el Usuario use con más frecuencia. Una vez que el usuario tiene en su carpeta de Selección los mapas que necesita le será más sencillo reordenarlos, fijar sus transparencias y guardar esta selección, de forma que en cualquier momento posterior pueda recuperar esta composición. La Selección se puede guardar como nueva o reemplazar alguna ya existente. Cada Selección guarda los siguientes elementos:

El mapa base actualmente en uso y su nivel de transparencia

Los servicios de Mapa y Datos que se hayan movido a la carpeta de “Selección”

El orden de visualización y el nivel de transparencia de cada mapa.

El encuadre actual del mapa

![](img/tutorial/Captura70.png)

**Cargar Selección**: las Selecciones del usuario guardadas en la base de datos se pueden abrir en todo momento para colocar sus Mapas en el Escritorio. Además se pueden eliminar, importar selecciones desde ficheros de texto, exportar selecciones a ficheros de texto y compartir su URL como una ventana de navegador o como un ventana embebida.

![](img/tutorial/Captura71.png)![](img/tutorial/Captura72.png)

**Añadir Encuadre**: los encuadres fijan con un nombre la extensión actual del Mapa para poder hacer zoom a ellos en otro momento. Al añadirse generan un subnodo de·Encuadres dentro del nodo de Selección con tantos items como cookies de Encuadres existan en el perfil actual de la máquina cliente. Cada Encuadre tiene a su vez un menú de opciones para hacer zoom a su extensión o para Retirarlo del Escritorio, esta retirada implica la eliminación de la cookie por lo que no volverá a aparecer en sesiones posteriores de ese usuario.

![](img/tutorial/Captura73.png)![](img/tutorial/Captura74.png)

Los administradores de Geoportales pueden seleccionar un Conjunto de Datos como fuente de Encuadres para su Geoportal, en este caso los usuarios podrán utilizar los Encuadres predefinidos por el administrador. Para generar estos conjuntos el administrador creará un Conjunto nuevo asignado al Tema Estándar “Encuadres” y dibujará un polígono con la extensión que necesite para cada Encuadre asignándole su nombre en un campo de texto “name”. Una vez ligado al Geoportal todos sus usuarios podrán utilizarlos y crear otros propios.

#### Funciones específicas de los Nodos de Territorio

**Crear Máscara**: genera un Conjunto de Datos temporal que abarca todo el mundo excepto el hueco formado por el Territorio. Permite resaltar un territorio de todo su entorno. El Conjunto máscara se agrega al nodo de Edición donde puede ser tratado como cualquier otro Conjunto de Datos. Tiene una opción específica para cambiar su nombre por defecto.

**Exportar**: (sólo existe en el subnodo de Territorios dentro de Selección) guarda la delimitación del Territorio en un fichero SHP comprimido como ZIP en la carpeta de descargas del cliente.

#### Funciones específicas de los Nodos de Mapa

**Leyendas**: presenta la leyenda del Mapa en un diálogo separado que va acumulando las leyendas que se soliciten, si el mapa está generado a partir de un Conjunto de Datos vectorial de urbiGIS por el método “Categorizado” la leyenda es interactiva de forma que el usuario puede activar o desactivar sus elementos.

![](img/tutorial/Captura75.png)

**Seleccionar**: mueve el Mapa al nodo de Selección

**Extraer de la Selección**: (sólo cuando el mapa está en el subnodo de Mapas de la Selección) devuelve el Mapa al nodo de Territorio o de Cuenta de donde partió.

**Copiar Acceso Directo**: envía al portapapeles la URL del Mapa para que pueda ser compartida

**Descargar Entidades**: realiza una petición al servidor del Mapa para descargar sus datos espaciales. La descarga solo podrá efectuarse si ese servidor acepta este tipo de peticiones.

#### Funciones específicas de los Nodos de Instrumento

**Mostrar Instrumento**: presenta en el mapa la delimitación del Instrumento

**Colocar Entidades**: presenta en el mapa las Entidades por Grupos de Entidad

**Copiar identificador**: copia en el portapapeles el UUID del Instrumento

**Documentos**: presenta en un diálogo separado los Documentos adjuntos al Instrumento

#### Funciones específicas de los Nodos de Conjunto de Datos

**Descargar como Fichero**: cuando el Conjunto es vectorial guarda en la carpeta de Descargas del cliente un fichero SHP comprimido como ZIP del Conjunto de Datos.

**Descargar como Dibujo**: cuando el Conjunto es raster guarda en la carpeta de Descargas del cliente un fichero GEOTIFF con la imagen.

**Documentos**: presenta en un diálogo separado los Documentos adjuntos al Conjunto.

**Datos:** si el Conjunto es vectorial abre el módulo de Conjuntos de Datos para la visualización de sus elementos y presenta su entidades en el Escritorio abriendo un nodo para el  Conjunto en el nodo de Edición del Escritorio.

**Cargar Mapas**: abre el buscador de Mapa filtrando los que pertenecen al Conjunto.