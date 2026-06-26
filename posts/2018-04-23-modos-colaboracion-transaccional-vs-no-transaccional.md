---
title: "Modos de Colaboración: Transaccional vs No Transaccional"
date: "2018-04-23"
excerpt: "En el post anterior he hablado de los tipos de Colaboración atendiendo a criterios relativamente inteligibles, aunque no siempre lo consigo, pero en este voy a abordarla desde el punto de vista de los"
---

En el post anterior he hablado de los tipos de Colaboración atendiendo a criterios relativamente inteligibles, aunque no siempre lo consigo, pero en este voy a abordarla desde el punto de vista de los modos, y probablemente seré aún más confuso. Hay dos modos básicos de colaborar para mantener datos, tanto da que sean espaciales o no: el modo de transmisión de ficheros (no transaccional) y el modo de transmisión de operaciones (transaccional).

MODO NO TRANSACCIONAL: TRANSMISIÓN DE FICHEROS

En un escenario donde varios usuarios quieren colaborar para crear y actualizar información, el modo de transmisión de ficheros es el más sencillo. Todos lo hemos utilizado en nuestras redes locales y ahora también con nuestras carpetas compartidas en Internet. 

Para colaborar es preciso abrir el fichero o descargarlo desde una carpeta compartida, efectuar los cambios que se precisen y después guardarlo o volverlo a subir, sustituyendo el fichero anterior o creando una nueva versión.

Para hacer eficiente este modo, los creadores de software han trabajo mucho montando diversas estrategias como el control de cambios y versionado interno del fichero (Word utiliza esta estrategia), utilizando un sistema de versionado como los de Google Drive o Dropbox, bloqueando los ficheros mientras los esté utilizando un usuario en modo de escritura. También en grupos de trabajo de desarrollo de software se suelen utilizar programas específicos como Tortoise, que permiten mantener una base de datos documental con todos los cambios que ha sufrido cada fichero y establecer ramas o branches para el control de su evolución.

Todo ello con el objetivo de que los colaboradores no se pisen mutuamente sus cambios y de que cuando alguien borra lo que no debe, se pueda recuperar sin problemas. Aunque, sin una metodología estricta de trabajo, esto no siempre se consigue.

La colaboración abierta de la que hablaba en el post anterior funciona bajo este esquema de ficheros, donde muchos usuarios actúan contra un fichero y el sistema, con mejor o peor fortuna, les ayuda para que todo funcione razonablemente bien.

En el mundo de la información espacial este sistema se emplea habitualmente, incluso en ámbitos de información tan sensible como la de planificación urbana. Por ejemplo en Extremadura o en Castilla y León, para incluir una modificación puntual o un plan de desarrollo dentro de la ordenación vigente, el equipo redactor recibe el plan vigente completo del gestor territorial, incorpora sus cambios y lo devuelve completo y modificado. El gestor territorial verifica la calidad de los cambios y sustituye la ordenación vigente por la modificada. Es un mecanismo sencillo y eficiente, pero tiene inconvenientes:

a) Cuando hay varios equipos que están trabajando simultáneamente en el mismo fichero. En estos casos el gestor territorial debe «refrescar» el fichero de trabajo de los equipos más retrasados en el tiempo para que vayan asumiendo los cambios que han realizado los equipos más adelantados. Dependiendo de la tecnología del fichero esto puede resultar extremadamente fastidioso. Si no se controla bien, el trabajo de los primeros puede verse afectado por el trabajo de los últimos.

b) Cuando los ficheros son muy grandes. Todos los sistemas trabajan muy bien con ficheros pequeños, pero a medida que crecen también crecen los problemas de manejo, no siempre las aplicaciones están preparadas para realizar cambios en ficheros que pueden ocupar centenares de megas. Para estos casos funciona bien la descarga mediante un servicio WFS, ya que el sistema opera, en principio, solo con las entidades que encajan en la ventana de zoom, pero si el usuario se aleja o se mueve mucho, al final termina casi con tantas entidades como en el dibujo completo.

c) El control sobre lo que hace cada usuario es complicado, puede tocar aspectos o espacios del fichero que no le corresponden. Vale que normalmente alguien se ocupa de comprobar y validar todos los cambios realizados, pero hay muchas cosas que pueden salir mal. Sobre todo cuando el fichero contiene información urbanística vinculante, información protegida o sensible.

En urbiThings este modo se utiliza para la edición de conjuntos de datos.

MODO TRANSACCIONAL: TRANSMISIÓN DE OPERACIONES

