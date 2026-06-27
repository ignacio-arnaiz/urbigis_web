---
title: "Incrustando una ventana de urbiThings en tu web"
date: 2019-03-21
---

Cuando en una página web se necesita visualizar un mapa, lo habitual es acudir a Google o alguna plataforma similar de mapas globales. Todas ellas proporcionan una ventana iframe donde se visualiza su fondo cartográfico con la extensión y posición global que necesite el usuario.

En urbiThings podemos hacer lo mismo, pero con algunas diferencias:

- No es preciso limitarse al fondo cartográfico que proporcione la plataforma de turno. En urbiThings os proponemos una amplia selección de fondos y dejamos que el usuario final elija la más conveniente
- Además podemos incluir en la ventana incrustada los mapas que creamos puedan ser más útiles para visualizar desde nuestra web. Mapas que pueden haberse creado en la plataforma de urbiThings o reutilizado alguno de los casi 700.000 mapas accesibles ya desde urbiThings
- Para incrustar una ventana no es preciso disponer de una API KEY y no existe ninguna limitación en el número de ventanas incrustadas

Para incrustar una ventana de urbiThings solo hay que seguir unos pocos pasos sencillos:

- Disponer de una cuenta en urbiThings (recuerde que es gratuita y para solicitarla solo es preciso proporcionar una cuenta de correo verificable)
- Crear y guardar una selección de mapas. Esta selección será la que urbiThings mostrará en la ventana incrustada. La selección puede tener tantos mapas como se desee, pero se aconseja que sean cinco o seis como máximo. Para mostrar muchos mapas es mejor crear un sitio WEB de cuenta como se explicó en el post anterior.
- Pedir a urbiThings el código HTML de la ventana incrustada indicando la selección de mapas a presentar y las dimensiones de la ventana incrustada. urbiThings copiará el código en el portapapeles
- Pegar ese código en nuestra página y listo

### **PASO 1 – SOLICITAR UNA CUENTA**

### Entra en urbiThings.com y en el menu de la izquierda selecciona la opción de «Registro de Cuenta». Con indicar una cuenta de correo es suficiente. Una vez enviada recibirás un correo de verificación de cuenta y aceptación de las condiciones del servicio. Cuado la solicitud es de Registro es aceptada por urbiThings recibirás un correo de bienvenida.

### Esta operación crea una Cuenta de Organización y un Acceso a esa cuenta con perfil de Administrador de la Cuenta. Con ese perfil podrás añadir a la Cuenta cuantos Accesos necesites sin limitación, cada Acceso representa a un usuario de tu organización.

### Desde ese momento podrás iniciar sesiones en urbiThings y tener acceso a crear Selecciones y obtener su código HTML para incrustarlo en tu web.

![](https://info.urbigis.com/wp-content/uploads/2019/02/registro.png)

### **PASO 2 – CREAR UNA SELECCIÓN**

### La selección de mapas será la que se muestre en la ventana incrustada.

> ### En entradas anteriores de este blog se puede ver como crear mapas nuevos a partir de conjuntos de datos o reutilizar mapas proporcionados por otras organizaciones en formatos abiertos y con licencias de uso abiertas. Hay casi 700.000 mapas disponibles y cada Cuenta puede crear mapas propios.
>
> ### Cuando un mapa está visible en el Escritorio se puede Seleccionar y se moverá al nodo de Selección, una vez definido el conjunto de mapas que formará esa Selección se guarda en el perfil de la Cuenta utilizando la opción de «Guardar Selección» en el nodo de «Selección» del panel de «Escritorio»

![](https://info.urbigis.com/wp-content/uploads/2019/03/seleccion.png)

### **PASO 3 – ABRIR UNA****SELECCIÓN**

### La selección de mapas que hemos guardado en el paso anterior debe ser abierta para poder utilizarla de varias formas:

- ### Para abrirla cuando queramos volver a ver esos mapas en el Escritorio de urbiThings
- ### Para compartirla, bien como una URL que urbiThings copia en el portapapeles (Copiar Acceso Directo) y permite arrancar urbiThings con esa selección abierta, o bien como un fichero de texto (Exportar selección) que contiene la lista mapas que forma la selección y que puede ser usado para recrearla (Importar selección).
- ### Para utilizarla como fuentes de mapas en una ventana incrustada (Copiar HTML) que será la función que utilizaremos en este caso.

###

![](https://info.urbigis.com/wp-content/uploads/2019/03/abrirsel.png)

### **PASO 4 – COPIAR HTML**

### Se escoge la Selección de mapas guardada previamente con el desplegable de selecciones guardadas. Una vez indicada se pulsa el botón de compartir y el sistema nos presenta las dos opciones de compartir:

- ### Como una URL de acceso directo a la selección, de forma que se pueda enviar a otro usuario y arrancar urbiThings con la selección escogida
- ### Como un código HTML para incrustarlo en nuestra página web. En el código se puede adaptar el ancho y alto de la ventana a las necesidades de nuestra web.

![](https://info.urbigis.com/wp-content/uploads/2019/03/compartir2.png)

### **PASO 5 – PEGAR HTML**

### El código HTML copiado en el portapeles debe ser insertado en la página web correspondiente:

<iframe src=»http://urbithings.com/757ef2a47-8057-4237-a451-29d3838ae600.embed» width=»1000px» height=»600px»></iframe>

###

![](https://info.urbigis.com/wp-content/uploads/2019/03/pegar.png)

**CONCLUSIÓN**

Incrustar nuestros mapas creados en urbiThings en un sitio WEB es sencillo, gratuito y flexible. Sin duda una excelente opción para añadir información espacial en Internet.

Ignacio Arnaiz Eguren

Director