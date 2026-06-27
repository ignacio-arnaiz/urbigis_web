---
title: "Editar Conjuntos de Datos"
---

Cada Conjunto en el panel de Conjunto dispone de un menú propio de opciones que permite modificar la propiedades y datos del Conjunto:

![](img/tutorial/Captura100.png)

#### Editar Propiedades

Presenta el panel de Propiedades del Conjunto de Datos:

![](img/tutorial/Captura101.png)

#### Editar Datos

Presenta el panel de los elementos que componen el Conjunto de Datos:

![](img/tutorial/Captura102.png)

La lista se presenta paginada, todos los elementos del Conjunto se representan en el Mapa, distinguiendo los que están en la página actual, del resto con diferente simbología, en este caso los primeros son círculos azules mientras los demás son puntos cuadrados rojos. Cada elemento tiene un recuadro de selección, en general el recuadro de selección debe estar activo para que la entidad pueda ser modificada o efectuar operaciones con ella.

Al iniciar la edición el Conjunto se coloca en el Escritorio dentro del nodo de Edición con un menú de opciones específico:

![](img/tutorial/Captura103.png)

**Conmutar edición**: inicia o detiene el modo de edición del Conjunto, si se inicia el Módulo de Conjuntos presentará sus elementos, si se detiene el Módulo volverá a la lista de Conjuntos.

**Zoom**: mueve al Mapa a la extensión del Conjunto

**Retirar del Escritorio**: lo elimina del Escritorio, si estaba activada la edición también la detiene

**Limpiar:** elimina todos los elementos del Conjunto

**Reiniciar**: elimina todos los elementos y campos añadidos por el usuario

**Guardar**: detiene la edición y guarda los cambios.

**Estilo**: modifica la simbología utilizada para presentar los elementos del Conjunto, los cambios de estilo no se guardan entre sesiones.

El panel de elementos del Conjunto dispone de un menú principal:

![](img/tutorial/Captura104.png)

**Filtro**: despliega las diferentes opciones para seleccionar elementos del Conjunto

![](img/tutorial/Captura105.png)

**Desplegar Filtro**: abre un espacio bajo cada campo del listado para establecer condiciones de filtro.

**Ocultar Filtro**: oculta el espacio de filtro

**Limpiar Filtro**: elimina la condición actual de filtro

**Seleccionar por caja**: modifica el cursor para señalar en el mapa un recuadro por dos puntos, el sistema seleccionará todos los elementos del Conjunto que intersecten con el recuadro

**Seleccionar por clic**: modifica el cursor para hacer clic en un punto del mapa, el sistema seleccionará todos los elementos del Conjunto que intersecten con el punto

**Seleccionar por lazo**: modifica el cursor para dibujar un polígono de forma libre, el sistema seleccionará todos los elementos del Conjunto que intersecten con la forma libre

**Generar Mapa filtrado**: abre el panel de creación de Servicios de Mapa aplicando la condición actual de filtro.

**Edición**: despliega las opciones para dibujar nuevos elementos en el mapa, Añadir Polígono, Añadir Línea y Añadir Punto con sus diferentes modos de dibujo. También se pueden utilizar los atajos de teclado Shft-p para dibujar un polígono regular, Shift-l para dibujar una línea y Shift-x para dibujar un punto. Véase el tema de [Crear y Modificar Geometrías](javascript:htLoadSlug('crear-y-modificar-geometrias')) para una explicación detallada.

![](img/tutorial/Captura106.png)

**Edición avanzada**: se despliega siempre que haya seleccionados los elementos necesarios para ejecutar la operación, Véase el tema de [Crear y Modificar Geometrías](javascript:htLoadSlug('crear-y-modificar-geometrias')) para una explicación detallad

![](img/tutorial/Captura107.png)

**Pegar**: estará activo si previamente se ha utilizado la opción Copiar, añade un nuevo elemento idéntico al copiado

**Ver la selección actual**: deja únicamente visibles los elementos seleccionados

**Ver todos**: vuelve a poner visibles todos los elementos del Conjunto

**Eliminar seleccionados**: elimina todos los elementos seleccionados

**Añadir campo**: permite añadir un nuevo campo al Conjuntos

**Eliminar campo**: permite eliminar un campo del Conjunto (esta operación es irreversible). Si el campo está siendo usado en un Mapa del Conjunto puede que el Mapa deje de funcionar correctamente.

**Renombrar campo**: permite cambiar el nombre de un campo. Si el campo está siendo usado en un Mapa del Conjunto puede que el Mapa deje de funcionar correctamente.

**Calculadora de campos**: abre un diálogo para realizar cambios masivos sobre un campo en todos los elementos del Conjunto, en los elementos filtrados o en los seleccionados

**Eliminar todos**: borra todos los elementos del Conjunto (esta operación es irreversible).

**Etiquetar**: permite modificar la estrategia de etiquetado del Conjunto en el Mapa

**Activar / Desactivar Snapping**: el ajuste de snap permite ajustar los puntos de un elemento a los de otro elemento cercano para crear yuxtaposiciones exactas. Este control permite activarlo o desactivarlo. También se puede utilizar Shift-s.

**Ocultar columnas:** permite seleccionar las columnas visibles.

Cada elemento visible en el panel de edición tiene a su vez un menú propio de opciones:

![](img/tutorial/Captura108.png)

**Zoom a la entidad:** hace zoom a la geometría de la entidad

**Edición**: abre el menú de modificación de la entidad, Véase el tema de [Crear y Modificar Geometrías](javascript:htLoadSlug('crear-y-modificar-geometrias')) para una explicación detallad

![](img/tutorial/Captura109.png)

**Edición avanzada**: Véase el tema de [Edición Avanzada](javascript:htLoadSlug('dibujo-avanzado'))para una explicación detallada

**Cubo**: utiliza un portageometrías para guardar y recuperar geometrías, sus funciones son:

**Sustituir con el Cubo**: sustitye la geometría actual por la suma de las geometrías contenidas en el Cubo

**Añadir el Cubo**: suma a la geometría actual la suma de las geometrías contenidas en el Cubo

**Restar el Cubo**: resta de la geometría actual la suma de las geometrías contenidas en el Cubo

**Enviar al Cubo**: envía al Cubo la geometría actual

**Estilo**: modifica la simbología de la geometría actual, sus funciones son:

**Color de relleno**: presenta un diálogo para establecer el color de relleno en RGB y el grado de transparencia

**Línea de borde**: presenta un diálogo para establecer el color de relleno en RGB, el grueso y el grado de transparencia

I**ncrementar línea**: incrementa un punto el grueso de la linea de borde

**Decrementar línea**: decrementa un punto el grueso de la línea de borde

**Plantilla de estilos**: presenta estilos predeterminados de relleno y borde de polígonos y líneas

**Etiquetar:** presenta un diálogo para establecer el texto, fuente, tamaño y halo de la etiqueta

**Duplicar**: duplica la geometría actual, equivale a Copiar y Pegar