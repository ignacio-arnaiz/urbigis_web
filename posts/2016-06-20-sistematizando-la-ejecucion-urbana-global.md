---
title: "La Ejecución Urbana Global (Sistematizando con urbiTHINGS)"
date: "2016-06-20"
excerpt: "En la entrada anterior (Sistematizando la Planificación urbana global) realicé un resumen de cómo urbiTHINGS aporta un sistema de planificación que permite visualizar una capa continua y global de ord"
---

En la entrada anterior [(Sistematizando la Planificación urbana global](http://www.arnaizpartners.com/blogarnaizpartners/?p=826#more-826)) realicé un resumen de cómo **urbiTHINGS** aporta un sistema de planificación que permite visualizar una capa continua y global de ordenación urbana, formada por la yuxtaposición de los planes municipales, gracias a la utilización de Grupos de Entidad, Atributos y Relaciones de Equivalencia de ámbito global.

En esta entrada se describe cómo utilizar la misma técnica para construir capas globales sobre los Objetos urbanos, una Ontología que será también fundamental para construir Indicadores dinámicos, mapas y servicios de datos globales de estos aspectos urbanos.

La metodología de trabajo utiliza los mismos elementos que en el caso de la Planificación: los Instrumentos de cambio urbano como fuente transaccional de datos, las Entidades como objetos espaciales que describen el mundo agrupadas en “Grupos de Entidades”, los Atributos como características o propiedades de esas Entidades y las Relaciones como nexo entre todos ellos, también agrupadas en “Grupos de Relación”. 

Una metodología basada en convertir los planes y proyectos actuales de transformación urbana en Instrumentos de operación transaccional, capaces de operar sobre Inventarios, concebidos como Instrumentos contenedores de objetos materiales o inmateriales, superficiales, volados o subterráneos, futuros, existentes o históricos, que forman nuestro territorio y que sirven a la función urbana, tal y como se ejemplifica en el siguiente gráfico: 

[](http://www.arnaizpartners.com/blogarnaizpartners/wp-content/uploads/2016/06/Refundido.png)

En  **urbiTHINGS** hemos planteado, en principio, cuatro Inventarios:

- 
**De Planeamiento**, que contiene todos los elementos de Ordenación y cuya estructura se explica en la entrada anterior de este blog.

- 
**De Objetos**, que contiene el suelo y todos los objetos constructivos y los elementos de urbanización y cuya estructura se explica en detalle en esta entrada.

- 
**De Derechos**, que contiene todos los derechos que afectan al territorio. Su estructura se detallará en una entrada del blog posterior y

- 
**De Obligaciones**, que contiene todos los deberes que resultan de las necesidades de conservar y mantener la ciudad, que también se detallará en una entrada posterior del blog.

# 1) Inventario de Objetos

Contiene todas las Entidades físicas que forman el territorio urbano, que son objeto de autorización e inspección públicas y por tanto siempre vienen definidas en un plan o proyecto. Sus elementos pueden estar afectados por elementos de los demás Inventarios mediante Relaciones:

- 
Con el Inventario de Planeamiento porque sus dimensiones, usos y aprovechamiento edificatorio están condicionados por la Ordenación urbanística. Hasta el punto de que en las operaciones de creación o renovación urbana, cada lote, parcela o predio resultante se acompaña de una Cédula urbanística que fija sus condiciones de aprovechamiento.

- 
Con el Inventario de Derechos porque los objetos forman el sustrato de los Derechos reales, urbanísticos y administrativos. Todo Derecho existente en el Inventario de Derechos actúa directa o indirectamente sobre un objeto de Suelo o de Edificación.

- 
Con el Inventario de Obligaciones ya que son los objetos urbanos los que están sujetos a mantenimiento o a conservación.

- 
Con otros objetos del Inventario de Objetos, por ejemplo sobre los objetos de Suelo se ejecutan Construcciones e Instalaciones y contienen elementos de Vegetación, todos ellos elementos que forman también parte del Inventario de Objetos. 

[](http://www.arnaizpartners.com/blogarnaizpartners/wp-content/uploads/2016/06/captura5.png)Los Objetos que forman el territorio urbano, la parte física y visible de la ciudad, los podemos distribuir en cinco clases: los suelos, las construcciones, las instalaciones, el mobiliario y la vegetación. Cada clase tiene un comportamiento propio que se describe en los siguientes apartados.

# a) Los Suelos

El objeto físico fundamental del territorio es el suelo, forma el soporte de toda la actividad urbana. Desde un punto de vista funcional el suelo se fragmenta en dos porciones básicas: 

- 
**Los Suelos No Conectivos**: (con trama rosa en la imagen superior) destinados a contener cualquier actividad natural, rural o urbana, siempre que no sea conectiva, es decir que no cumpla una función de comunicación territorial. En este aspecto un río podrá ser un Suelo No Conectivo si no tiene asignada ninguna función de transporte, pero pasará a ser Suelo Conectivo si es una vía fluvial. Estos Suelos se fragmentan en lotes, predios o parcelas, cuya distribución y dimensiones están en función de la intensidad de uso asignada, de la morfología urbana o es el resultado de una evolución histórica que va dejando su huella en la trama urbana.

- 
**Los Suelos Conectivos**: (con trama gris en la imagen superior) son los suelos destinados a conectar a todos los demás suelos por cualquier medio de transporte y locomoción. Los suelos conectivos está conformados por la aportación sucesiva e histórica de suelos, fruto del desarrollo urbano y de las grandes obras de infraestructura. Forman una enorme pseudoparcela de titularidad pública, fragmentada en carreteras, vías y calles, con toponímicos asignados por criterios políticos, que no suelen encajar con su verdadera estructura funcional o con su origen jurídico. Para su tratamiento este espacio se fragmentará según dos criterios, conformando dos capas de Entidades superpuestas:

- 

**Capa de Tramos**

Este criterio fragmenta el espacio conectivo en Tramos conectados mediante Relaciones. Cada Tramo deben contener la información precisa para construir una red: longitud, tiempos de trayecto en coche, en bicicleta y a pie.

[](http://www.arnaizpartners.com/blogarnaizpartners/wp-content/uploads/2016/06/captura7.png)

La topología de red se crea mediante Relaciones de Conexión entre los Tramos colindantes. En la imagen siguiente vemos en detalle el Tramo 15 y sus relaciones con los Tramos colindantes: 

[](http://www.arnaizpartners.com/blogarnaizpartners/wp-content/uploads/2016/06/captura8.png)

En este ejemplo se crearán las siguientes Relaciones de conexión:

[](http://www.arnaizpartners.com/blogarnaizpartners/wp-content/uploads/2016/06/captura28.png)

En el gráfico siguiente se representan en esquema estas Relaciones, donde los Tramos 36 y 38 son de doble sentido y los tramos 43 y 44 de un solo sentido. 

[](http://www.arnaizpartners.com/blogarnaizpartners/wp-content/uploads/2016/06/captura10.png)

De esta forma se distinguen los posibles trayectos entre Tramos, estarán permitidos cuando exista una Relación uni o bidireccional entre ellos y estarán prohibidos cuando no exista ninguna Relación entre ellos. Los sentidos de los flechas ilustran el alcance de la Relación, cuando la Relación es unidireccional el sentido lo marca el Tramo que figure como Origen hacia el Tramo que figure como Destino.

En el grafo siguiente se observa la movilidad disponible dentro del Tramo 15 en función de las Relaciones de Conexión que le afectan: 

[](http://www.arnaizpartners.com/blogarnaizpartners/wp-content/uploads/2016/06/captura11.png)

Todo vehículo que entre en el Tramo 15 por la R1 podrá salir por la R4 porque tiene una Relación unidireccional con el Tramo 15 como Origen, y también por la R1 y R3 porque tienen Relaciones bidireccionales con el Tramo 15 como Origen o Destino. No podrá salir por la R2 porque el Tramo 15 no es el Tramo Origen en una Relación unidireccional.

- 

**Capa de Callejero**

De forma tradicional las denominaciones de calles y sus números de policía han servido como sistema de geolocalización de las actividades urbanas. Aún tienen una enorme importancia, aunque la moderna ubicación por GPS proporciona un sustituto formidable o hay iniciativas como [What3Words](http://what3words.com/es/) que pretenden sustituirlas creando una rejilla mundial de 3×3 metros donde cada celda se identifica mediante tres palabras aleatorias, en realidad sustituye al número de policía.

Los inconvenientes del callejero suelen residir en que la denominación está sujeta a vaivenes políticos y que la numeración no siempre se puede conseguir que permanezca estable. En todo caso el Inventario incluye los mecanismos precisos para su mantenimiento mediante el objeto Calle y la Relación NDP:

**Objetos Calle**: fragmentan el espacio viario en Calles como espacios sujetos a una denominación toponímica, cada Calle tiene asignados un conjunto de tramos mediante Relaciones. Los tramos que forman intersecciones entre Calles estarán estar asignados a todas ellas, ya que en caso contrario esa intersección sería una Plaza con numeración propia.

[](http://www.arnaizpartners.com/blogarnaizpartners/wp-content/uploads/2016/06/captura12.png)

[](http://www.arnaizpartners.com/blogarnaizpartners/wp-content/uploads/2016/06/captura13.png)

**Relaciones NDP**: También aparece una Relación georreferenciada mediante un punto o una línea, los Números de policía (NDP), que conectan un Tramo con otro Objeto colindante. Normalmente esta Relación se representará mediante un punto aunque puede representarse mediante una línea cuando el portal de acceso esté en el interior de la parcela o separado de la linde con su Tramo. 

[](http://www.arnaizpartners.com/blogarnaizpartners/wp-content/uploads/2016/06/captura14.png)

[](http://www.arnaizpartners.com/blogarnaizpartners/wp-content/uploads/2016/06/captura15.png)

**b) Las Construcciones**

Corresponden a cualquier elemento artificial inmueble construido sobre un Objeto Suelo y que permite ejercer una actividad sobre o dentro de él. al abrigo de la intemperie. Entre cada  Objeto Construcción y el Objeto Suelo que lo contiene hay una Relación de Contenido donde el Suelo actúa como Origen y la Construcción como Destino. Aunque lo habitual es que la Construcción esté completamente contenida dentro del Objeto Suelo, no siempre es así, puede haber construcciones “macladas” o “engalabernadas” que sobrevuelan la parcela de suelo colindante.

Las Construcciones pueden ser de varios tipos:

- **Construcción Laminar**: son revestimientos macizos del suelo de cualquier clase que lo habilitan para un uso concreto. En la imagen siguiente se observa la división de la red viaria según su pavimentación. Esta asignación de pavimento determina su uso y está sujeta a una adaptación permanente a las necesidades de movilidad y accesibilidad.

[](http://www.arnaizpartners.com/blogarnaizpartners/wp-content/uploads/2016/06/captura16.png)

El esquema siguiente representa su relación con los demás objetos que los contienen.

[](http://www.arnaizpartners.com/blogarnaizpartners/wp-content/uploads/2016/06/captura17.png)

- 
**Cerramiento**: elementos constructivos perimetrales de cierre, normalmente de Objetos de Suelo y excepcionalmente de ámbitos interiores a esos Objetos de Suelo como es el caso de pistas deportivas o jaulas.

- **Edificación**: espacios construidos completamente cerrados, subterráneos y/o aéreos dentro de los que se ejecuta una determinada actividad. Los modelos de edificación resultantes de la cartografía tradicional son modelos de bloques verticales de altura variable, el edificio se descompone en tantos volúmenes como alturas distintas tenga: 

[](http://www.arnaizpartners.com/blogarnaizpartners/wp-content/uploads/2016/06/captura18.png)

Este modelo cartográfico no se puede ajustar a la realidad funcional y jurídica del edificio, es preciso descomponer el edificio en un conjunto de espacios: plantas y locales. De forma similar al realizado por el Catastro español en su modelo de edificación. En el esquema siguiente se representa esta estructura de componentes: 

[](http://www.arnaizpartners.com/blogarnaizpartners/wp-content/uploads/2016/06/captura19.png)

Visto en perspectiva: 

[](http://www.arnaizpartners.com/blogarnaizpartners/wp-content/uploads/2016/06/captura21.png)Los casos de locales en dúplex se resuelven mediante dos Relaciones entre Planta y Local como se observa en el esquema siguiente: 

[](http://www.arnaizpartners.com/blogarnaizpartners/wp-content/uploads/2016/06/captura22.png)

- 
**Otras Construcciones**: todos los demás elementos constructivos que no se pueden asimilar a alguna de las clases anteriores.

**c) Las Instalaciones **

Corresponden a elementos artificiales construidos sobre o debajo del terreno natural y que ayudan a prestar un servicio urbano. Pueden estar contenidos dentro de uno o más objetos de Suelo. Normalmente tienen carácter de Red, por ello sus elementos suelen estar conectados por Relaciones de conexión Uni o Bidireccionales para establecer el sentido y las condiciones del flujo. 

Las instalaciones pueden ser de varios tipos:

- 
**Red de saneamiento**: resuelve la evacuación de aguas residuales y pluviales, su tratamiento y vertido a la red hidrográfica o al mar.

- 
**Red de abastecimiento**: resuelve la captación, depósito, tratamiento y distribución de agua potable para consumo humano.

- 
**Red de riego**: resuelve la captación, depósito, distribución y uso de agua potable o no potable para el riego de vegetación y limpieza viaria.

- 
**Red de energía eléctrica**: resuelve la aducción, transformación y distribución de energía eléctrica. Cada vez más también resuelve la producción local de energía.

- **Red de gas**: resuelve la aducción, depósito y distribución de gas.

- 
**Red de movilidad**: resuelve la señalización y control de movilidad de automóviles, motocicletas, autobuses, camiones, tranvías, bicicletas y peatones.

- 
**Red de RSU**: resuelve la recolección, depósito, transferencia y vertido final de los residuos sólidos urbanos.

- 
**Red de comunicaciones**: resuelve la conectividad de voz y datos

- **Red de alumbrado**: resuelve la iluminación urbana.

- 
**Red meteorológica y de calidad del aire**: resuelve la toma de datos, transmisión y control del estado y calidad de la atmósfera.

- 
**Mobiliario**: se compone de todos los elementos artificial muebles existentes en la ciudad que no se incluyen en alguna de las clases anteriores. A diferencia de las demás clases todo objeto de Mobiliario está contenido dentro de un objeto de Suelo mediante una Relación de Contenido, por tanto no existe ningún objeto de mobiliario que rebase el límite del objeto Suelo que lo contiene.

**d) La Vegetación**

Corresponde a cualquier elemento vegetal de carácter económico u ornamental existente en la ciudad, por tanto se excluye la vegetación natural o incontrolada. Todo objeto de Vegetación está contenido dentro de un objeto de Suelo mediante una Relación de Contenido, por tanto no existe ningún objeto de vegetación que rebase el límite del objeto Suelo que la contiene.

**2) Grupos de Entidad**

Las cinco clases de Objetos antes descritos se agrupan en “Grupos de Entidad” que atienden a la función que ejercen, lo que también determina su descripción geométrica:

[](http://www.arnaizpartners.com/blogarnaizpartners/wp-content/uploads/2016/06/captura40.png)

# 3) Atributos de Entidad

Forman el cuerpo descriptivo de las Entidades: 

**4) Grupos de Relación**

A los elementos del Inventario de Objetos se les aplican Relaciones de los siguientes Grupos:

- 
**Origen Contiene a Destino (de Entidades): **por ejemplo las partes internas de un edificio.

- 
**Origen Conecta unidireccionalmente con Destino (de Entidades): **sirve para definir sentidos de flujo en redes.

- 
**Origen Conecta bidireccionalmente con Destino (de Entidades): **sirve para definir redes viarias, servidumbre de paso, vados o como vimos antes la Relación entre el NDP y el Edificio colindante

- 
**Origen aplica una Obligación a Destino (de Entidades): **sirven para enlazar Entidades del Inventario de Obligaciones con Entidades de cualquier otro Inventario.

- 
**Origen aplica un Derecho a Destino (de Entidades)**: sirven para enlazar Entidades del Inventario de derechos con Entidades de cualquier otro Inventario.

- 
**Origen Afecta a Destino (de Instrumentos, Atributos, Entidades, Ámbitos o Relaciones)**: sirven para establecer relaciones de afección.

# 5) Métodos de Explotación

Los métodos de explotación de datos para la obtención de Indicadores, Mapas y Servicios de Datos globales se definieron en la entrada de este blog: [Sistematizando la Planificación urbana global](http://www.arnaizpartners.com/blogarnaizpartners/?p=826#more-826). Para los objetos urbanos sirven sin modificación, aunque en este caso el método habitual será la formación de mapas por Grupo de Entidad o por Atributo aplicado directamente.

Los Mapas más habituales serán:

- 
**Suelo Conectivo**: tematiza las Entidades de Suelo por la Topología de Tramo

- 
**Suelo No Conectivo**: tematiza las Entidades de Suelo  por Lotes, Predios o Parcelas

- 
**Callejero**: indica la denominación de Calles y Números de Policía

- 
**Imagen urbana**: forma un mapa compuesto de entidades de Edificación por Altura, de Construcción Laminar por Material, de Cerramientos por Tipo, de Otras Construcciones por Tipo, de Vegetación por Tipo y de Mobiliario por Tipo

- 
**Instalaciones**: forma un mapa compuesto de entidades de Instalaciones por Tipo

# 

# Conclusión

La descripción de la ciudad está habitualmente gestionada mediante sistemas cartográficos CAD basados en líneas o mediante sistemas GIS basados en la conversión a objetos desde sistemas CAD, en ambos casos el origen de los datos es por restitución fotogramétrica, por eso son sistemas que nunca consiguen una descripción actual y completa de la ciudad ni de las relaciones que existen entre sus objetos y de éstos con la planificación, los derechos o las obligaciones.

Con **urbiTHINGS** se abre la puerta a una gestión colaborativa de los objetos urbanos y sienta las bases de un Inventario imprescindible para desplegar los nuevos sistemas de Smart City y de IoT.

Ignacio Arnaiz Eguren

Director de Innovación

Arnaiz Urbimática SL
