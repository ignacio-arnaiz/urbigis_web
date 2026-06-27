---
title: "Buscar Instrumentos"
---

Los Instrumentos son Conjuntos de Datos de mantenimiento transaccional.  Se estructuran funcionalmente en dos tipos: los Inventarios que contienen la versión vigente de los elementos espaciales y los Operadores que contienen las propuestas de cambio de los Inventarios en forma de Operaciones. Los Inventarios no son directamente editables, únicamente son editables los Operadores.

El contenido de los Instrumentos en [urbiGIS](https://urbigis.com/) es complejo, a diferencia de la simplicidad de los Conjuntos de Datos. Tienen una estructura de que está definida mediante Atributos, Asignaciones y Relaciones con Entidades geométricas organizadas en Grupos.

Desde el momento en que la Cuenta que los gestiona decide hacerlos públicos, los Instrumentos aparecerán en el Buscador de Instrumentos y podrán colocarse sobre el Escritorio:

El contexto de Mapas del buscador presenta por defecto todos los Mapas del catálogo a los que tenga acceso el usuario actual. Si el usuario es anónimo serán todos los Mapas con Licencia abierta en sus diferentes modalidades, si el usuario ha iniciado sesión con sus datos de acceso, añadirá además los Mapas privados de su Cuenta de [urbiGIS](https://urbigis.com/) y los de las Cuentas en las que su Cuenta forma parte del Equipo de trabajo.

Hay varias formas de localizar un Instrumento:

#### Método de Búsqueda sencilla

Seleccionando  el contexto de Instrumentos en la pestaña del buscador podremos realizar dos formas de búsqueda:

**Búsqueda por nombre**: al ir tecleando (a partir del tercer carácter) el nombre del Instrumento se presentarán en la lista de resultados los que contengan ese texto en su nombre.

**Búsqueda gráfica**:  el menú desplegable del icono del pincho nos permite seleccionar cuatro modos gráficos: por un punto, por un rectángulo, por una forma libre o por un círculo. En estos tres últimos modos hay una limitación de superficie, no es posible buscar en áreas superiores a 1 km2. El sistema presentará en la lista de resultados todos los Instrumentos cuya extensión o territorio de referencia intersecten con esa geometría.

![](img/tutorial/Captura59.png)

#### Método de Búsqueda avanzada

Utilizando el icono de filtro \*\*![](img/tutorial/2.1.12-Busqueda-Avanzada-14.jpg) \*\*se despliegan las diferentes condiciones de filtro aplicables, condiciones que se suman a la de búsqueda por nombre.

En este modo avanzado podremos incluir tres conceptos de filtro: los que tengan una o varias Cuentas gestoras, los que tengan uno o varios Territorios de referencia, o los que correspondan con uno varios Propósitos, una o varias Funciones, uno o varios Tipos, uno o varios Estados  y si son versiones Iniciales, Finales o Intermedias. Todos estos criterios, incluido el nombre del Instrumento, se aplican en la selección para afinar la búsqueda.

![](img/tutorial/Captura60.png)

#### Resultados

Una vez realizada la consulta los Instrumentos localizados se presentan de forma paginada en la **Lista de Resultados** situado en la parte inferior del panel de herramientas y que tiene los siguientes componentes:

**A) Control de orden**:  permite ordenar la lista de dos formas diferentes: cronológicamente colocando primero los más modernos o alfabéticamente por su nombre.

![](img/tutorial/Captura61.png)

**B) Control de Anulación**: el criterio actual de selección se puede eliminar utilizando el botón de anulación, el sistema volverá a presenta la lista completa de Instrumentos.

![](img/tutorial/Captura24.png)

**C) Controles de Selección**: permiten seleccionar varios Instrumentos en la página actual de la lista. ¡Atención!: la selección se pierde al cambiar de página. La selección se puede realizar uno por uno utilizando el recuadro a la derecha de cada Instrumento o de forma masiva utilizando el recuadro situado en el encabezado de la Lista:

![](img/tutorial/Captura62.png)

**D) Control de Carga en el Escritorio**: permite colocar los Instrumentos seleccionados en el Escritorio de forma que sean visibles de forma permanente (o hasta que se retiren o desactiven en el Escritorio)

![](img/tutorial/Captura63.png)

**E) Zoom**: haciendo clic sobre el Instrumento en la Lista el sistema hará zoom a su extensión.

![](img/tutorial/Captura64.png)

**F) Menú de Opciones de Instrumento**: cada Instrumento en la lista tiene un menú de opciones que se despliega haciendo clic sobre el icono de menú (tres puntos) y que consta de las siguientes funciones

![](img/tutorial/Captura65.png)

**1) Zoom al Territorio**: hace zoom a al Territorio al que hace referencia el Instrumento

**2) Mostrar Instrumento en el Mapa**: presenta la delimitación del Instrumento en el Mapa.

**3) Zoom al Instrumento**: hace zoom a la extensión del Instrumento

**4) Colocar Entidades en el Escritorio**: muestra en el Escritorio las Entidades del Instrumento tematizadas por Grupo de Entidad

**5**\*\*) Copiar Identificador en el portapapeles\*\*: coloca en el portapapeles el Identificador Único de Instrumento

**6) Abrir Instrumento**: abre al panel de Módulos y selecciona el Instrumento

**7) Documentos**: abre el diálogo de Documentos del Instrumento

**8) Metadatos**: presenta en el Panel de Datos las propiedades que el Instrumento tiene en el Catálogo de [urbiGIS](https://urbigis.com/)