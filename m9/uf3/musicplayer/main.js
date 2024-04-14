// Select all the elements in the HTML page
// and assign them to a variable
let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');
let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');
let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;
// Create the audio element for the player
let curr_track = document.createElement('audio');
// Define the list of tracks that have to be played
let track_list = [
  {
    id: '4k',
    name: '4K',
    artist: 'El Alfa',
    image: './images/4k.jpg',
    path: './music/4K.mp3',
    genero: 'Reggaeton',
    fecha: '12/03/2020',
    letra: `Yo la iba a grabar, pero en baja calidad
    Y ella me dijo que no, que no 'tá
    E' una maldita loca, una ratata
    Ella lo que quiere es que la ponga en 4K
    4K, 4K, 4K, 4K
    4K-K-K, 4K-K-K
    4K, 4K, 4K, 4K
    4K-K-K, 4K-K-K
    Yo le quiero dar, en 4K
    Yo le quiero dar, en 4K
    Yo le quiero dar, en 4K
    Yo le quiero dar, en 4K (yo)
    Estoy cobrando por party má' de 70K
    Tiene que beberte mami to' este Chinaco
    Si tu mujer se pasa conmigo la vo' a marca'
    Por este loco la mujere' botan má' agua que laca
    Llegaron lo' pitbull, recógelo chihuahua
    Lo mandé pa'l Cristo Redentor en una guagua
    Ca-ca-cada vez que freno
    Demasiao' piquete manín, se me fue lo' freno'
    La mujere', aquí no son televisore'
    Pero la ponemo' en 4K
    La mujere', aquí no son televisore'
    Pero la ponemo' en 4K-K-K
    4K, 4K, 4K, 4K
    4K-K-K, 4K-K-K
    4K, 4K, 4K, 4K
    4K-K-K, 4K-K-K
    I'm guil-guil-guil', no te vo'a mentir
    Pide lo que sea, te lo vo'a conseguir
    Y I'm guil-guil-guil', no te vo'a mentir
    Que tú quiere' hacer de to' y yo tu cuerpo vo'a seguir
    Dale ponte en 4K que ahí e' que yo rompo
    Dime lo que quiere' que yo te lo compro
    Ese novio tuyo tiene cara 'e tonto
    Y si tú quiere' yo la monto y se la desmonto, oh shit
    El dinero no falte, bebé
    Tú no ve' que yo la tengo en play como es
    Si tú quiere cuarto', lléname de Moët
    Y pégate pa' la pared que quiero darte cómo es
    Ya sé que tú eres loca, tú eres una crazy
    Pa' abrirte la pata', como chapita de Pepsi (oh my god)
    Bienvenida al mundo fácil
    Gracias, Dios mío, porque coroné una lassie
    4K, 4K, 4K, 4K
    4K-K-K, 4K-K-K
    4K, 4K, 4K, 4K
    4K, 4K-K-K, 4K-K-K
    Yo le quiero dar, en 4K
    Yo le quiero dar, en 4K
    4K, 4K, 4K, 4K
    4K-K-K, 4K-K-K
    4K, 4K, 4K, 4K
    4K-K-K, 4K-K-K
    En diamante' son 200K, no tuve que insistir e' una bellaca
    Si el novio se me pega pa' él tengo un AK
    Ella bajó con la amiga, y la' puse en 8K
    Como no me llegan pues me tiran
    Igual que la mujer tuya que también me tira
    Si el tiguere se ve de mentira
    Yo facturo má' que tú y eso si no es mentira
    Si no es de TV que no llamen
    Si no tiene una mansión como elle que no llamen
    Si tienen deuda' que no llamen
    Si no tienen carro con motor atrás que tampoco llamen
    Frótame la lámpara y pídeme un deseo
    No soy mago, pero en mi cuenta tengo un par de cero'
    Y te los cumplo, tú sabe' que el problema no es dinero
    Pero tengo una misión y tengo que darte primero en 4K
    4K, 4K, 4K, 4K
    4K-K-K, 4K-K-K
    4K, 4K, 4K, 4K
    4K-K-K, 4K-K-K
    Yo le quiero dar, en 4K
    Yo le quiero dar, en 4K
    4K, 4K, 4K, 4K
    4K-K-K, 4K-K-K
    4K, 4K, 4K, 4K
    4K-K-K, 4K-K-K
    The Android, El Alfa el hombre
    Cuando llegue el coro, voy a llegar con un baygón
    Quien un mimero arriba
    Darell, yo, eh`,
  },
  {
    id: 'bandido',
    name: 'Bandido',
    artist: 'Anuel AA',
    image: './images/bandido.jpg',
    path: './music/bandido.mp3',
    genero: 'Reggaeton',
    fecha: '29/05/2020',
    letra: `Sé que te molesta, si cae la noche y no te llamo
    Pero no contesta y por eso es que tú y yo peleamo'
    Terminamo' y cuando amanece volvemo'
    En la cama lo arreglamo' y solo tú y yo nos entendemos (Brr)
    Baby, tú eres mío y yo soy tuya y tú eres mío
    Baby, tú eres mía y yo soy tuyo, yo soy tu bandido
    Baby, tú eres mío y yo soy tuya y tú eres mío
    Baby, tú eres mía y yo soy tuyo, yo soy tu bandido (Yeh)
    Bebé, bebé, bebecita, uah
    Bebe, bebecita, uah
    Estos bobos quieren robarte
    Pero yo soy el que la presión reparte
    Te ves perfecta, no tienes que maquillarte (Maquillarte)
    Yo no vo' a hacerte el amor, yo vo' a chingarte, yeah
    Y yo sé que te he falla'o (Te he falla'o)
    Son mucha veces que contigo la he caga'o (La he caga'o), yeah
    Hablando claro, estoy alza'o (Estoy alza'o)
    Como Alex Rodriguez cuando J.Lo está a su la'o (A su la'o), yeah yeah
    Ah-ah-ah-ah (Uah)
    Ah-ah-ah-ah (Uah)
    Peleamo', nos arreglamo'
    Nos mantenemo' en esa pero nos amamo', ay, vamos
    Baby, tú eres mío y yo soy tuya y tú eres mío
    Baby, tú eres mía y yo soy tuyo, yo soy tu bandido
    Baby, tú eres mío y yo soy tuya y tú eres mío
    Baby, tú eres mía y yo soy tuyo, yo soy tu bandido
    Estamos en silencio y tu' gemido' están hablando
    (En mi oído susurrando)
    En un minuto estamos hablando
    A los cinco, ya estamos peleando y a los treinta, bellaqueando
    Enrolamo y quemamo' (Quemamo')
    Yo soy tu Kanye y tú mi Kim, no le bajamo' (Bajamo')
    Baby, grabamo' una porno y la filtramo' (Filtramo')
    Y de los haters de la redes no' burlamo'
    Tu peli me tiene dando vuelta'
    Y to' dentro de mí y yo envuelta
    Me gusta que me mientas
    Y cuando estoy encima de ti, veo to' en camera lenta
    Me tienes moja'ito los labios
    Loquita por verte y comerte
    Pa' lo que te conviene, tú eres sabio (Sabio)
    Bebé, tú eres un mal necesario (Necesario)
    Ey, tú me sacas lo de delincuente
    Son cincuenta sombras en mi mente
    Se siente bien rico y caliente
    Tú marcaste mi vida por siempre
    Yeah yeah yeah yeah (Brr)
    Yeah, yeah yeah yeah (Uh)
    Yeah yeah yeah yeah (Uh)
    Yeah, yeah yeah yeah (Uh) (Yeah)
    Yeah yeah yeah yeah (Uh)
    Yeah yeah yeah yea (Brr)
    Nah nah nah nah
    Nah nah nah nah
    Baby, tú eres mío y yo soy tuya y tú eres mío
    Baby, tú eres mía y yo soy tuyo, yo soy tu bandido
    Baby, tú eres mío y yo soy tuya y tú eres mío
    Baby, tú eres mía y yo soy tuyo, yo soy tu bandido
    Bebé, bebé, bebecita, uah`,
  },
  {
    id: 'mi-error',
    name: 'Mi error',
    artist: 'Eladio Carrión',
    image: './images/miError.jpeg',
    path: './music/miError.mp3',
    genero: 'Trap',
    fecha: '06/02/2021',
    letra: `Uh
    Antes me buscaba, baby
    Cuando yo andaba en la calle
    No me amas como antes, baby
    ¿Qué paso con tus detalle'?
    Y yo no sé lo que te hice
    Pero perdóname si yo te fallé
    Mírame a los ojos
    Dime algo, no te calles
    Ojalá y te enamore'
    Te enamore' de alguien como tú
    Pa' que sepas lo mucho que tú jode'
    (Pa' que sepas lo mucho que tú jode')
    Ojalá y que te rompa el corazón
    Y yo sé que puedo buscar mejore'
    Baby tú te fuiste sin razón
    Pero uno crece aprendiendo de los errore'
    Fuiste mi error favorito, oh
    Hoy me levanté de mal humor y te necesito
    Quisiera que estuvieras encima de mí
    En tu ropa interior favorito
    Tu color favorito, por favor no me deje en visto
    Que te he visto desnua'
    Yeh yeh yeh
    Hey yo baby, dime cómo estás
    No quiero saber con quién te vienes o te vas
    Igual que yo sé que tienes a pales detrás
    Pero hoy te necesito y no miras pa' trás
    Te extraño
    Si te digo que no, me engaño
    Mai' solo dímelo, el daño
    Ya se hizo y veo que no quiere compromiso
    Ojalá y te enamore'
    Te enamore de alguien como tú
    Pa' que sepas lo mucho que tú jode'
    (Pa' que sepas lo mucho que tú jode')
    Ojalá y que te rompa el corazón
    Y yo sé que yo puedo buscar mejore'
    Baby, tú te fuiste sin razón
    Pero uno crece aprendiendo de los errore'
    Fuiste mi error favorito, oh
    Hoy me levanté de mal humor y te necesito
    Quisiera que estuvieras encima de mí
    En tu ropa interior favorito
    Tu color favorito, por favor no me deje en visto
    Que te he visto desnua'
    Antes me buscaba, baby
    Cuando yo andaba en la calle
    No me amas como antes, baby
    ¿Qué pasó con tus detalle'?
    Y yo no sé lo que te hice
    Pero perdóname si yo te fallé
    Mírame a los ojos
    Dime algo, no te calles
    Ojalá y te enamore'
    Te enamore' de alguien como tú
    Pa' que sepas lo mucho que tú jode'
    La "Z", Eladio
    Dímelo Bory
    (Ojalá y que te rompa el corazón)
    O'Neill
    (Y yo sé que puedo buscar mejore')
    Yeh Rimas Music
    (Baby, tú te fuiste sin razón)
    Dímelo Bory
    (Pero uno crece aprendiendo de los errore')
    Dímelo Bory`,
  },
  {
    id: 'oye-bb',
    name: 'Oye BB',
    artist: 'Omar Montes - Nicky Jam',
    image: './images/oyebb.webp',
    path: './music/oyebb.mp3',
    genero: 'Reggaeton',
    fecha: '10/11/2023',
    letra: `Me manda el location
    Y me pide que no le responda
    Na' más pa' que él que no pueda verlo
    Sus amiga' ya están toíta' prepará'
    Pa' ayudar a esconderno'
    Y podamo' comerno'
    Esa mini Prada yo sé que acabará
    Tirada por el suelo
    Oye, bebé, qué rico huele' (qué rico huele')
    Pero más rica tú estarás cuando te pruebe
    Oye, bebé, to' los weekene' (to' los weekene')
    Lo haría cada vez mejor pa' que te quede'
    Siempre manejando por tu zona
    Yo te pego un call y tú nunca responde'
    Aunque los fines de semana te pone' bellaca
    Y me confiesa' que me ama', ah-ah-ah
    Solo te pido 1%
    Y te entrego mi corazón
    Te sigo de hace tiempo
    Quiero llevarte en el Phantom
    A fumar, a beber
    Ya cayó la noche
    Qué rica tú te ve'
    Huele ya a un polvo otra ve'
    Oye, bebé, qué rico huele' (qué rico huele')
    Pero más rica tú estarás cuando te pruebe
    Oye, bebé, to' los weekene' (to' los weekene')
    Lo haría vez mejor pa' que te quede' (N-I-C-K)
    Cerca te quiero
    Tú 'tás rica de los taco' al pelo
    Dile a tu pai que lo voy a hacer abuelo
    Calientita pa' ponerte el hielo
    Ay, mami
    No es lo mismo andar en un Toyota que un Ferrari
    Yo te quiero pa' mí, dime qué vamo' a hacer
    Vamo' a salir pa' bailar, pa' joder
    Que estoy loco con usted
    Oye, bebé, qué rico huele' (qué rico huele')
    Pero más rica tú estarás cuando te pruebe
    Oye, bebé, to' los weekene' (to' los weekene')
    Lo haría vez mejor pa' que te quede'
    Me manda el location
    Y me pide que no le responda
    Na' más pa' que él que no pueda verlo
    Sus amiga' ya están toíta' prepará'
    Pa' ayudar a esconderno'
    Y podamo' comerno'
    Esa mini Prada yo sé que acabará
    Tirada por el suelo`,
  },
  {
    id: 'tanta-droga',
    name: 'Tanta droga',
    artist: 'Eladio Carrión',
    image: './images/tantaDroga.jpeg',
    path: './music/tantaDroga.mp3',
    genero: 'Trap',
    fecha: '19/01/2024',
    letra: `Tanta droga en la disco, pero nada me arrebata
    Nada a mí me mata más que tú cuando me bailas, más que tú cuando me besas
    Hay tanta droga en la disco, pero solo tú me tienes high all night
    Como tú me bailas, baby, como tú me besas
    Tú me subes a las nubes
    Pensando en ese pussy tight, la nota llega hasta el sky
    Ya no siento mi piel entre tanta mujer
    Solo a ti te soy fiel, baby girl
    Me puedo fumar siete gramos aunque lo mezcle con Molly o Tusi
    Tus besos son los que me dan nota cuando te calientas, ma, como un jaccuzzi
    To' el mundo te mira en el VIP porque saben que eres exclusive
    Twerking encima de mí que tú no eres ninguna rookie
    Cierto, que si tú me dejas me enfermo, peor que el vicio 'e las Percos
    'Acho, mami, please, dale vamos a hacerlo
    Me tienes en nota, lo acepto
    Tanta Codeina y refresco, I can't feel my face
    Entre tanta droga en la disco, pero nada a mí me mata, nada me arrebata
    Más que tú cuando me bailas, más que tú cuando me besas
    Hay tanta droga en la disco, pero solo tú me tienes high all night
    Como tú me bailas, baby, como tú me besas
    Pasó mucho que no te veo y me hace mucha falta mirarte
    Por más que fumo ya no me arrebato, tengo que tomarme algo fuerte
    Tú me tienes mal y bien loco, me tienes dando vuelta en el mismo lugar
    Tú me tienes fundío el foco, avanza, aparece, te quiero probar
    Tú eres una nota demasiado cabrona que yo nunca quiero que acabe
    Me llevas al espacio, moviendo ese culo sin necesidad de una nave
    Me avisas, tú eres la que sabe, probaste lo rico que sabe
    Contigo no discuto en ningún momento, tú tienes razón y derecho te cabe
    Tanta droga en la disco, pero nada me arrebata
    Nada a mí me mata más que tú cuando me baila, más que tú cuando me besas
    Hay tanta droga en la disco, pero solo tú me tienes high all night
    Como tú me bailas, baby, como tú me besas
    Ya son como las 5 y pico
    Y tú me tienes en nota en la disco
    Contigo siempre como y repito
    Pa' ti, yo siempre tengo apetito
    Tú, tú, tú eres como mi droga, flexible sin hacer yoga
    Dime si lo quieres ahora, vamos a toda, que se joda
    Tú eres la más rica de todas, en nota se desahoga
    Me dice "Papi, tú me pones happy, happy"
    Tanta droga en la disco, pero nada me arrebata
    Nada a mí me mata más que tú cuando me bailas, más que tú cuando me besas
    Hay tanta droga en la disco, pero solo tú me tienes high all night
    Como tú me bailas, baby, como tú me besas`,
  },
  {
    id: 'triste-verano',
    name: 'Triste verano',
    artist: 'Eladio Carrión - Anuel AA',
    image: './images/tristeVerano.jpg',
    path: './music/tristeVerano.mp3',
    genero: 'Trap',
    fecha: '14/04/2023',
    letra: `Ya llega el cabrón triste verano
    Blonzote enrolao, tiene diez gramos
    Hoy día nos tratamos como extraños (brr)
    Sea la madre, me toca otro
    Verano sin ti, me tienes aquí de junio hasta agosto (agosto)
    Mal de la cabeza porque tú no regresa (¡eh!)
    Otro verano sin ti, odio San Valentín
    Tú estás fría como Boston
    Pregunta en mi cabeza: ¿a quién carajo tú besa? (yeh)
    No me mires mal a mí (mal a mí)
    No estuvimos tanto tiempo juntos
    Pero tú no sabes lo que significas para mí (para mí)
    Que tienes a otro, si nos dejamos hace poco
    Mami, eso no me cuadra a mí (cuadra a mí)
    En verano con el sol afuera, pero comoquiera siento todo gris (gris)
    Desde que tú no estás, desde que tú no estás (¡wuh!)
    Para no pensarte uso drogas y tomo siesta
    Llamo y llamo con cojones y tú no contestas
    No quieres saber de amor, que estás de protesta (¡hey!)
    Antes todo te gustaba, ahora todo molesta, yeh (¡wuh, wuh!)
    Verano, pero me siento en invierno
    Déjate de mierda, baby, vamos a comernos
    Ando sin mi droga, toda la noche enfermo
    Estoy rompiendo vicio hasta que podamos vernos (yeh)
    Ya llegó el cabrón triste verano (verano)
    Blonzote enrolao, tiene diez gramoz (gramo')
    Hoy día nos tratamos como extraños (yeh)
    Sea la madre, me toca otro
    Verano sin ti, me tienes aquí de junio hasta agosto (hasta agosto)
    Mal de la cabeza porque tú no regresa
    Otro verano sin ti, odio San Valentín
    Tú estás fría como Boston
    Pregunta en mi cabeza: ¿a quién carajo tú besa? (La AA, Anuel)
    Si la canción es lloraera, ya ni grabo (ni grabo)
    Lo hice por Luian que está jodiendo y por Eladio (por Eladio)
    Me acuerdan a ti todas las canciones en la radio (ah, ah, ah)
    Chingando en el camerino del estadio en tu concierto (en tu concierto)
    Yo me mantengo arrebatao
    Pa no pensar en ti todo el tiempo (todo el tiempo, oh)
    Fingiendo que daño no has causao
    Pongo la cara de hijueputa que tengo (que tengo)
    Vuelve, el loco te necesita (te necesita)
    Me tiras cuando andes solita (solita)
    Vuelve, dame una noche bien rica (bien rica)
    Por siempre tú va a ser la bebecita (oh-oh-oh-oh-oh)
    Recuerda que lo real no se olvida (uah)
    Me tiras cuando estés bellaquita (bellaquita)
    Vuelve, dame una noche bien rica (bien rica)
    Por siempre la bebecita (bebecita, ah-ah)
    Ya llegó el cabrón triste verano (triste verano)
    Blonzote enrolao, tiene diez gramoz (tiene diez gramoz)
    Hoy día nos tratamos como extraño' (yeh)
    Sea la madre, me toca otro
    Verano sin ti, me tienes aquí de junio hasta agosto (hasta agosto)
    Mal de la cabeza porque tú no regresa (¡eh!)
    Otro verano sin ti, odio San Valentín (oh, oh, oh)
    Tú estás fría como Boston
    Pregunta en mi cabeza: ¿a quién carajo tú besa?
    Hear This`,
  },
  {
    id: 'se-lo-que-hicisteis',
    name: 'Sé lo que hicisteis',
    artist: 'Melendi',
    image: './images/melendi.jpeg',
    path: './music/slqh.mp3',
    genero: 'Pop',
    fecha: '11/02/2003',
    letra: `Detrás de una tormenta siempre llega la calma
    Después que nos amemos fumamos un pito a pachas
    Después de arrancarte una costilla, mordí la manzana
    Después de que aguantamos la bomba en Hiroshima
    Después que un tal Bin Laden arrasara New York
    Después de que los Harlem Globetrotters te insertaran en mi corazón
    Dejarían de existir para mí las flores
    De esas que te fumas y lo ves to' a colores
    Dejarían de existir tus ojitos verdes
    Tus vaqueritos rotos, tus vestidos cortos de vida alegre
    Y esa Juana sin arco, ese Bill sin Gates
    Aquella foto de aquel narco que viste de beige
    Y esa cabaña en el lago
    Sé lo que hicisteis el último verano
    Y esa Juana sin arco, ese Bill sin Gates
    Aquella foto de aquel narco que viste de beige
    Y esa cabaña en el lago
    Sé lo que hicisteis el último
    Verano
    Detrás de una derrota siempre hay una esperanza
    Cuando te veo en pelotas mi corazón busca calma
    Detrás de esa bonita sonrisa que duerme en mi cama
    Después de que Corea nos jodiera el mundial
    Después que William Wallace gritara "Libertad"
    Después de que la tuna le cantara una mentira a la cruel realidad
    Dejarían de existir para mí las flores
    De esas que te fumas y lo ves to' a colores
    Dejarían de existir tus ojitos verdes
    Tus vaqueritos rotos, tus vestidos cortos de vida alegre
    Y esa Juana sin arco, ese Bill sin Gates
    Aquella foto de aquel narco que viste de beige
    Y esa cabaña en el lago
    Sé lo que hicisteis el último verano
    Y esa Juana sin arco, ese Bill sin Gates
    Aquella foto de aquel narco que viste de beige
    Y esa cabaña en el lago
    Sé lo que hicisteis el último
    Verano
    Y esa Juana sin arco, ese Bill sin Gates
    Aquella foto de aquel narco que viste de beige
    Y esa cabaña en el lago
    Sé lo que hicisteis el último verano
    Y esa Juana sin arco, ese Bill sin Gates
    Aquella foto de aquel narco que viste de beige
    Y esa cabaña en el lago
    Sé lo que hicisteis el último
    Verano`,
  },
  {
    id: 'otra-vibra',
    name: 'Otra vibra',
    artist: 'Luar la L - Ozuna',
    image: './images/otraVibra.jpg',
    path: './music/otraVibra.mp3',
    genero: 'Reggaeton',
    fecha: '04/08/2023',
    letra: `Baby, esto es otra vibra
    Dime si siente' lo mismo que yo siento
    Cuando chingamo' en lo' asiento'
    Es de Suramérica, a mí me encanta su acento
    Estoy buscando a una que me de su 100%
    Dime si esa ere' tú
    Dime si ere' tú
    Dime qué quiere' tú
    Y si es chingar na' má', bebé
    Tranquila, que yo hago lo que quiera'
    Tú (ah)
    Dime si ere' tú
    Dime qué quiere' tú (woh, oh, oh, oh)
    Solo dame lu' y yo te prendo de una
    Te prendo de una
    Y si yo no le meto sólido
    La bebé se me monta en tribuna
    Me le echa whipped cream a ese culo
    Al bellaqueo le suma
    Habla chulo, así chiquitita, Eva Luna
    Y me la traje pa' PR
    Y se soltó la modelito de papá (modelito de papá)
    Prendimo' de camino
    Ella no fuma, pero va la musiquita en el Can-Am
    Españolita, catalá
    Las gafa' negra' pa' la nota
    Ya tú sabe' cual e' el plan
    Yo te perreo en lo oscuro pa' que sienta'
    Te hablan mal de mí
    Pero esa' cosa' no son cierta'
    Relájate, bebé, pa'l enemy esa e' la herramienta (herramienta)
    Si me monto en la vuelta
    En lo que saque pa' que invierta (mami)
    Y te convierte' en mi mamota, chulita
    Yo siempre estoy en otra
    Por ti yo sí que pago la cuota (oh)
    Usó pantys Fendi rosa, full Champ
    Le di chu por la Merce y terminamo' el tercero allá en mi ducha
    Ozuna (eh, eh, eh)
    Baby, esto es otra vibra
    Dime si siente' lo mismo que yo siento
    Cuando chingamo' en el asiento'
    Es de Suramérica, a mí me encanta su acento
    Estoy buscando a una que me de su 100%
    Dime si esa ere' tú
    Dime si ere' tú
    Dime qué quiere' tú
    Y si es chingar na' má', bebé
    Tranquila, que yo hago lo que quiera'
    Tú (oye, mami)
    Dime si ere' tú (como quisiera)
    Dime qué quieres tú
    Solo dame lu' (Tre' Letra')
    Y yo te prendo de una (La L, ¿qué?), una
    Baby, light it up, prende ese Phillie
    Que te vo'a poner las do' pierna'
    Pa'rriba como un wheelie, frrum
    No le baje', baby, rompe
    Otra story en el jetsco ponle
    Sube foto' y los video', mami
    Que tú tiene' con que frontear
    El AP, Audemars, el apa frente al mar
    To' lo que quieras, pide, Luar te lo va a costear (sólo pide)
    Con interese' (tú sabe')
    Yo solo quiero que me bese'
    Y te mojes como los pece', en relacione' tengo F (¿qué?)
    Pero estudio si me enseña' (ya aprendí, baby)
    Siento que de mí se adueña
    Ella ha graba'o par de video'
    Chingando y nunca me enseña
    Una pitcher, una player (tú lo sabe', baby)
    Yo pido por ella en to' mis prayer
    A ver si me la conceden (habla claro)
    Pa' evitarme to' este enrede
    De estar con mucha' a la ve' en excede
    Quizá ponerme pa' ella
    Ponerle el brillo de esta estrella
    Coronarla mi doncella
    Y así es que el pacto se sella, ¿qué?
    (Oye, mami, esto es pa' siempre)
    Baby, esto es otra vibra
    Dime si siente' lo mismo que yo siento
    Cuando chingamo' en el asiento
    Es de Suramérica, a mí me encanta su acento
    Estoy buscando a una que me de su 100%
    Dime si esa ere' tú (uh)
    Dime si ere' tú
    Dime qué quiere' tú (quiere' tú)
    Y si es chingar na' má', bebé
    Tranquila, que yo hago lo que quiera'
    Tú (tú), lo que quiera' tú
    Y es que tú ere' el mood
    Solo dame lu' y yo te prendo de una, una`,
  },
  {
    id: 'bzrp-music-session-58',
    name: 'BZRP Music Session #58',
    artist: 'Young Miko - Bizarrap',
    image: './images/youngMiko.jpg',
    path: './music/youngMiko.mp3',
    genero: 'Rap',
    fecha: '11/01/2024',
    letra: `¿Cómo llegamo' aquí?
    No sé a cuántos pies de altura
    Primera clase a Madrid
    Acá arriba ya no hay cobertura
    Siento que solo fue ayer
    Le dije a mami que yo iba a volver
    A casa otra ve'
    No sé cuándo la vo'a ver
    Pero mientra' tanto andamo' en Jet Ski en Mallorca (ah)
    Mientra' tanto 'tamo contando torta
    La que puede, puede, y la que no puede, soporta
    Mi gente 'tá bien, manín, eso e' lo que importa
    Y ahora pa' la baby 'toy joseando daily
    Pa' que suba los stories desde el Bentley
    Sintieron la pressure y ahora 'tán pidiendo tenqui
    Esto es blanco y negro, no me hablen de maybe
    Baby, aquí corremo' fino, digo, yo no me inclino
    Preguntan que si tienen chance, jum, mejor ni opino
    Yo los saco de la tumba, ¿hablan de mí? Los revivo
    ¿Dicen que debo favore'? Cabrón, sí, me imagino
    Sí, es que, man, yo te vi
    Afuera, en la fila pa' mi show
    Claro que sí, yo me acuerdo
    Cuando hablaste mierda de mí
    Te pegaste a mi VIP, ere' un pussy, puerco
    Si me pillan saliendo desde la entrada de la Prada
    Creen que pueden leerme porque me han visto en la portada
    Biza, apaga las luce', déjame a oscura'
    Que mi gente prende los flashes si yo pido que los suban
    Pero mientra' tanto andamo' en Jet Ski en Mallorca
    Mientra' tanto 'tamo contando torta
    La que puede, puede, y la que no puede, soporta
    Mi gente 'tá bien, manín, eso e' lo que importa
    Y ahora pa' la baby 'toy joseando daily
    Pa' que suba los stories desde el Bentley
    Sintieron la pressure y ahora 'tán pidiendo tenqui
    Esto es blanco y negro, no me hablen de maybe
    Aquí va otra má'
    Pa' los que han estao' de siempre
    Eso es ojalá (ojalá)
    Ustede' nunca me suelten
    Aunque nos vean con champaña que no sé pronunciar
    Aunque toa' las marca' me quieran auspiciar
    Aunque ya toda' mi exes quieren ser la oficial
    Ahora no significa que yo voy a cambiar
    No, no significa que yo dejo de ser normal
    Puede que antisocial
    Que no sepa confiar no es nada personal
    Es que si cambian de color, no me quiero asociar
    Si los mío' no pasan, yo no voy ni a entrar
    No te sienta' mal, no ere' tan especial
    Dicen que hablaste de mí, pero andas sin señal
    Y mientra' tanto andamo' en Jet Ski en Mallorca (ah)
    Mientra' tanto 'tamo contando torta
    La que puede, puede, y la que no puede, soporta
    Mi gente 'tá bien, manín, eso e' lo que importa
    Y pa' las babie' 'toy joseando daily
    Pa' que suban los stories desde el Bentley
    Sintieron la pressure y ahora 'tán pidiendo tenqui
    Esto es blanco y negro, no me hablen de maybe
    Bizarrap`,
  },
  {
    id: 'sin-noticias-de-holanda',
    name: 'Sin noticias de Holanda',
    artist: 'Melendi',
    image: './images/melendi.jpeg',
    path: './music/sndh.mp3',
    genero: 'Pop',
    fecha: '11/02/2003',
    letra: `Se oyen sirenas de fondo
    En la calle que está de moda
    La madera tras un yonko
    Que está corriendo en pelota
    Y grita desespera'o (ay, ay, ay, ay)
    "La chuta o no hay ropa" (olé)
    Y todos corriendo detrás de aquel pobre diablo
    Ay, que tan solo hace visible su ansiedad (vamos)
    Y tras la muchedumbre se oye un comentario
    Que junto a el olor de aquel chigre me hizo recordar
    (Toma que toma)
    Que hoy el cartero me ha dicho que no hay carta para mí
    Poniéndome en entredicho que la fuera a recibir
    Porque las cartas de Holanda entra muy mal en el país
    Huelen demasia'o a planta'
    Y hay mucho vicio aquí
    Y hay mucho vicio aquí
    Y tras varias deliberaciones
    Y dándole muchas vueltas como le di (dale otra ve')
    ¿Pa' que voy a fumar hierba de otras nacione'
    Pudiendo plantar la mía en este país?
    Y ahí quedó el pobre yonko to' amorata'o
    Ay, de las ostias que los madero' le han regala'o (ojú, pobrecito)
    Y tras la muchedumbre se oyó un comentario (cuenta, cuenta)
    Que junto a la olor de aquel chigre me hizo recordar
    Que hoy el cartero me ha dicho que no hay carta para mí (ojú)
    Poniéndome en entredicho que la fuera a recibir
    Porque las cartas de Holanda entra muy mal en el país
    Huelen demasia'o a planta'
    Y hay mucho vicio aquí
    Y hay mucho vicio aquí (vámono')
    Que hoy el cartero me ha dicho que no hay carta para mí
    Con los ojo' enrojeci'os está riéndose de mí
    Porque las cartas de Holanda entra muy mal en el país
    Cómo serás tan canalla
    Mis cartas son pa' mí
    Mis cartas son pa' mí (vamos allá)
    Que hoy el cartero me ha dicho que no hay carta para mí
    Poniéndome en entredicho que la fuera a recibir (ojú)
    Porque las cartas de Holanda entra muy mal en el país
    Huelen demasia'o a planta'
    Y hay mucho vicio aquí
    Y hay mucho vicio aquí`,
  },
];

