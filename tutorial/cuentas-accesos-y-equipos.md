---
title: "Cuentas, Accesos y Equipos"
---

Este artículo define los conceptos de Cuenta, Acceso y Equipo en el entorno de [urbiGIS](http://urbigis.com/). Además, se explican brevemente sus características y las funcionalidades que pueden ejecutar.

### Cuentas de Organización

Son entidades o grupos sociales con los que se suscribe un acuerdo para compartir, consultar y editar información espacial en [urbiGIS](http://urbigis.com/). No puede haber dos Cuentas con la misma denominación.

Una Cuenta dada de alta en [urbiGIS](http://urbigis.com/) puede:

- Compartir y gestionar sus Geoservicios (mapas, geoinformes, direcciones y elementos) a través del [Servicio de Conjuntos de Datos](javascript:htLoadSlug('tipos-de-datos-de-urbigis')).
- Crear y gestionar inventarios urbanos a través del [Servicio de Inventarios](javascript:htLoadSlug('tipos-de-datos-de-urbigis')).

En este [enlace](javascript:htLoadSlug('registro-de-cuentas')) se explica cómo registrar una Cuenta.

#### Tipos de Cuentas

El tipo categoriza cada Cuenta en función de su naturaleza:

- Públicas: Administraciones y organismos, empresas o instituciones en las que los poderes públicos ejerzan, directa o indirectamente, el control o una influencia dominante.
- Privadas: Compañías, instituciones y entidades con o sin ánimo de lucro.
- Comunidades de usuarios: grupo colaborativo de personas físicas con interés en trabajar e intercambiar datos espaciales de todo el Mundo. Puede que la comunidad solo la integre quien solicitó su registro (su Administrador) o que, por el contrario, sea una colectividad. Para registrarse en [urbiGIS](http://urbigis.com/) no es necesario que cuenten con personalidad jurídica.

### Accesos de usuario a Cuentas

Son conexiones al Servicio mediante credenciales para acceder a los datos y funciones de una Cuenta. Una Cuenta puede tener un número ilimitado de Accesos. Las credenciales de los Accesos son únicos, no puede haber dos con el mismo identificador aunque pertenezcan a Cuentas distintas.

En este [enlace](javascript:htLoadSlug('registro-de-accesos')) se explica cómo registrar un Acceso.

#### Tipos de Accesos

Cada Cuenta, puede organizar sus Accesos atendiendo a tres roles:

- Administrador: Acceso inicial y capacitado para ejecutar todas las posibles funciones asignadas por [urbiGIS](http://urbigis.com/) a una Cuenta. En todo momento la Cuenta debe disponer de uno y solo un Acceso de Administración.
- Coordinador: Accesos de apoyo para la supervisión del Contenido y gestión interna de las Cuentas. El Acceso de Administración puede crear tantos Accesos de Coordinación como estime necesarios.
- Editor: Accesos generadores de Contenido dentro de la Cuenta. El Acceso de Administración y las Cuentas de Coordinación pueden crear tantas cuentas de Edición como estimen necesarias.

#### Permisos

Los permisos asociados a cada tipo de Acceso son los siguientes:

![](img/tutorial/Permisos_de_usuario_ES-1.png)

### Equipos

Son entornos colaborativos de trabajo formados por dos o más Cuentas para acceder, compartir y editar datos. Suponen la materialización de una relación de colaboración entre las Cuentas que lo componen. De este modo los Accesos de las Cuentas que los conformen, generarán y compartirán datos para los miembros de su Equipo, a través de la asignación selectiva de Visibilidad del Contenido en el momento de generarlo.

Están compuestos por dos tipos de Cuentas:

Líder:

- En el Servicio de Conjuntos de Datos es la titular de los datos que se publican y que se ponen a disposición del Equipo.
- En el Servicio de Inventarios es la titular del Inventario de un Territorio.
- Miembro: en ambos servicios es la que tiene acceso a los datos de la Líder.

#### Funcionamiento

Una Cuenta que quiera crear una relación de colaboración con otra le enviará una solicitud para formar un Equipo. Si hay aceptación, la Cuenta solicitante se convertirá en miembro de un Equipo liderado por la Organización solicitada. Además, no hay limitación en el número de miembros de un Equipo.

A efectos funcionales, el Servicio pone a su disposición dos formas de colaboración:

- Con permisos de lectura: las Cuentas Miembro podrán consultar el Contenido, pero no podrán editarlo.
- Con permisos de escritura: las Cuentas Miembro podrán consultar y editar el Contenido originario generado por las Cuentas Líder, y estas podrán validar el Contenido derivado de las actuaciones realizadas por las Cuentas Miembro.

Una Cuenta puede ser líder de un equipo y miembro en otros simultáneamente.

#### Síntesis

![](img/tutorial/Org_Cue_Equ_ES-1.png)