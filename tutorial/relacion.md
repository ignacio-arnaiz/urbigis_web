---
title: "Relaciones"
---

Sirven para definir conexiones entre cualquiera de los elementos de [urbiGIS](http://urbiGIS.com/):

- Entre Instrumentos
- Entre Atributos
- Entre Entidades
- Entre Relaciones

La Relación se puede establecer entre varios elementos titulados como “Origen” y varios elementos titulados como “Destino” definiendo de esta forma una dirección a la Relación.

Cada Relación puede tener una única descripción geométrica compuesta de uno o varios puntos y una o varias líneas, independientemente del número de elementos de Origen o Destino a los que afecte. Por ejemplo la Relación entre un Edificio y el Tramo de Vial con el que conecta se concreta en una o varias puertas de acceso (con o sin número asignado) que se representan mediante un punto cuando son colindantes o mediante una línea cuando hay portales interiores que no conectan directamente con la vía pública.

A cada Relación se le pueden asignar tantos Atributos como sea necesario, bien entendido que su contenido se aplicará a todo el conjunto de elementos Origen y Destino a los que afecte la Relación, esto quiere decir que si hay factores diferenciales en la Relación entre un Origen y varios Destinos entonces será preciso establecer Relaciones distintas para cada uno de ellos.

Se identifican mediante un nombre y una clave y se reúnen en Grupos de Relación en función del propósito del Instrumento que las crea.

La\*\* \*\*operativa de [urbiGIS](http://urbiGIS.com/) determina que los Instrumentos operadores afecten a la situación de las Relaciones y establezcan sus estados:

- **Sin Asignar**: la Relación sólo existe dentro de un Instrumento que está “En Edición”
- **Vigente**: la Relación existe en este momento sobre el territorio y tiene efectos.
- **Suspendida**: la Relación existe en este momento sobre el territorio pero temporalmente no tiene efectos porque un instrumento la ha suspendido, de igual forma otro Instrumento puede devolverla a Vigente.
- **Proyectada**: la Relación no existe en el territorio pero hay un Instrumento aprobado que pretende su implantación. Otro Instrumento puede pasarla a Vigente, Suspenderla o dejarla como Histórica.
- **Histórica**: la Relación ya no existe en el territorio porque un Instrumento la eliminó, aunque otro Instrumento puede devolverla a Vigente.

Cada Relación puede definirse espacialmente con cuatro tipos de geometría asociada: puntual, lineal, poligonal y 3D. De tal forma que el modo de representación de la Relación se pueda ajustar al medio de visualización, la escala y la precisión.

Cada Relación pueden contener documentos de todo tipo.

A cada Relación se pueden aplicar todos los [Atributos](javascript:htLoadSlug('atributo')) que estén definidos en el [Instrumento](javascript:htLoadSlug('instrumento')) que la crea, en el Instrumento Inventario de destino o en el Instrumento Base sobre el que se apoya y que tengan el [Grupo de Relación](javascript:htLoadSlug('grupos-de-relacion')) como [Dominio de Asignación](javascript:htLoadSlug('asignacion')). La aplicación de un Atributo en una Relación se denomina [Asignación](javascript:htLoadSlug('asignacion')).