function renderModalSongs(track_list) {
  const modalContent = document.getElementById('modal-content');
  track_list.map((song, index) => {
    const li = document.createElement('li');
    li.classList.add(
      'list-group-item',
      'd-flex',
      'align-items-center',
      'justify-content-between'
    );
    console.log(new URL(window.location.href));
    const div = document.createElement('div');
    div.classList.add('d-flex', 'align-items-center', 'gap-3');
    const h6 = document.createElement('h6');
    h6.classList.add('m-0');
    h6.textContent = song.name;
    const p = document.createElement('p');
    p.classList.add('m-0');
    p.textContent = song.artist;

    div.appendChild(h6);
    div.appendChild(p);

    li.appendChild(div);

    const svg = document.createElement('svg');
    svg.innerHTML = `<svg
    class='play-btn'
    xmlns='http://www.w3.org/2000/svg'
    width='30'
    height='30'
    viewBox='0 0 24 24'
  >
    <path
      fill='#9a9a9a'
      d='m10.65 15.75l4.875-3.125q.35-.225.35-.625t-.35-.625L10.65 8.25q-.375-.25-.763-.038t-.387.663v6.25q0 .45.388.663t.762-.038M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8'
    />
  </svg>`;
    svg.addEventListener('click', () => {
      if (index === track_index) {
        playpauseTrack();
      } else {
        loadTrack(index);
        track_index = index;
        playTrack();
      }
      console.log(index);
      console.log(track_index);
    });
    li.appendChild(svg);
    /* li.appendChild(`<svg
    class='play-btn'
    xmlns='http://www.w3.org/2000/svg'
    width='30'
    height='30'
    viewBox='0 0 24 24'
  >
    <path
      fill='#9a9a9a'
      d='m10.65 15.75l4.875-3.125q.35-.225.35-.625t-.35-.625L10.65 8.25q-.375-.25-.763-.038t-.387.663v6.25q0 .45.388.663t.762-.038M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8'
    />
  </svg>`); */

    modalContent.appendChild(li);
  });
}

