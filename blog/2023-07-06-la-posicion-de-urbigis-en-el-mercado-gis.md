---
title: "La posición de urbiGIS en el mercado GIS"
date: 2023-07-06
---

El mercado GIS mundial está dominado en este momento por ESRI (Environmental Systems Research institute). Proporciona sistemas desktop y cloud a miles de clientes de todo tipo, preponderando las administraciones públicas o a empresas que prestan servicios a organizaciones públicas. (Datos obtenidos a partir de análisis de servidores ArcGis REST realizado por **[urbiGIS](https://urbigis.com)**).

Su predominio alcanzó el máximo cuando los sistemas desktop de la competencia del pasado siglo fueron desapareciendo del mercado, porque los sistemas desktop opensource como Quantum GIS o gvGIS, que aparecieron para contrarrestar ese cuasi monopolio, han tardado muchos años en desarrollar una funcionalidad competitiva. Aunque parece que, por ahora, las preferencias de los clientes (al menos de los que tienen recursos para pagar las licencias de ESRI) se decantan por ESRI. A ello contribuye la genial estrategia comercial de ESRI que facilita licencias casi gratuitas en los entornos docentes, fidelizando a sus futuros usuarios profesionales.

Sin embargo, estimo que los movimientos mundiales como el [Open GIS Consortium](https://www.ogc.org/) y la investigación constante por la comunidad internacional para mejorar el manejo de datos y sus procesos, terminarán por ganar la batalla a ESRI. Simplemente es una cuestión de masa crítica, una empresa privada por muchos recursos que tenga no podrá competir con una comunidad internacional bien organizada. Al menos fuera de Estados Unidos, donde ESRI es omnipresente.

**Los GIS en Internet**

Los creadores de datos y analistas geoespaciales utilizan sistemas desktop, por ahora son casi imprescindibles para manejar eficientemente grandes volúmenes de datos vectoriales o raster. El problema se presenta cuando esos datos se deben publicar en Internet, porque el salto de utilizar dispositivos y redes locales a utilizar servidores y servicios Internet es muy duro, teniendo en cuenta además que se necesitan clientes especializados en manejarlos y donde los requisitos de seguridad son muy estrictos. 

Para facilitar ese salto a la web hay dos soluciones posibles:

**1)** Construir proyectos sobre sistemas desktop (con coste o gratuitos) que luego puedan ser reutilizados por servidores web (subiendo los datos a cloud y publicándolos en servidores compartidos). Este es el sistema preferentemente utilizado por los desarrolladores de sistemas desktop para facilitar a sus usuarios el salto a la web. (ArcGis Online, qGIS Cloud, gvSIG Online …). Y también es el sistema utilizado por OpenStreetMap con sus distintos editores (JOSM, Postlach…)

**2)** Utilizar aplicaciones web que funcionan sobre cualquier explorador estándar donde todo el proceso se realiza directamente sobre un sistema cloud. En esta solución han aparecido bastantes sistemas SaaS que han permitido acercar el mundo GIS a los usuarios no expertos y a las organizaciones sin recursos técnicos ni humanos para crear y divulgar información geográfica. En estos sistemas no se excluye que haya datos creados con sistemas desktop pero solo como una etapa previa y no imprescindible. (Google My Maps, MapBox, GeoWE, GIS Cloud, InstaMaps, Carto, urbiGIS…)

Esta segunda opción se enfrenta a las limitaciones que ofrecen los navegadores estándar para el manejo eficiente de los recursos locales de memoria y disco, y de la gestión gráfica. Frente a esta limitaciones ofrecen una flexibilidad indiscutible para funcionar en cualquier dispositivo sin necesidad de instalar ningún aplicativo específico.

**¿Cómo rentabilizar estos nuevos sistemas SaaS?**

El mejor ejemplo es, otra vez, el de Microsoft Office vs. OpenOffice/LibreOffice. Microsoft en la práctica está abandonado sus sistemas desktop para distribuir Office 365 como un sistema SaaS, mientras que las alternativas abiertas siguen siendo plenamente desktop, y para evitar que Google le coma su mercado con sus aplicaciones SaaS de ofimática.

Microsoft 365 en un entorno doméstico es barato, es algo menos barato en uno empresarial, pero es muy atractivo para los administradores de sistemas empresariales porque sus costes de licencia son menores que los costes de administración de  sistemas desktop distribuidos en todos sus dispositivos, así que no tienen duda; migración cloud, virtualización de escritorios y aplicaciones SaaS. Microsoft gana.

Si aplicamos estas lecciones aprendidas al mercado de GIS, sin duda el futuro está en los sistemas Cloud y SaaS, pero salimos de un mercado basado en la adquisición o alquiler de una licencia a un mercado basado en el uso de un servicio y como siempre hay dos opciones: el pago por uso o la tarifa plana. 

Se me ocurren un par de estrategias en cuanto al diseño de la solución:

**1)** Vender productos muy sofisticados para pocos y grandes clientes que exigen soluciones personalizadas. Clientes para los que el branding es una parte esencial de su producto y que desean producir y ofrecer información geoespacial especializada. Para atender esa demanda es preciso construir soluciones con potentes API’s que permitan a sus programadores y diseñadores proporcionar a cada cliente una solución propia y personal. 

