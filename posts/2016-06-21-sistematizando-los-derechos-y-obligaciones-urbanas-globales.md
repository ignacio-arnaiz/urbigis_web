---
title: "Los Derechos y Obligaciones Urbanas Globales (Sistematizando con urbiTHINGS)"
date: "2016-06-21"
excerpt: "En las entradas anteriores (Sistematizando la Planificación urbana global y Sistematizando la Ejecución urbana global) realicé un resumen de cómo urbiTHINGS aporta sistemas de planificación y ejecució"
---

En las entradas anteriores [(Sistematizando la Planificación urbana global](http://www.arnaizpartners.com/blogarnaizpartners/?p=826#more-826) y [Sistematizando la Ejecución urbana global](http://www.arnaizpartners.com/blogarnaizpartners/?p=861)) realicé un resumen de cómo **urbiTHINGS** aporta sistemas de planificación y ejecución urbanas que permiten visualizar capas continuas y globales de ordenación y forma urbanas, formadas por la yuxtaposición de los planes municipales y objetos, gracias a la utilización de Grupos de Entidad, Atributos y Relaciones de Equivalencia de ámbito global.

En esta entrada se describe cómo utilizar la misma técnica para construir capas globales sobre los Derechos y Obligaciones urbanas, una Ontología que será también fundamental para construir Indicadores dinámicos, mapas y servicios de datos globales de estos aspectos urbanos.

La metodología de trabajo utiliza los mismos elementos que en el caso de la Planificación y de los Objetos: los Instrumentos de cambio urbano como fuente transaccional de datos, las Entidades como objetos espaciales que describen el mundo agrupadas en “Grupos de Entidades”, los Atributos como características o propiedades de esas Entidades y las Relaciones como nexo entre todos ellos, también agrupadas en “Grupos de Relación”.

# Inventario de Derechos

Contiene todas las Entidades jurídicas que determinan la existencia de un Derecho sobre un Objeto. Para cada Derecho inventariado se establece una Relación con los Objetos a los que afecta. Hay tres posibles casos:

- 
**Titular único**: se establece una sola Relación con el Objeto que corresponda, Relación que implícitamente se extiende a todos los demás Objetos que ese Suelo contenga.

[](http://www.arnaizpartners.com/blogarnaizpartners/wp-content/uploads/2016/06/captura29.png)

- 
**Proindiviso**: se establece un Derecho para cada titular con su correspondiente Relación con el objeto Suelo, cada Relación incluye como Atributo su cuota correspondiente.

[](http://www.arnaizpartners.com/blogarnaizpartners/wp-content/uploads/2016/06/captura30.png)

- 
**División horizontal**: en este caso se pueden dar a su vez dos casos:

- 

**Bien descrita**: cuando se dispone de la descripción espacial de todos los objetos contenidos dentro de una construcción: viviendas, trasteros, locales, plazas de garaje y espacios comunes. De forma que se pueda dar de alta un Derecho y tantas Relaciones sean necesarias con los objetos contenidos y sus cuotas de participación.

- 

**Mal descrita**: cuando no se dispone de la descripción espacial de dicho contenido, en cuyo caso se trata como un proindiviso normal.

# Grupos de Entidad

Se establece un Grupo de Entidad para cada tipo de Derecho inventariable:

[](http://www.arnaizpartners.com/blogarnaizpartners/wp-content/uploads/2016/06/captura33.png)

# Atributos de Entidad

# 

# Grupos de Relación

# Las relaciones de los Derechos de Dominio sobre los elementos del Inventario de Objetos son del tipo Aplicación de un Derecho.

- **Origen aplica un Derecho a Destino (de Entidades)**: sirven para enlazar Entidades del Inventario de derechos con Entidades de cualquier otro Inventario.

- **Origen Afecta a Destino (de Instrumentos, Atributos, Entidades, Ámbitos o Relaciones)**: sirven para establecer relaciones de afección.

# Atributos de Relación

# 

# Inventario de Obligaciones

Contiene todas las Entidades jurídicas que determinan la existencia de una Obligación  sobre un Objeto. Para cada Obligación inventariada se establece una Relación de aplicación de Obligación con los Objetos a los que afecta.

Una misma Obligación puede afectar a simultáneamente tantos Objetos como sea necesario y a cualquier Grupo de Entidad. 

[](http://www.arnaizpartners.com/blogarnaizpartners/wp-content/uploads/2016/06/captura36.png)

# Grupos de Entidad

[](http://www.arnaizpartners.com/blogarnaizpartners/wp-content/uploads/2016/06/captura37.png)

# Atributos de Entidad

# Grupos de Relación

Las relaciones de los Derechos de Dominio sobre los elementos del Inventario de Objetos son del tipo Aplicación de un Derecho.

- **Origen aplica una Obligación a Destino (de Entidades)**: sirven para enlazar Entidades del Inventario de Obligaciones con Entidades de cualquier otro Inventario.

- **Origen Afecta a Destino (de Instrumentos, Atributos, Entidades, Ámbitos o Relaciones)**: sirven para establecer relaciones de afección.

## Atributos de Relación

[](http://www.arnaizpartners.com/blogarnaizpartners/wp-content/uploads/2016/06/captura38.png)Ignacio Arnaiz Eguren

Director de Innovación

Arnaiz Urbimática SL
