---
title: "Documentos"
---

En [urbiGIS](http://urbiGIS.com/) pueden adjuntarse Documentos a diferentes elementos:

- **A un Conjunto de Dato**s: bien directamente al Conjunto o bien a alguna de los elementos que lo componen
- **A una Versión de [Instrumento](javascript:htLoadSlug('instrumento'))**: pueden ser adjuntados durante la edición del documento o añadidos de forma posterior durante su tramitación o por circunstancias sobrevenidas.
- **A un [Atributo](javascript:htLoadSlug('atributo'))**: explican aspectos de regulación del Atributo, sólo pueden adjuntarse durante la etapa de edición del Instrumento.
- **A una [Entidad](javascript:htLoadSlug('entidad'))**: explican aspectos de regulación de la Entidad y añaden contenido gráfico, sólo pueden adjuntarse durante la etapa de edición del Instrumento.
- **A una [Relación](javascript:htLoadSlug('relacion'))**: explican aspectos de regulación de la Relación y añaden contenido gráfico, sólo pueden adjuntarse durante la etapa de edición del Instrumento.
- **A una [Asignación](javascript:htLoadSlug('asignacion'))**: explican aspectos de regulación de la Asignación y añaden contenido gráfico, sólo pueden adjuntarse durante la etapa de edición del Instrumento.

Los Documentos podrán ser de dos tipos:

- **Ficheros unitarios** de cualquier clase, habitualmente en formatos de imagen o pdf.
- **Carpetas**, conteniendo planos o series de planos, con o sin ficheros de georreferenciación incluidos.

Se organizan en grupos establecidos por el Administrador del Registro. Estos grupos suelen aludir a su papel dentro del instrumento:

- Documentos Administrativos
- Documentos Informativos
- Documentos Normativos

Cuando los documentos correspondan a información gráfica se podrán gestionar de las siguientes formas:

- Como un raster no georreferenciado: deberá visualizarse con cualquier visor de imágenes una vez descargados en el disco del cliente.
- Como un raster georreferenciado: podrá ser incluido como un [Servicio de Mapa](javascript:htLoadSlug('servicio-de-mapa')) en el [Catálogo](javascript:htLoadSlug('buscar-mapas')) utilizando el [Contexto de Búsqueda](javascript:htLoadSlug('contextos-de-busqueda')) por Documento y por tanto superponible al resto de capas sin necesidad de su descarga en el disco del cliente.
- Como un vectorial georreferenciado en formatos con simbología: tales como GML o KML, podrán incluirse en el Visor Espacial como una capa más una vez descargados en el disco del cliente.
- Como un vectorial georreferenciado o no pero sin simbología: tales como SHP, DWG, DXF, DGN, deberán visualizarse con una aplicación GIS/CAD de escritorio una vez descargados en el disco del cliente.