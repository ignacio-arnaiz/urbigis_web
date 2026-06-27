---
title: "Novedades 2019 en urbiThings"
date: 2019-02-01
---

Empezamos el año 2019 con muchas novedades, voy a hacer un breve repaso de las más importantes. Si aún no habéis visto urbiThings os invito a utilizarlo, creo que es muy útil, solo hay que entrar en <http://urbithings.com> y empezar a usarlo.

- **Territorios**

urbiThings tiene una base de datos de territorios (por ahora 529.142) y crece diariamente. Su intención es contener todas las piezas del mundo delimitadas con propósitos geográficos, políticos, administrativos o de protección. Sirve como base para la georreferenciación de datos espaciales. En 2019 hemos añadido la posibilidad de descargar sus geometrías. Como además los territorios tienen una jerarquía, no solo es posible descargar un territorio sino también todos sus territorios descendientes. Esto permite crear datasets espaciales a partir de hojas Excel que utilicen el code de territorio como campo de geocodificación.

- **Mapas**

El Catálogo de mapas de [urbiThings](http://urbithings.com) ya ha superado los 300.000 mapas. Nuestro objetivo es duplicar ese número a lo largo de 2019. Están publicados por 1.414 organizaciones y afectan a 5.125 territorios.

Cuando buscamos mapas y obtenemos una lista de resultados, tenemos tres nuevas opciones:

a) Obtener una Vista Previa: lo presenta sobre el mapa de forma provisional, en cuanto cambiamos de contexto o buscamos otro mapa lo elimina. De esta forma podemos decidir rápidamente si será un mapa útil para nosotros o no.

b) Obtener su Leyenda: en este aspecto también hay novedades. Si el mapa está servido desde [urbiThings](http://urbithings.com) la leyenda ha pasado a ser interactiva. No se limita a presentar una imagen estática, sino que cada ítem de la leyenda puede ser activado de forma separada.

c) Copiar su acceso directo: esta opción envía al portapapeles la URL del mapa. De esta forma podemos compartirla por correo o insertarla en un documento. Al hacer clic en ella o pegarla en un navegador se abrirá [urbiThings](http://urbithings.com) mostrando ese mapa. ¡Compartir un mapa ahora es muy fácil!.

Como antes, también podemos colocar el Mapa sobre el Escritorio marcando su checkbox y pulsando el botón **+**, de esta forma, aunque cambiemos de contexto o busquemos otros mapas, queda presente sobre nuestra «mesa de mapas».

Una vez colocado en el Escritorio, también hemos añadido la opción de copiar su acceso directo, pero hay una nueva opción aún más interesante: Descargar Entidades. Cuando se invoca, [urbiThings](http://urbithings.com) se ocupa de verificar la posibilidad de descargar la geometría del mapa. Si es posible porque su propietario la publica como WFS, WCS o Featureserver, creará un fichero SHP comprimido como ZIP. De esta forma podemos utilizarla (con las restricciones de licencia que marque su propietario) como base para crear nuevos datos espaciales. Si el propietario no la publica en formato vector descargable puede que si permita descargar la geometría con peticiones de getFeatureInfo y en ese caso [urbiThings](http://urbithings.com) nos permite descargar sus entidades de forma individual e ir agregándolas a un nuevo Conjunto de Datos.

Los usuarios registrados en [urbiThings](http://urbithings.com), (recuerde que el registro es gratuito y solo necesitamos una cuenta de correo) pueden incluir nuevos mapas asociados a su Cuenta. En esta tarea hay novedades:

a) Pueden incluir Servicios de Mapa OGC/WFS y REST/Featureserver. Los servicios REST suelen incluir un estilo propio, los WFS sólo llevan el estilo por defecto (suelen ser grises). En ambos casos urbiThings permite modificar el estilo y adaptarlo a nuestras necesidades. Esto supone que de un solo servicio podemos construir tantos mapas como queramos, cada uno con un estilo distinto.

b) Para construir el estilo ya están disponibles tres métodos: Símbolo único, Categorizado y Graduado. En este último se pueden establecer los rangos por Intervalo igual, por Cuantil, por Ruptura natural o por Desviación estándar y se pueden aplicar rampas de color configurables por el usuario. Las entidades puntuales se pueden representar por círculos, cuadrados, estrellas, triángulos, cruces o iconos raster (de estos últimos hay una amplia variedad). Con todas estas nuevas herramientas está terminado el conjunto básico de estilos. Estamos trabajando para construir nuevos métodos: mapas de calor, gráficos embebidos, burbujas, puntos de área proporcional…

Recuerde que las Cuentas dadas de alta en [urbiThings](http://urbithings.com) pueden disponer de un acceso propio a sus servicios como <http://urbithings.com/Melilla.maps,> <http://urbithings.com/Santiagodecompostela.maps> o <http://urbithings.com/Cuenca.maps>. Con las funciones de administración de mapas, esta cuentas pueden incluir mapas ya existentes en su sitio, crearlos a partir de Conjuntos de datos, ordenarlos por sus propios temas…

También hay novedades con las Selecciones de Mapas. La URL de una Selección guardada puede ser copiada en el portapapeles y al igual que en el Acceso Directo a un Mapa, se podrá compartir, de forma que el destinatario lo que abrirá no será un Mapa individual sino una selección de Mapas.

Se han incluido nuevos Mapas Base (Yandex, Tom Tom, Here…) e incluido la opción de habilitar la capa de Tráfico en todos los que dispongan de esa funcionalidad (Google, TomTom, Here…)

- **Conjuntos de Datos**

Se ha incluido la posibilidad de generar Conjuntos de Datos a partir de hojas Excel o CSV, utilizando varios campos para geoposicionar contra los servidores de direcciones disponibles en [urbiThings,](http://urbithings.com) o utilizando un campo code contra la base de territorios interna de [urbiThings](http://urbithings.com). Como siempre de cada Conjunto es posible generar tantos servicios de mapa como se necesiten.

Se están finalizando las funciones de Análisis Espacial de Conjuntos: disolver, buffer, unión, intersección, diferencia… Con ellas [urbiThings](http://urbithings.com) adquiere la mayoría de las funciones espaciales sobre vectores propias de un GIS de escritorio pero contenidas en un GIS en Cloud de uso general.

- **Inventarios**

Ya están preparados los Inventarios Base, donde se definen los Atributos mínimos que describen los elementos que forman los Inventarios de  Territorio, Administración, Planificación, Objetos, Derechos y Obligaciones. Con estos Inventarios Base se propone una normalización completa para la descripción de todos los elementos que componen nuestro entorno:

a) Territorio: contiene entidades referentes a los aspectos físicos y naturales del territorio, desde la geología o la topografía al clima.

b) Administración: contiene la entidades referentes a las divisiones administrativas, políticas o de protección propios de cada organización. (son entidades candidatas a formar parte de la base de Territorios de [urbiThings](http://urbithings.com))

c) Planificación: contiene la entidades que definen la evolución futura del territorio y las condiciones para su transformación

d) Objetos: contiene las entidades que identifican y describen los objetos artificiales existentes en el territorio.

e) Derechos: contiene las entidades que identifican y describen los derechos sobre el territorio y los objetos.

f) Obligaciones: contiene las entidades que identifican y describen las obligaciones sobre el territorio y los objetos.

