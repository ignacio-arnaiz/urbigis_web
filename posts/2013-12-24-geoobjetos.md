---
title: "GeoObjetos"
date: "2013-12-24"
excerpt: "En este blog soy un poco reiterativo  a la hora de describir mi visión de cómo gestionar el mundo. A lo largo de varias entradas he hablado un poco de las mismas cosas desde distintos puntos de vista."
---

En este blog soy un poco reiterativo  a la hora de describir mi visión de cómo gestionar el mundo. A lo largo de varias entradas he hablado un poco de las mismas cosas desde distintos puntos de vista. En esta entrada voy a insistir en el concepto de Objeto, en concreto del objeto geográfico o del GeoObjeto.

Decía en [La adquisición de datos: el talón de Aquiles de los sistemas GIS](https://info.urbigis.com/es/la-adquisicion-de-datos-el-talon-de-aquiles-de-los-sistemas-gis) que es preciso activar la capacidad de las cosas para hacerse visibles: la asignación a los objetos del sistema territorial de la capacidad de saber cómo son y donde están, tanto sean instalaciones fijas como móviles, y de la capacidad para informar de ello cuando se les solicita, es el factor determinante para construir los nuevos sistemas de información basados en [Servicios de Ubicación](https://info.urbigis.com/es/servicios-de-ubicacion-una-tecnologia-emergente). Son esos mismos objetos los que describo en este blog en las entradas sobre [Componentes urbanos](https://info.urbigis.com/es/componentes-urbanos) y [Activación de Componentes Urbanos](https://info.urbigis.com/es/activacion-de-componentes-urbanos) y otras.

La descripción de nuestro mundo se inició con un dedo sobre la arena y con un lápiz sobre un papel, en ambos casos dibujando rayas. En ese momento la raya era el objeto geográfico, los modelos de datos cartográficos estaban basados en las propiedades asignadas a las líneas y en muchos casos aún funcionan así: rayas de fachadas, de cerramientos, bordillos, manchas de vegetación o de caminos, da igual si esa propiedad estaba asociada a la raya mediante un símbolo de representación en papel o se asocia por su asignación a una capa o un dato en CAD. En todo caso queda en el lado del lector del plano interpretar o extraer su lectura del mundo, por ejemplo el concepto mental del edificio cuando observa que varias líneas de fachada y medianera forman una envolvente y encierran un texto de número de plantas (en números romanos).

Los mapas se han encargado de facilitar la lectura incluyendo zonas coloreadas, dibujos de objetos, edificios tridimensionales, multitud de trucos para mejorar el mapa:

Es un sistema sencillo de mantener: solo es preciso que un interpretador resiga las fronteras de color de una foto aérea y utilice su maravilloso cerebro para construir un esquema lineal asignando a cada raya un significado extraído de su experiencia personal de cómo es el mundo representado en esa foto. Lo único artificial que incluye son las curvas de nivel, construidas gracias a la técnica de estereoscopía que le permite al operario construir líneas de isoaltitud en el terreno.

Un buen lector de mapas no necesita más, su también maravilloso cerebro es capaz de reconstruir una imagen mental del mundo a partir de ese esquema lineal, incluida su forma topográfica, toda una hazaña extremadamente útil de lectura gráfica.

Como evolución de este modelo lineal hay algunos intentos de utilizarlo para construir objetos virtuales que representen objetos reales, por ejemplo del conjunto de rayas de fachada y medianeras se extraen las que corresponden a cada edificio como un polígono con atributos: las rayas forman la geometría de ese edificio y el texto en romano del número de plantas se convierte en un dato y así el sistema queda listo para enriquecer su información: su fecha de construcción, estado, materiales, protecciones… con lo que disponemos de información para representar temáticamente la edificación según su altura o cualquier otro de los datos obtenidos. Es decir queda lista para ser usada en el análisis espacial.

En este proceso se pasa de la cartografía lineal cortada en hojas y guardada en ficheros CAD a un sistema GIS continuo organizado en capas. Sin duda supone un salto cuántico en como concebir la información territorial, aunque plantea el problema del mantenimiento de la información porque todos esos datos añadidos ya no se pueden recuperar de una foto y cuando el mundo cambia (y lo hace todos los días, a cada minuto) hay un pequeño drama: es muy distinto actualizar objetos individuales que conjuntos de rayas. Véase [Geotransacciones](www.arnaizpartners.com/blogarnaizpartners/?p=257) como un mecanismo posible de mantenimiento.

Los sistemas GIS basados en capas son muy interesantes, permiten gestionar la representación del mundo de una forma mucho más potente que la cartografía lineal ya que manejan objetos pero están contaminados por dos conceptos: el concepto de capa y el concepto de topología.

- 
El concepto de capa está fuertemente asociado a los GIS, es más siempre se simboliza un GIS mediante un icono de capas. Su propósito es organizar la información según la naturaleza de los objetos que representa: la capa de edificios, la capa de vegetación, la capa de geología…, de forma que sea posible extraer nueva información mediante el análisis espacial de las interacciones entre capas. Realmente en la actualidad esa necesidad de organizar los objetos en capas ya no existe, una vez que los GIS se han independizado de los datos en ficheros y guardan su información en bases de datos, pero ese concepto persiste fuertemente en el modo de pensar de sus usuarios.

- 
El concepto de topología es mucho más pernicioso. Se fundamenta en que dos objetos adyacentes compartan la línea que los separa, de forma que se asegure la coherencia espacial entre ellos. Es un concepto sugerente, primero porque optimiza el volumen de los datos ya que una misma linea puede servir a muchos objetos y segundo porque agiliza la modificación coherente de todos los objetos implicados: cambiando una línea, se cambian todos.

Pero al mismo tiempo la topología crea dos efectos fatales: todos los objetos implicados deben coexistir en un mismo conjunto de datos y segundo las alteraciones de un objeto (agrupaciones o segregaciones) también suponen modificación de los segmentos afectados y por ende la modificación de todos los objetos que comparten esas líneas, aunque dichas alteraciones en otros objetos no debieran afectarles en absoluto. Ambos afectan a principios esenciales de los geoObjetos como luego veremos.

La disponibilidad de información geográfica distribuida entre agentes diversos, públicos o privados ha evidenciado la necesidad de compartir la información mediante protocolos Internet estándar. Con ello han nacido los geoservicios WMS y WFS, las plataformas de colaboración como OpenStreetMap y las infraestructuras de datos espaciales. Sin duda un gran paso para compartir y crear información espacial.

Vistas así las cosas y para los propósitos analíticos y científicos que usan la cartografía lineal o los sistemas GIS todo esto es correcto y suficiente. Pero cuando el propósito es apoyar la gestión de un territorio entonces son absolutamente insuficientes o mejor dicho no están siendo usados de forma adecuada. Desde mi punto de vista hay que dar un paso más, un pequeño gran paso, empezando a utilizar geoObjetos.

# Qué son los geoObjetos

Como explicaba en la entrada sobre [Componentes urbanos](http://www.arnaizpartners.com/blogarnaizpartners/?p=288), entiendo como Componente urbano a todo elemento de la ciudad que ocupa un espacio propio, tanto da que sea estático como móvil, material o inmaterial. Un espacio que se adscribe al Componente en virtud de una asignación jurídica, administrativa o funcional de forma explícita y pública y al que se le asigna un agente inteligente que lo controla. Los Componentes son un subconjunto de geoObjetos, son los que forman la ciudad y crean un ecosistema, un inmenso órgano interconectado e inteligente formado de millones de piezas autónomas.

El concepto de geoObjeto es más amplio, abarca cualquier dato que sea útil a la gestión de la ciudad, desde los límites administrativos, la zonificación urbanística o medio ambiental, los ámbitos de valoración y muchos más, también tanto da que sean móviles o estáticos, materiales o inmateriales. Pueden ser puntuales, lineales o poligonales, se parecen más al concepto clásico de elemento de un GIS, salvo que se escapan de las estructuras monolíticas de los sistemas GIS.

Los geoObjetos se caracterizan por las siguientes propiedades:

- 
Un geoObjeto es cualquier elemento que está situado en un momento dado sobre un determinado territorio. Su ubicación está consignada en todo momento en un Servicio de Ubicación de geoObjetos administrado por el gestor territorial competente ante el que el geoObjeto se presenta mediante un  «certificado vigente expedido por una autoridad de confianza».

- 
Una vez presentado al Servicio de Ubicación, el geoObjeto le informa en todo momento de cualquier cambio en su posición o propiedades. La inserción y extracción de un geoObjeto del ámbito espacial de territorio controlado por el Servicio de Ubicación determina operaciones de bienvenida y despido que mantienen actualizada la composición de geoObjetos existente en ese ámbito en cada momento.

- 
Todo geoObjeto tiene un propietario, una persona física o jurídica que ejerce un derecho real sobre el objeto, el certificado identifica inequívocamente al propietario del geoObjeto.

- 
Todo geoObjeto debe ser capaz de autodescribirse ante el Servicio de Ubicación, su descripción puede ser tan sencilla como un punto en el espacio definido únicamente por sus coordenadas, hasta complejos objetos tridimensionales en formatos de realidad virtual. Su descripción estará determinada por su propietario con unas características mínimas establecidas por el Servicio de Ubicación. La descripción incluirá elementos de realidad aumentada, enlaces a otros sitios o servicios propios definidos por el propietario. Por tanto cada geoObjeto funciona como un portal de contenidos definido por su propietario.

- 
Dos o más geoObjetos pueden establecer relaciones topológicas entre ellos que determinen su posición respectiva y, en el caso de ser adyacentes, las reglas que debe cumplir la frontera que los separa. En todo caso el cumplimiento de esta reglas topológicas es responsabilidad de los propietarios de los objetos, el sistema de ubicación es un mero testigo de ellas.

El geoObjeto se comunica con el Servicio de Ubicación mediante servicios SOAP, para el Servicio de Ubicación son irrelevantes los medios utilizados por el geoObjeto para su presentación, es decir no sabe si al otro lado hay un agente inteligente, un servidor de geoObjetos o cualquier otro sistema.

El geoObjeto es construido y mantenido por los sistemas que su propietario establezca, pueden ser servidores de geoObjetos apoyados en bases de datos que usan la arquitectura estándar de un GIS, la diferencia es que en lugar de servir imágenes WMS o geometrías WFS presentan geoObjetos encapsulados en GML a un Servicio de Ubicación o pueden ser geoObjetos autónomos como Componentes urbanos capaces de presentarse a si mismos.

Los proveedores de geoObjetos deben disponer de Certificados digitales que les identifican como tales, expedidos por entidades certificadoras validadas ante el Servicio de Ubicación.

# Qué es el Servicio de Ubicación

Las infraestructuras de datos espaciales están bien, permiten acceder a información espacial a la que antes era imposible hacerlo. Pero tienen algunos problemas:

- 
Dispersión: la información procede de fuentes muy diversas y nada controladas, la publicación de un nuevo servicio puede quedar oculta a sus usuarios potenciales si el proveedor no efectúa una acción voluntaria de publicidad. Los catálogos de geoservicios son también producto de la buena disposición de un colectivo o una persona. No disponen de medios de comprobación automatizados (como Google) para descubrir servicios.

- 
Voluntariedad: los geoservicios son producto de la buena voluntad de los proveedores del servicio, no hay ninguna obligación legal o contractual para el mantenimiento del servicio. Incluso los servicios públicos como el Catastro o el PNOA son producto de la voluntad de la administración pública y de una carta de servicios con que la administración se autoobliga.

- 
Estatismo: en el caso de los servicios WMS la simbología está determinada por el proveedor del servicio, el consumidor no puede modificarla.

Por contra el servicio de ubicación proporciona soluciones para estos problemas aunque también es cierto que introduce otros nuevos, las propiedades del servicio son las siguientes:

- 
Debe ser un servicio público proporcionado por la administración competente sobre el ámbito espacial controlado por el servicio de ubicación. En primera instancia será el municipio que podrá delegarlo en mancomunidades, diputaciones o comunidades.

- 
Debe ser único para cada ámbito, de forma que los consumidores no tengan que seleccionar entre diversos sistemas y que los geoObjetos sólo necesiten presentarse ante un único Servicio. Los geoObjetos móviles que entran y salen del ámbito de los distintos Servicios deben disponer de un método de «roaming» que les informe de la URL del Servicio de Ubicación del ámbito donde se encuentren en cada momento.

- 
Debe ser un Servicio permanente y estable, capaz de servir a millones de clientes con un alto grado de simultaneidad, esto implica unos recursos de hardware, software y comunicaciones de enormes dimensiones. Por tanto es recomendable que la administración conceda su explotación a empresas que cumplan las estas condiciones y que puedan retornar la inversión con un plan de negocio viable. Ello implica que la administración se asegura un servicio público no solo sin coste, sino con  un canon que incrementa su ingreso.

- 
Debe resolver el alcance y modo de respuesta a las peticiones de sus clientes. Los actuales LBS lo tienen fácil, se limitan a devolver una lista de coordenadas que representa la posición actual de móviles o navegadores por GPS en un radio determinado. El cliente se ocupa de presentar esas coordenadas al usuario con una simbología determinada.

La operativa del Servicio de Ubicación ante sus clientes responde a dos métodos de consulta:

- 
¿Dónde está un objeto determinado?

- 
¿Cuántos objetos existen en un radio determinado un punto dado?

La respuesta del Servicio se modulará en función de diversas consideraciones:

- 
Puede devolver la geometría de los objetos de respuesta en un formato estándar GML y deberá el cliente quien determine la forma y simbología de visualización 2D o 3D en función de lo obtenido.

- 
Puede devolver un escenario bidimensional ya simbolizado como un servicio WMS que el cliente se limite a presentar al usuario.

- 
Puede devolver un escenario tridimensional ya simbolizado como un servicio VRML (véase [Web3D Consortium](www.web3d.org/realtime-3d/))

El Servicio, una vez identificados los objetos a devolver puede utilizar dos estrategias para obtenerlos:

- 
Puede disponer de una caché de objetos en sus propios servidores, de forma que no necesite solicitar ninguna información al proveedor del objeto. Esto será posible si el Servicio dispone de recursos propios para almacenar millones de objetos y negocia con los proveedores los métodos de actualización.

- 
Puede reenviar la petición a los proveedores de objetos y servir sólo como intermediario entre ellos y los clientes. Esto descarga parte de la responsabilidad en los servicios propios de los proveedores (que no siempre estarán operativos) pero asegura disponer siempre de la última versión de cada objeto.

El Servicio deberá establecer una estrategia para resolver los problemas del ámbito y  la escala. En un servicio WMS convencional la cantidad de información suministrada al cliente es constante (el tamaño de la imagen que quepa en su navegador) y el servidor se ocupa de optimizar el tiempo y recursos a usar en la formación de la imagen según su escala, suponiendo que no haya cacheado previamente una pirámide de escalas que le evite formar una imagen para cada petición.

Un servicio WFS se ocupa de limitar la petición a un volumen máximo de objetos de forma que no atenderá peticiones con un marco geográfico excesivo que recargue la dimensión de la respuesta.

- 
En un Servicio de Ubicación no es posible acudir al cacheado de los mapas ya que los objetos pueden moverse por el territorio a decenas o cientos de kilómetros por hora y por tanto el mapa se reconstruye con cada petición.

- 
El Servicio puede acudir a escenarios mixtos: proporcionar fondos de imagen fija para los objetos estables y puntos para los móviles con velocidades de refresco adecuadas a la escala y velocidad de los objetos que el cliente se encarga de simbolizar y superponer.

- 
También puede proporcionar escenarios de imagen completa con actualizaciones incrementales de refresco. Es decir funciona como los servidores de escritorio remoto que solo transmiten la porciones de imagen modificadas en cada evento de cambio, en este caso sería con la frecuencia de refresco convenida con el cliente.

# Conclusiones

- 
Los geoObjetos y los Servicios de Ubicación pueden proporcionar un mecanismo colaborativo de descripción del mundo que proporcione una visión actualizada y aumentada y supere los problemas que actualmente presentan los sistemas cartográficos vectoriales y de imagen convencionales.

- 
Los gobiernos ejercen su potestad sobre un territorio, un territorio que solo conoce mediante la experiencia personal de los gobernantes o mediante descripciones literarias, registros de texto o mapas y esquemas siempre obsoletos o incompletos. O por sistemas GIS fragmentarios y mal mantenidos. Necesitan Sistemas que proporcionen una representación del territorio real inmediata, accesible sin coste y flexible. El Gobierno adquiere con ellos un medio de control, análisis y comprensión de su territorio que cambiará profundamente la forma de gobernar.

- 
El conocimiento y control del territorio ha sido posible gracias a los nuevos sistemas de información geográfica. Pero quienes están obteniendo ventajas reales de esa información no son los gobiernos, son las empresas privadas o las organizaciones de GIS abierto. Las empresas como [Google ](https://maps.google.es/maps?hl=es)[Maps](https://maps.google.es/maps?hl=es), [Bing ](http://www.bing.com/maps/)[Maps](http://www.bing.com/maps/) o [TomTom](http://www.tomtom.com/es_es/) están adquiriendo cantidades masivas de información territorial que utilizan en su beneficio, incluso en ocasiones vendiendo esa información a los mismos gobiernos, incapaces de obtenerla por sus propios medios. Las organizaciones de GIS abierto como [OpenStreetMap](http://www.openstreetmap.es/), [OpenAccessMap](http://www.openaccessmap.org/), [EcoZoom](http://ecozoom.mapunto.net/map/), [Urban](http://mappingthecommons.net/es/)[Commons](http://mappingthecommons.net/es/), [Waze](https://www.waze.com/es/livemap) (mapas de tráfico), [FourSquare](https://es.foursquare.com/)… están emergiendo  constantemente para recopilar información de todo tipo, desde la colaboración humanitaria ante desastres hasta el intercambio de datos comerciales o de relación. El resultado es que los gobiernos están ante un peligro real de dejar escapar el control de la información de su territorio en beneficio de  otros agentes privados.

- 
La información territorial es un bien común y adquiere un nuevo papel: es liberable, es decir su propietario puede distribuirla sin coste gracias a los nuevos servicios de mapas por Internet. Es colaborativa, es decir su coste de adquisición se puede distribuir entre millones de agentes haciéndolo cero en la práctica. El gobierno adquiere un papel de controlador del flujo: la información debe fluir entre los distintos niveles administrativos, entre el gobierno y el ciudadano y entre los ciudadanos, las asociaciones, las empresas y las instituciones como un bien común.

- 
Todos estamos implicados. El territorio es el resultado de la actividad humana. Los nuevos mapas no solo sirven para conocer la forma física del territorio. También sirven para reflejar la actividad humana: los procesos de transformación del territorio. La planificación urbana y territorial, el control de la propiedad inmueble, su valoración e cargas impositivas, el control de la edificación y la urbanización. La gestión de las infraestructuras urbanas y el metabolismo urbano. Los procesos del mercado de bienes y servicios: la búsqueda y selección de la oferta y la demanda de toda clase de bienes. Los fenómenos culturales: el uso de los espacios públicos de relación, la realidad aumentada, el acceso a la cultura desde el mapa. El estado físico y de uso de los sistemas viarios, ferroviarios, aéreos o marítimos. El control del tráfico, los sistemas de navegación, la mejora del transporte público. La prevención y protección civil, el apoyo a la colaboración ante desastres naturales o accidentes y la mejora de la asistencia sanitaria. Todos somos simultáneamente consumidores y proveedores de información espacial en un mercado transparente.

- 
El territorio ha pasado a ser un producto en Internet de la mano del GIS, el territorio y todo lo que contiene ha entrado en el escaparate comercial del mercado global.

En el mercado inmobiliario: desde el suelo al producto final la localización geográfica de los inmuebles y la visualización de su entorno ya es una necesidad imprescindible. 

- 
En la actividad comercial: localizar en el mapa ese comercio que tiene un determinado producto al mejor precio facilita extraordinariamente acceder a la ciudad. 

- 
En la actividad cultural y social: las redes sociales y la actividad cultural están haciendo un uso cada vez más intenso de los sistemas geográficos. 

- 
En el turismo virtual: cada vez hay más usuarios de los sistemas geográficos como medio para visitar países y ciudades remotas, un atractivo que potencia el turismo real. 

- 
En la gobernanza electrónica: la administración adquiere un mecanismo fundamental para publicar información espacial como el planeamiento urbanístico, los sistemas de transporte, la situación de las dotaciones y servicios, la información predial, los nombres y números de las calles y viales y para localizar la actividad, los diversos expedientes de gestión, las incidencias y alarmas, el control policial e innumerables otros aspectos.

- 
El sistema pasa a ser el soporte espacial de la Smart City: se configura como el esqueleto al que se anclan todos los elementos y procesos que forman la ciudad: espacios tridimensionales como las calles, los edificios, las infraestructuras, los vehículos, incluso las personas son espacios fijos o móviles. La ciudad es, con seguridad, la máquina más grande construida por el hombre, una máquina compuesta de millones de piezas, cuyo perfecto engrane e interrelación es la piedra angular de su éxito como hábitat humano. Una máquina que metaboliza materia y energía, que crece y se renueva constantemente.

**Ignacio Arnaiz Eguren **

**Director de Innovación – Arnaiz & Partners SL**
