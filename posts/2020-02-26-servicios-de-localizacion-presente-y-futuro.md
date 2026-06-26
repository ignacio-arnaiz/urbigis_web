---
title: "Servicios de Localización, presente y futuro"
date: "2020-02-26"
excerpt: "Nunca ha sido sencillo encontrar cosas sobre el territorio. La forma normal de buscar por calle y número no siempre es precisa ni accesible, porque las calles cambian de nombre o los portales de númer"
---

Nunca ha sido sencillo encontrar cosas sobre el territorio. La forma normal de buscar por calle y número no siempre es precisa ni accesible, porque las calles cambian de nombre o los portales de número, sin avisar, a traición. Unas veces por criterios políticos y otras (las menos) por criterios técnicos. Mientras eran los carteros quienes apechugaban con ese caos, nadie tuvo mucha queja, porque el cartero es un «agente inteligente». La táctica era actualizar cada muchos años -y vender- un mapa callejero, más o menos legible, y con eso bastaba. Pero hoy eso no basta, cuando es preciso convertir un nombre de calle y número en una coordenada o viceversa la situación se complica. No le digas al usuario de un navegador GPS que la base de datos de callejero está obsoleta, ni al distribuidor de paquetería que no podrá planificar su ruta de reparto porque hay direcciones «no fiables» y mucho menos que se extravió la ambulancia o el camión de bomberos.

# 1.- Situación actual

Todos esto se complica aún más en países donde no hay direcciones de calle o no se utilizan, por ejemplo en Costa Rica. O cuando intentamos localizar lugares en caminos rurales o carreteras donde no hay números y en el mejor de los casos hay una distancia a un punto kilométrico (normalmente no indicado). Desde los primeros callejeros digitales de NavTec y TeleAtlas la tendencia general ha sido intentar construir callejeros actualizados y georreferenciados, de forma que se minimice el error y se puedan utilizar en los mapas de navegación o en la técnicas de enrrutado y geomarketing.

Pero como siempre el problema es quién se ocupa y qué gana: pueden ser los gobiernos en sus niveles correspondientes, las empresas privadas como Google y Apple o las fundaciones sin ánimo de lucro como OpenStreetMap. Sin duda la competencia para asignar nombres de calle y números es municipal, pero no es sencillo que los ayuntamientos puedan asumir la responsabilidad de mantener y publicar un callejero, tampoco los gobiernos regionales o nacionales suelen tener los recursos económicos precisos para conseguirlo y si dependen de los municipios, pues aún menos. Las empresas privadas lo pueden hacer, pero esa información es costosa de mantener y por ello están pasando de ofrecer el servicio de forma gratuita a ofrecer un servicio sujeto a coste, algunas suelen proporcionar una franquicia diaria o mensual de localizaciones gratuitas y una vez superada obligan a pagar el servicio. Las fundaciones sin ánimo de lucro ofrecen un servicio gratuito, pero no garantizan la calidad de los datos, ya que dependen del rigor y calidad de sus miles de colaboradores.

En cuanto Google dejó de ofrecer un servicio gratuito de geocoding, abrió un nuevo nicho de negocio que está siendo aprovechado por bastantes empresas. Se especializan en espacios geográficos concretos y utilizan como fuentes de datos todo lo que pueden encontrar: OpenStreetMap, los Ayuntamientos, los servicios postales, las cartografías existentes o los trabajos de campo. El objetivo de todas es conseguir una base de datos de callejero lo más completa y actualizada posible para ganar a la competencia.

Todos estos nuevos servicios se ofrecen mediante API’s que se activan mediante una APIKey y pueden ser utilizados por los clientes de muchas formas: haciendo clic en un mapa, tecleando un nombre y número o aportando un fichero de direcciones, habitualmente un excel o un csv que el geocoder devuelve al cliente con las coordenadas de cada dirección. Detrás hay un sistema de gestión que se ocupa de mantener la base de clientes y la facturación por uso, la siguiente imagen es una muestra de nuestro contador del uso de geocode.xyz:

