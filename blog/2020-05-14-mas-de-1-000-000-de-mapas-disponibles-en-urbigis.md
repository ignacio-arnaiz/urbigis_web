---
title: "Más de 1.000.000 de mapas disponibles en urbiGIS"
date: 2020-05-14
---

El catálogo de mapas de [urbiGIS](https://urbigis.com) ha superado un millón de mapas (1.045.000), poco a poco vamos explorando el universo de servicios geoespaciales de todo el mundo y añadiéndolos al catálogo. Esta es una tarea que sabemos es interminable pero consideramos que tiene interés para nuestros usuarios, porque [urbiGIS](https://urbigis.com) es una herramienta que tiene voluntad de ser global y de hacer sencillo localizar la información espacial disponible en su ciudad o su territorio, sin tener que rebuscar entre los diferentes visores de las organizaciones que publican mapas y con las avanzadas características que distinguen a [urbiGIS](https://urbigis.com) de una IDE tradicional. En este momento creo que es bueno hacer un repaso de lo obtenido, de lo que falta, de los problemas que hemos encontrado y de como enfocamos nosotros su mejora futura.

**1) Contenido actual del catálogo**

Se han explorado los mapas de 2.350 organizaciones en 227 países. Por supuesto esta relación está sujeta a cambios constantes porque aparecen nuevos servidores y en los servidores ya explorados se añaden nuevos mapas de forma frecuente. A esto hay que añadir los mapas servidos por [urbiGIS](https://urbigis.com) de sus territorios y conjuntos de datos que en este momento son del orden de 17.183 mapas. 

En la **tabla 1** del apartado 4 de tablas se indican los servidores identificados pero pendientes de explorar, los servidores ya explorados y que son revisados periódicamente, los mapas publicados por la organizaciones radicadas en cada territorio y los mapas publicados en cada territorio. Estos datos son diferentes porque una organización puede que solo publique mapas de su territorio, pero es habitual que una organización también publique mapas de otros territorios, por eso hay territorios que sin tener ninguna organización que publique mapas tienen mapas de organizaciones de otros territorios que sí los publican. Esta característica es habitual en las organizaciones de ámbito global dependientes de Naciones Unidas o de ONG’s, en las grandes agencias de datos de Estados Unidos y en las organizaciones de países que aún mantienen vínculos con sus ex-colonias. El ranking de territorios más publicadores está encabezado por Asia del Este, en la tabla siguiente se presentan el ranking de los territorios que publican más de 10.000 mapas:

|  |  |
| --- | --- |
| **Territorio** | **Mapas por organización del territorio** |
| Eastern Asia | 257.859 |
| United States of America | 138.979 |
| Czech Republic | 81.544 |
| Spain | 66.169 |
| France | 47.322 |
| Italy | 37.797 |
| Canada | 23.890 |
| Argentina | 22.893 |
| Germany | 22.058 |
| Finland | 20.398 |
| Denmark | 19.523 |
| New Zealand | 18.497 |
| Mexico | 18.025 |
| Australia | 17.803 |
| Generados por urbiGIS | 17.783 |
| Indonesia | 14.683 |
| Colombia | 13.938 |
| Brazil | 13.841 |
| India | 12.354 |

En la **tabla 2** del apartado 4 de tablas se indican los mapas agrupados por temas. En [urbiGIS](https://urbigis.com) hemos adoptado el enfoque de asignar cada mapa a un tema principal. Ello no quiere decir que haya mapas donde es complicado decidir cuál es su tema principal ya que pueden asignarse a dos o más temas, bueno es una decisión que adopta el explorador de mapas según su mejor criterio. El ranking de temas más frecuentes es el siguiente:

|  |  |
| --- | --- |
| **Tema** | **Mapas** |
| Clima | 188.740 |
| Alimentación | 117.151 |
| Planificación | 115.796 |
| Cartografía histórica | 82.130 |
| Cartografía  actual | 54.008 |
| Ortofoto | 37.816 |
| Unidades Administrativas | 37.057 |
| Transporte y Movilidad | 27.880 |
| Hábitats | 20.901 |
| Geología | 20.863 |
| Fauna | 20.819 |
| Aguas superficiales | 17.987 |
| Riesgos de inundación | 16.584 |
| Medio marino | 16.225 |
| Espacios protegidos | 11.914 |
| Sin subtema | 11.218 |
| Demografía | 10.967 |
| Agricultura | 10.903 |

En la tabla siguiente se agrupan los mapas según el formato de publicación y ganan los formatos de png por goleada.

|  |  |
| --- | --- |
| **Formato** | **Mapas** |
| application/json | 10.562 |
| image/gif | 11.926 |
| image/jpeg | 252 |
| image/jpgpng | 1 |
| image/png | 324.670 |
| image/png8 | 311.649 |
| image/tiff | 2 |
| JPG | 53 |
| JPGPNG | 2 |
| JSON | 7.078 |
| pdf | 11 |
| PNG | 19.021 |
| PNG24 | 222 |
| PNG32 | 35.0391 |
| PNG8 | 10.081 |

En la tabla siguiente se agrupan los mapas según el tipo de servicios y vemos que son los ImageWMS e ImageArcGISRest los que predominan, aunque se suele decir que ImageWMS es un tipo de servicio que será sustituido por WMTS o TMS la realidad es que a día de hoy es el tipo preponderante.

|  |  |
| --- | --- |
| **Tipo** | **Mapas** |
| BingMaps | 6 |
| FeatureServer | 7.073 |
| GeoJSON | 387 |
| Google | 5 |
| Here | 4 |
| ImageArcGISRest | 308.355 |
| ImageMapGuide | 1 |
| ImageWMS | 505.578 |
| ImageWMSNoTile | 43.322 |
| KML | 85 |
| OSM | 3 |
| OSMXML | 3 |
| Stamen | 5 |
| TileArcGISRest | 89.919 |
| TileWMS | 75.691 |
| Tomtom | 2 |
| VectorTileServer | 12 |
| WFS Vector | 10.190 |
| WMTS | 5.139 |
| WMTS\_Arnaiz | 64 |
| XYZ | 4 |
| XYZArcGIS | 70 |
| Yandex | 2 |
| Zoomify | 1 |

**2) Previsiones de crecimiento**

Tenemos identificados 2.620 servidores de mapas sin explorar frente a los 2.351 ya explorados, por lo tanto es previsible que el catálogo actual al menos se duplique una vez explorados todos los identificados, sin contar los servidores nuevos que se identifiquen hasta completar la exploración de esos 2.620. Si la publicación de mapas sigue a este ritmo no es descartable que haya más de tres millones de mapas en formatos abiertos disponibles en el mundo en dos o tres años.

La capacidad de [urbiGIS](https://urbigis.com) para proporcionar una plataforma gratuita y estable en la nube para alojamiento y publicación de mapas nos gustaría que fuese un factor determinante de ese crecimiento.

**3) Problemas detectados**

a) Existen miles de servidores que no publican sus mapas en formatos abiertos, en la mayoría de las ocasiones estoy seguro que no es por la voluntad de los propietarios de los datos y mapas sino por la selección de una plataforma técnica propietaria que no está diseñada para hacerlo o que lo impide de forma explícita. La actual filosofía de Internet en la que cuenta el posicionamiento como el objetivo prioritario, más allá del interés o utilidad de contenido, determina que esta forma de publicar mapas no cambie, sino que se incremente, al menos cuando el publicador es una organización privada que acude a plataformas técnicas de pago para publicar sus datos. Frente a esto hay muchas plataformas técnicas sin ánimo de lucro ni posicionamiento que facilitan la publicación de datos y mapas abiertos, nosotros aportamos [urbiGIS](https://urbigis.com) como una de ellas.

b) La configuración y el mantenimiento de los servidores de mapas no siempre cumple con unos estándares mínimos: no se aportan metadatos, los títulos de las layers son crípticos y no contienen una descripción, los servidores se caen y pasan días o semanas hasta que se reactivan, en muchos casos la velocidad de conexión es muy baja, es habitual que una misma layer esté publicada varias veces en el mismo servidor formando parte de distintas composiciones y con diferentes nombres…

