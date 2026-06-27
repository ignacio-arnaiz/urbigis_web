---
title: "Reordenar los Mapas"
---

El orden de presentación de los servicios en el Mapa está en función de su orden en [Panel del Escritorio](javascript:htLoadSlug('buscar-mapas')). El sistema coloca siempre el Mapa Base de fondo y a continuación va superponiendo los [Servicios de Mapas](javascript:htLoadSlug('servicio-de-mapa')) activos empezando por el que esté más abajo en el árbol del Escritorio, las [Capas que se editan](javascript:htLoadSlug('reordenar-mapas')) (los conjuntos de Datos) siempre se colocan las últimas, en el apartado de Edición.

Es posible alterar el orden de los mapas (individualmente o por carpetas) de dos formas:

- Seleccionando con el cursor un Servicio y arrastrándolo a otra posición del árbol:
- Utilizando las opciones “Subir” y “Bajar” del Menú de Opciones:

![](img/tutorial/2.2.8-reordenar-mapas-1-1.jpg)

Hay algunas limitaciones:

- Los Mapas Base y las Capas de Edición **no** se pueden mover.
- Los movimientos se deben producir entre elementos que estén al **mismo nivel** de profundidad dentro del árbol.
- Es preferible que en el momento de mover un nodo esté colapsado (no este expandido), así como todos los demás nodos de su mismo nivel de profundidad.