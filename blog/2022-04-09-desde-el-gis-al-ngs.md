---
title: "Desde el GIS al NGS=Network gObjects System"
date: 2022-04-09
---

Hace ya 9 años escribí una entrada en este blog a la que llamé GeoObjetos, una nueva forma de gestionar la información geográfica. Una ingenuidad sin duda, pero como no he aprendido nada en estos años, voy a rescatar la idea e intentar formalizarla un poco más en un ejercicio de fantasía geográfica. Antes de seguir es recomendable volver a leer esa entrada, pero si no lo haces volveré a definir lo que allí se denominaba geoobjetos pero de una forma más amplia y reduciendo su nombre a **gObjetos**.

# Qué son los gObjetos

Nuestro mundo está formado por objetos, todo lo que vemos, lo que pisamos, los que existían antes del ser humano y los que hemos aportado nosotros, el propio mundo es un objeto. Estamos acostumbrados a percibirlos o investigarlos mediante sensores, nuestros propios sensores o los sensores que hemos inventado. Y somos capaces de colocarlos en una representación del mundo, antes hacíamos sobre papel, ahora de forma digital.

Todo el sistema está basado en un proceso: explorar – descubrir – analizar – representar. Todos lo hacemos constantemente y desde los primeros mapas hasta los sofisticados sistemas actuales el objetivo es que podamos utilizar las representaciones que han hecho otros, ya no necesitamos descubrirlo por nosotros mismos.

La cultura nos descubre el mundo. Pero por complicado que sea el sistema utilizado, su mecanismo por ahora sigue siendo básicamente el mismo: explorar –  descubrir – analizar – representar. Como resultado para cada aspecto y espacio del mundo hay cientos, miles, millones de representaciones, todas iguales y todas diferentes, unas anticuadas y otras actualizadas, más o menos completas, mejor o peor simbolizadas, en 2D o en 3D. Los GIS nos ayudan a descubrirlas, construirlas y utilizarlas.

En la inmensa mayoría de los casos son representaciones que sólo incluyen elementos estáticos, aunque ya es habitual que las empresas y los ejércitos utilicen sistemas de control de flotas para representar objetos móviles, También podemos utilizar mapas de tráfico marítimo o de tráfico aéreo, que nos muestran en tiempo real la posición de los barcos o aviones obligados a llevar un transpondedor y nos proporcionan sus datos de identificación. Una explotación genial de todo eso son los mapas de tráfico rodado que nos permiten localizar densidades y velocidades de desplazamiento de smartphones con GPS sobre las vías e inferir a partir de ahí el estado del tráfico. Los usuarios en general no podemos acceder a los datos de cada smartphone, pero sin duda lo pueden hacer los gestores de las grandes plataformas de navegación.

# Cambio de modelo

La propuesta de esta entrada es cambiar el proceso, no solo para los aviones, los barcos o los smartphones, sino cambiar el proceso para todo. Desde un árbol a un rascacielos. La información geográfica deja de estar repartida en millones de sistemas desconectados para ser un bien común accesible para todos y mantenido por todos. Los sistemas GIS seguirán sirviendo para visualizar, descargar, analizar y procesar datos geográficos pero tendrán un repositorio de gObjetos único y universal.

El nuevo modelo se compone de tres acciones:

### 1.- La exposición

En este mundo nuestro tan controlado, casi todo lo que tiene un valor económico está inventariado, identificado, medido y vigilado. Sus datos forman bancos especializados según su naturaleza, bancos que están divididos según la administración competente en su control. Datos públicos en muchos casos, pero privados en la mayoría y solo usables por quien ostenta su propiedad o competencia. 

Supongamos que todos esos objetos adquieren una identificación. Internet nos ha enseñado que es posible asignar una dirección IP o una MACaddress a millones de máquinas y componentes de máquinas distribuidas por todo el mundo y a eliminar cualquier conflicto de duplicidad. En miles de servidores se replican constantemente esas listas para asegurarlo. Y  no son solo dispositivos sino también transacciones identificadas mediante Blockchain. Ya no parece un problema insuperable disponer de un registro general de objetos de alcance global.

