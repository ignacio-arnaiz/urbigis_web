---
title: "¿La red viaria puede ser un Espacio Controlado Terrestre?"
date: "2012-07-27"
excerpt: "Hace unas semanas Norman Foster indicó la necesidad de que el espacio viario terrestre fuera un espacio controlado de la misma forma como se controla el espacio aéreo. Con ello se podrían eliminar gra"
---

Hace unas semanas [Norman Foster](http://elpais.com/diario/2011/01/22/babelia/1295658746_850215.html) indicó la necesidad de que el espacio viario terrestre fuera un espacio controlado de la misma forma como se controla el espacio aéreo. Con ello se podrían eliminar gran parte de los problemas de seguridad y tráfico existentes.

Es bueno que el señor Foster ponga sobre la mesa este problema, seguro que su relevancia personal dará buena publicidad a un tema que es fundamental. Aunque hace tiempo que en Arnaiz Consultores nos planteamos esa necesidad.

A few weeks ago, [Norman Foster](http://elpais.com/diario/2011/01/22/babelia/1295658746_850215.html) assessed the necessity for ground road areas to be controlled in the same manner airspace is. This may resolve a large number of present safety and traffic problems.

**¿Pero como hacerlo?**

Si observamos como funciona el control del espacio aéreo vemos que se compone de varios elementos:

1) Un **transponder**: aparato que emite por radio la posición en el espacio de una aeronave identificada por una matrícula. Toda aeronave (excepto los ultraligeros) están obligadas a llevar uno. Generalmente funcionan bajo demanda, es decir, un interrogador (también conocido como radar secundario) emite una interrogación (1030 mhz), que el transponder entiende, decodifica y genera la respuesta con la información solicitada.

2) Un **piloto**: un agente inteligente al mando a la aeronave.

3) Un **controlador aéreo**: un agente inteligente al mando del tráfico, que establece la política de tráfico y da instrucciones a cada piloto. Es un agente humano por lo que tiene una capacidad limitada para controlar simultáneamente varias aeronaves. Por tanto en los centros de control la dotación de controladores está en función de su ratio máximo de operaciones/día.

4) Una** radio**: permite establecer una comunicación oral entre el piloto y el controlador aéreo. Dado que la transmisión oral está sujeta a graves malinterpretaciones existe un lenguaje estándar de comunicación basada en frases hechas. Se reserva el lenguaje libre para situaciones de emergencia.

5) Un **mapa de rutas**: un diseño público de vías aéreas que determinan el espacio propio de cada vía.

6) Un** plan de vuelo**: un documento obligatorio que el propietario de la aeronave comunica a la autoridad de control del tráfico aéreo y que ésta debe autorizar antes de que la aeronave inicie su vuelo.

6) Una** red de espacios controlados**: cada aeropuerto dispone de su propio espacio (el TMA) con un protocolo de transferencia de aeronaves entre ellas.

