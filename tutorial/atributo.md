---
title: "Atributos"
---

#### Características

Son los elementos utilizados para cualificar una [Entidad](javascript:htLoadSlug('entidad')), una [Relación](javascript:htLoadSlug('relacion')) u otro Atributo. En un sistema GIS estándar, los atributos de una entidad gráfica están determinados por la estructura de su tabla asociada, de forma que distribuye el mundo en clases o “Capas” de objetos con propiedades fijas. En urbiGis esos [Atributos](javascript:htLoadSlug('atributo')) los puede definir cada [Instrumento](javascript:htLoadSlug('instrumento')). De esta forma adquiere una enorme flexibilidad para describir de forma completa cualquier entidad territorial. Esta flexibilidad tiene ventajas e inconvenientes:

Tiene **ventajas** porque permite que los Instrumentos no tengan que utilizar un corsé de datos que impida enriquecer el contenido de datos de sus Entidades. Los sistemas informáticos tienden a establecer marcos rígidos para describir las cosas, marcos que en muchas ocasiones no encajan completamente en la realidad porque se diseñan para la mayoría de los casos, pero siempre dejan fuera los casos especiales. urbiGis trata de evitar ese inconveniente dando a los Instrumentos la posibilidad de definir y utilizar sus propios Atributos.

Tiene **inconvenientes** porque la libertad puede ser mal utilizada, existe el peligro de la polisemia, el nombrar a la misma cosa de formas distintas y además esta libertad dificulta la explotación de los datos porque siempre es más fácil buscar y agregar cuando todo se llama de la misma forma.

Los Atributos se componen de  los siguientes datos:

**Estado**: la operativa del Registro determina que los Instrumentos afecten a la situación de los Atributos y establezcan su estado:

**Suspendido**: el Atributo ha sido suspendido por otro Instrumento, en las consultas del Instrumento seguirá siendo visible pero se entiende que en este estado no tiene efectos. No es utilizable temporalmente por los Instrumentos, en aquéllas Entidades donde se utilizó antes de su suspensión, su contenido persiste pero es marcado como “suspendido” con indicación del Instrumento responsable de dicha suspensión.

**Eliminado**: el Atributo ha sido eliminado por otro Instrumento, en las consultas del Instrumento no será visible ni podrá ser objeto de rescate

**Proyectado**: el Atributo se ha declarado por un Instrumento Operador que aún no ha sido ejecutado

**Histórico**: el Atributo ha sido declarado obsoleto, en las consultas del Instrumento no será visible  pero podrá ser objeto de rescate

**Vigente**: el Atributo está en uso dentro de un Inventario y es utilizable por cualquier Instrumento para cualificar sus Entidades.

**Sin asignar**: el Atributo sólo existe dentro de un Instrumento que está En Edición.

**Modo de expresión**: determina el tipo de dato con que se Aplica a una Entidad o Relación.

**Booleano:** mediante un valor lógico verdadero o falso.

**Numérico**: con tres opciones, Máximo, Mínimo o Intervalo.

**De Fecha**: con tres opciones Máxima, Mínima o Intervalo.

**De Texto**: mediante un texto corto sujeto a idioma.

**De Régimen**: mediante uno de los Atributos de su Dominio de Régimen.

**De Referencia**: mediante uno de los Atributos de su Dominio de Referencia.

**Ninguno**: para los Atributos con un carácter funcional no aplicable.

**Abreviatura**:  texto corto que identifica el Atributo para su uso en informes o encabezado de tablas.

**Descripción**:  texto estructurado opcional que permite ampliar el contenido regulador del Atributo. Permitirá incluir hipervínculos a otros Atributos, bien propias del Instrumento, bien de cualquier otro Instrumento incluido en urbiGis o bien a direcciones de Internet.

**Nombre**: texto corto obligatorio que describe lo más concisamente posible el Atributo.

**Apartado**: corresponde a un texto corto o nemotécnico obligatorio que identifica abreviadamente al Atributo. Dado que los Atributos en un Instrumento se pueden estructurar en niveles jerárquicos, el apartado de un Atributo junto con los de sus Atributos precedentes formará un método de identificación inequívoco del estilo: “*Capítulo I, Sección II, Artículo 3*”, donde “*Sección* \*II” \*y “*Capítulo I”* son los Atributos precedentes del “*Artículo 3*”.

**Carácter Funcional**: determina su comportamiento, se explica detalladamente en apartados siguientes

\*\*Unidad: \*\*apunta al Atributo con el carácter funcional de “Unidad” que vaya a utilizar como Unidad de Medida cuando el Modo de Expresión sea Numérico.

\*\*Atributos de Referencia: \*\*relación de Atributos que tengan carácter funcional de “Referencia” y que forman su lista de valores opcionales cuando se exprese mediante un Dominio de Referencia, se explica detalladamente en apartados siguientes.

\*\*Atributos de Régimen: \*\*relación de Atributos que tengan carácter funcional de “Régimen” y que forman su lista de valores opcionales cuando se exprese mediante un Dominio de Régimen, se explica detalladamente en apartados siguientes.