El registro global de gObjetos que propongo es parecido a un DNS pero no contiene nombres de dominio, contiene direcciones de gObjetos, será un NGS (Network gObjects System).

Y supongamos que el propietario del elemento o una institución con competencia sobre él le asigna ese identificador y lo declara en un registro global. Expone el elemento ante el mundo y aporta su contenido:

- **Tipo**. Se ajustará a una lista convenida internacionalmente de tipos, un poco semejante a los sufijos de dominio, de forma que en las consultas sea posible discriminar que gObjetos se quieren obtener. La cartografía tradicional ya ha tipificado prácticamente todos los objetos del mundo, el NGS los unificará y reutilizará.
- **Descripción**. Todo gObjeto debe ser capaz de autodescribirse ante sl NGS. Podrá ser tan completa y compleja como lo decida el expositor, desde un simple par de coordenadas a un objeto BIM complejo. Podrá ser adaptada por su expositor a las circunstancias de cada momento y puede representar el objeto de muchas formas simultáneamente. Por ejemplo el propietario de un edificio comercial puede adaptar la librea externa a su oferta, a la hora del día, a la época del año. O puede enlazar recorridos virtuales internos, mostradores digitales, elementos de realidad aumentada, enlaces a otros sitios o servicios. Por tanto cada gObjeto funciona como un portal de contenidos definido por su propietario.
- **Estado.** Histórico, Actual o Futuro. De esa forma podemos ver la evolución en el tiempo de uno o varios gObjetos. También se podrán etiquetar como Dudosos o Provisionales.
- **Posición**. Si el gObjeto cambia de posición puede actualizarla periódicamente según su velocidad, cada pocos segundos, cada pocas horas…
- **Representación**. El propietario aporta la simbología o simbologías de representación que desee, adaptadas al formato de respuesta que se solicite. Si la respuesta es vectorial el cliente final podrá adaptar la representación a sus necesidades.
- **Propietario**. Todo gObjeto tiene un propietario, una persona física o jurídica que ejerce un derecho real sobre el objeto, deberá incluir un certificado que identifica inequívocamente al propietario del gObjeto.

Si el gObjeto contiene un agente inteligente entonces será su lógica interna quien realice la exposición, el propietario no tiene que estar atento a exponer los cambios, el agente se ocupa. Si nuestro vehículo dispone de un agente podrá transmitir su posición y destino constantemente para obtener indicaciones de ruta óptima o de incidencias en la vía.

Una vez expuesto al NGS el gObjeto le informa en todo momento de cualquier cambio en su posición o propiedades. 

El NGS es además una red de gObjetos, de ahí viene nuestra propuesta de cambio de GIS a NGS. Es una red porque cada gObjeto puede contener un número indefinido de Relaciones o links con otros gObjetos.  Las relaciones establecen una conexión entre gObjetos. En sí mismas son también un gObjeto ya que pueden disponer de una geometría propia. Establecen un sentido entre los gObjetos que conectan, por eso en la relación unos gObjetos serán Origen de la relación y otros serán Destino de la relación.  Cuando las relaciones son topológicas determinan su posición respectiva y, en el caso de ser adyacentes incluirán  las reglas que debe cumplir la frontera que los separa. En todo caso el cumplimiento de esta reglas topológicas es responsabilidad de los propietarios de los objetos, el NGS es un mero testigo de ellas. Se plantean algunos de estos tipos de relación:

- Destino y Origen se conectan bidireccionalmente
- Destino se conecta unidireccionalmente con Origen
- Destino está dentro de Origen
- Destino está fuera de Origen
- Destino es adyacente a Origen
- Destino está encima de Origen
- Destino está debajo de Origen
- Destino es una consecuencia de Origen
- Destino es una modificación de Origen

### 2.- La consulta

Ante una petición el NGS podrá actuar de dos formas:

- **Como enrutador**: en este caso el NGS se limita a devolver la dirección del servicio que contiene los datos del gObjeto y será el servidor de su propietario quien resuelva la petición.
- **Como servidor**: en este caso el NGS dispone de la información en cache del gObjeto y puede resolver la petición de forma directa.

