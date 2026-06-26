---
title: "La Planificación Urbana Global (Sistematizando con urbiTHINGS)"
date: "2016-06-07"
excerpt: "La planificación urbana es un requisito indispensable para un desarrollo sostenible y equilibrado de las ciudades. Aunque en el escenario actual, donde las ciudades están adquiriendo un gran protagoni"
---

La planificación urbana es un requisito indispensable para un desarrollo sostenible y equilibrado de las ciudades. Aunque en el escenario actual, donde las ciudades están adquiriendo un gran protagonismo, el papel de la planificación queda en segundo en plano ante los aspectos tecnológicos y sociales. Un segundo plano dominado por los técnicos urbanistas municipales, los desarrolladores inmobiliarios, los propietarios de suelos, los constructores y los arquitectos e ingenieros urbanos. Un mundo del que los ciudadanos sólo perciben y acceden al producto final, a las viviendas y a las industrias.

Esta discreción de la planificación urbana, a pesar de su enorme impacto económico, funcional y social sobre la ciudad y el territorio, es más evidente en los portales webs de los municipios, donde el Plan Urbano es muy raramente accesible y por supuesto no existen sistemas digitales para su mantenimiento y publicación. Además los planes siempre se ven centrados en el municipio, no es habitual que el planeamiento pueda visualizarse como un continuo supramunicipal y si lo hace casi siempre es de una forma simplificada.

