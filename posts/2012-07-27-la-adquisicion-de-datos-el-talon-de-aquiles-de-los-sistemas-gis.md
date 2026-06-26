---
title: "La adquisición de datos: el talón de Aquiles de los sistemas GIS"
date: "2012-07-27"
excerpt: "La descripción del territorio, para sus elementos aparentes (los que son visibles), se ha construido tradicionalmente a partir de imágenes aéreas capturadas con sensores remotos ópticos o de radar. Lo"
---

La descripción del territorio, para sus elementos aparentes (los que son visibles), se ha construido tradicionalmente a partir de imágenes aéreas capturadas con sensores remotos ópticos o de radar. Los productos obtenidos se utilizan directamente (una vez georreferenciados) o bien tras vectorizar los objetos que contienen por fotointerpretación y posterior ajuste en campo.

Territorial description of visible elements has been traditionally based on aerial pictures taken from remote optical or radar sensors. The resulting products are used directly –having been previously geo-referenced, or after vectorizing the contained objects by photo-interpretation and their later field adjustment.

Mientras el soporte era de papel, el proceso de interpretación servía para delimitar tipos de objetos mediante un lenguaje gráfico de descripción basado en colores, tramados o tipos de línea, complementados con textos estratégicamente situados. Su utilización manual exigía la descomposición del mapa en hojas manejables.

A partir de esta base cartográfica es posible obtener componentes aparentes (edificios, viales, cerramientos, cultivos…) y, gracias a su carácter estereoscópico o por la técnica de radar, también se obtiene el modelado del terreno mediante isocurvas de altitud. Además sirve como base de referencia para otros propósitos temáticos (medio físico, catastro, planificación, dotaciones…) construidos por otros medios de investigación, diseño o análisis territorial. (normalmente usando soportes semitransparentes y redibujando)

La popularización de los sistemas CAD y GIS exigió disponer de soportes cartográficos digitales, primero mediante la digitalización de los soportes de papel existentes y luego directamente desde los procesos de restitución. Pero durante muchos años este proceso de digitalización no cambió sustancialmente la situación. Incluso se mantenía la división en hojas. Naturalmente los nuevos sistemas facilitaron mucho el trabajo, la precisión y la calidad final de los resultados pero sin alterar la metodología de trabajo ni aportar funcionalidades nuevas. Entre otras cosas porque siguieron siendo sofisticados medios para…¡producir papel!

Así hemos llegado hasta ahora, aunque con algunas mejoras:

- 
Las cartografías básicas han pasado a ser continuos digitales. Y son fuente fiable de información para otros procesos de análisis o adquisición, más especializados o sectoriales. (además de transparencias, los sistemas GIS permiten análisis espacial mucho mas potente)

- 
No se suelen mantener, como antes, cartografías superpuestas de distinta precisión. Los procesos de generalización pueden mantener automáticamente capas de baja precisión a partir de capas de alta precisión. (Esto tiene algunos límites, pero creo que en muchos casos la duplicidad de esfuerzos responde a problemas competenciales o de coordinación. La crisis económica galopante va a tener como beneficio indirecto la racionalización del gasto en cartografía)

- 
Se está pasando de mantener un modelo basado en la codificación de líneas a un modelo basado en la codificación de objetos. Un paso complicado y muy poco estandarizado.

- 
Han aparecido nuevos sistemas de información geográfica baratos y eficientes y  nuevos estándares GIS abiertos que permiten COMPARTIR. El mundo cartográfico ha sido tradicionalmente poco dado a compartir. (Aún recuerdo cuando el IGN pretendía cobrar muchos miles de pesetas por un DXF con los límites municipales ¡a escala 100.000!).

- 
Se ha universalizado el uso de los sistemas GPS demostrando que es posible georreferenciar cosas sin que haya detrás un sofisticado proceso de medición y geodesia.

- 
Se han demostrado las enormes posibilidades de la difusión de información geográfica por internet.

Con todo esto los sistemas de información territorial han podido salir del entorno de las oficinas técnicas y de su utilidad constreñida a la producción de planes y proyectos, para convertirse en una herramienta de uso generalizado a la que se demandan prestaciones y contenidos cada día más sofisticados. Tanto desde las instituciones como desde el mundo empresarial o los ciudadanos.

Esta presión está provocando una crisis sobre los modos de adquisición de la información territorial, sobre los sistemas de tratamiento y verificación, sobre los sistemas de almacenamiento y, muy especialmente, sobre los sistemas de publicación y acceso a la información.

