---
title: "Sebastián Arbolí Ayala (La Base de Datos Ciudad)"
date: "2012-07-27"
excerpt: "Siempre es bueno mirar hacia atrás porque encontraremos muchas ideas útiles que se quedaron por el camino. En otro post hablé de Maruja Gutierrez-Diaz que, afortunadamente, sigue activa. Hoy me toca h"
---

Siempre es bueno mirar hacia atrás porque encontraremos muchas ideas útiles que se quedaron por el camino. En otro post hablé de Maruja Gutierrez-Diaz que, afortunadamente, sigue activa. Hoy me toca hablar de Sebastián Arbolí Ayala, que sin embargo murió con 48 años de un cáncer fulminante hace ya más de una década.

Sebastián era arquitecto y en su última etapa fue el responsable de la mecanización del Área de Urbanismo del Ayuntamiento de Madrid. Un arquitecto atípico que se pegó a un ordenador en cuanto tuvo acceso a ellos.  A principios de los 80 creó el concepto de Base de Datos Ciudad (BDC) como un sistema integrado de gestión urbana donde la ciudad es un conjunto de entidades cuya dinámica está ligada a la gestión de expedientes.

Mucho de lo que sabemos hoy, lo aprendimos de Sebastián. Supongo que de sus escritos e informes habrá rastro en el archivo de la Villa, yo sólo conservo una contribución suya a un libro del COAM: “La utilización del ordenador en el planeamiento urbano y territorial”, seguramente agotado. Sin que lo sepa el COAM puedo enviar una fotocopia a quien tenga interés. Y naturalmente tengo el recuerdo de interminables discusiones en su despacho, delante del terminal fosforito de su flamante nuevo AS400 porque el Sistema 36 se quedó pequeño.

Sebastián formuló su BDC apoyándose en SICAD, un GIS de Siemens que aún funciona para mantener el catastro alemán, pero que está descontinuado como producto.

La BDP se fundamentaba en tres tipos de Entidades:

- EG Entidades de Gestión: sirven para establecer los procesos de gestión mediante acciones y operaciones comandados por la gestión de expedientes. Las dividía en básicas (nueva, agregación, segregación y agregación + segregación) y complementarias (fases de planeamiento, ejecución y urbanización)

- EP Entidades primarias: forman el esqueleto de la ciudad mediante tres tipos de entidades (Sebastián decía que eran tres ciudades superpuestas): urbanísticas (viales, manzanas, parcelas edificios y locales), urbanísticas de gestión (ámbitos, polígonos y fases) y administrativas (secciones censales, distritos, barrios y distritos postales)

- ES Entidades secundarias: entidades de relación que unen a todas las anteriores. Las dividía en dos tipos: las básicas de relación (cruces, subviales, tramos, subtramos, APP, planta y APS) y las complementarias de relación.

Y en dos tipos de procesos:

- Acciones: separadas en dos tipos, directas sobre las entidades primarias (altas, bajas y actualizaciones) e indirectas sobre los atributos de cualquier entidad (modificaciones)

- Operaciones: establecen un segundo nivel de gestión (nuevas, agregación, segregación, agrupación + segregación…)

La selección de una combinación válida y compatible de acción + operación asignada a una entidad primaria desencadena un proceso controlado de la gestión de esa entidad y de las entidades afectadas a través de entidades básicas y complementarias de gestión.

A partir de ello montaba una estructura de entidades, atributos y estados de gestión que describían de forma completa sus tres ciudades.

Sebastián era un precursor, una mente brillante en un mundo de papel y tuvo graves problemas:

- La enorme magnitud del cambio propuesto en un organismo como la Gerencia de Urbanismo, en un momento en el que el funcionario no comprendía la necesidad ni entendía la solución. A pesar de que los medios económicos con que contaba Sebastián fueron muy importantes.

- Las graves dificultades tecnológicas de la época para construir información espacial: ordenadores lentos, sistemas GIS ciclópeos y complicados de usar sobre estaciones de trabajo de enorme coste, imposibilidad de distribuir información espacial salvo en papel con lo que el ploteado se convertía en un cuello de botella insalvable, especialización extrema de los grupos de trabajo GIS…

- Costes económicos enormes, cualquier cosa se traducía en muchos millones de pesetas. Costó un dineral crear cartografía digital utilizable a partir de los planos de parcelario en papel. Costó un dineral montar sobre SICAD la estructura de datos y no menos desplegar estaciones de trabajo entre los departamentos. Y costó mucho tiempo y esfuerzo intentar convencer a los funcionarios de la necesidad y viabilidad del cambio.

- Y finalmente la falta de tiempo, Sebastián se fue demasiado rápido, antes de que consiguiera demostrar la utilidad del sistema.

Con los medios de hoy día seguro que la Base de Datos Ciudad sería una realidad. En aquel momento para Siemens la BDC era un proyecto estratégico que se paseaba por todas las ferias y por congresos en todo el mundo.

Después de Sebastián el proyecto se abandonó, por muchas causas que en parte han coincidido en casi todos los grandes proyectos GIS urbanos:

- Hubo un cambio de personas inevitable, yo mismo me integré en el equipo que planificó el cambio de sistemas de la Gerencia. Es muy frecuente que los proyectos GIS de urbanismo, incluso algunos muy grandes, estén ligados a personas, si esta se jubila o falta el proyecto desaparece.

- El mercado de GIS cambió en pocos años, ArcInfo de ESRI pasó a ser el sistema preponderante. ArcSDE se postuló como el gran almacén espacial sobre Oracle. Los procedimientos de creación de información GIS a partir de herramientas CAD se popularizaron y no digamos nada los cambios que ha supuesto la aparición de OpenGIS.

- Todo coincidió con una época de cambio tecnológico profundo: del AS400 a cliente servidor, de terminales a ordenadores personales, la introducción de las herramientas de ofimática, los nuevos gestores de expedientes mediante workflow y por supuesto Internet. Muchos cambios en poco tiempo.

- Pero sobre todo se redujo la ambición, la mejora tecnológica debería haber ayudado al proyecto. Pero los que llegamos después no comprendimos bien el alcance de las ideas de Sebastián. Hemos necesitado veinte años para empezar a ver que efectivamente hay tres ciudades compuestas por Entidades y Relaciones mantenidas mediante Acciones y Operaciones. Nunca es tarde si la dicha es buena.

**Ignacio Arnaiz Eguren **

**Director de Innovación – Arnaiz & Partners SL**