En España pueden verse ejemplos regionales y provinciales en [Madrid](http://www.madrid.org/cartografia/planea/planeamiento/html/visor.htm), [Castilla y León](http://www.idecyl.jcyl.es/siucyl/), [Cataluña](http://ptop.gencat.cat/muc-visor/AppJava/home.do), [Baleares](http://muib.caib.es/mapurbibfront/visor_index.jsp), [Canarias](http://visor.grafcan.es/visorweb/), [Extremadura](http://sitex.gobex.es/SITEX/planeamiento), [Aragón](http://idearagon.aragon.es/visorSIUa/), [Asturias](http://urbanismo.i-cast.es/Visor/), [La Rioja](https://siu.larioja.org/), [Galicia](http://www.planeamentourbanistico.xunta.es/siotuga/#estado-plan-heading), [Valencia](http://cartoweb.cma.gva.es/visor/), [País Vasco](http://www.ingurumena.ejgv.euskadi.eus/r49-udalplan/eu/aa33aWAR/interfacesJSP/index.jsp), [Murcia](http://www.sitmurcia.es/visor/), [Navarra](http://siun.navarra.es/buscarmapa.aspx), [Albacete](http://urbr.dipualba.es/Visor). Además el Ministerio de Fomento mantiene un sistema de información de ámbito nacional: [SIU](http://visorsiu.fomento.es/siu/PortalSiu.html#).

Pero desde luego no existe ningún sistema de ámbito transnacional o mundial que ofrezca información urbanística. En esta situación la pregunta es ¿podemos crear un sistema de planificación urbana global? ¿Un sistema que transcienda las fronteras administrativas y nacionales, que no se limite a una simplificación estadística del plan y que permita construir un sistema de indicadores urbanos basado en datos reales y agregables?

En post anteriores de este mismo blog he incluido las soluciones que a lo largo de los años hemos desarrollado en Arnaiz para suplir esta deficiencia y proporcionar a la planificación urbana los recursos tecnológicos necesarios para que adquiera el protagonismo que se merece. (véanse las entradas [Planeamiento Digital](http://www.arnaizpartners.com/blogarnaizpartners/?p=148), [Registro digital de Planeamiento](http://www.arnaizpartners.com/blogarnaizpartners/?p=286),  [Planeamiento urbano masivo](http://www.arnaizpartners.com/blogarnaizpartners/?p=450), [Registro Urbano: una propuesta de Sistema de Información Territorial](http://www.arnaizpartners.com/blogarnaizpartners/?p=701) o urbi[THINGS: un sistema cVGI (información geográfica por colaboración controlada)](http://www.arnaizpartners.com/blogarnaizpartners/?p=806) )

Son innumerables los trabajos y publicaciones que tratan sobre los métodos y modelos de ordenación territorial, de la planificación urbana y de la definición de estrategias territoriales. Pero son muy pocos los trabajos que tratan de la implementación de la ordenación en un documento urbanístico. Es decir los que descienden a definir cuáles deben ser los parámetros, condiciones o mecanismos que se ocupan de desplegar la ordenación: las clases y categorías de suelo, los usos urbanísticos, las tipologías urbanas, los estándares dotacionales, los procedimientos de actuación, las condiciones de la edificación y parcelación o la protección de los espacios, edificios y monumentos.

Es notable destacar en este sentido, que tal carencia deben suplirla los propios Planes urbanísticos que suelen incorporar un diccionario terminológico para evitar problemas de interpretación a la hora de aplicar los conceptos urbanísticos que contiene.

En general todos estos asuntos de detalle y contenido quedan al arbitrio del redactor de Plan y en el mejor de los casos a Instrucciones Técnicas de ámbito municipal o regional que no suelen tener demasiado detalle y que suelen estar más preocupadas por conseguir documentos de papel normalizados que por obtener información urbanística estandarizada.

A todo ello se une que la ordenación urbanística pormenorizada es un asunto municipal, en algunos casos requiere el visto bueno de una autoridad regional que asegure la coordinación supramunicipal y el nivel estructural del Plan, pero no es lo habitual. En España hay más de 8.800 municipios y en el resto del mundo son incontables, esta dispersión competencial en medio de un vacío procedimental y metodológico determina que los planes de ordenación municipales sean todos parecidos pero todos distintos.

# Sistematización

Entendemos por Sistematización la tarea de construir una Ontología unificada de la Ordenación que sirva para formular un Plan en cualquier lugar del mundo utilizando conceptos urbanísticos globales estandarizados.

En** [uTHINGS](http://www.arnaizpartners.com/blogarnaizpartners/?p=806)**, nuestro Inventario de Planificación global, la disponibilidad de esta Ontología es vital para conseguir dos objetivos:

- 
Construir **Indicadores dinámicos de Planificación** desde la información municipal que puedan aportar información agregada en los planos regionales, nacionales o internacionales sin pérdida de fiabilidad.

- 
Construir **Mapas y Servicios de Datos** continuos, dinámicos y fiables de la Planificación que representen el modelo urbano global y proporcionen un sustrato de datos vital para adoptar decisiones de micro o macro localización de actividades.

La metodología de Sistematización se basa en definir cuatro elementos básicos:

- 
**El Ámbito**: el carácter global de **urbiTHINGS** determina que necesite reproducir la distribución competencial mundial. Es decir la estructura jerárquica en forma de árbol de todas las delimitaciones administrativas existentes. Cada delimitación administrativa en el lenguaje de **urbiTHINGS** es un** Ámbito**, comienza con el Ámbito Mundo y termina con los Municipios o Distritos que disponen de competencia para ordenar su ámbito. Una secuencia típica es: Mundo / Continente / Nación / Región / Provincia / Comarca / Municipio / Distrito. 

- 
**El Instrumento**: formado por el Plan que contiene el modelo urbanístico. Todo Instrumento se aplica sobre un Ámbito por la administración urbanística competente en dicho Ámbito. Por tanto un Inventario de Planificación global se forma por la yuxtaposición de los Instrumentos de todos los Ámbitos dependientes.

- 
**La Entidad**: corresponde con un objeto espacial que se delimita y nombra por cada Instrumento para atribuirle una función determinada. En el proceso de sistematización es preciso normalizar los tipos de función que los Planes asignan a sus entidades. A estos tipos en **uTHINGS** les llamamos «**Grupos de Entidad**«, y son globales, se definen una sola vez para todo el mundo y para todas las Entidades contenidas en sus Inventarios. En cierta forma se entiende que nuestro mundo, sin distinción de país o cultura, se compone de los mismos objetos espaciales. Puede haber Planes municipales que necesiten crear Grupos de Entidad porque no se ajustan a ninguno de los Grupos ya existentes. En este caso el nuevo Grupo, una vez consensuada su utilidad y necesidad, se añadirá como un Grupo también de carácter global.

- 
**El Atributo**: corresponde a cada una de las características descriptivas o normativas que se expresan en cada Entidad y que le proporcionan su contenido específico. Forma su ADN, aquello que individualiza a cada Entidad dentro de su Grupo. En el proceso de sistematización también es preciso definir y asignar a cada Grupo sus Atributos propios. Sin embargo los Atributos están sujetos a la jerarquía de los Ámbitos: todo Atributo podrá ser asignado a una Entidad  siempre que sea atribuible a su Grupo de Entidad y esté definido en cualquier Ámbito de la línea generacional de esa Entidad. Esto implica que un Atributo definido por un Plan asignado al Ámbito Mundo puede ser **asignado directamente** en cualquier Entidad de cualquier Ámbito del Mundo, un Atributo definido por un Plan Nacional podrá ser asignado directamente en las Entidades de todos los Ámbitos contenidos en esa Nación y un Atributo definido por un Plan Municipal sólo podrá ser asignado directamente en las Entidades de ese Municipio. Este mecanismo para compartir atributos lo denominamos «**Herencia**«.

Esta metodología de trabajo fomenta un proceso normalizador de los planes, siempre y cuando todos los planes del mundo utilicen de forma predeterminada los Atributos globales para cualificar sus Entidades. Sin embargo eso no es posible sin un acuerdo global.

Aunque no haya ese acuerdo global sigue siendo imprescindible obtener Indicadores, Mapas y Servicios de alcance global y eso sólo es posible utilizando otro objeto de **urbiTHINGS**: las **Relaciones de Equivalencia, **que permiten conectar un Atributo definido por un Plan local con Atributos definidos en cualquiera de los ámbitos de su línea generacional o conectar una Entidad del Plan local con Entidades tipo también definidas en cualquiera de los ámbitos de su línea generacional.

[](http://www.arnaizpartners.com/blogarnaizpartners/wp-content/uploads/2016/06/Dibujo11.png)

En la figura se representan todos estos elementos y sus conexiones.

# Una propuesta de Grupos de Entidad globales

La planificación urbana, al definir su modelo territorial, delimita Entidades, espacios territoriales, para cumplir cuatro grandes objetivos o funciones:

- 
**Separar lo urbano de lo no urbano**: supone responder a la pregunta de ¿dónde situar la ciudad? En España esta función corresponde al concepto de «Clasificación del suelo», fuera de España o no existe o se utilizan conceptos similares al de clasificación. En esta propuesta proponemos «**Category**» como denominación del grupo.

- 
**Definir la morfología urbana**: supone responder a la pregunta de ¿cómo debe ser la ciudad?. Es decir asignar el uso, su intensidad y la tipología de edificación y parcelación. En España corresponde al concepto de «Zonificación», fuera de España se puede asimilar al concepto de «Zonning». Se propone «**Zone**» como denominación del grupo.

- 
**Señalar las áreas sujetas a cambio**. supone responder a las preguntas de ¿quién debe cambiar la ciudad y cuándo debe hacerlo? Para ello se delimitan áreas o sectores sujetos a acciones de renovación urbana o de nueva ciudad. En España se suelen denominar «Sectores», «Unidades de ejecución» o «Ámbitos de Actuación», fuera de España también tienen una denominación variopinta. Por eso mantenemos el grupo como «**Sector**«

- 
**Señalar las áreas preservadas del cambio**. supone responder a la pregunta ¿que debe permanecer a salvo del cambio urbano? Para ello se delimitan áreas, edificaciones o construcciones preservadas, bien por sus valores históricos, por estar en áreas de riesgo,  o por tener afecciones de cualquier tipo. En España se suelen denominar «Protecciones»,  «Afecciones» o «Reservas». En esta propuesta serán del grupo «**Pr****eserved**«

Con estos cuatro grupos de Entidad será posible delimitar en la práctica todas las Entidades definidas por los planes. Si es preciso se pueden desglosar en subgrupos atendiendo a conceptos de mayor detalle. Por ejemplo el grupo Zone puede desglosarse en «Use Zone», «Height Zone», o «Typology Zone». Este desglose sólo será preciso cuando el modelo urbano se construya mediante superposición de subzonas. 

# Una propuesta de Atributos de Planificación globales

Cada grupo de Entidad antes propuesto dispone de un conjunto de Atributos que determinan el contenido normativo específico asignado por el Plan a cada una de sus Entidades. Se definen en la siguiente tabla:

# Métodos de Explotación

[](http://www.arnaizpartners.com/blogarnaizpartners/wp-content/uploads/2016/06/captura3.png)La obtención de Indicadores, Mapas y Servicios de Datos globales sólo es posible mediante la aplicación exhaustiva de los mecanismos de Herencia de Atributos y de Relaciones de Equivalencia. En la figura superior se puede observar un mapa continuo de la Comunidad de Madrid formado por la yuxtaposición de los mapas normativos de sus 179 municipios y con una leyenda unificada gracias a las Relaciones de Equivalencia establecidas entre las Entidades de Zona de todos ellos con las Entidades del Instrumento base de la Comunidad de Madrid.

Para extraer datos del sistema se establecen cuatro métodos de explotación:

- 
**Por Grupo de Entidad**: selecciona Entidades y genera mapas basándose en su Grupo. Es el método más sencillo pero también el menos ilustrativo.

- 
**Por Grupo de Entidad y Relación de Equivalencia**: genera mapas como el de la figura superior. Todas las Entidades de un Grupo determinado de todos los Instrumentos Locales se representan utilizando la simbología asignada a su Entidad Equivalente en el Instrumento Base, en este caso un Instrumento Base Regional. Dado que las Entidades Locales pueden tener Relaciones de Equivalencia con diferentes Instrumentos Base en su Línea generacional, una misma Entidad puede representarse de forma distinta al construir un Mapa Regional, un Mapa Nacional o un Mapa Global, según la Relación de Equivalencia que tenga con cada uno de los Instrumentos Base respectivos.

- 
**Por Atributo aplicado directamente**: selecciona todas las Entidades que tengan aplicado un Atributo concreto, generando mapas temáticos por su contenido. Generalmente son sencillos cuando el mapa es de ámbito local, en otro caso sólo pueden realizarse si los planes se han redactado normalizados, es decir utilizando obligatoriamente la aplicación directa y el mecanismo de Herencia.

- 
**Por Atributo y Relación de Equivalencia**: selecciona todas las Entidades que tengan aplicado un Atributo conectado mediante una Relación de Equivalencia con otro Atributo de un Instrumento Base. El mapa se monta usando el Atributo del Instrumento Base como campo temático. Se debe usar cuando los planes no se han normalizado y sólo se dispone de Relaciones de Equivalencia.

Mediante estos cuatro métodos, más los Grupos de Entidad y los Atributos propuestos, será posible generar Mapas globales con el siguiente contenido:

- 
**Categoría del suelo**: tematiza las Entidades de «Category» por los Atributos de «Urban Land» y «Non-Urban Land»

- 
**Uso**: tematiza las Entidades de «Zone» según el Atributo «Use Categories» que haya sido asignado como «Permitted as primary».

- 
**Densidad prevista**: tematiza las Entidades de «Zone»  por algunos de los atributos de «Density»

- 
**Tipologías de edificación**: tematiza las Entidades de «Zone»  por el Atributo de «Housing typologies»

- 
**Alturas previstas de edificación**: tematiza las Entidades de «Zone»  por el Atributo de «Building Height»

- 
**Dimensiones de parcelación**: tematiza las Entidades de «Zone»  por el Atributo de «Lot Size»

- 
**Edificabilidad**: tematiza las Entidades de «Zone»  por el Atributo de «Floor Area Ratio «

- 
**Protecciones**: tematiza las Entidades de «Preserved»  por el Atributo de «Category»

- 
**Actuaciones**: tematiza las Entidades de «Sector»  por el Atributo de «Procedures for Land acquisition»

**urbiTHINGS** proporciona toda la funcionalidad precisa para redactar Instrumentos, delimitar Entidades, asignar Atributos, establecer Relaciones, operar contra el Inventario de Planificación municipal y publicar estos servicios web de mapas y datos.

Se abre con ello una nueva vía para definir Indicadores urbanos basados en datos reales, tema que será desarrollado en el siguiente post.

Ignacio Arnaiz Eguren
Director de Innovación
Arnaiz Urbimática SL
