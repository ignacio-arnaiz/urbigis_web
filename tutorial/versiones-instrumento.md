---
title: "Versiones de Instrumento"
---

Durante los procesos administrativos de autorización y control es habitual que los [Instrumentos](javascript:htLoadSlug('instrumento')) Operadores sufran cambios, en unos casos como exigencia para su aprobación, en otros casos como adecuación a la realidad ejecutada. Por ello en cada momento de tramitación el contenido del Instrumento suele ser distinto.

También es posible, sobre todo en el Inventario de Planeamiento, que una revisión de Plan integral suponga la renovación completa de la ordenación vigente.

Para resolver esta situación urbiGIS permite que un Instrumento tenga diferentes versiones. El número de Versiones anotado para cada Instrumento no es fijo, dependerá del número de cambios que ese Instrumento haya sufrido a lo largo de su tramitación y ejecución o de las veces que se haya decidido renovar por completo un Inventario.

Las Versiones siempre son Integrales, es decir contienen la totalidad del Instrumento. Ello implica que en la sucesión temporal de versiones, la última sustituye completamente a la anterior.

Cada Versión de Instrumento contiene un conjunto de datos que la describe:

- **Orden**: identifica su posición en la secuencia de versiones del Instrumento. Esta posición es fundamental para asegurar el buen funcionamiento de las alteraciones que efectúa sobre el Inventario.
- **Causa**: explica el tipo de acto administrativo o causa que determina la necesidad de una nueva versión.

**Tipo**: establece la función de la versión en la secuencia de versiones y sus efectos sobre el Inventario. Se debe tener en cuenta que una nueva Versión que afecte al Inventario lo primero que hace es revertir los cambios que haya efectuado la Versión anterior, antes de efectuar los suyos. Hay tres Tipos de Versión:

- **Inicial:** corresponde a versiones tentativas que no pueden ejecutarse sobre el Inventario. No afectan al estado consolidado del Instrumento. Una versión Inicial puede ser promocionada a Transitoria o a Final.
- **Transitoria**: corresponde a una Versión intermedia que puede tener efecto sobre el Inventario pero que no cierra la secuencia de Versiones. Ponen el estado consolidado del Instrumento “En Redacción” o “En Tramitación”. Una versión Transitoria puede ser promocionada a Final o degradada a Borrador.
- **Final**: corresponde a una Versión que cierra la secuencia de Versiones. Mientras no alcance el estado de Verificada puede ser degradada a Transitoria. Ponen el estado consolidado del Instrumento “En Redacción”, “En Tramitación” o “Cerrado” una vez que la ejecución del Instrumento ha sido verificada.

La secuencia temporal de las Versiones es importante para asegurar que el Inventario se actualiza de forma coherente. Una vez Verificada la Versión Final se considera que el estado consolidado del Instrumento es Cerrado. Cualquier modificación del Inventario que sea preciso efectuar desde ese momento de deberá hacer mediante un nuevo Instrumento Operador.

- **Departamento:** indica el órgano competente para la formulación del acto administrativo.
- **Sentido de Resolución**: indica el sentido de la resolución del órgano competente sobre la Versión
- **Fecha de Resolución**: indica la fecha de celebración del acto administrativo que determina la finalización del trámite.
- \*\*Editor: \*\*identifica la organización responsable de la redacción de esta Versión del Instrumento.
- **Documentos**: archivos complementarios, de todo tipo, adjuntos a la Versión que amplíen su contenido tales como memorias, presupuestos, anexos, documentos ambientales…
- \*\*Estado \*\*(\*): el control del estado de la Versión es vital para asegurar el buen funcionamiento del Registro. Se modifica por el Administrador del Registro a medida que la Versión se tramita.

Los estados posibles de una Versión son los siguientes:

- **Sin Encargar**: la Versión se ha dado de alta en el Registro pero aún no se ha nombrado a su Editor.
- \*\*Encargada: \*\*la Versión tiene asignado Editor pero éste aún no la ha puesto en edición.
- **En Edición**: la Versión ya está disponible para el Editor.
- **En Validación**: la Versión está entregada al Registro y en proceso de verificación de su contenido formal. Si el proceso de validación encuentra defectos se devuelve al estado de “En Redacción” previo informe de Disconformidades para ser corregida por el Editor.