renderModalSongs(track_list);

function loadFicha() {
  const label = document.getElementById('fichaLabel');
  label.textContent = 'Ficha - ' + track_list[track_index].name;

  const autor = document.getElementById('autor');
  autor.textContent = track_list[track_index].artist;

  const genero = document.getElementById('genero');
  genero.textContent = track_list[track_index].genero;

  const fecha = document.getElementById('fecha');
  fecha.textContent = track_list[track_index].fecha;

  const letra = document.getElementById('letra');
  letra.textContent = track_list[track_index].letra;
}

function loadTrack(track_index) {
  // Clear the previous seek timer
  clearInterval(updateTimer);
  resetValues();
  // Load a new track
  curr_track.src = track_list[track_index].path;
  curr_track.load();
  // Update details of the track
  track_art.style.backgroundImage =
    'url(' + track_list[track_index].image + ')';
  track_name.textContent = track_list[track_index].name;
  /*   track_name.setAttribute(
    'href',
    window.location.href + '/' + track_list[track_index].id
  ); */
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent =
    'PLAYING ' + (track_index + 1) + ' OF ' + track_list.length;
  // Set an interval of 1000 milliseconds
  // for updating the seek slider
  updateTimer = setInterval(seekUpdate, 1000);
  // Move to the next track if the current finishes playing
  // using the 'ended' event
  curr_track.addEventListener('ended', nextTrack);
  // Apply a random background color
  random_bg_color();
}
function random_bg_color() {
  // Get a random number between 64 to 256
  // (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;
  // Construct a color withe the given values
  let bgColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
  // Set the background to the new color
  document.body.style.background = bgColor;
}
// Function to reset all values to their default
function resetValues() {
  curr_time.textContent = '00:00';
  total_duration.textContent = '00:00';
  seek_slider.value = 0;
}

