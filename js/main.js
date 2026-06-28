const BLOG_LIST = [
  {slug:'propuesta-para-un-sistema-de-coordinacion-de-la-informacion-geografica',title:'Propuesta para un Sistema de Coordinación de la Información Geográfica',date:'13 Jan 2026',year:'2026',img:'',file:'blog/2026-01-13-propuesta-para-un-sistema-de-coordinacion-de-la-informacion-geografica.md'},
  {slug:'el-geoportal-municipal-en-urbigis-el-caso-de-la-comunidad-de-madrid',title:'El geoportal municipal en urbiGIS: el caso de la Comunidad de Madrid',date:'16 Jan 2025',year:'2025',img:'https://info.urbigis.com/wp-content/uploads/2025/01/Captura-de-pantalla-2025-01-15-135137.png',file:'blog/2025-01-16-el-geoportal-municipal-en-urbigis-el-caso-de-la-comunidad-de-madrid.md'},
  {slug:'urbigis-ante-catastrofes-ambientales',title:'urbiGIS ante catástrofes ambientales',date:'14 Nov 2024',year:'2024',img:'',file:'blog/2024-11-14-urbigis-ante-catastrofes-ambientales.md'},
  {slug:'reutilizar-rapidamente-informacion-urbanistica-con-urbigis-https-urbigis-com',title:'Reutilizar rápidamente información urbanística con #urbiGIS (https://urbigis.com)',date:'09 Jan 2024',year:'2024',img:'',file:'blog/2024-01-09-reutilizar-rapidamente-informacion-urbanistica-con-urbigis-https-urbigis-com.md'},
  {slug:'la-posicion-de-urbigis-en-el-mercado-gis',title:'La posición de urbiGIS en el mercado GIS',date:'06 Jul 2023',year:'2023',img:'',file:'blog/2023-07-06-la-posicion-de-urbigis-en-el-mercado-gis.md'},
  {slug:'la-gestion-documental-en-urbigis',title:'La Gestión Documental en urbiGIS',date:'22 Mar 2023',year:'2023',img:'https://info.urbigis.com/wp-content/uploads/2023/03/Captura-de-pantalla-2023-03-22-182807.png',file:'blog/2023-03-22-la-gestion-documental-en-urbigis.md'},
  {slug:'los-gemelos-digitales-un-objetivo-complejo',title:'Los gemelos digitales, un objetivo complejo',date:'17 Feb 2023',year:'2023',img:'',file:'blog/2023-02-17-los-gemelos-digitales-un-objetivo-complejo.md'},
  {slug:'como-crear-un-indicador-ods-con-urbigis',title:'Cómo crear un Indicador ODS con urbiGIS',date:'12 Apr 2022',year:'2022',img:'https://info.urbigis.com/wp-content/uploads/2022/04/Captura-de-pantalla-2022-04-12-095740.png',file:'blog/2022-04-12-como-crear-un-indicador-ods-con-urbigis.md'},
  {slug:'desde-el-gis-al-ngs',title:'Desde el GIS al NGS=Network gObjects System',date:'09 Apr 2022',year:'2022',img:'',file:'blog/2022-04-09-desde-el-gis-al-ngs.md'},
  {slug:'el-sig-municipal-situacion-y-analisis',title:'EL SIG Municipal, situación y análisis',date:'18 Feb 2022',year:'2022',img:'',file:'blog/2022-02-18-el-sig-municipal-situacion-y-analisis.md'},
  {slug:'open-sdg-ods-map',title:'Open SDG/ODS Map',date:'12 Jan 2022',year:'2022',img:'',file:'blog/2022-01-12-open-sdg-ods-map.md'},
  {slug:'mapa-urbanistico-de-espana',title:'Mapa urbanístico de España',date:'14 Dec 2021',year:'2021',img:'',file:'blog/2021-12-14-mapa-urbanistico-de-espana.md'},
  {slug:'cuadros-de-mando-en-urbigis',title:'Cuadros de Mando en urbiGIS',date:'26 Jul 2021',year:'2021',img:'https://info.urbigis.com/wp-content/uploads/2021/07/Captura18.png',file:'blog/2021-07-26-cuadros-de-mando-en-urbigis.md'},
  {slug:'compruebe-si-los-mapas-de-su-organizacion-estan-en-el-catalogo-de-urbigis',title:'Compruebe si los mapas de su Organización están en el Catálogo de urbiGIS',date:'15 Jul 2021',year:'2021',img:'https://info.urbigis.com/wp-content/uploads/2021/07/Captura17.png',file:'blog/2021-07-15-compruebe-si-los-mapas-de-su-organizacion-estan-en-el-catalogo-de-urbigis.md'},
  {slug:'algunos-comentarios-sobre-los-servicios-geoespaciales-y-las-ide-sdi',title:'Algunos comentarios sobre los Servicios geoespaciales y las IDE/SDI',date:'01 Jul 2021',year:'2021',img:'https://info.urbigis.com/wp-content/uploads/2021/07/Captura13.png',file:'blog/2021-07-01-algunos-comentarios-sobre-los-servicios-geoespaciales-y-las-ide-sdi.md'},
  {slug:'ods-municipal-territorializando-los-ods',title:'ODS Municipal: territorializando los ODS',date:'02 Jun 2021',year:'2021',img:'',file:'blog/2021-06-02-ods-municipal-territorializando-los-ods.md'},
  {slug:'novedades-2021-en-urbigis',title:'Novedades 2021 en urbiGIS',date:'08 May 2021',year:'2021',img:'http://info.urbigis.com/wp-content/uploads/2021/05/Captura3.png',file:'blog/2021-05-08-novedades-2021-en-urbigis.md'},
  {slug:'planificacion-digital-la-solucion-de-urbigis',title:'Planificación digital, la solución de urbiGIS',date:'24 Feb 2021',year:'2021',img:'http://info.urbigis.com/wp-content/uploads/2021/02/gonzalez-due1.png',file:'blog/2021-02-24-planificacion-digital-la-solucion-de-urbigis.md'},
  {slug:'geoportales-un-modo-diferente-de-compartir-informacion',title:'Geoportales, un modo diferente de compartir información',date:'06 Oct 2020',year:'2020',img:'http://info.urbigis.com/wp-content/uploads/2020/10/arquitectura-ide-sevilla.jpg',file:'blog/2020-10-06-geoportales-un-modo-diferente-de-compartir-informacion.md'},
  {slug:'spatial-computing-y-los-nuevos-dispositivos-de-realidad-aumentada-y-realidad-mixta',title:'Spatial computing y los nuevos dispositivos de realidad aumentada y realidad mixta, diseñando con hologramas los nuevos interfaces para ciudadanos',date:'07 Sep 2020',year:'2020',img:'http://info.urbigis.com/wp-content/uploads/2020/09/virtual1.jpg',file:'blog/2020-09-07-spatial-computing-y-los-nuevos-dispositivos-de-realidad-aumentada-y-realidad-mixta.md'},
  {slug:'geotransacciones-en-urbigis',title:'Geotransacciones en urbiGIS',date:'10 Jul 2020',year:'2020',img:'http://info.urbigis.com/wp-content/uploads/2020/07/geo1.png',file:'blog/2020-07-10-geotransacciones-en-urbigis.md'},
  {slug:'urbigis_directiva_2019-1024',title:'urbiGIS y la Directiva (UE) 2019/1024 del Parlamento europeo de junio de 2019',date:'09 Jul 2020',year:'2020',img:'',file:'blog/2020-07-09-urbigis_directiva_2019-1024.md'},
  {slug:'mas-de-1-000-000-de-mapas-disponibles-en-urbigis',title:'Más de 1.000.000 de mapas disponibles en urbiGIS',date:'14 May 2020',year:'2020',img:'',file:'blog/2020-05-14-mas-de-1-000-000-de-mapas-disponibles-en-urbigis.md'},
  {slug:'covid19-en-la-era-de-los-sistemas-de-informacion-geografica',title:'Covid19 en la era de los sistemas de información geográfica',date:'12 May 2020',year:'2020',img:'http://info.urbigis.com/wp-content/uploads/2020/05/covid2-1024x661.png',file:'blog/2020-05-12-covid19-en-la-era-de-los-sistemas-de-informacion-geografica.md'},
  {slug:'servicios-de-localizacion-presente-y-futuro',title:'Servicios de Localización, presente y futuro',date:'26 Feb 2020',year:'2020',img:'http://info.urbigis.com/wp-content/uploads/2020/02/loc4.png',file:'blog/2020-02-26-servicios-de-localizacion-presente-y-futuro.md'},
  {slug:'urbithings-cambia-de-nombre-a-urbigis',title:'urbiThings cambia de nombre a urbiGIS',date:'31 Jan 2020',year:'2020',img:'http://info.urbigis.com/wp-content/uploads/2020/01/urbigis2-300x87.png',file:'blog/2020-01-31-urbithings-cambia-de-nombre-a-urbigis.md'},
  {slug:'nuevos-geoportales-urbithings-de-los-cantones-de-ecuador',title:'Nuevos geoportales urbiThings de los cantones de Ecuador',date:'27 Jan 2020',year:'2020',img:'http://info.urbigis.com/wp-content/uploads/2020/01/webs1.png',file:'blog/2020-01-27-nuevos-geoportales-urbithings-de-los-cantones-de-ecuador.md'},
  {slug:'publicando-un-visor-turistico-en-urbithings',title:'Publicando un visor turístico en urbiThings',date:'18 Dec 2019',year:'2019',img:'http://info.urbigis.com/wp-content/uploads/2019/12/chin1-min.png',file:'blog/2019-12-18-publicando-un-visor-turistico-en-urbithings.md'},
  {slug:'crear-rapidamente-localizadores-en-urbithings',title:'Crear rápidamente localizadores en urbiThings',date:'14 Dec 2019',year:'2019',img:'http://info.urbigis.com/wp-content/uploads/2019/12/boa4.png',file:'blog/2019-12-14-crear-rapidamente-localizadores-en-urbithings.md'},
  {slug:'nuevos-indicadores-ods-locales-como-resultado-de-la-gestion-territorial',title:'Nuevos Indicadores ODS locales como resultado de la gestión territorial',date:'29 Nov 2019',year:'2019',img:'http://info.urbigis.com/wp-content/uploads/2019/11/odsCUADRO2.png',file:'blog/2019-11-29-nuevos-indicadores-ods-locales-como-resultado-de-la-gestion-territorial.md'},
  {slug:'una-propuesta-de-indicadores-ods-locales-el-caso-de-tulancingo-de-bravo-mexico',title:'Una propuesta de Indicadores ODS locales: el caso de Tulancingo de Bravo (México)',date:'04 Nov 2019',year:'2019',img:'http://info.urbigis.com/wp-content/uploads/2019/11/tulancingo6-300x154.png',file:'blog/2019-11-04-una-propuesta-de-indicadores-ods-locales-el-caso-de-tulancingo-de-bravo-mexico.md'},
  {slug:'los-objetivos-de-desarrollo-sostenible-necesitan-mapas-socialgeomap',title:'Los Objetivos de Desarrollo Sostenible necesitan mapas – ODS -Maps #socialgeomap',date:'18 Aug 2019',year:'2019',img:'',file:'blog/2019-08-18-los-objetivos-de-desarrollo-sostenible-necesitan-mapas-socialgeomap.md'},
  {slug:'publicar-planeamiento-vectorial-cad-en-urbithings',title:'Publicar planeamiento vectorial CAD en urbiThings',date:'15 Jun 2019',year:'2019',img:'https://info.urbigis.com/wp-content/uploads/2019/06/Abegondo1.png',file:'blog/2019-06-15-publicar-planeamiento-vectorial-cad-en-urbithings.md'},
  {slug:'la-informacion-espacial-tiene-precio',title:'¿La información espacial tiene precio?',date:'21 May 2019',year:'2019',img:'https://info.urbigis.com/wp-content/uploads/2017/05/collaborative_project_management_as_a_solution2.png',file:'blog/2019-05-21-la-informacion-espacial-tiene-precio.md'},
  {slug:'urbithings-en-brasil-gracias-a-un-acuerdo-con-la-cnm',title:'urbiThings en Brasil gracias a un acuerdo con la CNM',date:'07 Apr 2019',year:'2019',img:'',file:'blog/2019-04-07-urbithings-en-brasil-gracias-a-un-acuerdo-con-la-cnm.md'},
  {slug:'8217-local-ides-already-available-in-urbithings-almost-all-the-municipalities-and-provinces-of-spain',title:'8,217 Local IDEs already available in urbiThings. Almost all the municipalities and provinces of Spain',date:'31 Mar 2019',year:'2019',img:'',file:'blog/2019-03-31-8217-local-ides-already-available-in-urbithings-almost-all-the-municipalities-and-provinces-of-spain.md'},
  {slug:'8-217-ides-locales-disponibles-ya-en-urbithings-casi-todos-los-municipios-y-provincias-de-espana',title:'8.217 IDE’s Locales disponibles ya en urbiThings. Casi todos los municipios y provincias de España',date:'31 Mar 2019',year:'2019',img:'',file:'blog/2019-03-31-8-217-ides-locales-disponibles-ya-en-urbithings-casi-todos-los-municipios-y-provincias-de-espana.md'},
  {slug:'embedding-a-urbithings-window-in-your-web',title:'Embedding a urbiThings window in your web',date:'21 Mar 2019',year:'2019',img:'https://info.urbigis.com/wp-content/uploads/2019/02/registro.png',file:'blog/2019-03-21-embedding-a-urbithings-window-in-your-web.md'},
  {slug:'incrustando-una-ventana-de-urbithings-en-tu-web',title:'Incrustando una ventana de urbiThings en tu web',date:'21 Mar 2019',year:'2019',img:'https://info.urbigis.com/wp-content/uploads/2019/02/registro.png',file:'blog/2019-03-21-incrustando-una-ventana-de-urbithings-en-tu-web.md'},
  {slug:'en-este-ano-2019-hace-30-anos-que-nacio-badur',title:'En este año 2019 hace 30 años que nació BADUR',date:'01 Mar 2019',year:'2019',img:'https://info.urbigis.com/wp-content/uploads/2019/03/Estado-del-Planeamiento_3.jpg',file:'blog/2019-03-01-en-este-ano-2019-hace-30-anos-que-nacio-badur.md'},
  {slug:'servicios-de-mapas-para-entender-nuestros-territorios',title:'Servicios de Mapas para entender nuestros Territorios',date:'28 Feb 2019',year:'2019',img:'',file:'blog/2019-02-28-servicios-de-mapas-para-entender-nuestros-territorios.md'},
  {slug:'crear-una-ide-en-urbithings',title:'Crear una IDE en urbiThings',date:'22 Feb 2019',year:'2019',img:'https://info.urbigis.com/wp-content/uploads/2019/02/registro.png',file:'blog/2019-02-22-crear-una-ide-en-urbithings.md'},
  {slug:'mapas-de-datos-abiertos-en-urbithings',title:'Mapas de Datos Abiertos en urbiThings',date:'18 Feb 2019',year:'2019',img:'https://info.urbigis.com/wp-content/uploads/2019/02/ver-mapa.png',file:'blog/2019-02-18-mapas-de-datos-abiertos-en-urbithings.md'},
  {slug:'usando-urbithings-para-crear-un-mapa-del-paro-en-espana',title:'Mapa del paro en España',date:'14 Feb 2019',year:'2019',img:'https://info.urbigis.com/wp-content/uploads/2019/02/Fichero.png',file:'blog/2019-02-14-usando-urbithings-para-crear-un-mapa-del-paro-en-espana.md'},
  {slug:'novedades-2019-en-urbithings',title:'Novedades 2019 en urbiThings',date:'01 Feb 2019',year:'2019',img:'',file:'blog/2019-02-01-novedades-2019-en-urbithings.md'},
  {slug:'el-mito-del-crecimiento-sostenible',title:'El mito del crecimiento sostenible',date:'30 Oct 2018',year:'2018',img:'https://info.urbigis.com/wp-content/uploads/2018/10/103.png',file:'blog/2018-10-30-el-mito-del-crecimiento-sostenible.md'},
  {slug:'la-guerra-de-la-smart-city',title:'La guerra de la Smart City',date:'29 Oct 2018',year:'2018',img:'',file:'blog/2018-10-29-la-guerra-de-la-smart-city.md'},
  {slug:'desarrollando-la-smart-city',title:'Desarrollando la Smart City',date:'29 Oct 2018',year:'2018',img:'https://info.urbigis.com/wp-content/uploads/2018/10/99-2.png',file:'blog/2018-10-29-desarrollando-la-smart-city.md'},
  {slug:'avances-en-urbithings',title:'Avances en urbiThings',date:'06 Sep 2018',year:'2018',img:'',file:'blog/2018-09-06-avances-en-urbithings.md'},
  {slug:'urbithings-y-la-gestion-de-expedientes-en-las-instituciones-publicas',title:'urbiThings y la Gestión de Expedientes en las Instituciones públicas',date:'24 May 2018',year:'2018',img:'',file:'blog/2018-05-24-urbithings-y-la-gestion-de-expedientes-en-las-instituciones-publicas.md'},
  {slug:'modos-colaboracion-transaccional-vs-no-transaccional',title:'Modos de Colaboración: Transaccional vs No Transaccional',date:'23 Apr 2018',year:'2018',img:'',file:'blog/2018-04-23-modos-colaboracion-transaccional-vs-no-transaccional.md'},
  {slug:'colaboracion_abierta_reglada_y_m2m',title:'Colaboración Abierta, Reglada y M2M',date:'22 Apr 2018',year:'2018',img:'',file:'blog/2018-04-22-colaboracion_abierta_reglada_y_m2m.md'},
  {slug:'datos-espaciales-abiertos-nuevas-funciones-urbithings',title:'Datos espaciales abiertos – nuevas funciones de urbiThings',date:'05 Mar 2018',year:'2018',img:'https://info.urbigis.com/wp-content/uploads/2018/03/Captura.png',file:'blog/2018-03-05-datos-espaciales-abiertos-nuevas-funciones-urbithings.md'},
  {slug:'servicios-mapas-filon-datos-inexplorado',title:'Servicios de Mapas, un filón de datos inexplorado',date:'16 Jan 2018',year:'2018',img:'https://info.urbigis.com/wp-content/uploads/2018/01/Captura.png',file:'blog/2018-01-16-servicios-mapas-filon-datos-inexplorado.md'},
  {slug:'mapas-abiertos-supuesto-tambien-accesibles-desde-urbithings-com',title:'Mapas abiertos por supuesto, pero también accesibles desde urbiThings.com',date:'15 Dec 2017',year:'2017',img:'',file:'blog/2017-12-15-mapas-abiertos-supuesto-tambien-accesibles-desde-urbithings-com.md'},
  {slug:'el-reto-de-la-regulacion-territorial-objetivos-y-limitaciones',title:'El reto de la regulación territorial, objetivos y limitaciones',date:'01 Aug 2017',year:'2017',img:'',file:'blog/2017-08-01-el-reto-de-la-regulacion-territorial-objetivos-y-limitaciones.md'},
  {slug:'utags-una-ontologia-semantica-tecnologia-urbana',title:'uTAGS Una Ontología semántica sobre tecnología urbana',date:'28 Jul 2016',year:'2016',img:'http://www.arnaizpartners.com/blogarnaizpartners/wp-content/uploads/2016/07/Ontologia.png',file:'blog/2016-07-28-utags-una-ontologia-semantica-tecnologia-urbana.md'},
  {slug:'ulinks-un-red-de-innovacion-urbana',title:'uLINKS Una red social de tecnología urbana',date:'18 Jul 2016',year:'2016',img:'https://info.urbigis.com/wp-content/uploads/2016/07/97.jpg',file:'blog/2016-07-18-ulinks-un-red-de-innovacion-urbana.md'},
  {slug:'el-barrio-en-el-imaginario-colectivo',title:'El Barrio en el imaginario colectivo',date:'07 Jul 2016',year:'2016',img:'https://info.urbigis.com/wp-content/uploads/2016/07/15.jpg',file:'blog/2016-07-07-el-barrio-en-el-imaginario-colectivo.md'},
  {slug:'los-ayuntamientos-y-el-territorio-virtual-en-la-era-internet',title:'Los Ayuntamientos y el territorio virtual en la era Internet',date:'02 Jul 2016',year:'2016',img:'https://info.urbigis.com/wp-content/uploads/2016/07/23.png',file:'blog/2016-07-02-los-ayuntamientos-y-el-territorio-virtual-en-la-era-internet.md'},
  {slug:'sistematizando-los-derechos-y-obligaciones-urbanas-globales',title:'Los Derechos y Obligaciones Urbanas Globales (Sistematizando con urbiTHINGS)',date:'21 Jun 2016',year:'2016',img:'https://info.urbigis.com/wp-content/uploads/2016/06/25.png',file:'blog/2016-06-21-sistematizando-los-derechos-y-obligaciones-urbanas-globales.md'},
  {slug:'sistematizando-la-ejecucion-urbana-global',title:'La Ejecución Urbana Global (Sistematizando con urbiTHINGS)',date:'20 Jun 2016',year:'2016',img:'https://info.urbigis.com/wp-content/uploads/2016/06/36.png',file:'blog/2016-06-20-sistematizando-la-ejecucion-urbana-global.md'},
  {slug:'sistematizando-la-planificacion-urbana-global',title:'La Planificación Urbana Global (Sistematizando con urbiTHINGS)',date:'07 Jun 2016',year:'2016',img:'https://info.urbigis.com/wp-content/uploads/2016/06/36.png',file:'blog/2016-06-07-sistematizando-la-planificacion-urbana-global.md'},
  {slug:'neurofisiologia-urbana',title:'Neurofisiología Urbana',date:'01 Jun 2016',year:'2016',img:'https://info.urbigis.com/wp-content/uploads/2016/06/57.png',file:'blog/2016-06-01-neurofisiologia-urbana.md'},
  {slug:'things-un-sistema-cvgi-informacion-geografica-por-colaboracion-controlada',title:'urbiHINGS: un sistema cVGI (información geográfica por colaboración controlada)',date:'29 Mar 2016',year:'2016',img:'https://info.urbigis.com/wp-content/uploads/2016/03/60.png',file:'blog/2016-03-29-things-un-sistema-cvgi-informacion-geografica-por-colaboracion-controlada.md'},
  {slug:'la-tecnologia-urbana-como-arma-contra-el-cambio-climatico',title:'La tecnología urbana como arma contra el cambio climático',date:'19 Oct 2015',year:'2015',img:'https://info.urbigis.com/wp-content/uploads/2015/10/62.png',file:'blog/2015-10-19-la-tecnologia-urbana-como-arma-contra-el-cambio-climatico.md'},
  {slug:'proyectos-de-automatas-urbanos-en-el-internet-de-las-cosas',title:'El proyecto de edificación: ¿Un Autómata urbano virtual en el Internet de las Cosas?',date:'04 Sep 2015',year:'2015',img:'https://info.urbigis.com/wp-content/uploads/2015/09/24.jpg',file:'blog/2015-09-04-proyectos-de-automatas-urbanos-en-el-internet-de-las-cosas.md'},
  {slug:'el-espacio-publico-un-mundo-multifacetico',title:'Reflexiones sobre el espacio público',date:'01 Jun 2015',year:'2015',img:'',file:'blog/2015-06-01-el-espacio-publico-un-mundo-multifacetico.md'},
  {slug:'la-estructura-competencial-del-cloud-publico',title:'La estructura competencial del Cloud Público',date:'08 May 2015',year:'2015',img:'',file:'blog/2015-05-08-la-estructura-competencial-del-cloud-publico.md'},
  {slug:'registro-urbano-una-propuesta-de-sistema-de-informacion-territorial',title:'Registro Urbano: una propuesta de Sistema de Información Territorial',date:'04 May 2015',year:'2015',img:'http://www.arnaizpartners.com/blogarnaizpartners/wp-content/uploads/2015/05/Image1.png',file:'blog/2015-05-04-registro-urbano-una-propuesta-de-sistema-de-informacion-territorial.md'},
  {slug:'urbanismo-celular',title:'Urbanismo celular',date:'22 Jan 2015',year:'2015',img:'https://info.urbigis.com/wp-content/uploads/2015/01/1.jpg',file:'blog/2015-01-22-urbanismo-celular.md'},
  {slug:'ideas-sobre-movilidad-urbana',title:'Ideas sobre movilidad urbana',date:'29 Oct 2014',year:'2014',img:'https://info.urbigis.com/wp-content/uploads/2014/10/76.png',file:'blog/2014-10-29-ideas-sobre-movilidad-urbana.md'},
  {slug:'urbanismo-y-smart-city',title:'Urbanismo y Smart City',date:'26 Apr 2014',year:'2014',img:'',file:'blog/2014-04-26-urbanismo-y-smart-city.md'},
  {slug:'la-renta-la-velocidad-y-el-tamano-de-la-ciudad',title:'La renta, la velocidad y el tamaño de la ciudad',date:'22 Apr 2014',year:'2014',img:'https://info.urbigis.com/wp-content/uploads/2014/04/85.png',file:'blog/2014-04-22-la-renta-la-velocidad-y-el-tamano-de-la-ciudad.md'},
  {slug:'vamos-bien-encaminados-para-llegar-a-la-ciudad-inteligente',title:'¿Vamos bien encaminados para llegar a la ciudad inteligente?',date:'08 Jan 2014',year:'2014',img:'',file:'blog/2014-01-08-vamos-bien-encaminados-para-llegar-a-la-ciudad-inteligente.md'},
  {slug:'gobernanza-y-sistemas-de-informacion-territorial',title:'Gobernanza y Sistemas de Información Territorial',date:'04 Jan 2014',year:'2014',img:'',file:'blog/2014-01-04-gobernanza-y-sistemas-de-informacion-territorial.md'},
  {slug:'geoobjetos',title:'GeoObjetos',date:'24 Dec 2013',year:'2013',img:'https://info.urbigis.com/wp-content/uploads/2013/12/86.jpg',file:'blog/2013-12-24-geoobjetos.md'},
  {slug:'planeamiento-urbano-masivo',title:'Planeamiento urbano masivo',date:'14 Oct 2013',year:'2013',img:'https://info.urbigis.com/wp-content/uploads/2013/10/92.jpg',file:'blog/2013-10-14-planeamiento-urbano-masivo.md'},
  {slug:'catastro-colaborativo-el-inventario',title:'Catastro colaborativo: el Inventario',date:'09 Sep 2013',year:'2013',img:'',file:'blog/2013-09-09-catastro-colaborativo-el-inventario.md'},
  {slug:'los-sistemas-de-informacion-urbanistica',title:'Los sistemas de información urbanística',date:'09 Sep 2013',year:'2013',img:'http://www.arnaizpartners.com/blogarnaizpartners/wp-content/uploads/2013/09/Circuitos.png',file:'blog/2013-09-09-los-sistemas-de-informacion-urbanistica.md'},
  {slug:'activacion-de-componentes-urbanos',title:'Activación de Componentes Urbanos',date:'03 Aug 2012',year:'2012',img:'',file:'blog/2012-08-03-activacion-de-componentes-urbanos.md'},
  {slug:'64-5000-data-acquisition-the-achilles-heel-of-gis-systems',title:'Data acquisition: the Achilles heel of GIS systems',date:'27 Jul 2012',year:'2012',img:'',file:'blog/2012-07-27-64-5000-data-acquisition-the-achilles-heel-of-gis-systems.md'},
  {slug:'la-adquisicion-de-datos-el-talon-de-aquiles-de-los-sistemas-gis',title:'La adquisición de datos: el talón de Aquiles de los sistemas GIS',date:'27 Jul 2012',year:'2012',img:'',file:'blog/2012-07-27-la-adquisicion-de-datos-el-talon-de-aquiles-de-los-sistemas-gis.md'},
  {slug:'urban-components',title:'Urban components',date:'27 Jul 2012',year:'2012',img:'http://www.arnaizpartners.com/blogarnaizpartners/wp-content/uploads/2012/07/Parabrisas.png',file:'blog/2012-07-27-urban-components.md'},
  {slug:'componentes-urbanos',title:'Componentes urbanos',date:'27 Jul 2012',year:'2012',img:'https://info.urbigis.com/wp-content/uploads/2012/07/93.jpg',file:'blog/2012-07-27-componentes-urbanos.md'},
  {slug:'digital-registry-of-planning',title:'Digital Registry of Planning',date:'27 Jul 2012',year:'2012',img:'',file:'blog/2012-07-27-digital-registry-of-planning.md'},
  {slug:'registro-digital-de-planeamiento',title:'Registro digital de Planeamiento',date:'27 Jul 2012',year:'2012',img:'',file:'blog/2012-07-27-registro-digital-de-planeamiento.md'},
  {slug:'la-red-viaria-puede-ser-un-espacio-controlado-terrestre',title:'¿La red viaria puede ser un Espacio Controlado Terrestre?',date:'27 Jul 2012',year:'2012',img:'https://info.urbigis.com/wp-content/uploads/2012/07/imagegallery-49378-58db71641a5c6.jpg',file:'blog/2012-07-27-la-red-viaria-puede-ser-un-espacio-controlado-terrestre.md'},
  {slug:'sebastian-arboli-ayala-la-base-de-datos-ciudad',title:'Sebastián Arbolí Ayala (La Base de Datos Ciudad)',date:'27 Jul 2012',year:'2012',img:'',file:'blog/2012-07-27-sebastian-arboli-ayala-la-base-de-datos-ciudad.md'},
  {slug:'geotransacciones',title:'Geotransacciones',date:'01 Jul 2012',year:'2012',img:'',file:'blog/2012-07-01-geotransacciones.md'},
  {slug:'digital-planning',title:'Digital Planning',date:'21 Jun 2012',year:'2012',img:'',file:'blog/2012-06-21-digital-planning.md'},
  {slug:'planeamiento-digital',title:'Planeamiento Digital',date:'21 Jun 2012',year:'2012',img:'http://www.arnaizpartners.com/blogarnaizpartners/wp-content/uploads/2012/06/LinkedIn_16x16.png',file:'blog/2012-06-21-planeamiento-digital.md'},
  {slug:'collaborative-city',title:'Collaborative City',date:'19 Jun 2012',year:'2012',img:'https://info.urbigis.com/wp-content/uploads/2012/06/89-1.png',file:'blog/2012-06-19-collaborative-city.md'},
  {slug:'ciudad-colaborativa',title:'Ciudad colaborativa',date:'19 Jun 2012',year:'2012',img:'http://www.arnaizpartners.com/blogarnaizpartners/wp-content/uploads/2012/06/OpenStreetMap.png',file:'blog/2012-06-19-ciudad-colaborativa.md'},
  {slug:'location-services-an-emerging-technology',title:'Location services, an emerging technology',date:'15 Jun 2012',year:'2012',img:'http://www.arnaizpartners.com/blogarnaizpartners/wp-content/uploads/2012/06/LinkedIn_16x16.png',file:'blog/2012-06-15-location-services-an-emerging-technology.md'},
  {slug:'servicios-de-ubicacion-una-tecnologia-emergente',title:'Servicios de Ubicación, una tecnología emergente',date:'15 Jun 2012',year:'2012',img:'http://www.arnaizpartners.com/blogarnaizpartners/wp-content/uploads/2012/06/LinkedIn_16x16.png',file:'blog/2012-06-15-servicios-de-ubicacion-una-tecnologia-emergente.md'}
];