Es conveniente consultar la organización del espacio aéreo en la [Wikipedia](http://es.wikipedia.org/wiki/Espacio_a%C3%A9reo). Si pretendemos establecer un espacio controlado terrestre deberá tener una organización similar aunque inevitablemente habrá diferencias.

**¿Que elementos debería tener el espacio terrestre?**

Lo primero es que disponga de un **Medio de comunicación**: el espacio aéreo, a pesar de su gran dimensión física, tiene en realidad unas pocas aeronaves simultáneamente en vuelo. Por tanto la estrategia es sencilla: cada espacio aéreo tiene asignada una frecuencia y dentro de cada espacio los diálogos se inician con el identificativo de aeronave, si se complica la situación entonces se conviene por ambas partes el paso a un canal privado.

Pero en un espacio terrestre el número de vehículos en marcha puede ser enorme, eso hace imposible que haya una comunicación por radio con un controlador humano salvo para situaciones de emergencia.

Esta claro que hace falta un transponder o algo parecido. Es un buen síntoma que los vehículos que se comercialicen en la UE a partir de 2015 deberán incorporar de fábrica el sistema “e-call”,  un sensor que realiza una llamada de emergencia de forma automática al desplegarse el airbag en caso de accidente al Centro de Emergencias 112.

El “e-call” ya puede funcionar como un transponder y hay muchas marcas que lo están incorporando de serie. También hay muchas empresas que ofrecen sistemas antirrobo o de gestión de flotas y que instalan una tarjeta SIM y un GPS. En fin que poco a poco los vehículos van adquiriendo capacidad de telecomunicación inalámbrica, normalmente vía 3G o dentro de poco 4G.

Para implementar el protocolo de comunicación hay varias opciones:

1) Con telefonía utilizando mensajería SMS. Es factible siempre y cuando los tiempos de latencia, es decir el tiempo que tarda un mensaje desde que es enviado hasta que es recibido, esté en el orden de las décimas de segundo, de otro modo no habrá tiempo de reacción (un coche a 50Km/h recorre 14 metros en un segundo). El problema es que con SMS no se puede asegurar esa latencia y menos en un escenario de uso masivo de SMS.

2) Con telefonía 3G (WWAN). Es factible siempre y cuando haya cobertura sobre todo el espacio público y el ancho de banda pueda absorber todo el tráfico de voz y datos, tiene el mismo problema de latencia.

3) Mediante un protocolo de radio WLAN sobre el estándar IEEE 802.11,WPAN sobre el estándar  IEEE 802.15.4 o WIMAX sobre el estándar  IEEE 802.16. También es factible siempre y cuando haya cobertura sobre todo el espacio controlado.

Vale, desde luego el modo de comunicación  a) debe ser inalámbrica, b) debe existir el 100% de cobertura en todo el espacio terrestre, c) debe ser muy concisa y comprimida para maximizar el ancho de banda, d) debe tener tiempos de latencia máxima del orden de décimas de segundo. Y además debe poder concentrar un enorme tráfico de datos bidireccional con el centro de control.

**Un piloto**: bueno eso por ahora lo llevan todos los vehículos, quizá en el futuro el piloto sea automático y seguro que supondrá una mejora con respecto a la situación actual. Los pilotos humanos tienen una capacidad increíble para conducir, pero al mismo tiempo pueden ser distraídos, se duermen, sus condiciones físicas o mentales pueden estar reducidas por fármacos o drogas, en definitiva son inestables, irascibles e impredecibles. (mas los hombres que las mujeres).

**Un controlador terrestre**: que establezca la política de tráfico. Pero no puede ser un humano, debe ser un sistema. En una ciudad como Madrid debe ser un sistema capaz de mantener cientos de miles de conversaciones simultáneas con los vehículos en movimiento. Está claro que hay un enorme problema de computación, no se si hay un ordenador con capacidad de proceso para mantener tal número de hilos de control simultáneos, ni un software que lo soporte.

**Un plan de viaje**: supone que antes de ponernos en marcha hemos de comunicar nuestro destino al centro de gestión de tráfico. Un reto de educación social de enorme magnitud.

**Una red de espacios controlados**: indudablemente hay una red determinada por la competencia sobre la red viaria: carreteras del estado, regionales, provinciales, municipales y de peaje. Y cada una forma un espacio controlado separado, que se ocupa de dar la bienvenida y despedir los vehículos, o transferirlos al espacio colindante. Probablemente se organizarán en clases, como los espacios aéreos, en función de la capacidad del vehículo (guiado instrumental, guiado visual…)

Todo esto está muy bien pero **¿Cuáles son las ventajas?** porque semejante cambio debe estar muy bien justificado.

1) El tiempo que nuestro vehículo pasa en cada espacio terrestre se convierte en un dato conocido, por tanto el impuesto de circulación puede graduarse según el nivel de uso de la red. Los puestos de peaje dejan de ser necesarios, inevitablemente el pago debe realizarse de forma telemática contra una cuenta bancaria, aunque implique que no se puede circular por una carretera de peaje si nuestro vehículo o su conductor no dispone de un método de telepago.