Será el propietario de cada gObjeto el que decida si el NGS actúa de una u otra forma.

La naturaleza geo de los objetos que contiene el NGS determina la forma y el alcance de las consultas y responde a varios métodos de consulta:

- **Acceso a un gObjeto determinado**. Se proporciona al NGS la dirección del gObjeto y el sistema devuelve la ruta a su propietario o directamente el contenido de su caché.
- **Acceso a los gObjetos relacionados con un objeto determinado**. Se proporciona al NGS la dirección del objeto y el sistema devuelve todos los gObjetos relacionados con el tipo de relación
- **Acceso a todos los gObjetos presentes en el radio de un punto**. Se proporciona al NGS la coordenada del punto, el radio de búsqueda y el tipo de objeto. El NGS devuelve las direcciones o datos de todos los gObjetos de ese tipo existentes en ese momento en el radio indicado.
- **Acceso a los gObjetos presentes en el radio de un punto.** Se proporciona al NGS la coordenada del punto, el radio de búsqueda y el tipo de gObjeto. El NGS devuelve las direcciones o datos de todos los gObjetos de ese tipo existentes en ese momento en el radio indicado.

### 3.- La respuesta

En ambos casos se incluirá en la petición el formato deseado de la respuesta que será semejante a los que proporciona un Geoserver estándar: WMS o WFS y sus distintos formatos y los formatos 3DPS/I3S cuando el servidor sea capaz de proporcionarlos.

La respuesta del NGS se modulará en función de diversas consideraciones:

