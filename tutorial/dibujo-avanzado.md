---
title: "Edición Avanzada"
---

El panel que contiene las herramientas de Edición Avanzada se puede encontrar en el módulo de Herramientas, en la pestaña de ![](img/tutorial/advanceddraw-275x300.png) Edición Avanzada.

![](img/tutorial/2.3.c.2-Edici%C3%B3n-Avanzada-1.jpg)

Las herramientas de Dibujo Avanzado permiten realizar las siguientes operaciones de geoproceso, sobre geometrías ya creadas (que deberán estar previamente seleccionadas):

![](img/tutorial/simplify-300x260.png)  **Simplificar**: elimina los vértices que estén dentro de la distancia de tolerancia de las geometrías seleccionadas.

Una vez seleccionada la geometría sobre la que se desea editar, al ejecutar la herramienta Simplificar abrirá un diálogo que pedirá la tolerancia entre nodos (la distancia mínima entre vértices).

![](img/tutorial/2.3.c.2-Edici%C3%B3n-Avanzada-simplificar.jpg)

Una vez introducida la distancia de tolerancia, mostrará sobre la geometría, en líneas discontínuas, una vista previa de la operación, que en caso de Aceptar, se finaliza.

![](img/tutorial/2.3.c.2-Edici%C3%B3n-Avanzada-simplificar2.jpg)

![](img/tutorial/addring-300x294.png)  **Crear un hueco:** genera un hueco dentro de otra geometría.

![](img/tutorial/2.3.c.2-Edici%C3%B3n-Avanzada-crear-hueco-3.jpg)

![](img/tutorial/addpart-288x300.png)  \*\*Añadir Parte: \*\*suma una geometría dibujada a la geometría seleccionada.

![](img/tutorial/2.3.c.2-Edici%C3%B3n-Avanzada-A%C3%B1adir-Parte-3.jpg)

![](img/tutorial/deletepart-300x300.png)  **Borrar Parte**: resta de la geometría seleccionada una geometría dibujada.

![](img/tutorial/2.3.c.2-Edici%C3%B3n-Avanzada-Borrar-Parte-3.jpg)

![](img/tutorial/divide-227x300.png)  \*\*Dividir: \*\*secciona la geometría seleccionada en dos utilizando una línea de corte.

![](img/tutorial/2.3.c.2-Edici%C3%B3n-Avanzada-Dividir-Parte-3.jpg)

![](img/tutorial/buffer-300x300.png)  **Zona de Influencia**, genera una nueva geometría a una distancia fijada, ampliando el perímetro de la geometría seleccionada. Da la posibilidad de eliminar o mantener la geometría inicial, si la distancia es negativa la zona de influencia se hará por dentro de la entidad actual, se pueden definir tres estilos de acabado y tres estilos de ángulos para las geometrías de línea :

**CAP\_ROUND**: extremos redondeados

**CAP\_SQUARE**: extremos cuadrados separados del final de línea la distancia marcada

**CAP\_FLAT**: extremos cuadrados cortados a ras del final de línea

J**OIN\_BEVEL**: recorta a ras los vértices intermedios

**JOIN\_MITRE**: alarga los extremos en los vértices intermedios siguiendo las nuevas líneas de influencia hasta donde intersecten

**JOIN\_ROUND**: alarga los extremos en los vértices intermedios recortando para que no superen la distancia marcada

![](img/tutorial/2.3.c.2-Edici%C3%B3n-Avanzada-buffer-Parte-3.jpg)

![](img/tutorial/intersect-300x286.png) \*\*Intersección: \*\*crea una nueva geometría en el espacio común de las geometrías seleccionadas. Da también la posibilidad de eliminar o mantener las geometrías seleccionadas.

![](img/tutorial/2.3.c.2-Edici%C3%B3n-Avanzada-Interseccion-Parte.jpg)

![](img/tutorial/merge-300x285.png)  **Fusionar:** crea una nueva geometría por unión de las geometrías seleccionadas y da la opción de mantener o eliminar las originales.

![](img/tutorial/2.3.c.2-Edici%C3%B3n-Avanzada-Fusionar.jpg)

![](img/tutorial/difference-300x285.png)  \*\*Diferencia: \*\*crea una nueva geometría a partir de la partes no superpuestas de una de las geometrías seleccionadas, da la opción de mantener o eliminar las geometrías seleccionadas inicialmente.

![](img/tutorial/2.3.c.2-Edici%C3%B3n-Avanzada-Diferencia.jpg)

![](img/tutorial/convexhull-300x296.png) **Envolvente convexa**, crea una nueva geometría que envuelve a todas las geometrías seleccionadas, pudiendo mantener o eliminar las geometrías iniciales.

![](img/tutorial/2.3.c.2-Edici%C3%B3n-Avanzada-Envolvente-3.jpg)

![](img/tutorial/multipletosingle-300x277.png)  **Convertir geometría de Múltiple a Simple**, convierte una geometría multiparte única (una única geometría que tenga partes físicamente separadas entre sí) en un conjunto de geometrías independientes.

![](img/tutorial/2.3.c.2-Edici%C3%B3n-Avanzada-Simple-a-M%C3%BAltiple-3.jpg)

![](img/tutorial/symdifference-300x285.png)  **Diferencia simétrica**, crea una nueva geometría con las partes que no están superpuestas de un conjunto de geometrías. Se nos da también la opción de eliminar o mantener las geometrías iniciales.

![](img/tutorial/Captura112.png)

![](img/tutorial/2.3.c.2-Edici%C3%B3n-Avanzada-Trazar-paralela-4.jpg) **Trazar paralela**:  creará una línea paralela al perímetro de la geometría seleccionada a la distancia que se fije.

![](img/tutorial/2.3.c.2-Edici%C3%B3n-Avanzada-Trazar-paralela-3.jpg)

![](img/tutorial/2.3.c.2-Edici%C3%B3n-Avanzada-Escalar-1.jpg) **Escalar**: permite escalar una geometría.