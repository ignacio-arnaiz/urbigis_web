---
title: "Servicios de Mapas, un filón de datos inexplorado"
date: 2018-01-16
---

Se calcula que puede haber 1.500.000 mapas en formatos abiertos disponibles en todo el mundo. En [urbiThings.com](http://urbithings.com) hemos alcanzado los 107.000 mapas disponibles. Poco a poco vamos incrementando el Catálogo, pero a la larga no puede ser una tarea exclusivamente nuestra, creemos que la colaboración será el método ideal para abarcar el máximo posible de mapas.

En el post anterior «[Mapas abiertos por supuesto, pero también accesibles desde urbiThings.com](https://info.urbigis.com/wp-admin/post.php?post=2119)»  indicaba los problemas que tienen actualmente los servicios de mapas y las soluciones que estamos aplicando desde [urbiThings.com.](http://urbithings.com) En este post voy a hacer un pequeño análisis de situación, con casi 110.000 mapas, creo que ya es posible afinar bastante.

Si atendemos a la distribución espacial, aunque durante la exploración hemos dedicado mas esfuerzo a los países cercanos o a Sudamérica, se puede observar un mapa significativo: (está disponible en  [urbiThings.com](http://urbithings.com) buscando en el contexto de Servicios de Mapa con el nombre de «Worlwide urbiThings Catalog Map Services»)

![](https://info.urbigis.com/wp-content/uploads/2018/01/Captura.png)

Aún faltan por explorar gran parte de Norteamérica, Alemania o los Países Bajos. Pero no esperamos mucho más de África, Medio Oriente o de Asia. Es notable la falta de servicios en Europa del Este y sobre todo en Rusia. Por otro lado hay países como Bolivia o Colombia que destacan por la riqueza de mapas que publican. 

También es notable destacar el número de mapas de alcance global, más de 12.000, en gran parte publicados por agencias de la ONU o de los Estados Unidos, sin embargo es uno de los ámbitos donde es más frecuente la publicación repetida de un mismo mapa por distintas organizaciones.

Para asegurar la ubicación correcta de cada mapa no se puede confiar en los datos de extensión publicados entre sus metadatos, por ello en [urbiThings.com](http://urbithings.com) vinculamos de forma manual cada mapa con la Unidad o Unidades Administrativas que lo contienen. 

Los servicios de Mapa se publican (o se deben publicar) con keywords como metadatos para poder ordenarlos o localizarlos por temas y contenidos significativos. Pero no siempre es así y en muchas ocasiones los términos incluidos como keywords no resaltan precisamente por su utilidad. En algunos casos los diseñadores lo que hacen es incluir el máximo de información posible dentro del propio nombre del mapa. Un ejemplo español reciente es el geoportal del [MAPAMA](http://sig.mapama.es/geoportal/) donde se presentan nombres como: «*Biodiversidad – Ecosistemas – Habitats de Interés Comunitario – Hábitats rocosos y cuevas – Roquedos silíceos con vegetación pionera del Sedo-Scleranthion o del Sedo albi-Veronicion dillenii.*» (190 caracteres). Claramente han optado por trasladar al nombre gran parte de los keywords. En otras ocasiones se incluyen keywords no significativos como «WMS» o se utiliza la costumbre de repetir el nombre de la capa. 

Antes este dislate en [urbiThings.com](http://urbithings.com) hemos optado por asignar cada mapa a un único grupo o categoría, de forma que sea posible su localización y presentación de la forma mas racional posible. Esto tiene tres inconvenientes:

1. Que categorizar los temas de una forma universal es una tarea titánica. Nunca lo haremos a gusto del productor del mapa. Nos podríamos haber limitado a utilizar los temas INSPIRE, pero son demasiado escuetos. Al final de este post expongo las categorías que estamos utilizando, cualquier sugerencia para modificarlas o ampliarlas será bien recibida.
2. Que no siempre es fácil asignar un mapa a una categoría simple, sobre todo cuando son mapas de base donde se mezclan aspectos espaciales muy diversos. En estos casos hay que decidir: se crea una capa base asignada a la categoría genérica de «Cartografía base», o se despieza en capas sencillas cada una con una categoría diferente. Normalmente optamos por la primera, pero a veces es interesante poder utilizar aspectos simples de una cartografía compleja.
3. Que no es un proceso fácilmente automatizable, si el productor del mapa no ha incluido el keyword preciso que mejor lo caracteriza, tendrá que ser un operador humano quien observe el mapa y le asigne su categoría.

Lo hemos intentado hacer bien, pero habrá muchos mapas, en esos más de 100.000, que estén mal categorizados. En este aspecto invitamos a las organizaciones que los publican a colocarlos en su categoría correcta o a sugerirnos una nueva categoría.

En el siguiente cuadro se presenta el número actual de mapas del Catálogo agrupados por grandes familias:

![](https://info.urbigis.com/wp-content/uploads/2018/01/Captura-1.png)

![](https://info.urbigis.com/wp-content/uploads/2018/01/Captura-2.png)

Claramente el Medio Urbano o los aspectos sociales están en minoría. Me temo que para el despliegue de las Smart Cities será necesario un esfuerzo importante por conocer y controlar mejor nuestras ciudades. Destaca sin duda el apartado de Planificación, pero no nos llamemos a engaño, gran parte de los casos son imágenes georreferenciadas de baja calidad. En este aspecto me debo echar un cumplido a mí mismo, ya que desde Arnaiz Urbimática hemos hecho un gran esfuerzo por presentar mejores mapas de Planificación. Naturalmente la cartografía tradicional es la más abundante, ya que el esfuerzo de publicar información existente siempre es menor que el de crear o sistematizar información.

Los mapas por ahora son una «res publica», una «cosa» realizada y publicada por las Administraciones Públicas. En el Catálogo de [urbiThings.com](http://urbithings.com) cada mapa se asigna a la Organización que lo produce (actualmente tenemos 573 dadas de alta) y éstas las tenemos divididas en cinco categorías: Administración Pública, Empresa Pública, Empresa Privada, Institución Privada y Comunidad de Usuarios (estos últimos son ciudadanos de a pié). El cuadro siguiente nos muestra como están distribuidos los mapas hasta ahora en el Catálogo:

![](https://info.urbigis.com/wp-content/uploads/2018/01/Captura-3.png)

![](https://info.urbigis.com/wp-content/uploads/2018/01/Captura-4.png)

Claramente el sector privado o los ciudadanos no están por producir mapas. Y no lo están por varias razones:

1. Porque no disponen de los medios técnicos ni de los conocimientos para dibujar y crear información espacial: [urbiThings.com](http://urbithings.com) intenta poner al alcance de cualquiera esa posibilidad.
2. Porque no disponen de los recursos de hardware, software o comunicaciones precisos para publicar mapas,  y las plataformas que los proporcionan son caras. También [urbiThings.com](http://urbithings.com) intenta resolver este problema.
3. Porque todavía no hay una costumbre o tendencia social a que las cosas se pueden colocar en el espacio de una forma sencilla. Que las empresas puedan colocar sus productos, las instituciones sus datos de gestión, los institutos de investigación sus resultados, los medios de comunicación sus informaciones, los colegios el trabajo de sus alumnos o los ciudadanos sus preferencias, actividades o denuncias. Por eso [urbiThings.com](http://urbithings.com) intenta que dibujar mapas sea tan sencillo como subir vídeos a una plataforma de Internet.

En [urbiThings.com](http://urbithings.com), una plataforma pensada en su origen para facilitar a los Ayuntamientos la creación y el mantenimiento de Inventarios urbanos, nos hemos sorprendido de la enorme cantidad, del filón existente de datos espaciales.  Y de las enormes posibilidades futuras que brinda la creación colaborativa de información espacial. Seguro que se creará mucha información inútil, pero no mucha más de la que ya existe en los demás ámbitos de Internet.

Con más de 100.000 mapas accesibles nuestras herramientas de búsqueda y visualización en [urbiThings.com](http://urbithings.com) se han quedado obsoletas, por eso en los próximos días os comentaré los avances que estamos haciendo para facilitar su búsqueda y utilización.

**ANEXO Cuadro de Categorías:**

![](https://info.urbigis.com/wp-content/uploads/2018/01/Captura-5.png)