let blogCurrentIdx = 0;

// Construir lista lateral agrupada por año
function blogBuildList(filter) {
  const list = document.getElementById('blogList');
  if (!list) return;
  list.innerHTML = '';
  const term = (filter || '').toLowerCase();
  let lastYear = '';
  let shown = 0;
  BLOG_LIST.forEach(function(p, i) {
    if (term && !p.title.toLowerCase().includes(term) && !p.date.toLowerCase().includes(term)) return;
    if (p.year !== lastYear) {
      const yr = document.createElement('div');
      yr.className = 'blog-year-header';
      yr.textContent = p.year;
      yr.dataset.year = p.year;
      list.appendChild(yr);
      lastYear = p.year;
    }
    const item = document.createElement('div');
    item.className = 'blog-list-item' + (i === blogCurrentIdx && !term ? ' active' : '');
    item.dataset.idx = i;
    item.innerHTML = '<div class="blog-list-item-date">' + p.date + '</div><div class="blog-list-item-title">' + p.title + '</div>';
    item.onclick = function() { blogLoadIdx(i); };
    list.appendChild(item);
    shown++;
  });
}

function blogLoadIdx(idx) {
  blogCurrentIdx = idx;
  const p = BLOG_LIST[idx];
  if (!p) return;

  // Marcar activo en lista
  document.querySelectorAll('.blog-list-item').forEach(function(el) {
    el.classList.toggle('active', parseInt(el.dataset.idx) === idx);
  });

  // Toolbar
  document.getElementById('blogPanelDate').textContent = p.date;
  document.getElementById('blogPrev').disabled = idx <= 0;
  document.getElementById('blogNext').disabled = idx >= BLOG_LIST.length - 1;

  // Reset comentario
  document.getElementById('blogCommentMsg').classList.remove('visible');

  // Cargar contenido
  const art = document.getElementById('blogArticle');
  art.innerHTML = '<div class="article-loading"><div class="spinner"></div> Cargando…</div>';

  fetch(p.file.replace('.html', '.md'))
    .then(function(r) { if (!r.ok) throw new Error(); return r.text(); })
    .then(function(text) {
      var parsed = parseFrontmatter(text);
      var html = mdToHtml(parsed.body);
      let heroHtml = '';
      if (p.img) heroHtml = '<img class="blog-article-hero" src="' + p.img + '" alt="" onerror="this.style.display=\'none\'">';
      art.innerHTML = heroHtml + '<h1>' + p.title + '</h1><div class="blog-article-body">' + html + '</div>';
      art.querySelectorAll('a[href^="http"]').forEach(function(a) {
        a.target = '_blank'; a.rel = 'noopener';
      });
      art.scrollTop = 0;
      // Scroll al item activo en la lista
      const activeItem = document.querySelector('.blog-list-item.active');
      if (activeItem) activeItem.scrollIntoView({block:'nearest'});
    })
    .catch(function() {
      art.innerHTML = '<h1>' + p.title + '</h1><p style="color:var(--muted)">Contenido no disponible en modo local. Funciona correctamente en GitHub Pages.</p>';
    });
}