2) La posición de nuestro vehículo es conocida en todo momento, por lo que la ayuda llegará con mas eficacia si se necesita, tanto en caso de avería, urgencia médica o siniestro.

3) El Centro de Control del tráfico no solo conocerá la situación real de uso de la red, sino que también conocerá su nivel de uso futuro ya que dispone de los planes de viaje y puede orientar al vehículo sobre la ruta óptima o incluso reestructurar la red para optimizar su rendimiento.

4) La red es susceptible de tener una configuración dinámica: las velocidades máximas e incluso los sentidos de tráfico se adecuan al nivel de uso actual o previsto, a las condiciones de la vía, a las situaciones de emergencia o siniestro, al momento del día, a la meteorología y condiciones de visibilidad. Esta característica depende de que el Centro sea capaz de enviar la configuración de la vía al vehículo y que éste pueda trasladarla al piloto en un lenguaje visual sencillo. Por ejemplo proyectándola sobre el parabrisas:

[](http://www.arnaizpartners.com/blogarnaizpartners/wp-content/uploads/2012/07/Componentes-urbanos2.jpg)Eso supone que el Centro de Control conoce en todo momento nuestra velocidad y trayectoria y por tanto puede detectar comportamientos ilegales y denunciarlos, no hacen falta radares fijos ni móviles para controlar la velocidad.

5) Si la configuración de la vía es dinámica entonces gran parte de la señalética física de la vía puede desaparecer, (el gobierno puede cambiar la velocidad de las carreteras sin modificar ninguna señal, aunque tengo dudas sobre si esto es bueno o malo). Los mensajes de carretera no tendrán que estar en un pórtico fijo, que siempre se leen mal y pueden parecer jeroglíficos, sino que estarán visibles en el parabrisas mientras tengan vigencia, incluso pueden ser orales para evitar que el conductor se distraiga.

6) Los sistemas actuales de navegación deberán modificarse ya que su enrutado actual se basa en que la configuración de la vía es estática o cambia poco. Por tanto sus proveedores (Google, Garmin, Tom Tom, Navteq…) o contactan con el Centro de Control de tráfico para proporcionar rutas actualizadas o, lo mas probable, son sustituidos directamente por el Centro de Control. (obtengamos mas servicios por el impuesto de circulación que pagamos)

7) La tecnología del vehículo de conducción automática se simplifica, el vehículo no tiene que reconocer la configuración de la vía mediante sistemas sensoriales complejos porque la obtiene en línea desde el gestor de tráfico.

**¿Y las desventajas?**

1) ¡Estamos controlados en todo momento!. Hay ciertos límites porque quien está controlado es el vehículo no sus ocupantes. En los aviones la tripulación es un dato esencial, quizá en los vehículos terrestres la identidad del piloto también sea importante ya que, en definitiva, es el responsable de sus ocupantes y de los daños a terceros.

2) Si un vehículo no dispone de un sistema de comunicación con el Centro de Control y de posicionamiento no puede utilizar el espacio controlado. Tampoco puede circular sin frenos, sin iluminación, sin ruedas… Todo es una cuestión de prioridades, en el espacio aéreo primó la seguridad a la privacidad y por eso ahora es el medio de transporte más seguro.

3) El espacio controlado no debe permitir la circulación de vehículos que no interactúen con el Centro de Control tales como bicicletas o motocicletas, porque no puedan alojar los dispositivos de comunicación ni dispongan de un sistema viable de conversación con el piloto. Estos vehículos deberán circular por espacios terrestres no controlados.

4) La invasión del espacio controlado por vehículos no controlados exige métodos de vigilancia específicos. En el espacio aéreo la vigilancia se establece mediante un radar que identifica todas las aeronaves, interroga al trasponder y si no obtiene respuesta manda a la fuerza aérea para bajarlo al suelo. En el espacio terrestre hay varios posibles métodos de vigilancia :