c) Las técnicas de harvesting están bien desarrolladas pero solo son útiles si los servidores están bien estructurados y metadatados, mientras esto no sea así seguirá siendo necesario un sistema de exploración guiada como el que utilizamos en [urbiGIS](https://urbigis.com) .

d) Estructuras de layers mal planificadas, se alteran los nombres y títulos de las capas constantemente, cuando se actualizan capas no se guardan las capas históricas, no se utiliza el criterio de denominar «current» a la versión mas moderna para que de esa forma los usuarios no tengan que alterar sus proyectos cada vez que se actualiza una capa, no se distinguen bien las composiciones de mapas en las que cada layer es visible de forma individual de las composiciones en las que siempre es visible el conjunto aunque se invoque a una sola de sus capas. 

e) Visualización ligada a la escala: suele ser un recurso muy utilizado cuando lo que se muestra es una combinación de mapas y cada escala tiene una combinación diferente,  el resultado suele ser excelente, las capas de menor zoom muestran datos generalizados mientras las de mayor zoom muestran datos detallados o datos que a otras escalas quedarían empastados o ilegibles. Pero cuando no es una composición sino una capa suelta, la impresión de usuario es que el sistema no funciona y es poco intuitiva la necesidad de hacer zoom para ve la capa, salvo que sea un usuario experimentado. En algunos casos el servidor presenta una imagen avisando de la escala de visualización correcta pero no es habitual.