Este es el modo como funciona siempre el mantenimiento de una base de datos. Toda la información contenida en la base y sus procesos de actualización está controlada por un gestor. Los usuarios, para alterar su contenido, proponen al gestor de la base una operación, expresada en un lenguaje (normalmente SQL) con sintaxis estricta. El gestor recibe la operación, verifica su calidad sintáctica y efectúa los cambios ordenados en la base de datos. También se ocupa de mantener una cola de peticiones que ejecuta de forma ordenada, de impedir que otras transacciones afecten a los elementos sobre los que actúa y de controlar que las operaciones solicitadas son congruentes con el modelo de datos, evitando que se produzcan incoherencias o se altere la integridad de la base de datos.

Como en toda transacción si se produce una incidencia que afecte al resultado final, la transacción se paraliza y se devuelve el sistema a su estado inicial.

Todas las operaciones que se efectúan habitualmente por Internet se hacen de este modo, pero cuando se trata de manejar información espacial, aunque sea contra una base de datos espacial, es un modo menos habitual. Yo solo conozco algunos, seguro que hay muchos más:

a) Catastro de España: mantiene su base de datos mediante operaciones contenidas en los denominados «formatos de intercambio» para «sistemas interconectados». Son pequeños ficheros XML, sujetos a una hoja de estilo XLS, que definen alteraciones ordenadas e identificadas por un número de expediente. El sistema de Catastro permite procesar estos ficheros y validar sus posibles errores. El resultado se verifica de forma inmediata con los servicios de mapas de Catastro.

b) Urbanismo en Red: propone, de la misma forma que el Catastro, un formato XML de operación, el denominado FIP. Tras una solicitud al Registro de Planeamiento, los usuarios reciben del Registro un enlace para la descarga de la ordenación vigente en un fichero FIP de tipo 1. Mediante una aplicación desktop (editorFIP) proponen las operaciones que necesitan y devuelven a la administración urbanística otro fichero FIP de tipo 2 que contiene esas operaciones sobre la ordenación vigente. El sistema del Registro se ocupa de validar y ejecutar el FIP2 para actualizar la ordenación refundida vigente. El resultado se verifica de forma inmediata en el visor de Planeamiento.

c) Open Street Map: el usuario dispone de una aplicación desktop, descargada desde  OSM, con la que obtiene una porción del callejero con un tamaño controlado desde los servidores de OSM,,en formato vectorial, para trabajar con ella (sería como un FIP1 parcial). Con la aplicación OSM local el usuario propone las operaciones que estime conveniente y al finalizar la propia aplicación las remite a OSM (sería como el FIP2). Una vez recibido, OSM ejecuta sus procesos internos de actualización de la base de datos o de rechazo de las operaciones propuestas. El resultado se verifica de forma inmediata en el visor de OSM.

d) urbiThings: en este caso el usuario, sin salir del entorno de urbiThings en el navegador y sin descargar otras aplicaciones adicionales, puede crear lo que urbiThings denomina un «instrumento de operación», en el que anotará las operaciones que necesite realizar contra uno o varios inventarios de urbiThings (conjuntos de datos estructurados), una vez finalizados los cambios anotará un cambio de estado que lanzará un proceso interno de validación y ejecución de las operaciones en los Inventarios afectados. El resultado se verá de forma inmediata en las capas públicas de urbiThings.

En todos estos casos la información se actualiza tras una transacción, más o menos larga y más o menos compleja, pero que tiene buenas propiedades:

a) Siempre deja rastro, el control de la transacción permite conocer en todo momento cuando, quien y qué datos se han modificado.

b) Solo se transmite la cantidad de información mínima para realizar los cambios, optimizando los tiempos y costes de tráfico de datos.

c) La base de datos garantiza la calidad de la información y del resultado final, la probabilidad de errores se reduce sustancialmente.

d) En el caso de urbiThings el usuario puede llegar a utilizar cualquier dispositivo conectado a la red sin tener que descargar o utilizar distintas aplicaciones.

e) Aunque sobre un Inventario actúen muchos colaboradores de forma simultánea, el propietario de los datos mantiene un control completo de las operaciones.

En urbiThings estamos apostando por la colaboración abierta no transaccional como fuente de datos espaciales diversos y abundantes: prima la cantidad antes que la calidad. Y también apostamos por la colaboración reglada y transaccional como fuente de «Inventarios», datos empresariales e institucionales, sólidos, fiables, estables, donde prima más la calidad que la cantidad. Ambas fuentes de datos son necesarias y complementarias.

Ignacio Arnaiz Eguren (Director Arnaiz Urbimática SL)
