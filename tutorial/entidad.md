---
title: "Entidades"
---

#### Características

Son los objetos materiales o inmateriales que uThings controla sobre el territorio y que son aportados por los [Instrumentos](javascript:htLoadSlug('instrumento')) Operadores a los Instrumentos Inventario.

Se identifican mediante un nombre y una clave y se reúnen en [Grupos de Entidad](javascript:htLoadSlug('grupos-de-relacion')) en función del propósito del Instrumento que las crea.

Las Entidades pueden estar en cinco posibles estados:

- **Sin Asignar**: la Entidad sólo existe dentro de un Instrumento que está “En Edición”
- **Vigente**: la Entidad existe en este momento sobre el territorio y tiene efectos.
- **Suspendida**: la Entidad existe en este momento sobre el territorio pero temporalmente no tiene efectos porque un Instrumento la ha suspendido, de igual forma otro Instrumento puede devolverla a Vigente.
- **Proyectada**: la Entidad no existe en el territorio pero hay un Instrumento aprobado que pretende su implantación. Otro Instrumento puede pasarla a Vigente, Suspenderla o dejarla como Histórica.
- **Histórica**: la Entidad ya no existe en el territorio porque un Instrumento la eliminó, aunque otro Instrumento puede devolverla a Vigente.

Cada Entidad puede definirse espacialmente con cuatro tipos de geometría asociada: puntual, lineal, poligonal y 3D. De tal forma que el modo de representación de la Entidad se pueda ajustar al medio de visualización, la escala y la precisión.

Cada Entidad pueden contener documentos de todo tipo.

A cada Entidad se pueden aplicar todos los [Atributos](javascript:htLoadSlug('atributo')) que estén definidos en el Instrumento que la crea, en el Instrumento Inventario de destino o en el Instrumento Base sobre el que se apoya y que tengan el Grupo de la Entidad como Dominio de Aplicación. La aplicación de un Atributo en una Entidad se denomina Asignación.

![](img/tutorial/cap11.png)

#### Grupos de Entidad

Las Entidades se pueden reunir en “Grupos” en función del propósito del [Instrumento](javascript:htLoadSlug('instrumento')) que las crea: Planeamiento, Derechos, Objetos u Obligaciones.

**A) Grupos asignables a cualquier tipo de Instrumento:**

Grupo de Entidad
Descripción

**Ámbito**
Corresponde a las Entidades que definen la porción espacial afectada por un Instrumento.

**Operador**
Corresponde a Entidades instrumentales cuya única misión es portar operaciones contra otras Entidades del Inventario y que nunca llegan a formar parte del Inventario.

**Carpeta**
Corresponde a Entidades sin función territorial ni geometría y que se usan para estructurar de forma conveniente la estructura jerárquica de las demás Entidades. De esta forma el Instrumento tiene una estructura lógica y comprensible de presentación de sus Entidades en forma de árbol.

**B) Grupos asignables a  Instrumentos de Planeamiento:**

Grupo de Entidad
Descripción

**Categoría**
Separar lo urbano de lo no urbano: supone responder a la pregunta de ¿dónde situar la ciudad? En España esta función corresponde al concepto de “Clasificación del suelo”, fuera de España o no existe o se utilizan conceptos similares al de clasificación.

**Zona**
Definir la morfología urbana: supone responder a la pregunta de ¿cómo debe ser la ciudad? Es decir asignar el uso, su intensidad y la tipología de edificación y parcelación. En España corresponde al concepto de “Zonificación”, fuera de España se puede asimilar al concepto de “Zonning”.

**Sector**
Señalar las áreas sujetas a cambio. Supone responder a las preguntas de ¿quién debe cambiar la ciudad y cuándo debe hacerlo? Para ello se delimitan áreas o sectores sujetos a acciones de renovación urbana o de nueva ciudad. En España se suelen denominar “Sectores”, “Unidades de ejecución” o “Ámbitos de Actuación”, fuera de España también tienen una denominación variopinta.

**Protegido**
Señalar las áreas preservadas del cambio. Supone responder a la pregunta ¿que debe permanecer a salvo del cambio urbano? Para ello se delimitan áreas, edificaciones o construcciones preservadas, bien por sus valores históricos, por estar en áreas de riesgo, o por tener afecciones de cualquier tipo.

**C) Grupos asignables a  Instrumentos de Objetos:**

**Clase**
**Grupo de Entidad**
**Descripción**

**Suelos**
Parcela
Lote de Suelo No Conectivo

Tramo
Porción de Suelo Conectivo

Calle
Conjunto de Tramos con denominación toponímica

**Construcciones**
Construcción laminar
Revestimientos constructivos de suelo

Cerramiento
Elementos constructivos perimetrales de cierre

Edificación
Espacios construidos completamente cerrados

Otras Construcciones
Elementos constructivos abiertos

**Instalaciones**
Conducto
Elementos de transporte: colectores, tubos, líneas, canales, acequias

Depósito
Elementos de almacenamiento

Centro de Instalación
Elementos de producción, transformación o control

Instalación puntual
Elementos diversos de carácter puntual

**Mobiliario**
Mobiliario poligonal
Muebles que ocupan una superficie mensurable

Mobiliario lineal
Muebles que se disponen formando una línea

Mobiliario puntual
Muebles asimilables a un punto

**Vegetación**
Vegetación poligonal
Masa vegetal que ocupa una superficie mensurable

Vegetación lineal
Masa vegetal que se dispone formando una línea

Vegetación puntual
Vegetales individualizados

**D) Grupos asignables a  Instrumentos de Derechos:**

**Entity Group**
**Description**

**Domain**
Poder directo e inmediato sobre un objeto o bien

**Servitude**
Limita el dominio de un predio denominado fundo sirviente en favor de las necesidades de otro llamado fundo dominante perteneciente a otra persona

**Use**
Legitima para tener y utilizar una cosa o bien ajeno de acuerdo con las necesidades del usuario y, en su caso, su familia.

**Surface**
Derecho real temporal que comprende la facultad de construir sobre el suelo, sobre el vuelo o en el subsuelo de otro, con derecho a apropiarse de lo que ha sido construido en plazo

**Mortgage**
Derecho real de garantía, que se constituye para asegurar el cumplimiento de una obligación (normalmente de pago de un crédito o préstamo), que confiere a su titular un derecho de realización de valor de un bien

**Score**
Capacidad de una persona de exigir a otra, con relación a la compraventa de un bien concreto, que se lo venda a él por el precio que ya tenía acordado con un tercero

**Retract**
Derecho de adquisición preferente por el que su titular tiene la facultad de adquirir un determinado bien o derecho cuando se cumple un concreto supuesto de hecho o cuando las partes así lo hayan acordado

**Ford**
Modificación de estructura de la acera destinada exclusivamente a facilitar el acceso de vehículos a los inmuebles

**Activity**
Licencia municipal obligatoria para que en un local, nave u oficina se pueda ejercer una actividad comercial, industrial o de servicios

**Work**
Licencia municipal obligatoria para realizar obras en una vivienda, local, nave u oficina

E) Grupos asignables a  Instrumentos de Obligaciones:

**Grupo de Entidad**
**Descripción**

**Conservación**
Reparación o mejora de elementos para asegurar su funcionalidad

**Mantenimiento**
Suministro de recursos que garanticen el servicio normal

**Servicio**
Actividades de ejecución de tareas