**Grupos de Asignación**: determina en que grupos de Entidad o Relación se podrá asignar el Atributo, se explica detalladamente en apartados siguientes.

**Documentos**: archivos complementarios de todo tipo, adjuntos al Atributo que expliquen gráficamente su regulación, amplíen su contenido regulador o la justifiquen.

**Idiomas**: un Atributo puede ser definido en distintos idiomas

![](img/tutorial/Captura113.png)

#### Carácter Funcional

Determina el comportamiento de un[Atributo](javascript:htLoadSlug('atributo')). Puede ser de los siguientes tipos:

**No Asignables** a [Entidades](javascript:htLoadSlug('entidad')) ni [Relaciones](javascript:htLoadSlug('relacion')), su Modo de Expresión siempre será “Ninguno”:

**Enunciado**: corresponde a Atributos cuyo único objeto es estructurar convenientemente la presentación jerárquica de los demás Atributos.

**Unidad**: corresponde con Atributos que sirven para establecer la Unidad de Medida de otro Atributo que se exprese mediante un Valor de Cantidad. Por ejemplo el Atributo Estándar “*Altura en* *Plantas*” se expresa con una cantidad medida en la Unidad “*Plantas*”.

**Referencia**: corresponde con Atributos que sirven para formar el “[Dominio de Referencia](javascript:htLoadSlug('atributo'))” de otro Atributo que tiene como Modo de Expresión “Referencia”. Por ejemplo: los Atributos “*Compensación*, *Cooperación* y *Expropiación*” forman el Dominio de Referencia del Atributo “*Sistema de Actuación*”.

\*\*Régimen: \*\*corresponde con los Atributos que sirven para formar el “Dominio de Régimen” de otro Atributo de carácter Estándar. Por ejemplo el Atributo  de Régimen “Carácter de Uso” aplicado a un Atributo Estándar como el “Uso de Vivienda” permite a los Instrumentos establecer si ese uso de vivienda es un uso “Permitido” o “Prohibido” en una Entidad. En ese caso esos dos posibles valores “Permitido” y “Prohibido” tienen carácter de “Referencia” y forman a su vez el [Dominio de Referencia](javascript:htLoadSlug('atributo'))del Atributo “*Carácter de Uso*”.

**Operación**: corresponde a Atributos instrumentales cuya única misión es portar operaciones contra otros Atributos del Inventario y que nunca llegan a forma parte del Inventario.

**Asignables** mediante apuntes o “**Asignaciones**” a Entidades y Relaciones:

\*\*Estándar: \*\*atributos asignables a Entidades y Relaciones con propósito general.

**Meta Atributo**: atributos asignables a otro Atributo

![](img/tutorial/cap9.png)

#### Atributos de Régimen

Forma una lista de [Atributos](javascript:htLoadSlug('atributo'))  con [Carácter Funcional](javascript:htLoadSlug('atributo')) de “Régimen” que formarán  el dominio de expresión de otro Atributo con Carácter Funcional “Estándar” cuyo Modo de Expresión es “De Régimen”.

Los Atributos con el Carácter Funcional de “Régimen” pueden formar parte de distintos Dominios de Régimen de otros Atributos y su Modo de Expresión podrá ser cualquiera excepto “Régimen”.

Por ejemplo el Atributo “Carácter de Uso” aplicado a un Atributo Estándar como el “Uso de Vivienda” permite a los Instrumentos establecer si ese uso de vivienda es un uso “Permitido” o “Prohibido” en una Entidad. En ese caso esos dos posibles valores “Permitido” y “Prohibido” tienen Carácter Funcional de “Referencia” y forman a su vez el [Dominio de Referencia](javascript:htLoadSlug('atributo')) del Atributo “*Carácter de Uso*”.

![](img/tutorial/cap7.png)

#### Atributos de Referencia

Forma una lista de [Atributos](javascript:htLoadSlug('atributo')) con [Carácter Funcional](javascript:htLoadSlug('atributo')) de “Referencia” que formarán  el dominio de expresión de otro Atributo de carácter Estándar cuyo Modo de Expresión es “De Referencia”.

Los Atributos con el Carácter Funcional de “Referencia” pueden formar parte de distintos Dominios de Referencia de otros Atributos y su Modo de Expresión siempre será “Ninguno” ya que solo sirven como expresión de otro Atributo.

![](img/tutorial/cap8.png)

#### Grupos de Asignación

Forma una lista de Grupos de Entidad en los que será aplicable un [Atributo](javascript:htLoadSlug('atributo')). Por tanto para una [Entidad](javascript:htLoadSlug('entidad')) concreta el conjunto de Atributos asignables estará en función del Grupo de Entidad al que pertenezca.

Se determina por el [Instrumento](javascript:htLoadSlug('instrumento')) Operador que la crea, aunque puede ser ampliado por Instrumentos Operadores posteriores.

![](img/tutorial/cap10.png)