function playpauseTrack() {
  // Switch between playing and pausing
  // depending on the current state
  if (!isPlaying) playTrack();
  else pauseTrack();
}
function playTrack() {
  // Play the loaded track
  curr_track.play();
  isPlaying = true;
  // Replace icon with the pause icon
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack() {
  // Pause the loaded track
  curr_track.pause();
  isPlaying = false;
  // Replace icon with the play icon
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function nextTrack() {
  // Go back to the first track if the
  // current one is the last in the track list
  if (track_index < track_list.length - 1) track_index += 1;
  else track_index = 0;
  // Load and play the new track
  loadTrack(track_index);
  playTrack();
}
function prevTrack() {
  // Go back to the last track if the
  // current one is the first in the track list
  if (track_index > 0) track_index -= 1;
  else track_index = track_list.length - 1;
  // Load and play the new track
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  // Calculate the seek position by the
  // percentage of the seek slider
  // and get the relative duration to the track
  seekto = curr_track.duration * (seek_slider.value / 100);
  // Set the current track position to the calculated seek position
  curr_track.currentTime = seekto;
}
function setVolume() {
  // Set the volume according to the
  // percentage of the volume slider set
  curr_track.volume = volume_slider.value / 100;
}
function seekUpdate() {
  let seekPosition = 0;
  // Check if the current track duration is a legible number
  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;
    // Calculate the time left and the total duration
    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(
      curr_track.currentTime - currentMinutes * 60
    );
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(
      curr_track.duration - durationMinutes * 60
    );
    // Add a zero to the single digit time values
    if (currentSeconds < 10) {
      currentSeconds = '0' + currentSeconds;
    }
    if (durationSeconds < 10) {
      durationSeconds = '0' + durationSeconds;
    }
    if (currentMinutes < 10) {
      currentMinutes = '0' + currentMinutes;
    }
    if (durationMinutes < 10) {
      durationMinutes = '0' + durationMinutes;
    }
    // Display the updated duration
    curr_time.textContent = currentMinutes + ':' + currentSeconds;
    total_duration.textContent = durationMinutes + ':' + durationSeconds;
  }
}

// Load the first track in the tracklist
loadTrack(track_index);