a) Policía de carreteras: el agente puede disponer de métodos de identificación de vehículos no controlados.

b) Cámaras de vídeo: el campo visual de la cámara puede ser comparado con el esperable y detectar los cambios.

a) Control mutuo de vehículos: incorporando a cada vehículo lectores de matrículas, uno frontal para el vehículo precedente y otro posterior para el subsiguiente que identifiquen las matrículas y las contraste con el Centro de Control, quien podrá verificar si esos vehículos están identificados y en caso contrario.. enviar a la fuerza aérea.

d) Control de los vehículos por la vía: mediante la colocación de lectores de matrícula en las vías.

Sin duda el tercer método es el mas efectivo aunque suponga convertir a los vehículos en “delatores”.

5) La continuidad y seguridad del tráfico se traslada hacia centros gestores automatizados y sujetos a fallo, si el grado de centralización es elevado, un fallo puede colapsar el tráfico de un área extensa.

6) La calidad y seguridad de las comunicaciones son también un factor de continuidad fundamental, la fluidez y seguridad del tráfico pasa a depender de las comunicaciones.

**¿Hay alguna solución viable?**

Realmente, hoy por hoy, no es posible pensar en Espacios Controlados Terrestres. No porque la tecnología no lo permita, sino porque los problemas de desarrollo e implantación del sistema son enormes.

Se debe tener en cuenta que debe ser un sistema universal: afecta a todos los vehículos y a todo el espacio terrestre salvo viarios interiores de urbanizaciones o ámbitos con poco tráfico.

En cualquier caso estamos convencidos de que la gestión del tráfico terrestre no puede ser realizada desde un único Centro de Control de tráfico para cada espacio controlado, seguro que se produce un cuello de botella de comunicaciones y una enorme necesidad de cómputo centralizada, ambos problemas sólo pueden ser resueltos distribuyendo el control (divide y vencerás).

Hace unos días hablábamos aquí de los [Com](http://www.arnaizpartners.com/blogarnaizpartners/?author=5)[ponentes urbanos](http://www.arnaizpartners.com/blogarnaizpartners/?author=5), y de los miles de Calzadas e Intersecciones existentes en la ciudad y de la posibilidad de asignarles un Agente Inteligente. Estos Componentes son los mejores candidatos para convertirse en minicentros de gestión del tráfico que toman todas las pequeñas decisiones y que se van transfiriendo el control de cada vehículo de unas a otras.

En función de la densidad de tráfico y de la configuración de la red, seguramente deberá haber centros intermedios entre los Componentes de base y el centro de gestión de tráfico central, subcentros que se compartimentan según el espacio, por ejemplo por distritos, o que se compartimentan según la categoría de la vía: red troncal, red primaria y red secundaria.

Esta red jerarquizada de centros de gestión del tráfico, formada en su nivel más básico por miles de pequeños Componentes viarios tiene grandes ventajas:

1) Tienen una dimensión espacial coherente con los alcances de transmisión inalámbrica, gestionan espacios de entre 100 y 1.000 metros de longitud. Ello asegura que los tiempos de latencia no serán achacables al medio de comunicación sino a la capacidad del Agente Inteligente para resolver eventos.

2) Gestionan un número limitado de vehículos, en una vía de cuatro carriles de 1.000 de longitud, asignando 10 metros a cada vehículo no caben más de 400, congruente con su capacidad de cómputo.

3) Forman una red capaz de generar comportamiento emergente que simplifique la gestión del tráfico.

4) Compartimentan el ámbito de fallo. Si un Componente falla el ámbito afectado es de dimensiones reducidas y probablemente un Componente vecino pueda sustituirlo temporalmente.

Eso también es un enorme desafío, por eso cuanto antes empecemos, antes llegaremos.

Ignacio Arnaiz Eguren – Director de Innovación – Arnaiz Consultores SL
