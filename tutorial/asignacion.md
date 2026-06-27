---
title: "Asignaciones"
---

Es la aplicación de un [Atributo](javascript:htLoadSlug('atributo')) sobre una [Entidad](javascript:htLoadSlug('entidad')) o una [Relación](javascript:htLoadSlug('relacion')).

Se expresa mediante uno varios Valores, cada uno con una estructura dependiente del Modo de Expresión del Atributo:

**Booleano**: se asigna un dato **SI/NO**, pudiéndose complementar con un texto descriptivo largo en varios idiomas.

**Numérico: **se puede asignar un valor **Máximo  **y un valor** Mínimo,** pudiéndose complementar con un texto descriptivo largo en varios idiomas**.** Si el Atributo tiene asignado un Atributo de carácter Unidad, el dato de valor se entenderá como una cantidad ajustada al formato definido en dicho Atributo de Unidad, en otro caso será un texto sin unidad.

**De Fecha: **se asignará un dato  de  fecha** Máxima **y uno de fecha** Mínima**, pudiéndose complementar con un texto descriptivo largo en varios idiomas.

\*\*De Texto: \*\*se asignarán un texto corto y un texto largo en varios idiomas.

\*\*De Régimen: \*\*se asignará alguno de los Atributos que formen su Dominio de Régimen. Además en función del modo de expresión de dicho Atributo de Régimen se aplicarán los Casos 1,2,3,4 o 6.

**De Referencia**: se asignará alguno de los Atributos que formen su Dominio de Referencia,  pudiéndose complementar con un texto descriptivo largo en varios idiomas.

Las Asignaciones en una Entidad pueden formar Grupos de forma que una misma Entidad pueda tener varios Grupos y en cada uno estén asignados los mismos Atributos con diferentes valores.

![](img/tutorial/Captura114.png)