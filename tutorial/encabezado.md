---
title: "Encabezado"
---

#### Reinicio

El Botón de reinicio es el logo de urbiGIS en el extremo izquierdo del encabezado:    ![](img/tutorial/1.1-Boton-de-inicio-1-1.jpg)

Al pulsar en él, la herramienta carga de nuevo la página de inicio de [urbiGIS](http://urbigis.com/). Por lo tanto, cualquier selección temporal que se realice en el Escritorio asociada a la sesión del navegador desaparecerá.

#### Cambiar el fondo o mapa base

El Mapa Base forma el fondo cartográfico de referencia sobre el que se representan el resto de los [Servicios de Mapas.](javascript:htLoadSlug('servicio-de-mapa')) En cada momento únicamente se puede tener una Base activa. Normalmente está proporcionado por una plataforma global de mapas como Open Street Map o Bing.

Se invocan utilizando la herramienta de fondos situada en el Encabezado: ![](img/tutorial/captura8-1-300x37.png) al pulsar la flecha se despliega el menú de fondos:

![](img/tutorial/captura9-1.png)

Este menú presenta seis posibles acciones, de arriba a abajo:

- Una **barra deslizable** para modificar la transparencia del fondo
- Una opción de **Seleccionar** que presentará el panel de Selección de Fondos
- Una opción de **Ocultar** que activa o desactiva la visualización del Fondo actual
- Una opción de\*\* Cambiar\*\* que bascula el color del fondo entre negro y blanco cuando el Fondo actual esté oculto
- Una opción para activar o desactivar la visualización del mapa de **Tráfico** de Google sobre el fondo actual
- Una opción para **Dividir el Escritorio** cuya funcionalidad se detalla en el tema [Dividir Escritorio](javascript:htLoadSlug('2-5-dividir-escritorio'))

El panel de Selección de Fondos nos permite escoger el Fondo a colocar haciendo clic sobre su imagen en miniatura:

![](img/tutorial/Captura10-1.png)

#### Botón de Consultas

se invoca con la herramienta “Consulta gráfica” del Encabezado: ![](img/tutorial/captura7-1-300x34.png) cambia la forma del cursor colocando un interrogante ![](img/tutorial/Cursor_ES.png) . Al hacer clic en cualquier punto del mapa el sistema mostrará los datos asociados a los Geoservicios que estén **activos** en el Escritorio.

- Informe de Posición
- Servicios de Mapas[WMS](https://es.wikipedia.org/wiki/Web_Map_Service)mediante la consulta estándar de getcapabilities
- Capas locales en [KML](https://www.google.es/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwiWktOykaTSAhVEaxQKHdlGA2wQFggcMAA&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FKML&usg=AFQjCNF3BRPUJwxqA5CvyXpMfnUDPLKHAg&sig2=0eowaQiFVAim85gpF-UGmg) por sus atributos asociados
- Capas locales en [SHP](https://www.google.es/url?sa=t&rct=j&q=&esrc=s&source=web&cd=3&cad=rja&uact=8&ved=0ahUKEwiGlYy8kaTSAhUEUBQKHcAMBG0QFggkMAI&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FShapefile&usg=AFQjCNFVFuoMgYXfATkCIgDfiiyznh7brA&sig2=OJaPKptS9C38D6OuwrnErQ) por su tabla .dbf adjunta
- GeoInformes (documentos con información estructurada)
- Localizadores
- Elementos de urbiGIS
- Participaciones

Los resultados se visualizarán en el Panel de Datos que se despliega desde la parte inferior de la pantalla:

![](img/tutorial/Captura17-1.png)

Cuando los resultados de la consulta son geometrías, disponen de un menú de opciones que permite hacer zoom a la geometría o colocarla en el escritorio para su edición:

![](img/tutorial/Captura18-1.png)

Cuando el resultado es el Informe de Posición se proporcionan funciones para copiar las coordenadas del punto o para hacer zoom a los territorios obtenidos:

![](img/tutorial/captura6_2.png)

#### Botones de Navegación

[urbiGIS](http://urbigis.com/) es un sistema global, es decir, permite consultar y administrar datos espaciales de todo el mundo. Por este motivo, la vista inicial al arrancar el servicio es un mapamundi.

Para navegar por esa vista, [urbiGIS](http://urbigis.com/) en su cabecera ofrece al usuario tres funcionalidades: ![](img/tutorial/Captura16-2-300x34.png)

- Mover mapa ![](img/tutorial/Icono_pan.png): Permite el desplazamiento del mapa, en cualquier dirección, manteniendo pulsado cualquier botón del ratón y arrastrando.
- Acercar el zoom ![](img/tutorial/Icono_zoom_acercar.png): Permite ampliar la vista de una ubicación mejorando el nivel de detalle del mapa.
- Alejar el zoom ![](img/tutorial/Icono_zoom_alejar.png): Reduce la vista para abarcar una mayor superficie de mapa.

**Realizar Zoom a los resultados de búsqueda**

Los usuarios pueden efectuar búsquedas a través del Buscador y acceder a la información que mostrará su panel de resultados. Haciendo clic en cada resultado la herramienta acerca la vista a la extensión completa de la geometría del resultado:

**Atajos de teclado y ratón**

- En caso de que el usuario utilice un ratón con rueda de desplazamiento, si se gira hacia delante se acerca el mapa y girando hacia atrás se aleja.
- Si se mantiene pulsada la tecla Shift y el botón izquierdo del ratón se puede indicar una ventana de zoom para ampliar el mapa.
- Manteniendo pulsada las teclas Alt+Shift y el botón izquierdo del ratón se puede indicar una ventana de zoom para reducir el mapa.

#### Control de Sesión

[urbiGIS](https://urbigis.com/) es una plataforma de uso libre y anónimo mientras el usuario se limite a consultar los datos y mapas creados o publicados por otros. Pero si el usuario pretende guardar datos en [urbiGIS](https://urbigis.com/) o utilizar sus servicios para publicar mapas o localizadores entonces de debe solicitar su [Registro de Cuenta](javascript:htLoadSlug('registro-de-cuentas')). Una vez haya creado su Cuenta y Acceso podrá utilizar la herramienta de sesiones situada en el Encabezado para abrirlas y cerrarlas:

![](img/tutorial/Captura13.png)

Utilizando la flecha situada a la derecha del botón se presenta un menú con las siguientes opciones:

- **Acceder**: presenta el diálogo de inicio de sesión
- **Cerrar sesión**: vuelve al usuario anónimo
- **Eventos**: presenta la relación de los mensajes creados por las acciones efectuadas durante la sesión
- **Idioma**: permite cambiar el idioma de la interfaz, el idioma por defecto es el Español de España, pero cada usuario puede seleccionar alguno de los 10 idiomas actuales de la plataforma: Español, Inglés, Catalán, Gallego, Portugués, Francés, Italiano, Alemán, Rumano y Búlgaro.
- **Ayuda**: presenta esta página
- **Info urbiGIS**: presenta la página general de información sobre [urbiGIS](https://urbigis.com/)
- **Usuario actual**: presenta la cuenta del usuario actual, si no hay sesión iniciada esta opción no se presenta

El icono de sesión se presentará en amarillo cuando haya una sesión iniciada e indicará en un texto flotante el nombre del usuario: ![](img/tutorial/Captura13-1-300x77.png)

#### Inicio de Sesión

Para iniciar sesión es necesario que esté registrado el Acceso a la Cuenta. Consultar [aquí](javascript:htLoadSlug('registro-de-accesos')) cómo registrar un Acceso. Se utiliza el botón de inicio de Sesión  situado en la Cabecera, que permite dos opciones:

![](img/tutorial/Captura13-300x253.png)

- ![](img/tutorial/login-300x263.png) –  Acceder para iniciar una sesión.
- ![](img/tutorial/logout-300x223.png) – Cerrar una sesión abierta

La opción de Acceder presenta una página para indicar la cuenta de correo y contraseña de acceso:

![](img/tutorial/1.9-Acceso-2.jpg)

En este enlace se explica la forma de [recuperar la contraseña](javascript:htLoadSlug('0-8-recuperar-contrasena')).

#### Consulta de Eventos

Un evento es el mensaje que ofrece [urbiGIS](http://urbigis.com/) ante determinadas acciones efectuadas por un Acceso cuando utiliza el Servicio durante el transcurso de una sesión. Por ejemplo, cuando un Acceso configura correctamente un servicio de mapas, [urbiGIS](http://urbigis.com/) se lo notifica con un evento de configuración exitosa.

Los eventos se presentan inicialmente como un mensaje posicionado en la parte inferior de la pantalla, Los que muestran errores se presentan en rojo, los avisos en amarillo y los de consecución exitosa en verde. Todos se ocultan automáticamente, salvo los mensajes de error.

![](img/tutorial/Captura-4.png)

La funcionalidad está ubicada en el desplegable del Botón de Sesión, en el extremo derecho de la Cabecera. Si se pulsa en el icono ![](img/tutorial/event-246x300.png) se puede acceder a la relación de todos los eventos producidos durante la sesión de trabajo.

Al pulsar en el icono se obtiene la siguiente información:

![](img/tutorial/1.10-Gestor-de-Eventos.jpg)

- Si se pulsa el botón inferior de “Eliminar” se borra la lista completa de eventos.
- Si se pulsa la “X” situada al final de cada fila, se borrará el evento seleccionado.

La lista de eventos tiene una función informativa, por tanto su eliminación no afecta al funcionamiento del sistema.

**Ayuda**

Se invoca mediante la opción de Ayuda en el menú de Sesión:

![](img/tutorial/Captura14-1.png)

Abre una nueva pestaña o ventana del navegador en la que se muestra esta web de Ayuda de [urbiGIS](http://urbigis.com/):

![](img/tutorial/Captura21.png)

**Estructura de la web de Ayuda**

Para una mejor comprensión se ha procurado estructurar la ayuda en bloques de contenido basados en la interfaz de [urbiGIS](http://urbigis.com/). De este modo, los artículos de ayuda se agrupan de la siguiente forma:

- **Acceso a urbiGIS**: explica los diferentes modos de acceder a la aplicación.
- **Registro de Usuarios**: explica cómo darse de alta como usuario de [urbiGIS](http://urbigis.com/)
- **Espacio de Trabajo**: explica la organización de la interfac general de [urbiGIS](http://urbigis.com/)
- **Encabezado**\*\*: \*\*contiene los artículos explicativos de las funcionalidades alojadas en la barra horizontal de herramientas situada en la parte **superior** de la pantalla, sobre el Mapa.
- **Buscador**: explica la forma de encontrar datos en el catálogo de [urbiGIS](http://urbigis.com/)
- **Escritorio**: explica el funcionamiento de la mesa de trabajo de [urbiGIS](http://urbigis.com/)
- **Herramientas**: explica el funcionamiento de las herramientas de trabajo de [urbiGIS](http://urbigis.com/)
- **Módulos**: explica el funcionamiento de los módulos de trabajo de [urbiGIS](http://urbigis.com/).
- **Temas ampliados**: extiende el detalle sobre algunos aspectos mas especializados.

La web incluye un buscador de artículos que permite localizarlos por cualquier término incluido en ellos.

#### Acerca de

Se invoca desde la opción de “Info urbiGIS” en el menú de Sesión: y da acceso a la [web de información sobre urbiGIS](http://info.urbithings.com/es/inicio/)

![](img/tutorial/Captura15.png)