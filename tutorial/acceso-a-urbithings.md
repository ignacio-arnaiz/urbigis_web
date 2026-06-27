---
title: "Modos de Acceso"
---

[urbiGIS](http://urbiGIS.com/) es un servicio online que funciona en cualquier navegador estándar de internet. En el navegador se pueden abrir varias pestañas de acceso a [urbiGIS](http://urbiGIS.com/), para ejecutar funcionalidades diferentes en cada una. En el caso de iniciar una sesión, todas las pestañas que se abran en la misma instancia del navegador comparten la sesión. Por el contrario, si se abren simultáneamente varias ventanas del navegador o navegadores diferentes, se pueden iniciar sesiones con Accesos distintos. [urbiGIS](http://urbiGIS.com/) no permite utilizar resoluciones de pantalla inferiores a 800×600 píxeles.

Hay cinco formas de acceder a [urbiGIS](http://urbiGIS.com/):

### 1. Acceso estándar

Para acceder al servicio se tecleará [urbiGIS.com](http://urbiGIS.com/) en la barra de direcciones de cualquier navegador:

![](img/tutorial/0.2-Acceso-1024x52.jpg)

o bien en la barra de búsqueda de cualquier buscador como por ejemplo Google: ![](img/tutorial/0.2-Acceso-1.jpg)

El navegador presentará la página de inicio estándar del servicio:

![](img/tutorial/captura1.png)

### 2. Acceso a un geoportal

Toda [Cuenta](javascript:htLoadSlug('cuenta-de-organizacion')) puede solicitar a [urbiGIS](http://urbiGIS.com/) uno varios geoportales de acceso directo a sus Geoservicios precargados a través de una [URL](https://es.wikipedia.org/wiki/Localizador_de_recursos_uniforme) formada por: [urbiGIS.com](http://urbiGIS.com/) + el nombre asignado al geoportal + la extensión .maps. Por ejemplo el geoportal de la Ciudad Autónoma de Melilla en España es: **<https://urbigis.com/melilla.maps>**

Cada [Cuenta](javascript:htLoadSlug('cuenta-de-organizacion')) puede personalizar la página de inicio de sus geoportales, eligiendo su imagen, denominación, fondo por defecto y extensión inicial.  Quienes accedan por esta vía además de los datos y mapas propios de la Cuenta seguirán pudiendo consultar toda la información pública contenida en [urbiGIS](http://urbiGIS.com/). Un geoportal [urbiGIS](http://urbiGIS.com/) es la opción más

El navegador presentará la página de inicio del acceso directo del geoportal con todos sus servicios cargados:

![](img/tutorial/captura2.png)

### 3. Acceso a un mapa

Para compartir un mapa en concreto se puede copiar en el portapapeles un acceso directo a un mapa utilizando el menú de opciones de los mapas:

![](img/tutorial/cap1.png)

La ruta al mapa se podrá compartir y pegar en una navegador para acceder a ese mapa por ejemplo: <https://urbigis.com/8317544a-fb4d-49b3-890d-c5114e07e289.ms>

### 4. Acceso a una selección de mapas

Los mapas añadidos al escritorio pueden formar una selección de mapas. véase el tema [Selecciones de Mapas](javascript:htLoadSlug('activar-desactivar-elementos')) para crear una selección  y el tema [Trabajar con Selecciones](javascript:htLoadSlug('buscar-por-geometria')) para copiar en el portapapeles la URL de una selección.

### 5. Acceso a una coordenada

Cuando se utiliza la herramienta de [Consultas sobre el mapa](javascript:htLoadSlug('buscar-por-clic')) en el [Panel de Resultados](javascript:htLoadSlug('panel-de-resultados')) se indican las coordenadas del punto sobre el que se ha hecho clic, tanto en UTM (EPSG 3857) como en Geográficas, en ambos hay un botón que permite copiar la coordenada en el portapapeles para compartirla como un acceso a coordenada:

![](img/tutorial/captura3-2.png)

En el portapapeles se guardará la URL de acceso al punto de forma directa: <https://urbigis.com/X-557684.5583686475Y2651447.637156194.utm> cuando es UTM o <https://urbigis.com/23_9_38.03_N_5_0_35.16_W.dms> cuando es Geográficas. Por supuesto esta URL se puede construir a partir de cualquier coordenada conocida siempre que se formule como en estos ejemplos.

### Actualizaciones

urbiGIS es un sistema en constante evolución, su dependencia de la tecnología del navegador donde se ejecute determina que en ocasiones se presenten disfuncionalidades no detectadas durante las tareas de desarrollo y depuración, aunque se prueba intensivamente el funcionamiento sobre las últimas versiones de Chrome, Mozillla Firefox, Microsoft Edge y Safari. Sin embargo la revisión permanente de estos navegadores por sus desarrolladores puede ocasionar disfunciones que el equipo de urbiGIS intentará resolver en el menor plazo posible.
En estos casos se aconsejan tres actuaciones de verificación:

- Eliminar del navegador los datos de navegación. Normalmente utilizan el atajo de teclas Ctrl+F5. Si no funciona en tu navegador habrá una opción en su configuración que lo permita.
- Verificar la versión de tu navegador. Si es posible intenta disponer siempre de la última versión publicada. urbiGIS está siempre en constante ajuste a las últimas versiones.
- Ejecutar la página en un navegador distinto para verificar si el comportamiento es el mismo.

Si ninguna de las tres actuaciones ha tenido éxito remite por favor un correo a [info@urbigis.com](mailto:info@urbigis.com) explicando lo mas detalladamente posible el error detectado.