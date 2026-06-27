---
title: "Servicios de Ubicación, una tecnología emergente"
date: 2012-06-15
---

Hace pocos años, cuando no había ninguna forma de conocer la posición de un objeto en el espacio terrestre salvo con un topógrafo, una red geodésica y muchas mediciones, los mapas eran datos muy valiosos, enormemente caros y sus ciclos de actualización eran de años o décadas.

Cuando las fotografías aéreas pasaron de ser un producto militar a un producto comercial accesible, esta situación mejoró mucho ya que no había que mandar al campo un ejercito de topográfos armados con cadenas y niveles, sino que cómodamente sentados en su oficina y mediante un restituidor los topógrafos pintaban, y siguen pintando, excelentes mapas redibujando sobre la fotografía cada objeto visible.

Pero tampoco es barato volar, fotografiar y reseguir manualmente todos los cambios de color y altitud en cada foto, identificando qué es cada cosa que se ve. Es costoso y a veces hay nubes, o sombras, o árboles grandes o taludes empinados que no facilitan la tarea. Se ha gastado mucho tiempo y dinero en intentar automatizar la producción de mapas desde imágenes aéreas, desde avión o satélite, con comparación automática entre fotos mediante sofisticados algoritmos… No se puede decir que el resultado haya sido para tirar cohetes. Aún está lejos el momento en que de un par estereoscópico de fotografías salga automáticamente un mapa.

Suponiendo que ello tenga utilidad futura, ya que hay una corriente técnica de opinión que valora mucho más una ortofotografía aérea proyectada sobre un modelo Lidar en tres dimensiones que un mapa interpretado. (un modelo Lidar se construye mediante un radar láser montado en un avión que produce una imagen tridimensional del terreno haciendo millones de mediciones de distancia mediante barridos del terreno)

Y en medio aparecen los GPS, con ellos es posible conocer la posición de un objeto mediante un dispositivo que, en pocos años, pasa de ocupar una maleta con una antena de plato, a ser usado en navegadores de mano capaces de realizar sofisticados cálculos de rutas sobre mapas de calles y carreteras para, al final, estar integrado en cualquier teléfono móvil o máquina de fotos y a recibir los mapas mediante conexiones 3G con servidores geográficos de ámbito mundial. ¡Una pasada!.

Naturalmente los navegadores y teléfonos móviles con navegador integrado han tenido un éxito abrumador, pero han abierto una puerta trasera: nuestro navegador es capaz de informar a un proveedor de datos de su posición, de nuestra posición. Bien por lectura de GPS o bien por triangulación con las antenas de telefonía cercanas (NBL Network Based Location). Y ese proveedor puede informar a terceros de ese dato. Pues bien, el sistema que el proveedor utiliza para conocer la posición de dispositivos móviles es un Servicios de Ubicación LBS (Located Based Services)

El LBS tiene dos partes, una que le permite recibir la posición de cada dispositivo y guardarla en una base de datos que actualiza continuamente y otra que le permite procesar peticiones de clientes que quieren saber donde está un dispositivo o varios.Todas las nuevas capacidades para descubrir a amigos o para que los comercios te descubran cuando estas cerca y te ofrezcan bienes, están soportados por Servicios de Ubicación.

Es bueno leer el artículo de Wikipedia sobre ellos: <http://en.wikipedia.org/wiki/Location-based_service> o en <http://lbspro.com/?q=que-son-servicios-localizacion-LBS>

Los Servicios de Ubicación abren posibilidades de enorme valor futuro y también ponen sobre la mesa graves problemas de privacidad para las personas.

Su contribución, desde mi punto de vista, más importante es que han convertido a los mapas en dinámicos. Es decir, que el mapa ya no representa objetos estáticos obtenidos por interpretación de las capturas periódicas de sensores remotos. Sino que contiene objetos dinámicos que están cambiando de posición de forma constante. Es interesante ver los servicios de TomTom <http://www.tomtom.com/es_es/services/live/hd-traffic/#tab:tab1>  o los de Google <http://google-latlong.blogspot.com.es/2011/07/live-traffic-information-for-13.html>

A partir de esto hay muchas vías a explorar:

- Están en pleno proceso de expansión los Servicios de Ubicación Indoor, es decir dentro de los edificios, como forma de guiado a clientes por los centros comerciales o a usuarios de grandes edificios.
- Si el Servicio de Ubicación no se limita a dispositivos móviles, sino que se amplía a todos los objetos que forman la ciudad, entonces serán éstos los que dinámicamente construyan los mapas que representan la ciudad y además lo harán adaptándose a las necesidades del cliente o a las pretensiones del propietario del objeto y todo eso se hará mediante Servicios de Ubicación.
- Los futuros LBS deberán ejecutar nuevas tareas, ya que no solo se limitarán a servir una coordenada de posición, sino que también podrán servir modelos 2D o 2D de objetos según un protocolo de servicio con los objetos y dispositivos que contienen.
- Además los LBS deben entrar en la esfera pública ya que la competencia administrativa sobre el territorio se trasladará a la competencia que determina si un objeto está autorizado o no a ser descubierto mediante un LBS.
- Los futuros LBS deberán ser jerárquicos, es decir, que respondan a la estructura espacial del territorio: desde las piezas habitables de un edificio hasta la ciudad hay una jerarquía de espacios que deben gestionarse mediante sistemas inteligentes que controlan sus propios servicios de ubicación.

En próximos post empezaremos a pensar en profundidad como aprovechar los LBS y ¡cómo defenderse de los LBS!

###### Ignacio Arnaiz Eguren

###### Director de Innovación – Arnaiz Consultores SL – iae@arnaizconsultores.es