**4) Tablas completas**

**Tabla 1: Mapas por territorio y organización**

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| **Territorio** | **Servidores no explorados** | **Servidores ya explorados** | **Mapas por organización del país** | **Mapas referentes al país** |
| Afghanistán |  | 1 | 125 | 47.190 |
| Albania |  | 5 | 87 | 107 |
| Algeria |  |  |  | 39 |
| American Samoa (AS) |  |  |  | 16 |
| Americas |  |  |  | 3.500 |
| Andorra |  | 1 | 452 | 455 |
| Angola |  |  |  | 28 |
| Antigua and Barbuda |  |  |  | 6 |
| Argentina |  | 72 | 22.893 | 22.896 |
| Armenia |  |  |  | 40 |
| Australia |  | 40 | 17.803 | 18.526 |
| Austria |  | 26 | 6.216 | 5.665 |
| Azerbaijan |  |  |  | 25 |
| Bahamas |  |  |  | 4 |
| Bahrain |  |  |  | 10 |
| Bangladesh |  | 2 | 38 | 123 |
| Barbados |  | 1 | 14 | 12 |
| Belarus |  | 3 | 88 | 93 |
| Belgium |  | 33 | 7.752 | 6.777 |
| Belize |  |  |  | 15 |
| Benin |  | 1 | 32 | 54 |
| Bermuda |  |  |  | 3 |
| Bhutan |  | 1 | 40 | 117 |
| Bolivia |  | 19 | 4.670 | 4.973 |
| Bosnia and Herzegovina |  | 3 | 326 | 341 |
| Botswana |  |  |  | 38 |
| Brazil |  | 71 | 13.841 | 19.671 |
| Brunei |  |  |  | 14 |
| Bulgaria |  | 5 | 305 | 358 |
| Burkina Faso |  | 2 | 213 | 135 |
| Burundi |  | 1 | 30 | 149 |
| Cambodia |  | 1 | 21 | 195 |
| Cameroon |  |  |  | 22 |
| Canada |  | 79 | 23.890 | 25.339 |
| Cape Verde |  | 3 | 206 | 154 |
| Central African Republic |  |  |  | 12 |
| Chad |  |  |  | 22 |
| Chile |  | 25 | 2.152 | 2.452 |
| China |  | 19 | 3.480 | 1.400 |
| Colombia |  | 60 | 13.938 | 15.268 |
| Commonwealth of the Northern Mariana Islands (MP) |  |  |  | 12 |
| Comoros |  |  |  | 78 |
| Cook Islands |  |  |  | 1 |
| Costa Rica |  | 17 | 890 | 969 |
| Côte d’Ivoire |  | 1 | 1.444 | 1.452 |
| Croatia |  | 7 | 1.186 | 1.336 |
| Cuba |  | 1 | 23 | 53 |
| Cyprus |  | 1 | 174 | 576 |
| Czech Republic |  | 39 | 81.544 | 81.531 |
| Democratic People’s Republic of Korea |  | 1 | 159 | 3 |
| Democratic Republic of the Congo |  |  |  | 51 |
| Denmark |  | 40 | 19.523 | 14.247 |
| Djibouti |  |  |  | 44 |
| Dominica |  |  |  | 28 |
| Dominican Republic |  | 5 | 165 | 370 |
| Eastern Asia |  | 3 | 257.859 |  |
| Ecuador |  | 27 | 3.838 | 4.072 |
| Egypt |  |  |  | 1.588 |
| El Salvador |  | 5 | 5.343 | 649 |
| Equatorial Guinea |  |  |  | 2 |
| Eritrea |  |  |  | 42 |
| Estonia |  | 11 | 1.980 | 1.985 |
| Eswatini |  |  |  | 38 |
| Ethiopia |  |  |  | 198 |
| Europe |  |  |  | 1.440 |
| Federated States of Micronesia |  |  |  | 3 |
| Fiji |  | 2 | 392 | 396 |
| Finland |  | 81 | 20.398 | 18.270 |
| France |  | 100 | 47.322 | 42.212 |
| French Polynesia |  |  |  | 11 |
| French Guyane |  | 2 | 1.204 |  |
| Gabon |  | 14 | 2.902 | 204 |
| Gambia |  | 1 | 83 | 97 |
| Georgia |  | 1 | 65 | 93 |
| Germany |  | 121 | 22.058 | 22.509 |
| Ghana |  | 1 | 28 | 209 |
| Gibraltar |  |  |  | 138 |
| Greece |  | 21 | 8.877 | 8.994 |
| Grenada |  |  |  | 3 |
| Guam |  |  |  | 37 |
| Guatemala |  | 5 | 285 | 349 |
| Guernsey |  |  |  | 43 |
| Guinea |  |  |  | 7 |
| Guinea Bissau |  |  |  | 34 |
| Guyana |  |  |  | 5 |
| Haiti |  |  |  | 89 |
| Honduras |  | 4 | 164 | 238 |
| Hong Kong |  |  |  | 1.622 |
| Hungary |  | 10 | 5.563 | 5.525 |
| Iceland |  | 12 | 2.285 | 2.412 |
| India |  | 19 | 12.354 | 12.438 |
| Indonesia |  | 47 | 14.683 | 14.868 |
| Iran |  | 2 | 1.232 | 1.280 |
| Iraq |  |  |  | 11 |
| Ireland |  | 16 | 4.509 | 3.884 |
| Island |  | 1 | 305 |  |
| Israel |  | 8 | 2.506 | 2.523 |
| Italy |  | 71 | 37.797 | 36.113 |
| Jamaica |  |  |  | 23 |
| Japan |  | 3 | 647 | 673 |
| Jersey |  |  |  | 5 |
| Jordan |  | 2 | 519 | 550 |
| Kazakhstan |  | 6 | 1.360 | 1.340 |
| Kenya |  | 8 | 2.758 | 845 |
| Kiribati |  |  |  | 1 |
| Kosovo |  |  |  | 14 |
| Kuwait |  | 2 | 510 | 518 |
| Kyrgyzstan |  | 1 | 159 | 187 |
| Lao People’s Democratic Republic |  |  |  | 17 |
| Latin America and the Caribbean |  |  |  | 272 |
| Latvia |  | 5 | 250 | 265 |
| Lebanon |  |  |  | 38 |
| Lesotho |  |  |  | 45 |
| Liberia |  |  |  | 21 |
| Libya |  |  |  | 3 |
| Liechtenstein |  | 1 | 69 | 76 |
| Lithuania |  | 16 | 2.838 | 2.851 |
| Luxembourg |  | 4 | 809 | 798 |
| Macao |  |  |  | 577 |
| Madagascar |  | 1 | 90 | 117 |
| Malawi |  |  |  | 98 |
| Malaysia |  | 8 | 3.770 | 3.825 |
| Maldives |  |  |  | 2 |
| Mali |  |  |  | 145 |
| Malta |  | 2 | 512 | 625 |
| Marshall Islands |  |  |  | 8 |
| Mauritania |  |  |  | 20 |
| Mauritius |  |  |  | 14 |
| Melanesia |  |  |  | 13 |
| Mexico |  | 29 | 18.025 | 25.932 |
| Moldova |  | 4 | 894 | 899 |
| Mongolia |  | 1 | 34 | 101 |
| Montenegro |  |  |  | 4 |
| Morocco |  |  |  | 66 |
| Mozambique |  | 1 | 116 | 314 |
| Myanmar |  | 1 | 61 | 101 |
| Namibia |  | 1 | 71 | 45 |
| Nauru |  |  |  | 2 |
| Nepal |  | 5 | 4.417 | 1.235 |
| Netherlands | 123 | 10 | 9.443 | 8.422 |
| New Caledonia |  | 2 | 617 | 1.478 |
| New Zealand |  | 38 | 18.497 | 18.346 |
| Nicaragua |  | 1 | 510 | 551 |
| Niger |  |  |  | 32 |
| Nigeria |  | 3 | 293 | 333 |
| North Macedonia |  | 4 | 2.360 | 2.379 |
| Norway |  | 35 | 9.773 | 8.686 |
| Oceania |  |  |  | 5 |
| Oman |  | 2 | 339 | 344 |
| Pakistan | 3 | 4 | 785 | 36.693 |
| Palau |  |  |  | 11 |
| Palestina | 7 |  | 17 |  |
| Panama | 2 | 3 | 123 | 216 |
| Papua New Guinea |  | 0 | 0 | 19 |
| Paraguay |  | 3 | 177 | 183 |
| Peru |  | 24 | 3.541 | 3.884 |
| Philippines |  | 4 | 3.410 | 3.526 |
| Poland | 119 | 4 | 4.517 | 4.625 |
| Portugal |  | 31 | 8.728 | 9.146 |
| Puerto Rico (PR) |  | 2 | 558 |  |
| Qatar |  | 4 | 440 | 577 |
| Republic of Congo |  | 3 | 137 | 44 |
| Republic of Korea |  | 10 | 6.191 | 6.220 |
| Romania |  | 20 | 3.613 | 3.769 |
| Russian Federation | 33 | 1 | 126 | 114 |
| Rwanda |  | 1 | 67 | 293 |
| San Marino | 1 |  |  | 10 |
| Saint Lucia | 1 |  |  | 3 |
| Saint Kitts and Nevis |  | 3 | 1.044 | 4 |
| Saint Pierre and Miquelon |  |  |  | 3 |
| Saint Vincent and the Grenadines |  |  |  | 18 |
| Samoa |  |  |  | 16 |
| Sao Tome and Principe |  |  |  | 18 |
| Saudi Arabia |  | 3 | 206 | 2.731 |
| Senegal |  |  |  | 114 |
| Serbia | 6 |  |  | 19 |
| Seychelles |  |  |  | 27 |
| Sierra Leone |  |  |  | 40 |
| Singapore | 12 |  |  | 9 |
| Slovakia |  | 13 | 4.231 | 4.141 |
| Slovenia |  | 8 | 3.009 | 2.761 |
| Solomon Islands |  |  |  | 5 |
| Somalia |  | 1 | 31 | 100 |
| South Africa | 17 |  |  | 89 |
| South Sudan |  |  |  | 123 |
| Spain |  | 464 | 66.169 | 73.283 |
| Sri Lanka | 0 | 1 | 54 | 87 |
| Sudan |  |  |  | 127 |
| Suriname |  |  |  | 3 |
| Svalbard and Jan Mayen |  |  |  | 2 |
| Sweden | 64 | 4 | 594 | 582 |
| Switzerland | 77 | 7 | 1.393 | 1.309 |
| Syrian Arab Republic |  |  |  | 29 |
| Taiwan | 28 |  |  | 5 |
| Tanzania | 1 |  |  | 236 |
| Trinidad y Tobago | 2 |  |  |  |
| Tajikistan |  |  |  | 27.538 |
| Thailand | 35 | 1 | 44 | 83 |
| Timor-Leste |  | 14 | 1.371 | 32 |
| Togo |  |  |  | 4 |
| Tokelau |  |  |  | 3 |
| Tonga |  |  |  | 2 |
| Trinidad and Tobago |  |  |  | 9 |
| Tunisia |  | 3 | 170 | 185 |
| Turkey | 10 | 11 | 746 | 819 |
| Turkmenistan |  |  |  | 8 |
| Tuvalu |  |  |  | 2 |
| Uganda | 5 |  |  | 168 |
| Ukraine | 6 |  |  | 112 |
| Unión de Naciones Suramericanas |  | 2 | 39 |  |
| Unión Europea |  | 12 | 2.751 | 908 |
| United Arab Emirates |  | 9 | 2.655 | 707 |
| United Kingdom | 64 | 16 | 3.698 | 2.799 |
| United States of America | 2.000 | 259 | 138.979 | 149.736 |
| Uruguay |  | 17 | 4.330 | 4.379 |
| Uzbekistan |  |  |  | 10 |
| Vanuatu |  | 2 | 37 | 18 |
| Venezuela | 1 | 4 | 466 | 493 |
| Viet nam | 3 |  |  | 82 |
| Wallis and Futuna Islands |  |  |  | 3 |
| World |  | 16 | 6.176 | 157.550 |
| Yemen |  |  |  | 34 |
| Zambia |  |  |  | 58 |
| Zimbabwe |  |  |  | 56 |
| Generados por urbiGIS |  |  | 17.783 |  |
| Total | 2.620 | 2.351 | 1.045.899 | 1.045.899 |