- Puede devolver la geometría de los gObjetos en un formato estándar vector y deberá ser el cliente quien determine la forma y simbología de visualización 2D o 3D en función del tipo de geometría obtenida.
- Puede devolver un escenario bidimensional ya simbolizado, tal y como la hace un servicio WMS, que el cliente se limite a presentar al usuario.
- Puede devolver un escenario tridimensional ya simbolizado como un servicio VRML (véase [Web3D Consortium](https://info.urbigis.com/geoobjetos/www.web3d.org/realtime-3d/))

El NGS, una vez identificados los objetos a devolver, puede utilizar dos estrategias para servirlos:

- Puede disponer de una caché de gObjetos en sus propios servidores, de forma que no necesite solicitar ninguna información al proveedor del objeto. Esto será posible si el NGS dispone de recursos propios para almacenar millones de objetos y negocia con sus proveedores los métodos de actualización.
- Puede enrutar la petición a los proveedores de gObjetos y servir sólo como intermediario entre ellos y los clientes. Esto descarga parte de la responsabilidad en los servicios propios de los proveedores (que no siempre estarán operativos) pero asegura disponer siempre de la última versión de cada objeto.

El NGS deberá establecer una estrategia para resolver los problemas del ámbito y  la escala. En un servicio WMS convencional la cantidad de información suministrada al cliente es constante (el tamaño de la imagen que quepa en su navegador) y el servidor se ocupa de optimizar el tiempo y recursos a usar en la formación de la imagen según su escala, suponiendo que no haya cacheado previamente una pirámide de escalas que le evite formar una imagen para cada petición.

Un servicio WFS se ocupa de limitar la petición a un volumen máximo de objetos de forma que no atenderá peticiones con un marco geográfico excesivo que recargue la dimensión de la respuesta.

- En el NGS no siempre es posible acudir al cacheado de los mapas ya que los gObjetos pueden moverse por el territorio a decenas o cientos de kilómetros por hora y por tanto el mapa se reconstruye con cada petición.
- El NGS puede acudir a escenarios mixtos: proporcionar fondos de imagen fija para los gObjetos estables y puntos para los móviles con velocidades de refresco adecuadas a la escala y velocidad de los gObjetos que el cliente se encarga de simbolizar y superponer.
- También puede proporcionar escenarios de imagen completa con actualizaciones incrementales de refresco. Es decir funciona como los servidores de escritorio remoto que solo transmiten la porciones de imagen modificadas en cada evento de cambio, en este caso sería con la frecuencia de refresco convenida con el cliente.

Cuando solicitamos a un DNS una dirección IP la consulta es sencilla, pero si el NGS actúa como servidor la consulta puede devolver cantidades muy importantes de datos.

# Cómo funciona el NGS

### 1.- Diferencias frente a una IDE

Las infraestructuras de datos espaciales están bien, permiten acceder a información espacial a la que antes era imposible hacerlo. Pero tienen algunos problemas:

- Dispersión: la información procede de fuentes muy diversas y nada controladas, la publicación de un nuevo servicio puede quedar oculta a sus usuarios potenciales si el proveedor no efectúa una acción voluntaria de publicidad. Los catálogos de geoservicios son también producto de la buena disposición de un colectivo o una persona. No disponen de medios de comprobación automatizados (como Google) para descubrir servicios.
- Voluntariedad: los geoservicios son producto de la buena voluntad de los proveedores del servicio, no hay ninguna obligación legal o contractual para el mantenimiento del servicio. Incluso los servicios públicos como el Catastro o el PNOA son producto de la voluntad de la administración pública y de una carta de servicios con que la administración se autoobliga.
- Estatismo: en el caso de los servicios WMS la simbología está determinada por el proveedor del servicio, el consumidor no puede modificarla.

Por contra el NGS proporciona soluciones para estos problemas aunque también es cierto que introduce otros nuevos. Las propiedades del servicio son las siguientes:

- Es un servicio público proporcionado por la comunidad internacional de Internet similar a la existente para los servidores DNS.
- Es un servicio permanente y estable, capaz de servir a millones de clientes con un alto grado de simultaneidad, esto implica unos recursos distribuidos de hardware, software y comunicaciones de enormes dimensiones.
- Debe resolver el alcance y modo de respuesta a las peticiones de sus clientes. Los actuales LBS lo tienen fácil, se limitan a devolver una lista de coordenadas que representa la posición actual de móviles o navegadores por GPS en un radio determinado. El cliente se ocupa de presentar esas coordenadas al usuario con una simbología determinada.

### 2.- Quién aporta la información

La información expuesta en el NGS puede proceder de tres fuentes básicas:

- Del propietario del gObjeto que tiene interés en exponer ante Internet las propiedades de su gObjeto y utilizar como punto de acceso a su oferta comercial, social, cultural o turístico.
- De la institución pública competente para su utilización, vigilancia y control que tiene interés en presentar una visión actualizada y completa de su territorio.
- De otras instituciones públicas o privadas que subsidiariamente y con el permiso de su propietario asumen la exposición del gObjeto de forma altruista.

### 3.- Problemas y sus posibles soluciones

Se pueden presentar varios tipos de problemas:

- Que se expongan diferentes gObjetos ocupando el mismo espacio sin una justificación temporal o topológica convincente. En este caso el NGS puede recibir denuncias o notificaciones y exigir a quienes exponen esos gObjetos que resuelvan el conflicto. Mientras tanto los etiquetará como «dudosos».
- Que se expongan gObjetos inexistentes o claramente diferentes de la realidad. En este caso el NGS puede recibir denuncias o notificaciones y adoptar la decisión directa de eliminar esos gObjetos.
- Que se expongan gObjetos que han desaparecido del territorio y no se han dado de baja. En este caso el NGS puede recibir denuncias o notificaciones y adoptar la decisión directa de eliminar esos gObjetos.
- Que existan objetos en el mundo real que no están expuestos en el NGS. En este caso el NGS podrá acudir a las fuentes actuales de datos geográficos para construir una primera versión temporal de esos gObjetos etiquetándolos como «provisionales». Una vez que su propietario los sustituya por versiones actualizadas serán eliminados.

# Conclusiones

- Los gObjetos y el NGS pueden proporcionar un mecanismo colaborativo de descripción del mundo que proporcione una visión actualizada y aumentada y supere los problemas que actualmente presentan los sistemas cartográficos vectoriales y de imagen convencionales.
- El conocimiento y control del territorio ha sido posible gracias a los nuevos sistemas de información geográfica. Pero quienes están obteniendo ventajas reales de esa información no son los gobiernos, son las empresas privadas o las organizaciones de GIS abierto. Las empresas como [Google](https://maps.google.es/maps?hl=es)[Maps](https://maps.google.es/maps?hl=es), [Bing](https://www.bing.com/maps/)[Maps](https://www.bing.com/maps/) o [TomTom](http://www.tomtom.com/es_es/) están adquiriendo cantidades masivas de información territorial que utilizan en su beneficio, incluso en ocasiones vendiendo esa información a los mismos gobiernos, incapaces de obtenerla por sus propios medios. Las organizaciones de GIS abierto como [OpenStreetMap](http://www.openstreetmap.es/),  [OpenAccessMap](http://www.openaccessmap.org/),  [EcoZoom](http://ecozoom.mapunto.net/map/),  [Urban](http://mappingthecommons.net/es/)[Commons](http://mappingthecommons.net/es/),  [Wace](https://www.waze.com/es/livemap) (mapas de tráfico),  [FourSquare](https://es.foursquare.com/)… están emergiendo  constantemente para recopilar información de todo tipo, desde la colaboración humanitaria ante desastres hasta el intercambio de datos comerciales o de relación. Los NGS suponen un salto cualitativo y cuantitativo de enormes proporciones para el acceso a información geográfica.
- La información territorial es un bien común y adquiere un nuevo papel: es liberable, es decir su propietario puede distribuirla sin coste gracias al NGS. Es colaborativa, es decir su coste de adquisición se puede distribuir entre millones de agentes haciéndolo cero en la práctica.
- Todos estamos implicados. El territorio es el resultado de la actividad humana. Los nuevos mapas no solo sirven para conocer la forma física del territorio. También sirven para reflejar la actividad humana: los procesos de transformación del territorio. La planificación urbana y territorial, el control de la propiedad inmueble, su valoración e cargas impositivas, el control de la edificación y la urbanización. La gestión de las infraestructuras urbanas y el metabolismo urbano. Los procesos del mercado de bienes y servicios: la búsqueda y selección de la oferta y la demanda de toda clase de bienes. Los fenómenos culturales: el uso de los espacios públicos de relación, la realidad aumentada, el acceso a la cultura desde el mapa. El estado físico y de uso de los sistemas viarios, ferroviarios, aéreos o marítimos. El control del tráfico, los sistemas de navegación, la mejora del transporte público. La prevención y protección civil, el apoyo a la colaboración ante desastres naturales o accidentes y la mejora de la asistencia sanitaria. Todos somos simultáneamente consumidores y proveedores de información espacial en un mercado transparente.
- El territorio ha pasado a ser un producto en Internet de la mano del GIS, el territorio y todo lo que contiene ha entrado en el escaparate comercial del mercado global.
  - En el mercado inmobiliario: desde el suelo al producto final la localización geográfica de los inmuebles y la visualización de su entorno ya es una necesidad imprescindible.
  - En la actividad comercial: localizar en el mapa ese comercio que tiene un determinado producto al mejor precio facilita extraordinariamente acceder a la ciudad.
  - En la actividad cultural y social: las redes sociales y la actividad cultural están haciendo un uso cada vez más intenso de los sistemas geográficos.
  - En el turismo virtual: cada vez hay más usuarios de los sistemas geográficos como medio para visitar países y ciudades remotas, un atractivo que potencia el turismo real.
  - En la gobernanza electrónica: la administración adquiere un mecanismo fundamental para publicar información espacial como el planeamiento urbanístico, los sistemas de transporte, la situación de las dotaciones y servicios, la información predial, los nombres y números de las calles y viales y para localizar la actividad, los diversos expedientes de gestión, las incidencias y alarmas, el control policial e innumerables otros aspectos.
- El sistema pasa a ser el soporte espacial de la Smart City: se configura como el esqueleto al que se anclan todos los elementos y procesos que forman la ciudad: espacios tridimensionales como las calles, los edificios, las infraestructuras, los vehículos, incluso las personas son espacios fijos o móviles. La ciudad es, con seguridad, la máquina más grande construida por el hombre, una máquina compuesta de millones de piezas, cuyo perfecto engrane e interrelación es la piedra angular de su éxito como hábitat humano. Una máquina que metaboliza materia y energía, que crece y se renueva constantemente.

Ignacio Arnaiz Eguren