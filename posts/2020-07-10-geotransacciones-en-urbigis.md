---
title: "Geotransacciones en urbiGIS"
date: "2020-07-10"
excerpt: "A lo largo de este blog hemos hablado en muchas ocasiones de las geotransacciones, esas operaciones que permiten el mantenimiento colaborativo de un conjunto de datos espaciales a los que denominamos "
---

A lo largo de este blog hemos hablado en muchas ocasiones de las geotransacciones, esas operaciones que permiten el mantenimiento colaborativo de un conjunto de datos espaciales a los que denominamos «Inventarios». En esta entrada seguiremos los pasos necesarios para realizar una geotransacción. Será un ejemplo práctico de como [urbiGIS](https://urbigis.com) resuelve un problema que en pocas ocasiones ha tenido solución.Os advierto de antemano que esta entrada no es de lectura fácil,así que no me sentiré ofendido si os quedáis aquí con la noticia de que [urbiGIS](https://urbigis.com) ya tiene casi terminados los **Inventarios transaccionales**.

Una geotransacción se establece siempre entre dos «instrumentos», entendidos como conjuntos de datos interoperables, uno es el «Inventario» donde la geotransacción se efectúa y otro es el «Operador» donde se define el contenido de las operaciones a realizar contra el Inventario. Además de estas dos funciones hay una tercera denominada «Bases», son instrumentos que contienen plantillas normalizadas de atributos para caracterizar los elementos geométricos de los Inventarios. Los «Bases» al igual que los Inventarios solo se pueden alterar mediante Operaciones. Esta es la diferencia principal que distingue en [urbiGIS](https://urbigis.com) a los Inventarios y Bases de los demás conjuntos de datos que pueden ser editados de forma directa. 

La creación y operación de los instrumentos Base se reserva por ahora a los administradores de [urbiGIS](https://urbigis.com), y se ejecuta bien por propia iniciativa o bien a instancia de otra Cuenta o Institución pública. Esta restricción intenta garantizar la integridad y calidad de unos instrumentos que son fundamentales para asegurar la interoperabilidad y la explotación unificada de datos entre Inventarios.

Los Inventarios, sin embargo, pueden ser creados por cualquier Cuenta de [urbiGIS](https://urbigis.com), su creador les asigna una denominación, un territorio donde está contenido y un propósito. Esta Cuenta pasa a ser la Cuenta «Manager» del Inventario y será la responsable de aprobar y ejecutar todas las operaciones que se definan contra él. El territorio será uno de los más de seiscientos mil territorios existentes en [urbiGIS](https://urbigis.com) y el propósito será uno de los definidos en [urbiGIS](https://urbigis.com) según el tipo de elemento que vaya a contener: planificación, derechos, objetos, obligaciones, unidades territoriales, elementos geográficos o elementos sin una definición concreta, estos últimos serán Inventarios «Open», abiertos sin restricciones a que cualquier usuario de [urbiGIS](https://urbigis.com) opere contra ellos.

Los instrumentos de Operación pueden ser creados por cualquier Cuenta de [urbiGIS](https://urbigis.com) pero solo podrán operar contra los Inventarios en los que esa Cuenta sea Manager del Inventario o bien esa Cuenta pertenezca con derechos de escritura al Equipo de la Cuenta Manager del Inventario. Es decir, la Cuenta Manager del Inventario deberá invitar a otras Cuentas a formar parte de su Equipo para colaborar juntas en operar contra sus Inventarios. Esta restricción no se aplica en los Inventarios Open sobre los que puede operar cualquier Cuenta de [urbiGIS](https://urbigis.com).

**1.- Crear un Inventario**

Bien, si seguimos el proceso paso a paso lo primero será crear un Inventario utilizando la opción «Añadir Instrumento» del módulo de Instrumentos, que presentará el siguiente panel:

A «Mi nuevo Inventario» le he asignado el territorio de Madrid, será un Inventario de objetos, tendrá como Instrumentos Base los «World Base Units» (un Base de ámbito global que define todas las unidades a utilizar) y el «World Base Objects»  (otro Base de ámbito global que define los atributos más comunes para describir objetos), también le he asignado como idioma el Español (puedo asignarle varios idiomas) y éste será el idioma por defecto. Como todo Instrumento tiene una descripción y tendrá una geometría asociada, el ámbito geográfico concreto dentro del Territorio donde están sus entidades geométricas. La cuenta Manager es urbiThings porque lo he creado con un usuario de esa Cuenta.

Una vez creado se podrá visualizar y modificar alguna de sus propiedades en el panel de Instrumentos. Para encontrar nuestro Inventario he activado el filtro y al buscar el nombre de mi nuevo Inventario lo localizamos rápidamente, tened en cuenta que el panel de Instrumentos de mi Cuenta puede contener cientos o miles de Instrumentos y el filtro es esencial para encontrarlos.

Como se observa el contador de Versiones está a cero. Todo Instrumento en [urbiGIS](https://urbigis.com) puede tener varias versiones, incluso los Inventarios, aunque lo normal es que sólo tengan una. Esto de las versiones es una herencia de los Instrumentos de Planificación que sufren cambios a lo largo de su tramitación. Pero en todo caso es preciso crear una versión, para ello se pulsa en el botón de versiones y se utiliza el menú del panel de Versiones para añadir una nueva:

Las versiones de Inventario al ser creadas siempre quedan en estado de Abiertas, lo que permite que se opere inmediatamente contra ellas. Bien, no hay más cosas que hacer, el Inventario ya existe y está vacío. Para meter cosas en él hay que hacer Operaciones.

**2.- Crear un Operador**

Para crear un Operador, hacemos igual que con el Inventario, usamos la opción de «Añadir Instrumento» del panel de Instrumentos, la diferencia es que si se especifica que es de tipo Operador nos pedirá el Inventario al que opera. Es importante que ambos Instrumentos tengan el mismo propósito. Un Operador de Objetos solo puede operar contra un Inventario de Objetos:

Una vez creado, igual que antes, crearemos su primera versión y utilizando el desplegable de Acciones en sus propiedades lo pondremos en estado de «En edición», con este paso también podremos asignar ese trabajo de edición a una cuenta distinta a la Manager.

Ya está todo listo para definir qué operaciones realizará nuestro nuevo Operador contra su Inventario. Como el Inventario está vacío lo normal es que haga operaciones de insertar cosas en él. Por ejemplo crearemos en el operador una nueva entidad de Activos, pulsando el botón de Entidades y la opción de menú de «Añadir nueva Entidad»:

En el panel de edición de Entidades asignamos a la Entidad una clave, un nombre, un grupo de entidad y una geometría:

También podemos asignar a la nueva Entidad algunos atributos (procedentes del instrumento Base asignado al Inventario operado):

En este ejemplo añadimos un atributo de «Estado del inmueble»:

Una vez asignado el Atributo crearemos su Valor en la Entidad, en este caso el Atributo «Estado del Inmueble» se expresa mediante un dominio de valores:

De la misma forma podemos añadir al Operador cuantas Entidades sean precisas, si son muchas y las tenemos definidas en un fichero espacial las podemos importar todas de golpe.

Finalmente indicaremos qué operación vamos a realizar con esa o esas Entidades, pulsando el botón de operaciones:

Con la opción de menu «Añadir Operación» podemos añadir una operación al Instrumento operador, en este caso de «Inserción»:

Una vez creada podemos indicar los miembros de la operación: la Entidad origen  «E1» (o cuantas se añadan como origen) se insertará en el Inventario destino «Mi nuevo…»

**3.- Ejecutar la Inserción**

Sin mas operaciones a realizar se edita la versión y se ejecuta la acción de cierre de la versión para que el «Manager» del Inventario ejecute la operación en el panel de Operaciones. Como resultado el Inventario contará con su primera entidad:

Si has conseguido llegar hasta aquí sin duda eres un esforzado lector, te propongo formular otra operación, esta vez para alterar la geometría de la primera Entidad del Inventario, en realidad podemos realizar cualquier alteración: cambiar sus propiedades, su geometría, sus asignaciones…

**4.- Realizar una operación de Sustracción**

Como antes, para operar contra el Inventario, hay que crear un nuevo Instrumento operador: «Segundo Operador de Mi nuevo Inventario de Activos», crear su versión correspondiente, ejecutar las acciones para ponerla en estado de «En Edición» y añadir una Entidad que servirá para sustraer un trozo de la Entidad existente en el Inventario.

Como es conveniente visualizar las entidades ya existentes para poder plantear la entidad operadora, añadimos al Escritorio las entidades del Inventario, para eso desde el menú de opciones de la versión del Inventario seleccionamos «Mostrar Entidades por Grupo»:

Nos presentará un dialogo para seleccionar los grupos que queremos visualizar, en este caso solo hay una Entidad del grupo «Edificaciones»,  al aceptar incluirá en el escritorio una nueva capa bajo el nodo del Inventario, en principio la presenta como imagen, pero se pueden seleccionar las entidades que queremos en WFS de forma que podamos utilizarlas de apoyo para la nueva entidad.

Añadimos al Segundo Operador la Entidad que servirá para ejecutar la sustraccion, se visualiza en amarillo y servirá para recortar a E1

Añadimos la Operación de sustracción, donde el miembro origen es la Entidad que recorta y el miembro destino es la Entidad a recortar, observa que el estado de la Operación es «Pendiente», en este estado la operación no se podrá ejecutar, es preciso verificar previamente que la operación geométrica es factible y con el resultado previsto.

Para verificar la Operación se utiliza la opción de menú de «Iniciar Ejecución Tentativa», la ejecución genera un informe que se puede descargar pulsando el icono de Adobe PDF, si termina sin errores modificará el estado de la Operación a «Ejecución tentativa sin errores» y el resultado se puede visualizar utilizando la opción «Visualizar»:

Al pulsar la opción de Visualizar añadirá al escritorio tantas capas como grupos de entidad hayan sido alterados, la geometría de los operadores  y los estados inicial y final de la Operación:

Finalmente con la ejecución tentativa sin errores se ejecuta la acción de cierre de la versión para que el «Manager» del Inventario pueda ejecutar la operación efectiva en el panel de Operaciones. Como resultado el Inventario contará con la entidad modificada.

**5.- Conclusiones**

Contribuir a mantener un Inventario mediante geotransacciones no es una operación simple, además puede haber muchas operaciones simultáneas y puede que algunas intenten alterar un mismo elemento del Inventario, con lo que, según el orden en que se ejecuten, pueden existir conflictos que solo pueden resolverse mediante otra operación. Sin duda los Inventarios de Planificación son los más complejos ya que una operación puede que actúe sobre distintas Entidades del Inventario y se debe verificar que el resultado es congruente y que no quedan, por ejemplo, suelos urbanos encima de suelos rústicos. Todo depende al final de que el Manager tenga bien claro lo que está haciendo y devuelva a los editores de las operaciones las cosas que están mal.

Ha quedado claro que el procedimiento es largo, necesariamente largo si queremos asegurar la calidad y la trazabilidad de los cambios. Pero estamos estudiando para algunos casos la creación de Asistentes que simplifiquen el trabajo al usuario, sobre todo para los Inventarios Abiertos donde el usuario simplemente dibuje su entidad, indique sus atributos, lo envíe y no tenga que preocuparse de más, el sistema se ocupa de crear el instrumento, las versiones, las entidades, las operaciones y de su ejecución final.

Creemos que ha quedado demostrado que desde una plataforma cloud sobre un navegador estándar es posible mantener colaborativamente un Inventario de elementos terrestres asegurando la calidad de los resultados finales, dentro de los márgenes de precisión que nos imponen los fondos cartográficos y fotográficos globales.

Ignacio Arnaiz Eguren

Director
