---
title: "Mapas abiertos por supuesto, pero también accesibles desde urbiThings.com"
date: "2017-12-15"
excerpt: "La universalización de los servicios web de mapas, gracias a los estándares OGC, ha posibilitado una tendencia de crecimiento geométrico de los mapas y datos geográficos disponibles en muchas partes d"
---

La universalización de los servicios web de mapas, gracias a los estándares OGC, ha posibilitado una tendencia de crecimiento geométrico de los mapas y datos geográficos disponibles en muchas partes del mundo. En este momento hay miles de servidores de mapas y cientos de miles de mapas a nuestra disposición sobre multitud de aspectos.

Sin embargo estos servicios no siempre están disponibles:

- La dirección de sus servidores suele estar enterrada en portales web no siempre de forma clara y accesible, incluso en muchos casos el servicio está disponible pero no publicado.

- Los buscadores de servicios de las Infraestructuras de datos espaciales permiten localizar los recursos, pero sus bases de datos no suelen estar actualizadas y los criterios de indexación no están normalizados. Además en unos casos indexan al servidor en su conjunto, en otros a las capas individualizadas y en otros a grupos de capas.

- Muchas organizaciones que publican mapas no los consideran «estratégicos», por lo que su nivel de servicio es muy bajo. No invierten en comunicaciones, en hardware ni en equipos humanos que aseguren su disponibilidad permanente.

En muchos casos los contenidos no se actualizan debidamente:

- No se indican los metadatos mínimos para poder contrastar el grado de actualización y fiabilidad del dato, en realidad ni siquiera se indican los datos mínimos de la organización y la persona de contacto.

- Las capas publicadas no se actualizan o se utilizan estrategias indebidas. Para mí, la estrategia más adecuada en la utilizada en el Plan Nacional de Ortotofotografia de España: la última actualización siempre se llama igual (en este caso OI.OrthoimageCoverage «máxima actualidad») las versiones históricas se agregan como capas separadas. Por el contrario, suele pasar, que las nuevas versiones se agreguen con nombre diferentes por lo que si no estás avisado nunca sabrás si estás viendo el mapa más reciente.

- Como no hay una forma sencilla de avisar a los usuarios de las novedades, cuando se incorporan nuevos servicios deberán ser éstos quienes se ocupen de rastrear en los getcapabilities las diferencias o esperar que la organización responsable avise de alguna forma en sus portales web de esas novedades.

- La construcción interna del servidor en muchas ocasiones no ayuda a utilizar eficientemente las capas, suele haber problemas de agrupamiento, de nomenclatura, de capas provisionales o de trabajo que nunca se eliminan…

Para el usuario estándar no es sencillo ver simultáneamente capas procedentes de fuentes diversas, porque para ver las capas de una organización publicadora de mapas tiene que acudir a su visualizador, en el mejor de los casos podrá usar alguno de esos visualizadores que permita incluir capas externas, pero siempre es una operación poco eficiente. De otro modo debe utilizar aplicaciones de escritorio como svGIS, qGIS o ArcGis, que están pensadas para especialistas y además alguna es de pago. En fin, un conjunto de inconvenientes, que hacen complicado que las empresas o los ciudadanos de a pié lleguen a ver y utilizar estos servicios.

Desde [urbiThings.com](http://urbithings.com) estamos intentando aportar algunas soluciones a estos problemas:

- Montamos un Catalogo global accesible sin restricciones, de forma que sea posible disponer de un punto único de búsqueda y visualización de servicios. De la misma forma que los inmensos contenidos disponibles en Internet no serían accesibles sin buscadores como Google, [urbiThings](http://urbithings.com) pretende ser un medio global de acceso a los contenidos de mapas de Internet.

- Para que ese Catálogo sea lo más amplio posible tenemos dos estrategias: 1) nos esforzamos por explorar la red constantemente para descubrir nuevos mapas y actualizar los existentes y 2) invitamos a todos lo que  dispongan de servicios de mapas públicos a que sean ellos mismos quienes los incorporen al Catálogo.

- Para que una organización o una persona incorpore mapas al Catálogo no tiene más que solicitar el registro en[ urbiThings](http://urbithings.com) (es gratuito) y desde ese momento podrá añadir servicios de mapas al Catálogo (también es gratuito). Podrá establecer el alcance de la publicación: solo visible para el usuario, para los miembros de su organización, para las organizaciones con derechos de acceso a una unidad administrativa o para el público en general y los podrá vincular a temas estándar y a unidades administrativas de forma que luego sean fácilmente localizables.

- Si la organización no tiene los medios necesarios para publicar un servicio de mapas, [urbiThings](http://urbithings.com) pone a su disposición su plataforma de mapas. Solicite el registro en [urbiThings](http://urbithings.com) y desde ese momento podrá subir a la plataforma sus datasets o conjuntos de datos geográficos en formatos diversos; shape, kml, gml, json, imagen georreferenciada…o crearlos directamente con las herramientas de creación de datasets de[ urbiThings](http://urbithings.com). Mientras la organización no supere una capacidad de almacenamiento máxima y de número de servicios publicados, todo ello será gratuito. En el caso de que supere esos umbrales las tarifas aplicables estarán en el rango de las decenas de euros mensuales.

- Las organizaciones a partir de esos datasets podrán crear servicios de mapas y publicarlos en el Catálogo, tanto para su acceso desde urbiThings como desde cualquier otro sistema capaz de consumir servicios OGC.

En este momento [urbiThings](http://urbithings.com) está en fase de desarrollo, las funcionalidades expuestas está disponibles excepto la subida de datasets y la creación de servicios de mapas a partir de ellos. Esta funcionalidad estará disponible en las próximas semanas. En todo caso agradecemos la indicación de cualquier fallo de funcionamiento mediante un correo a info@urbithings.com