Crisis que se enfoca a nivel institucional mediante el desarrollo de Infraestructuras de Datos Espaciales, un gran paso adelante para compartir información geográfica, pero que debe aún evolucionar hacia un sistema de sistemas que garantice un adecuado nivel de integración y actualización y que asegure su utilidad pública y empresarial. Infraestructuras de Datos que entran en competencia con las plataformas comerciales de mapas tales como Google Maps o Bing Maps. Plataformas que están consiguiendo el objetivo de producir una versión virtual del mundo real accesible desde internet, extraordinariamente útil como soporte de decisiones de negocio. Tan útiles que su modelo de negocio está cambiando, de ser servicios gratuitos de «gancho» hacia otros servicios de pago, a ser productos comerciales en sí mismos.

Curiosamente el talón de Aquiles, tanto para las IDEs como para las plataformas comerciales, sigue siendo la adquisición de datos, aquí pocas cosas han cambiado. Podemos decir que la cartografía básica se sigue manteniendo por fotointerpretación.

Mantener este método se ve favorecido por el constante incremento de la resolución de las imágenes de satélite, la reducción de su coste, la posibilidad de acceso a grandes volúmenes de imágenes y la mejora de la sensibilidad y del espectro de los sensores.

Pero la fotointerpretación sigue teniendo varios inconvenientes en su contra: es, como su nombre indica, una “interpretación” de la realidad, en un momento determinado, realizada por una persona mejor o peor entrenada para hacerlo. Su velocidad de actualización está limitada a campañas que se miden en años. Sólo es capaz de producir datos de estructuras superficiales visibles y para ganar en precisión o veracidad es preciso invertir en trabajo de campo, pero estos trabajos están necesariamente limitados a la verificación de aspectos puntuales, por su enorme coste e ineficiencia.

**¿Hay alguna alternativa?**

Pues, de momento tenemos tres:

- 
La reutilización de los proyectos digitales ([Geotransacciones](http://www.arnaizpartners.com/blogarnaizpartners/?p=257)), el objetivo es tratar los proyectos de planificación, gestión, urbanización y edificación como fuentes de información, con lo que se facilita de forma extraordinaria la sincronización entre el mundo real y el mundo virtual, aunque exige un enorme esfuerzo de normalización ([CityGML](http://www.citygml.org/), [Urbanismo en Red](http://www.urbanismoenred.es)) y de gestión del cambio entre los profesionales y la administración. Permite la gestión de todas las estructuras territoriales y no únicamente de las visibles y superficiales, lo que implica que necesariamente será el sistema futuro para construir la información territorial, dejando los sistemas basados en sensores como sistemas de apoyo y verificación.

- 
La colaboración producto de la comunicación: los flujos de información en la era internet se han modificado de forma espectacular. El trabajo colaborativo produce un efecto multiplicativo sobre la información disponible que hace rápidamente obsoleta cualquier otra técnica de recopilar y distribuir información masiva. Se ha pasado rápidamente de compartir páginas de información exclusivamente html a compartir información geográfica y de toda clase. Sin embargo aprovechar eficientemente la capacidad de la población mundial para generar información territorial “buena” es un reto imprescindible.

- 
La capacidad de las cosas para hacerse visibles: la asignación a los objetos del sistema territorial de la capacidad de saber como son y donde están, tanto sean instalaciones fijas como móviles, y de la capacidad para informar de ello cuando se les solicita, es el factor determinante para construir los nuevos sistemas de información. ([Servicios de Ubicación](http://www.arnaizpartners.com/blogarnaizpartners/?p=57))

Así planteadas las cosas, hay una conclusión inevitable: el modo de adquisición de la descripción geométrica georreferenciada de las cosas que forman nuestro mundo debe evolucionar. Seguirán utilizándose sensores remotos y procesos de interpretación, pero los nuevos modos de ver y representar el mundo supondrán una revisión en profundidad de como se concibe la cartografía, de como se almacena, de como se distribuye y de como se usa.

La descripción del mundo será gestionada por los propietarios de los objetos que lo forman y compartida mediante servicios abiertos. Será mantenida por los mismos procesos de cambio que afectan al mundo real y será el soporte, el esqueleto, sobre el que se montarán nuevas formas de ver el mundo que aún no podemos imaginar, porque la realidad aumentada, la realidad virtual, los servicios de ubicación o los territorios inteligentes no son mas que el principio.

Ignacio Arnaiz Eguren – Director de Innovación – Arnaiz Consultores SL
