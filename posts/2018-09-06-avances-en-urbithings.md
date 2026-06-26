---
title: "Avances en urbiThings"
date: "2018-09-06"
excerpt: "En los últimos meses el desarrollo de urbiThings ha avanzado de forma notable, por fin vamos viendo lo que será una auténtica plataforma GIS en la nube y un Catálogo global de geoservicios. En este po"
---

En los últimos meses el desarrollo de [urbiThings](http://urbithings.com/) ha avanzado de forma notable, por fin vamos viendo lo que será una auténtica plataforma GIS en la nube y un Catálogo global de geoservicios. En este post haré un repaso breve de las nuevas funciones y un avance de lo que esperamos que esté disponible en este año 2018.

# 1) El Catálogo

Nuestro Catálogo global de geoservicios, fundamentalmente de mapas, dispone ya de cerca de 227.000 mapas accesibles directamente, publicados por 1.066 organizaciones de todo el mundo. Hemos cubierto casi completamente España y LATAM, pero Europa y Norteamérica tienen una enorme cantidad de servidores aún por explorar. Todos los mapas están referidos a alguno de más de 518.000 territorios existentes en la base de [urbiThings](http://urbithings.com/) , asignado a uno de sus temas y por supuesto a la organización que lo publica. Estimamos que aún quedan por incluir en el Catálogo por lo menos 1.000.000 de mapas.

Si su organización, (aunque sea unipersonal) es una de esas que nuestro explorador de mapas ha identificado e incluido en el Catálogo, y le parece que no es conveniente su publicación, o tiene reparos en como se ha clasificado o dispone de modificaciones que le interesa incluir, no tiene más que enviarnos un correo a info@urbithings.com y le daremos un Acceso para gestionar sus mapas o bien lo haremos nosotros mismos siguiendo sus indicaciones.

Si su organización no está en el Catálogo y le interesa que sus mapas se incluyan, tampoco hay problema, simplemente registre su organización en [urbiThings](http://urbithings.com/) y comience a incluirlos. Además podrá organizarlos en carpetas según su propio criterio. Ninguna de estas operaciones tiene coste alguno.

Recuerde que mediante el Catálogo de [urbiThings](http://urbithings.com/) los usuarios pueden acceder simultáneamente y desde un visor único a los mapas publicados por todas esas organizaciones.

En este momento es posible añadir al Catálogo mapas de teselas y vectores servidos por Geoserver y ArcGis Rest. Para fin de año lo habremos completado con servidores MapServer y MapGuide. También tendremos funcionando los accesos directos a Mapa de forma que sea muy sencillo compartir un mapa por correo o en una red social.

# 2) Los Conjuntos de Datos

[urbiThings](http://urbithings.com/) no se limita a publicar mapas de servidores remotos. Proporciona un entorno de creación o importación de Conjuntos de Datos que son almacenados en nuestra base de datos espacial. A partir de esos Conjuntos, los usuarios pueden publicar sus propios servicios WMS de mapas estándar, accesibles desde cualquier cliente WEB o Desktop. Los primeros Datasets y Servicios son gratuitos, simplemente se precisa una cuenta de correo verificable para crear una Cuenta de [urbiThings](http://urbithings.com/).

Ya es posible crear y editar Conjuntos de Datos a partir de Hojas en formato XLS con columnas de coordenadas o por geodireccionamiento, se pueden ampliar por combinación con otras Hojas en formato XLS, siempre que tengan un campo en común. Y se pueden exportar como ficheros SHP si el administrador de la cuenta lo considera conveniente, estableciendo el modo de licencia de uso según [Creative Commons](https://creativecommons.org/).

De cada Conjunto, es posible crear tantos servicios de mapas temáticos como se necesiten, servicios cuyo estilo ya es editable en línea. Ampliar un Conjunto de Datos y modificar sus Mapas en línea sin necesidad de mas herramientas que [urbiThings](http://urbithings.com/) nunca ha sido tan fácil.

En este aspecto tenemos pendiente la importación de datos en formatos GeoRSS y de imágenes en formato ECW. Estamos trabajando intensamente en funciones de procesamiento espacial de Conjuntos de Datos para realizar operaciones de dissolve, intersección, unión, proyección…, como vía para independizar al usuario de [urbiThings](http://urbithings.com/) de la necesidad de utilizar otras aplicaciones GIS. También en poder crear por el usuario Servicios de Geocoding a partir de un Conjunto de Datos de forma que publicar un servicio de callejero o un servicio de parcelario sea una operación sencilla.

# 3) Los Inventarios

La Colaboración reglada y transaccional (véase [Modos de Colaboración: Transaccional vs No Transaccional](https://info.urbigis.com/es/modos-colaboracion-transaccional-vs-no-transaccional/)) se basa en Conjuntos de datos mantenidos mediante geotransacciones, datos que en realidad ya están contenidos en los planes, operaciones, proyectos y expedientes de papel que las empresas e instituciones utilizan en su operativa diaria.

Ya estamos cerrando las funciones de edición y operación de geotransacciones y estarán disponibles en este año. Simultáneamente estamos utilizando municipios españoles y brasileños para demostrar la posibilidad de mantener colaborativamente Inventarios de Objetos urbanos compuestos por millones de elementos. Cuando esté concluida la tarea, se podrá demostrar que la cartografía territorial ya no será necesariamente el resultado de un proceso de observación pasivo y superficial, sino de un proceso activo, colaborativo y holístico, donde los trabajos aéreos o la recolección de campo pasan a ser meras actividades de inspección y comprobación.

# 4) Las Cuentas y Accesos

Se ha finalizado el Registro de Cuentas (organizaciones) y Accesos (usuarios), completando los procesos de alta y verificación, para asegurar el cumplimiento de la legislación sobre protección de datos personales. Los perfiles de cuenta y acceso ya están accesibles y editables, también están disponibles las funciones de gestión de Accesos para los administradores de una Cuenta.

Hemos implementado las funciones para la creación de Equipos de Trabajo. Toda Cuenta de [urbiThings](http://urbithings.com/) puede admitir en su Equipo a otras cuentas, bien por decisión de su administración o bien por solicitud de las otras Cuentas. Los miembros del Equipo podrán acceder en lectura o escritura a los Conjuntos de Datos de la Cuenta líder del equipo y a sus Servicios de Mapa. Con ello damos pié a que la Colaboración sea el verdadero motor de la creación de datos.

# 5) Los Sitios Web

Cualquier organización con Cuenta en [urbiThings](http://urbithings.com/) puede individualizar su acceso creando un sitio propio (del estilo: www.urbithings.com/MiOrganizacion.maps). Aunque esta opción en este momento tiene un coste (consulte los [planes de contrato](https://info.urbigis.com/es/inicio/precios/) de [urbiThings](http://urbithings.com/)).

Mediante un Sitio Web cualquier organización dispone de un geoportal propio a muy bajo coste, con acceso directo a sus Mapas y Conjuntos de Datos.

# 6) La Interfaz de usuario

No es nada sencillo comprimir dentro de la ventana gráfica de un navegador toda la funcionalidad necesaria para buscar, ver y editar información espacial, sobre todo cuando los usuarios tienen monitores pequeños. Tampoco es sencillo ajustarse a las limitaciones de memoria y usabilidad que imponen las interfaces basadas en javascript y los framework de aplicaciones web.

Todo ello hace complicado para muchos usuarios entender y utilizar [urbiThings](http://urbithings.com/). En este aspecto estamos trabajando permanentemente en simplificar en lo posible las tareas más inmediatas por ejemplo: buscar y utilizar mapas. Aunque por otra parte la adición permanente de nuevas funciones y utilidades no ayuda a simplificarlo.

Hemos mejorado mucho la usabilidad y rendimiento de la utilidad de Imprimir. Estamos trabajando en implementar funciones de swipe que permiten descorrer una capa para poder ver lo que está debajo, en funciones para incluir vistas de Google Street View, en funciones para dividir la pantalla y poder comparar un mismo sitio con mapas diferentes, en incluir nuevas capas base como Yandex o Here y en ampliar los servicios soportados de Direcciones para localizar casi cualquier cosa.

Siempre agradecemos cualquier sugerencia sobre mejoras de la interfaz que ayuden a la usabilidad.

En este momento [urbiThings](http://urbithings.com/) soporta siete idiomas: Español de España, Portugués, Catalán, Gallego, Rumano, Inglés y Búlgaro. Está en proceso de inclusión el Portugués de Brasil. Si alguien tiene interés en aportar un nuevo idioma o corregir alguno de los existentes, con mucho gusto le remitiré una hoja de cálculo con los idiomas actuales, donde podrá añadir uno nuevo o retocar uno existente, aunque esta es una tarea inacabable.

También estamos en el proceso de completar y traducir la ayuda de [urbiThings](http://urbithings.com/) ([http://help.urbithings.com](urbiThings)), intentando que sea lo más visual posible con pequeños vídeos sencillos. En pocos días tendremos en funcionamiento un pequeño foro interactivo donde exponer cualquier tema con mayor detalle.

Ignacio Arnaiz Eguren

Director de Arnaiz Urbimática SL