En [urbiGIS](https://urbigis.com) hemos afrontado este problema mediante dos tipos de funcionalidad:

a.- Aprovechando los servicios existentes gratuitos, o en sus tramos franquiciados, para ofrecer a nuestros usuarios el máximo posible de datos geolocalizados

b.- Ofreciendo a nuestros usuarios la posibilidad de utilizar [urbiGIS](https://urbigis.com) para crear sus propios servicios de localización.

En el primer caso, lo que hacemos es explorar la oferta global existente y añadirla a nuestros servicios de localización. Por ahora en [urbiGIS](https://urbigis.com) es posible utilizar los siguientes localizadores globales: Nominatim, OpenStreetCam, Mapillary, LocationIQ, Geocode.xyz, MapQuest, Bing, Google, Google Street View, Google PlusCode, What3Words, Mapbox, Here y Tomtom. Los usuarios de [urbiGIS](https://urbigis.com) los pueden utilizar de forma indiscriminada, con la salvedad de que, al superar la franquicia gratuita, esos servicios dejarán de responder ya que [urbiGIS](https://urbigis.com) es un servicio gratuito y no podemos consumir recursos en pagar a Google o a otros.

También exploramos servicios de geocoder locales o especializados, que utilicen sistemas estándar o cuyo API incluyamos en nuestras funcionalidades como Cartociudad o Catastro de España… Podemos incluir todos los que sean necesarios o útiles a nuestros usuarios.

En la imagen siguiente vemos la pestaña de Localizadores de [urbiGIS](https://urbigis.com), están activados los servicios que se utilizarán en una consulta. En este caso hemos pinchado la Puerta del Sol de Madrid y obtenido 23 resultados, cada localizador proporciona una o varias respuestas en función de su diseño propio. Como se observa, un punto tan característico como éste, produce resultados bastante congruentes en todos ellos:

En un lugar menos representativo los resultados serán menores y más diversos. Por ejemplo, al solicitar un punto de la calle «Jirón Leoncio» en el pueblo de «Recuay» en Perú, solo hay 11 resultados y no son siempre congruentes:

En el segundo caso, nuestros usuarios no tienen más que crear servicios de localización contra sus conjuntos de datos, y por supuesto no están limitados a callejeros, sino que pueden publicar servicios para buscar cualquier elemento de dichos conjuntos, en la imagen siguiente vemos un localizador de parcelas en Boa Vista de Roraima (Brasil). Vea en el post [Crear rápidamente localizadores en urbiThings](https://info.urbigis.com/es/crear-rapidamente-localizadores-en-urbithings/) de este blog una muestra de cómo hacerlo.

# 2.- Qué podemos hacer en el futuro

Hasta aquí es un bosquejo de la situación actual, pero el futuro puede seguir caminos diferentes, OpenStreetMap en su wiki sobre [what3words](https://wiki.openstreetmap.org/wiki/What3words): propone algunas alternativas (se ha traducido al español):

- *OpenStreetMap [Shortlink](https://wiki.openstreetmap.org/wiki/Shortlink) , diseñado específicamente para URL compactas.*

- *[Xaddress](http://xaddress.org/) , dos palabras aleatorias y un número (diseñado para parecerse un poco a una dirección)*

- *[Geohash](http://en.wikipedia.org/wiki/en:Geohash) en Wikipedia*

- *[plus.codes](https://plus.codes/) (anteriormente «Códigos de ubicación abierta») publicados por Google, pero de manera totalmente abierta*

- *[Volksnav](http://www.volksnav.com/)*

- *[Sistema de localización Maidenhead](http://en.wikipedia.org/wiki/en:Maidenhead_Locator_System) en Wikipedia, utilizado por operadores de radioaficionados para describir su ubicación*

No será fácil que todo el mundo aprenda a utilizarlos para señalar direcciones, What3Words o PlusCode ([Open Location Code (OLC)](https://en.wikipedia.org/wiki/Open_Location_Code)) proporcionan claves neutras de posición que son globales, únicas y persistentes. Son soluciones racionales que nos independizan de la labilidad y discrecionalidad del sistema de calle y número. Las dos son sencillas y cortas. Quizá las tres palabras de what3words sean más sencillas de recordar que el número de PlusCode. Pero el sistema actual de calle y número está tan arraigado en la mente colectiva que se necesitarían un par de generaciones para asimilarlo. Quizá sustituyendo al código postal. Además hay que considerar la importancia cultural del sistema actual.

Alguno de éstos nuevos métodos de geocoding tienen graves inconvenientes, como what3words que es un sistema propietario y patentado no abierto, se soporta por una base de datos administrada por una empresa privada. Ningún sistema de direccionamiento puede depender de una plataforma privada.

Otra opción es construir un sistema similar al actual pero basado en una codificación universal. Un ejemplo es el propuesto por [Digital Door Number:](https://myddn.org/)

En esta propuesta el Estado, la Localidad, la Calle y la Casa están codificados, dejando todos los demás datos como descriptores de la dirección. Desde luego la codificación debe ser administrada por una autoridad gubernativa que asegure la unicidad de cada código y su mantenimiento, a medida que se crean o suprimen localidades, calles o casas.

Es una buena aproximación pero deja sin resolver los problemas de mantenimiento y será dudoso que sirva para barrios irregulares donde las calles no existen o no son identificables de forma sencilla. No siempre las localidades están bien identificadas ni delimitadas y tampoco será fácil asignar códigos únicos si no tienen nombre o no hay unanimidad sobre su nombre real. 

La verdad es que el mundo no está muy bien organizado.

Otra opción es utilizar directamente una coordenada geográfica, la misma que se comparte en una aplicación de navegador, en un smartphone o en un visor geográfico. A medida que todas las comunicaciones y notificaciones se realicen de forma digital, adjuntar a un documento electrónico o a una transacción un dato de ubicación es simple, en las imágenes siguientes vemos una ubicación obtenida con [urbiGIS](https://urbigis.com) y la misma con Google Maps:

 

 

Estas ubicaciones basadas en coordenadas son utilizables directamente por cualquier sistema, con la única convención de utilizar una proyección geográfica estándar. No es preciso consultar ninguna base de datos, ni ejecutar ningún algoritmo de transformación. Se insertan en cualquier documento como un texto plano, con la simple precaución de asignarles una posición o una etiqueta que les haga identificables como una coordenada geográfica (un esquema geo URI).

# 3.- Conclusión

Nuestro mundo está medido y cuadriculado (bueno, ya sabéis, es redondo), la forma más sencilla de localizar un punto es por su coordenada geográfica (aunque la deriva continental y los terremotos también tienen algo que decir). Pero dar nombre a las calles y número a las casas es más que una simple forma de encontrar algo en la ciudad, a nadie le gusta que le cambien de nombre su calle, su barrio o su ciudad. Construimos una cierta afinidad con nuestro territorio y su toponimia que no se debe perder. Por otra parte somos conscientes de los problemas e ineficacias de un callejero así que habrá que ser flexibles. 

A mí me gustan los Code Plus o las coordenadas sin más, pero un número no tiene gracia, perdemos demasiado de la toponimia urbana. Necesita un descriptor que incluya el país, la ciudad, la calle y el número o que ponga «a cuatro cuadras al sur del Higuerón», eso no se puede perder. En Madrid la calle «Ortega y Gasset» antes se llamaba «Lista», cambió en 1955, ¡hace 64 años!, aún hoy día todo el mundo la conoce como «Ortega y Gasset antes Lista». Jajajaja. Lo más gracioso es que ese descriptor lo puede definir cada uno como quiera, como crea que será mejor comprendido o que cumpla con el deber de conservar la cultura urbana, hasta con faltas de ortografía, porque ya que no es preciso utilizarlo para consultar un callejero normalizado del que obtener su coordenada.

 

Ignacio Arnaiz Eguren

Director
