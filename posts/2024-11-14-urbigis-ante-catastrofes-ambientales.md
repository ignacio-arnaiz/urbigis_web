---
title: "urbiGIS ante catástrofes ambientales"
date: "2024-11-14"
excerpt: "En los últimos años hemos asistido a fenómenos ambientales extremos y la predicción es que el cambio climático incremente su número e intensidad. Algunos son predecibles y otros inesperados. El volcán"
---

En los últimos años hemos asistido a fenómenos ambientales extremos y la predicción es que el cambio climático incremente su número e intensidad. Algunos son predecibles y otros inesperados. El volcán de La Palma, el terremoto de Lorca, los incendios forestales de este año en Portugal y sobre todo la DANA de octubre en Valencia son ejemplos paradigmáticos.

Ante ellos hay distintas administraciones públicas que mapifican los riesgos e intentan cuantificar sus posibles efectos adversos sobre la población y la economía, con mayor o menor acierto. Y una vez que se producen las catástrofes, realizar un seguimiento de su avance, de las medidas para reducir los daños y de los trabajos de restauración.

En general esta mapificación es pública y se presenta en diferentes visores geográficos, desde los de organismos internacionales como Copernicus a la NASA, los de organismos nacionales, autonómicos y locales,  los de distintos Institutos Geográficos, las Confederaciones Hidrográficas, los Ministerios afectados o el Colegio de Registradores.

Todos  ellos aportan su granito de arena creando información geográfica útil, pero que tiende a quedar disgregada, cada organismo publica lo suyo. Además, algunos utilizan estándares Opengeo, otros servicios REST, algunos solo permiten descargar ficheros geojson o kml.

[urbiGIS](https://urbigis.com) en este sentido asume un papel de concentrar la información dispersa de forma que aísle a los usuarios de la complejidad de acceder a tantas distintas fuentes y a tantos distintos formatos de datos.

En el caso particular de ls DANA de Valencia, todos los servicios y datos accesibles se presentan en el geoportal [https://urbigis.com/danavalencia.maps](https://urbigis.com/danavalencia.maps)

En este geoportal se ha organizado la información en primer lugar por la fuente de datos y secundariamente por tema:

- La Generalitat de Valencia que aporta datos de Unidades administrativas, Infraestructuras, y Urbanismo

- La Confederación Hidrográfica del Júcar que aporta datos de gestión de la cuenca

- El Sistema Nacional de Cartografía de Zonas Inundables (SNCZI) que aporta la hidrografía, los riesgos y peligros de inundación

- El Instituto Geográfico Nacional que aporta los modelos de elevación de terreno

- Y la Unión Europea a través del programa Copernicus EMSR733 Flood in Valencia que aporta datos sobre el alcance de la inundación y sus daños.

En conjunto forman más de 70 mapas que se pueden visualizar de forma individual o conjunta, superpuestos o en pantalla dividida, con niveles de transparencia ajustables y en un orden configurable por el usuario, intentando que la usabilidad sea lo más sencilla posible. Por supuesto se aportan funciones para aproximarse de alejarse del terreno y para solicitar los datos asociados a cada mapa sobre cualquier punto del terreno.

En función de la disponibilidad de la fuente de datos es posibles descargarlos como ficheros SHP para ser utilizados en posteriores análisis por el usuario.

La información se puede presentar sobre varios fondos cartográficos como OpenStretMap o Google seleccionables por el usuario. Además, es posible añadir cualquiera de los cientos de mapas disponibles en al catálogo de urbiGIS.

Estimamos que de esta forma se facilita el acceso a la información a todos los niveles: ciudadanos, empresas e instituciones de la zona afectada, a las organizaciones o grupos que puedan prestar ayuda y simplemente de tengan interés ya que el sistema es plenamente accesible y sin limitaciones desde cualquier navegador estándar con acceso a Internet.

[urbiGIS](https://urbigis.com) además proporciona utilidades para colaborar en la mapificacion de cualquier otra información geográfica y las pone a disposición de todos de forma gratuita, por ejemplo la situación de los centros de ayuda a los damnificados, hospitales, áreas impracticables o de alto riesgo, etc.