function blogNav(dir) {
  blogLoadIdx(blogCurrentIdx + dir);
}

function blogFilter(q) {
  blogBuildList(q);
}

function blogToggleComment() {
  const msg = document.getElementById('blogCommentMsg');
  msg.classList.toggle('visible');
}

// Inicializar blog al mostrarlo
function blogInit() {
  blogBuildList('');
  blogLoadIdx(0);
}



function showSection(which) {
  const inicioSec = document.getElementById('inicioSection');
  const blogSec   = document.getElementById('blog');
  const helpSec   = document.getElementById('helpSection');
  const legalSec  = document.getElementById('legalSection');
  const navInicio = document.getElementById('navInicio');
  const navBlog   = document.getElementById('navBlog');
  const navAyuda  = document.getElementById('navAyuda');

  // Ocultar todo
  inicioSec.style.display = 'none';
  blogSec.style.display   = 'none';
  helpSec.classList.remove('active');
  helpSec.style.display   = 'none';
  if (legalSec) legalSec.style.display = 'none';

  // Quitar activo de todos los botones
  [navInicio, navBlog, navAyuda].forEach(n => { if(n) n.style.color = ''; });

  // Mostrar la sección elegida
  if (which === 'inicio') {
    inicioSec.style.display = 'block';
    if (navInicio) navInicio.style.color = '#FFFFFF';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (which === 'blog') {
    blogSec.style.display = 'block';
    if (navBlog) navBlog.style.color = '#FFFFFF';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (!blogSec.dataset.initialized) { blogInit(); blogSec.dataset.initialized = '1'; }
  } else if (which === 'help') {
    helpSec.style.display = 'block';
    helpSec.classList.add('active');
    if (navAyuda) navAyuda.style.color = '#FFFFFF';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (which === 'legal') {
    if (legalSec) legalSec.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Ocultar todas las secciones al inicio y mostrar Inicio
document.addEventListener('DOMContentLoaded', function() {
  var secs = ['inicioSection','blog','helpSection','legalSection'];
  secs.forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });
  showSection('inicio');
});

const HT_ARTICLES = [{slug:'introduccion',title:'Introducción a urbiGIS',cat:'Introducción'},{slug:'acceso-a-urbithings',title:'Modos de Acceso',cat:'Introducción'},{slug:'el-espacio-trabajo',title:'El espacio de trabajo',cat:'Introducción'},{slug:'encabezado',title:'Encabezado',cat:'Introducción'},{slug:'escritorio',title:'Escritorio',cat:'Introducción'},{slug:'2-5-dividir-escritorio',title:'Dividir Escritorio',cat:'Introducción'},{slug:'cuentas-accesos-y-equipos',title:'Cuentas, Accesos y Equipos',cat:'Introducción'},{slug:'tipos-de-datos-de-urbigis',title:'Tipos de Datos en urbiGis',cat:'Introducción'},{slug:'componentes-del-buscador',title:'Componentes del Buscador',cat:'Buscador'},{slug:'contextos-de-busqueda',title:'Contextos de búsqueda',cat:'Buscador'},{slug:'buscar-territorios',title:'Buscar Territorios',cat:'Buscador'},{slug:'buscar-mapas',title:'Buscar Mapas',cat:'Buscador'},{slug:'buscar-geoinformes',title:'Buscar GeoInformes',cat:'Buscador'},{slug:'buscar-localizaciones',title:'Buscar Localizaciones',cat:'Buscador'},{slug:'buscar-conjuntos-de-datos',title:'Buscar Conjuntos de Datos',cat:'Buscador'},{slug:'busqueda-de-instrumentos',title:'Buscar Instrumentos',cat:'Buscador'},{slug:'buscar-anotaciones',title:'Buscar Participaciones',cat:'Buscador'},{slug:'buscar_por_nombre',title:'Buscar por nombre',cat:'Buscador'},{slug:'buscar-por-clic',title:'Buscar por clic',cat:'Buscador'},{slug:'buscar-por-geometria',title:'Buscar por geometría',cat:'Buscador'},{slug:'busqueda-avanzada',title:'La búsqueda avanzada se encuentra en el panel de herramie…',cat:'Buscador'},{slug:'filtros-de-busqueda',title:'Filtros de búsqueda',cat:'Buscador'},{slug:'panel-de-resultados',title:'Panel de Resultados',cat:'Buscador'},{slug:'activar-desactivar-elementos',title:'Activar y Desactivar Elementos',cat:'Escritorio'},{slug:'reordenar-mapas',title:'Reordenar los Mapas',cat:'Escritorio'},{slug:'anadir-mapas',title:'Añadir Mapas Externos',cat:'Escritorio'},{slug:'anadir-notas-al-mapa',title:'Añadir Anotaciones al Mapa',cat:'Escritorio'},{slug:'2-6-vista-previa-de-mapas',title:'Vista previa de Mapas',cat:'Escritorio'},{slug:'panel-modulos',title:'Panel de Módulos',cat:'Escritorio'},{slug:'panel-resultados',title:'Panel de Datos',cat:'Escritorio'},{slug:'retirar-del-escritorio',title:'Retirar elementos del Escritorio',cat:'Escritorio'},{slug:'compartir-el-mapa',title:'Compartir el Mapa',cat:'Escritorio'},{slug:'imprimir-mapa',title:'Imprimir el Mapa',cat:'Escritorio'},{slug:'leyenda-mapa',title:'Ver la Leyenda de un Mapa',cat:'Escritorio'},{slug:'herramientas_basicas',title:'Herramientas básicas',cat:'Herramientas'},{slug:'crear-y-modificar-geometrias',title:'Crear y Modificar geometrías',cat:'Herramientas'},{slug:'dibujo-avanzado',title:'Edición Avanzada',cat:'Herramientas'},{slug:'estilos',title:'Aplicar Estilos a geometrías',cat:'Herramientas'},{slug:'unidades-de-medida',title:'Unidades de medida',cat:'Herramientas'},{slug:'colocar-elementos',title:'Colocar elementos',cat:'Herramientas'},{slug:'ir-a-coordenada',title:'Ir a coordenada',cat:'Herramientas'},{slug:'consulta-posicion',title:'Consulta de posición',cat:'Herramientas'},{slug:'transparencia',title:'Transparencia',cat:'Herramientas'},{slug:'zoom-servicio',title:'Hacer zoom a un Servicio',cat:'Herramientas'},{slug:'obtener-metadatos-servicio',title:'Obtener metadatos de un Servicio',cat:'Herramientas'},{slug:'selector-de-idioma',title:'Selector de idioma',cat:'Herramientas'},{slug:'servicio-de-mapa',title:'Servicios de Mapa',cat:'Mapas y Servicios'},{slug:'servicios-de-datos',title:'Servicios de Datos',cat:'Mapas y Servicios'},{slug:'localizadores',title:'Localizadores',cat:'Mapas y Servicios'},{slug:'geoportales',title:'Geoportales',cat:'Mapas y Servicios'},{slug:'ambito',title:'Territorios',cat:'Mapas y Servicios'},{slug:'conjuntos-de-datos',title:'Conjuntos de datos',cat:'Conjuntos de datos'},{slug:'editar-conjuntos-de-datos',title:'Editar Conjuntos de Datos',cat:'Conjuntos de datos'},{slug:'documentos',title:'Documentos',cat:'Conjuntos de datos'},{slug:'geo-transaccion',title:'Geo-transacción',cat:'Conjuntos de datos'},{slug:'instrumento',title:'Instrumentos',cat:'Instrumentos'},{slug:'versiones-instrumento',title:'Versiones de Instrumento',cat:'Instrumentos'},{slug:'atributo',title:'Atributos',cat:'Instrumentos'},{slug:'entidad',title:'Entidades',cat:'Instrumentos'},{slug:'asignacion',title:'Asignaciones',cat:'Instrumentos'},{slug:'operacion',title:'Operaciones',cat:'Instrumentos'},{slug:'relacion',title:'Relaciones',cat:'Instrumentos'},{slug:'grupos-de-relacion',title:'Grupos de Relación',cat:'Instrumentos'},{slug:'solicitar-nueva-version-instrumento',title:'Solicitar nueva Versión de Instrumento',cat:'Instrumentos'},{slug:'solicitar-nuevo-instrumento',title:'Solicitar nuevo Instrumento',cat:'Instrumentos'},{slug:'gestion-de-solicitudes',title:'Solicitudes',cat:'Instrumentos'},{slug:'temas-de-cuenta',title:'Temas de Cuenta',cat:'Administración'},{slug:'carpetas-de-documentos',title:'Carpetas de Documentos',cat:'Administración'},{slug:'registro-de-cuentas',title:'Registro de Cuentas',cat:'Gestión del Registro'},{slug:'registro-de-accesos',title:'Registro de Accesos',cat:'Gestión del Registro'},{slug:'perfil-de-cuenta',title:'Perfil de Cuenta',cat:'Gestión del Registro'},{slug:'perfil-de-acceso',title:'Perfil de Acceso',cat:'Gestión del Registro'},{slug:'gestion-usuarios',title:'Accesos de Usuario',cat:'Gestión del Registro'},{slug:'usuario',title:'Son Accesos de Usuario todas las personas que necesiten a…',cat:'Gestión del Registro'},{slug:'cuenta-de-organizacion',title:'Cuenta de Organización',cat:'Gestión del Registro'},{slug:'0-8-recuperar-contrasena',title:'Recuperar contraseña',cat:'Gestión del Registro'}];
let htCurrentIdx = -1;


// Parsear frontmatter YAML y extraer body
function parseFrontmatter(text) {
  var fm = {};
  var body = text;
  var match = text.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (match) {
    var lines = match[1].split('\n');
    lines.forEach(function(line) {
      var kv = line.match(/^(\w+):\s*"?([^"]*)"?\s*$/);
      if (kv) fm[kv[1]] = kv[2].trim();
    });
    body = match[2];
  }
  return { fm: fm, body: body };
}

// Convertir Markdown a HTML (usa marked si está disponible, si no muestra plano)
function mdToHtml(text) {
  if (window.marked) return window.marked.parse(text);
  // Fallback básico si marked no cargó
  return '<pre style="white-space:pre-wrap">' + text + '</pre>';
}

function htLoadSlug(slug) {
  const leaf = document.querySelector(`[data-slug="${slug}"]`);
  if (leaf) htSelectLeaf(leaf);
}

function htSelectLeaf(el) {
  document.querySelectorAll('.ht-leaf,.ht-leaf-root').forEach(l => l.classList.remove('active'));
  el.classList.add('active');
  const slug  = el.dataset.slug;
  const title = el.dataset.title;
  const cat   = el.dataset.cat;
  htCurrentIdx = HT_ARTICLES.findIndex(a => a.slug === slug);

  const parent = el.closest('.ht-cat');
  if (parent) parent.classList.add('open');

  // breadcrumb
  document.getElementById('htBreadcrumb').innerHTML = `${cat} › <strong>${title}</strong>`;

  // prev/next
  document.getElementById('htPrev').disabled = htCurrentIdx <= 0;
  document.getElementById('htNext').disabled = htCurrentIdx >= HT_ARTICLES.length - 1;

  // Cargar artículo desde archivo tutorial/slug.html
  const htBodyEl = document.getElementById('htBody');
  htBodyEl.innerHTML = '<div class="article-loading"><div class="spinner"></div> Cargando...</div>';
  fetch('tutorial/' + slug + '.md')
    .then(function(r) {
      if (!r.ok) throw new Error('No encontrado');
      return r.text();
    })
    .then(function(text) {
      var parsed = parseFrontmatter(text);
      var html = mdToHtml(parsed.body);
      htBodyEl.innerHTML = '<h1>' + title + '</h1>' + html;
      // Abrir links externos en nueva pestaña
      htBodyEl.querySelectorAll('a[href^="http"]').forEach(function(a) {
        a.target = '_blank'; a.rel = 'noopener';
      });
    })
    .catch(function() {
      htBodyEl.innerHTML = '<h1>' + title + '</h1><div class="help-placeholder">Artículo no disponible.</div>';
    });

  document.getElementById('htWelcome').classList.add('hidden');
  document.getElementById('htArticleWrap').classList.add('visible');
  document.getElementById('htBody').scrollTop = 0;
  // Abrir links externos en nueva pestaña
  document.querySelectorAll('#htBody a[href^="http"]').forEach(function(a) {
    a.target = '_blank';
    a.rel = 'noopener';
  });
}

function htNav(dir) {
  const next = HT_ARTICLES[htCurrentIdx + dir];
  if (next) htLoadSlug(next.slug);
}

function htToggleCat(cat) { cat.classList.toggle('open'); }

function htFilter(q) {
  const term = q.toLowerCase().trim();
  document.querySelectorAll('.ht-leaf,.ht-leaf-root').forEach(l => {
    l.style.display = (!term || l.dataset.title.toLowerCase().includes(term)) ? '' : 'none';
  });
  document.querySelectorAll('.ht-cat').forEach(cat => {
    if (!term) return;
    const any = [...cat.querySelectorAll('.ht-leaf')].some(l => l.style.display !== 'none');
    cat.classList.toggle('open', any);
  });
}


function navClose() {
  var links = document.getElementById('navLinks');
  var burger = document.getElementById('navHamburger');
  if (links) links.classList.remove('open');
  if (burger) burger.classList.remove('open');
}
