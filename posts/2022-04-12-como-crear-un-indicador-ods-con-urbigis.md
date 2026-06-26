---
title: "Cómo crear un Indicador ODS con urbiGIS"
date: "2022-04-12"
excerpt: "Dentro del proyecto de ODS Municipal que lideran el Instituto Arnaiz y la Federación Latinoamericana de Ciudades, Municipios y Asociaciones de Gobiernos Locales (FLACMA), se definen decenas de nuevo I"
---

Dentro del proyecto de [ODS Municipal](https://urbigis.com/ods-municipal.maps) que lideran el [Instituto Arnaiz](http://www.institutoarnaiz.es/) y la Federación Latinoamericana de Ciudades, Municipios y Asociaciones de Gobiernos Locales ([FLACMA](https://cc-flacma.org/)), se definen decenas de nuevo Indicadores ODS basados en un enfoque de localización y medición territorial de los problemas a nivel municipal, en contraposición al enfoque estándar de ODS, basado en la medición de la estadística socioeconómica tradicional a nivel nacional o estatal.

Los métodos de medición y cálculo de estos nuevos Indicadores ODS se implementan en [urbiGIS](https://urbigis.com/) mediante dos técnicas: 

- La espacialización de las áreas problema y datos básicos dentro de cada municipio. Un enorme trabajo para el que se cuenta con la colaboración voluntaria de estudiantes locales.

- El recalculo automatizado de Indicadores a partir de los datos obtenidos durante el proceso de espacialización.

En esta entrada vamos a hacer una síntesis rápida de cómo es el proceso de recálculo desde que se parte con un conjunto de datos vacío hasta que se obtiene un Indicador en el Cuadro de Mandos de [urbiGIS](https://urbigis.com/).

Para esta demo utilizaremos datos simples de obtener como la localización puntual de los hospitales existentes en el municipio, nuestros voluntarios deben situarlos como un punto a partir de información preexistente o mediante trabajo de campo, en este caso hemos utilizado los datos ejemplo del proyecto situados en Trinidad de Cercado (Bolivia):

En el mapa hemos dibujado con círculos grandes los Hospitales y los consultorios y centros de salud con pequeños. Para los Hospitales hemos asignado un radio de influencia de 1km, los demás tienen 500m. En municipios pequeños como éste no existe una red viaria utilizable para calcular rutas por métodos como Manhattan o Ruteo, así que utilizaremos el método Euclidiano para calcular al área de influencia de cada centro.

En [urbiGIS](https://urbigis.com/) crearemos un conjunto de datos de tipo Consulta que utilizará el radio asignado para crear un área de Buffer. Sobre su resultado crearemos otro conjunto de datos también de Consulta que realizará una Unión del buffer para obtener una única entidad. Como ambos son de tipo Consulta se actualizan automáticamente cada vez que se modifica el conjunto de Hospitales:

También disponemos de un conjunto de datos, igualmente de tipo Consulta, que delimita el «Área de huella urbana» y que ha sido obtenido haciendo una Unión de todas las áreas urbanas dibujadas por nuestro grupo de estudiantes, en la imagen siguiente vemos uno encima de otro:

Como se observa en la imagen el área de influencia de hospitales no cubre toda la huella urbana. Mediante otro conjunto de datos de tipo Consulta podemos realizar la Diferencia para obtener un Conjunto que solo tenga el «Área no cubierta por hospitales y clínicas», como resultado se ve en la imagen siguiente cómo la huella urbana está recortada:

El Indicador ODS que el proyecto de ODS Municipal ha planteado en este Objetivo es el «Proporción de superficie de Áreas residenciales alejadas de los centros asistenciales respecto de la superficie total de núcleos de población», para el Objetivo ODS a 2030 se debería conseguir que ese porcentaje sea cero o residual. 

Para obtener los Indicadores el proyecto incluye cada uno dentro de un conjunto de datos con geometría de punto, en este caso reúne todos los del Objetivo 3 en un solo conjunto:

Para el cálculo de cada Indicador su registro correspondiente en ese conjunto de datos debe incluir una expresión SQL que obtenga el porcentaje de suelo a partir de dos conjuntos: («Área no cubierta por hospitales y clínicas» / » Área de huella urbana») * 100. 

[urbiGIS](https://urbigis.com/) permite añadir a un conjunto de datos tantos «Campos calculados por expresión» como se necesiten, al editar el conjunto de datos esos campos especiales permiten que el usuario defina en ellos una expresión SQL del estilo de esta:

((select st_area(geom) from dts.»979df38c-9979-4474-8815-58ca8837f56c» where iden = 1)/(select st_area(geom) from dts.»82682e0f-f34b-4846-b390-6495a613d347″ where iden = 1))*100

Para simplificar su construcción, [urbiGIS](https://urbigis.com/) aporta un asistente de construcción de expresiones que permite buscar los conjuntos a operar e insertar sus identificadores y campos en la expresión. Desde luego es preciso conocer lenguaje SQL para asegurar su buen funcionamiento en otro caso presentará un mensaje de error. 

El resultado se presentará en ese mismo campo del conjunto de Indicadores, en este caso el campo es «Calc» y el resultado un 72,32%:

Finalmente este resultado hay que presentarlo en el Cuadro de Mandos de [urbiGIS](https://urbigis.com/) seleccionando el indicador a presentar y sus propiedades. Una operación sencilla donde simplemente se escoge el tipo de gráfico a construir (en este caso un gráfico de texto simple), una select simple que devuelve el dato a presentar y los tipos de texto a utilizar. La select a utilizar es del tipo «select calc where code = ‘IT03-D6′» donde ese code identifica el Indicador que contiene la expresión de cálculo de entre todos los Indicadores que contiene el conjunto de datos. 

Cualquier cambio en la Huella urbana o en la localización de Hospitales supondrá el recálculo inmediato del Indicador:

### Conclusiones

En [urbiGIS](https://urbigis.com/) es posible construir procedimientos para obtener indicadores complejos a partir de conjuntos de datos simples y de conjuntos de datos producto de geoprocesos y consultas automatizados. Las únicas dificultades están en construir las sentencias de consulta para obtener el dato final o las sentencias de consulta para construir los cuadros de mando. En todo lo demás no hay que escribir ningún código y los resultados se presentan en geoportales temáticos organizados según los criterios de la organización propietaria de los datos.

Ignacio Arnaiz Eguren