**Tabla 2 Mapas por temas**

|  |  |  |
| --- | --- | --- |
| **Tema** | **SubTema** | **Mapas** |
| Actividad | Acción social | 821 |
| Alimentación | 117.151 |
| Asentamientos | 1.204 |
| Caza | 359 |
| Construcción | 85 |
| Demanda eléctrica | 1 |
| Demanda hídrica | 141 |
| Demografía | 10.967 |
| Economía | 4.588 |
| Empleo | 20 |
| Energía | 6.861 |
| Fondos de ayudas al desarrollo | 60 |
| Pesca | 1.983 |
| Propiedad | 9.286 |
| Turismo | 3.166 |
| Sin subtema | 73 |
| Calidad ambiental | Áreas con déficits o conflictos | 96 |
| Calidad de las aguas | 3.118 |
| Calidad del aire | 5.586 |
| Calidad del suelo | 787 |
| Calidad social | 4 |
| Calidad urbana | 38 |
| Contaminación lumínica | 151 |
| Contaminación radiológica | 109 |
| Especies invasivas | 411 |
| Incendios | 1.336 |
| Monitorización | 2.711 |
| Riesgos de incendio | 599 |
| Riesgos de inundación | 16.584 |
| Riesgos funcionales | 67 |
| Riesgos geológicos | 4.735 |
| Riesgos naturales | 5.342 |
| Riesgos químicos | 18 |
| Riesgos sanitarios | 25 |
| Riesgos Tecnológicos | 109 |
| Ruido | 1.892 |
| Terrenos abandonados | 3 |
| Vulnerabilidad | 242 |
| Sin subtema | 6.551 |
| Cartografía | Cartografía  actual | 54.008 |
| Cartografía histórica | 82.130 |
| Direcciones | 1.258 |
| Ortofoto | 37.816 |
| Ortofoto última | 27 |
| Toponimia | 2.352 |
| Sin subtema | 10.776 |
| Datos de la Organización | Actividades de la Organización | 774 |
| Activos de la Organización | 51 |
| Proyectos de la Organización | 1.072 |
| Sedes de la Organización | 151 |
| Territorios de la Organización | 70 |
| Sin subtema | 71.993 |
| Gobierno | Calidad de Gobierno | 4.541 |
| Mantenimiento | 760 |
| Proyectos y Actuaciones | 195 |
| Unidades Administrativas | 37.057 |
| Unidades Censales | 2.074 |
| Unidades Económicas | 918 |
| Unidades Estadísticas | 1.168 |
| Sin subtema | 11.218 |
| Infraestructuras | Aguas pluviales | 1.262 |
| Aguas residuales | 3.766 |
| Alumbrado | 547 |
| Cerramientos | 2 |
| Edificación | 2.402 |
| Electricidad | 3.075 |
| Geotérmicos | 2.950 |
| Hidraúlicos | 1.007 |
| Hidrocarburos | 1.208 |
| Manzanas | 1.160 |
| Mobiliario | 560 |
| Residuos | 2.596 |
| Riego | 330 |
| Suministro de agua | 7.057 |
| Telecomunicaciones | 2.506 |
| Térmicos | 172 |
| Transporte y Movilidad | 27.880 |
| Sin subtema | 2.852 |
| Naturaleza | Aguas subterráneas | 3.203 |
| Aguas superficiales | 17.987 |
| Clima | 188.740 |
| Fauna | 20.819 |
| Geología | 20.863 |
| Hábitats | 20.901 |
| Medio marino | 16.225 |
| Paisaje | 1.748 |
| Relieve submarino | 2.775 |
| Relieve terrestre | 7.255 |
| Suelos | 7.961 |
| Vegetación | 4.999 |
| Sin subtema | 1.495 |
| Ocupación del suelo | Acuicultura | 509 |
| Agricultura | 10.903 |
| Aparcamiento | 497 |
| Áreas Naturales | 33 |
| Áreas Rurales | 63 |
| Áreas Urbanas | 1.142 |
| Comercio | 1.441 |
| Cultura | 1.868 |
| Deporte | 1.455 |
| Educación | 4.759 |
| Equipamientos | 2.007 |
| Espacios de baño | 729 |
| Industria | 1.038 |
| Investigación | 552 |
| Minería, gas y petróleo | 4.747 |
| Ocio y recreo | 587 |
| Oficinas | 145 |
| Parques | 1.710 |
| Salud | 5.184 |
| Seguridad | 5.644 |
| Servicios públicos | 3.352 |
| Silvicultura | 5.166 |
| Viario | 4.299 |
| Vivienda | 1.360 |
| Sin subtema | 9.887 |
| Planificación | Espacios protegidos | 11.914 |
| Patrimonio Cultural | 4.474 |
| Patrimonio Natural | 967 |
| Planificación actual | 43.803 |
| Planificación histórica | 3.773 |
| Planificación urbana en tramitación | 93 |
| Servidumbre | 19 |
| Sin subtema | 7.809 |

Ignacio Arnaiz Eguren

Director