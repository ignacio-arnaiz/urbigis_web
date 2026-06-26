---
title: "La Gestión Documental en urbiGIS"
date: "2023-03-22"
excerpt: "Nos parece que los Sistemas de Información Geográfica sólo se ocupan de tratar con datos vectoriales o de imagen georreferenciada y de proporcionar las innumerables herramientas para su producción, al"
---

Nos parece que los Sistemas de Información Geográfica sólo se ocupan de tratar con datos vectoriales o de imagen georreferenciada y de proporcionar las innumerables herramientas para su producción, almacenamiento, análisis y publicación. Casi en contraposición a los Sistemas de Gestión Documental que tratan con información no geográfica contenida en documentos de todo tipo. Pero la realidad es que nuestro mundo geográfico se desenvuelve en un entorno documental de informes, facturas, fotografías, estudios o análisis, últimamente digitales en origen, pero que en muchos casos aún son imágenes escaneadas de documentos de papel.

Todo esto supone que cuando identificamos un fenómeno geográfico por su posición, su  forma o sus propiedades, es muy probable que esté conectado con documentos, como los que describen o justifican su existencia, los que informan de sus propiedades actuales o efectos, los que delimitan sus posibles transformaciones futuras… Una pléyade documental a la que es imprescindible acceder para poder actuar sobre él o comprenderlo. 

En este negocio del GIS siempre trazamos la ruta hacia el documento desde el elemento geográfico pero en otros ámbitos la ruta es inversa, es el documento quien tiene el protagonismo y el elemento geográfico es un derivado. Hasta el punto de que la Gestión Geográfica pasa a ser un anexo de la Documental.

Sin llegar a ese extremo, el problema es que nuestros sistemas GIS no suelen disponer de una Gestión Documental integrada. Si hay que tratar con Documentos lo más inmediato es añadir en un fichero de formas un campo de texto con la ruta a un documento o a una carpeta de documentos. La solución suele ser suficiente, y  será más eficiente si esa ruta no apunta a recursos locales, difíciles de compartir, sino que apunta a recursos remotos abiertos o compartidos. Siempre y cuando esos repositorios documentales no cambien de nombre o posición, rompiendo la integridad con las rutas del fichero de formas.

Si nuestro sistema está soportado por una base de datos espacial siempre queda la posibilidad de guardar una copia de los documentos en la misma base de datos o realizar una integración con un gestor documental al uso, lo que nos permitirá conservar la integridad referencial y robustecer la solución.

Como en [urbiGIS](https://urbigis.com) tratamos con Inventarios y elementos geográficos que son fruto de una actividad reglada y bien documentada, es imprescindible resolver esta necesidad. Por eso hemos adoptado algunas soluciones.

# Soluciones

**1)** **Todo elemento o fenómeno geográfico contenido en** [urbiGIS](https://urbigis.com) **es susceptible de contener documentos**. En el caso de los Conjuntos de Datos sus documentos se pueden referir a la totalidad del Conjunto o a cualquiera de sus geometrías y además un documento puede ser compartido por varias geometrías. De la misma forma en el caso de los Instrumentos (Conjuntos de Datos de mantenimiento transaccional) sus documentos se pueden referir a la totalidad del Instrumento o a alguno de sus elementos, como a un Atributo concreto, a una Entidad geométrica, a una Relación con otro elemento o al valor concreto que un Atributo adquiere en una Entidad. 

Por ejemplo en un Inventario de Planeamiento la determinación «Altura máxima» en la entidad «Casco antiguo» tendrá un valor medido en metros o plantas y tantos documentos como el plan incluya para interpretar correctamente la normativa (gráficos, fotos etc.). Incluso en ese caso la altura puede tener varios valores condicionados (si es esquina, si hay mucha pendiente, si al otro lado de la acera hay edificios bajos…), cada uno con sus documentos y por tanto lo que en teoría debería ser un dato simple, se convierte en un laberinto normativo y documental.

**2) A esos elementos se les puede adjuntar cualquier tipo de documento**, distinguiendo los siguientes:

- F**icheros individuales (doc, pdf, xls, jpg, png…) no georreferenciados.** Se suben y almacenan sin más operaciones.

- **Ficheros individuales georreferenciados que representan un área geográfica** (fotografías aéreas o planos escaneados). Se suben sin más pero urbiGIS calcula su extensión y posición de forma que sea posible colocarlos como una capa más del escritorio de urbGIS. En este caso urbiGIS crea un fichero .prj que guarda como auxiliar del principal.

- **Ficheros individuales georreferenciados que representan un punto** (fotografías con datos de posición). En este caso ese dato se utiliza para representar en el mapa mediante un punto todos los documentos que se seleccionen.

- **Formatos multiarchivo georreferenciados**, tales como SHP o imágenes con ficheros world anejos, Se suben juntos y urbiGIS guarda los ficheros anejos como auxiliares del principal. Para urbiGIS el fichero .shp será el principal, los demás serán auxiliares.

- **Formatos multiarchivo georreferenciados de una mapa seriado**. Se suben todos juntos y urbiGIS considera todas sus hojas como un  documento único compuesto de tantas hojas como contenga la serie.

- **Direcciones URL a un fichero remoto o una página html**. [urbiGIS](https://urbigis.com) considera esta URL como un documento en si mismo. 

- **Documentos carpeta**. Son documentos virtuales que actúan como contenedores de otros documentos.

**3)** **Todas las cuentas y usuarios de urbiGIS tienen la capacidad de establecer una estructura documental propia**, de forma que siempre que se guarde un documento en cualquier elemento propiedad de esa cuenta se podrá utilizar dicha estructura.

**4)** **Por supuesto todos los documentos (excepto las URL y Carpetas) son descargables** con las restricciones de acceso o licencia de uso que su propietario haya establecido para el elemento que los contiene.

# Acceso

En [urbiGIS](https://urbigis.com) existen tres formas de acceso a los Documentos:

- **Desde el elemento que los contiene**. En este caso es preciso llegar hasta el propio elemento para visualizar sus documentos adjuntos.

- **Desde la Consulta Gráfica**. Utilizando el icono de consulta presentará los elementos identificados en el Panel de Datos:

- **Desde el buscador de Documentos**. En la interfaz de urbiGIS se utiliza la pestaña de Documentos para buscarlos por diversos criterios: su nombre, el tipo de documento o el tipo de elemento al que está adjunto. Incluye un consulta gráfica propia que permite haciendo un clic sobre mapa obtener todos los documentos georreferenciados disponibles en ese punto.

# Conclusión

[urbiGIS](https://urbigis.com) propone ligar los elementos geográficos a los documentos que determinaron su origen, que informan de sus circunstancias actuales y que determinan su evolución futura, porque sin ellos no es posible comprender su papel sobre el territorio. Por eso incluye un Gestor documental sencillo y accesible que resuelve el problema sin necesidad de complejas integraciones y con plena garantía de integridad y seguridad para todo tipo de documentos.

Ignacio Arnaiz Eguren (Director)