En esta estrategia cada cliente tiene un presupuesto propio ajustado a sus necesidades y se trabaja por proyectos. En cierta forma el proveedor GIS es semejante a una agencia de publicidad. Su inconveniente son los plazos y los elevados costes que conlleva la necesaria implicación de un grupo de superespecialistas y la integración con otros sistemas internos del cliente.

Una vez construido el producto se suelen ofrecer planes de venta basados en el pago por uso según el número de capas disponibles y en el número de accesos a datos y mapas. En muchos casos son sistemas internos del cliente sin visibilidad internet o con visibilidad reducida.

**2)** Vender productos muy sencillos pero que satisfagan las necesidades básicas de muchas organizaciones independientemente de su tamaño. Productos con un  grado de personalización muy bajo o inexistente pero con los que la puesta en marcha es inmediata. ¡Contratar y listo!

En esta estrategia los costes serán muy bajos, se estima del orden de un Microsoft 365 Home, y se aplican tarifas planas donde la rentabilidad se basa en que los excesos de uso de unos pocos se equilibran con los defectos de uso de muchos.

**Los mercados**

**1)** El mercado privado: está circunscrito en la práctica a grandes empresas de servicios territoriales y urbanos. Sin desmerecer las técnicas de geomarketing aplicadas a medianas y pequeñas empresas, pero que tienen un alcance coyuntural y necesitan enormes cantidades de datos no siempre disponibles para ajustar sus resultados.

**2)** El mercado público: sin duda el gran cliente de los sistemas GIS, con una segmentación que se deriva en algunos  inconvenientes:

- Los organismos globales: siempre utilizan soluciones propias y en algunos casos la dimensión de los datos que utilizan o sus formatos exigen tecnologías específicas que no tienen aplicación en sistemas locales.
- Los organismos nacionales: divididos entre los adeptos a ESRI, normalmente alrededor del ámbito de influencia norteamericano, de los adeptos a sistemas abiertos, normalmente alrededor del ámbito de influencia de la Unión Europea. En todo caso su dimensión les orienta a soluciones personalizadas aunque es habitual utilizar soluciones opensource como geoNetwork para distribuir información espacial de interés nacional como las Infraestructuras de Datos Espaciales.
- Los organismos regionales y las grandes ciudades, que son habitualmente el objeto de deseo de los suministradores de soluciones GIS y que son muy celosos de sus datos, habitualmente contratan estos servicios como grandes paquetes anuales de licencias y mantenimiento mediante concursos abiertos.
- Los organismos locales, en la mayoría de los casos sin recursos para adquirir sistemas y también sin una directriz política y técnica que asigne prioridad a la información geográfica en sus cartas de servicio al  ciudadano. Son los clientes ideales de sistemas cloud de tarifa plana que les permita publicar algunos datos sencillos sin grandes inversiones. Por desgracia no siempre es así de simple porque a veces llegan fondos europeos, se lían la manta a la cabeza y se lanzan a contratar lo mismo que podrían conseguir con una plataforma cloud sencilla, pero con plazos de un montón de meses, con intentos de integración poco estudiados y heredando con todo ello una plataforma GIS que no son capaces de mantener a medio y largo plazo. (no quiero dar nombres pero tengo a varios en la cabeza)

**La posición de [urbiGIS](https://urbigis.com)**

[urbiGIS](https://urbigis.com) es una plataforma cloud que permite importar, crear, almacenar y publicar datos geográficos sin necesidad de programación y de forma sencilla y accesible. Actualmente es de acceso libre y gratuito y estamos avanzando hacia un modelo mixto de consulta universal gratuita y de suscripción plana de bajo coste para edición y almacenamiento de datos.