Todos ellos contienen además elementos de Relación que establecen los vínculos que los unen y que forman la estructura territorial.

- **Próximos trabajos**

En los próximos meses, queremos que estén para el ultimo trimestre de este año, tendremos listas las funciones básicas para la gestión de los Inventarios:

a) Edición de Atributos: ya está en preproducción

b) Edición de Entidades: permite construir la geometría de cada entidad e informar los atributos que le corresponden. Ya está concluida la edición de geometrías

c) Edición de Relaciones: permite construir la geometría de cada relación, informar de los atributos que le corresponden e identificar los elementos a los que vincula

d) Edición de Operaciones: permite establecer las transacciones que servirán para el mantenimiento actualizado de los Inventarios

e) Ejecución de Operaciones: permite ejecutar las transacciones establecidas en la Operaciones

f) Gestión Documental: permite vincular documentos de cualquier clase a todos los elementos de [urbiThings](http://urbithings.com), incluidos documentos georreferenciados susceptibles de ser colocados en el Escritorio

f) Diseñador de Informes: permite diseñar informes específicos de explotación de los Inventarios

g) También estarán listas las funciones para crear y publicar servicios de Ubicación, bien basados en Conjuntos de Datos de [urbiThings](http://urbithings.com) o en servicios externos del tipo REST/Geocodeserver. Con ellas cualquier organización podrá publicar en urbiThings servicios de geoposicionamiento de sus activos o elementos.

h) La aplicación móvil de [urbiThings](http://urbithings.com) ya está casi terminada, en pocos días la subiremos para pruebas, naturalmente sus funciones son limitadas pero permite acceder a los Territorios, los Mapas y las Direcciones.

i) Estará finalizado el módulo de migración de Urbanismo en Red, que convertirá el Registro de Planeamiento de Urbanismo en Red en un Inventario de Planificación de urbiThings y permitirá sustituir por completo todo el entorno de aplicaciones de Urbanismo en Red y alcanzar plenamente sus objetivos iniciales.

Una vez finalizadas todas estas funciones [urbiThings](http://urbithings.com) será un sistema plenamente funcional para el mantenimiento colaborativo controlado de las transformaciones territoriales o de los Inventario de Activos de cualquier organización.

Ignacio Arnaiz Eguren

Director