import './Style.css';
import React, { useRef, useState, useEffect } from 'react';
// import AudioPlay from 'react-h5-audio-player';
// import 'react-h5-audio-player/lib/styles.css';

const AudioPlayer = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSongIndex, setCurrentSongIndex] = useState(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const playlist = [
        { title: "YADAGARA YADAGARA",cast:"Ramajogayya Sastry,Suchetha Basrur",src: "Song1.mp3",image:"image1.png", lyrics:`Yadagara yadagara dinkara
Jagathike jyothiga nilawara
Padamara nisitera valani
Charithaga ghanathaga velagara
Antuleni gamyamukadara
Anthavaraku ledhika nidura
Ashtadikku lanniyu adaara
Amma kanna kalagapaadara
Charithaga ghanathaga velagara
Charithaga ghanathaga velagara
Jananiga deevanam gelupuke
Pusthakam neeshakam
Dhaaga dhaaga kiranaamay
Dharanipayi cheeyaraa santhakam`},
        { title: "TOOFAN",cast:"Ramajogayya Sastry,Prudhvi,Ravi Basrur", src: "Song2.mp3",image:"image1.png", lyrics :`
Toofan Toofan
Yelugitthi Yegasi Thodagottinade
Toofan Toofan
Shivametthi Alala Padagetthinade
Toofan Toofan
Yelugitthi Yegasi Thodagottinade
Toofan Toofan
Shivametthi Alala Padagetthinade
Sarrtrantu Veedu Adugesi
Udyamisthe Aakaramaname
Garrantu Gadhimi Garjisthe
Jaladarinchu Bhoogamaname
Oh Rocky Oh Rocky
Oh Rocky Rocky Rocky
Oh Rocky Oh Rocky
Oh Rocky Rocky Rocky
Hey Churrantu Churuku Muttinchu
Arka Thejamagamaname
Yerranchu Karaku Khadgala
Shaturu Damanamaagamaname
Rock Rock Rocky
Rock Rock Rocky Rocky
Rock Rock Rocky
Rock Rock Rocky
Nee Needalo Marujanmaga
Dhairyaniki Jananam
Bigithapina Pidikilliku
Nerpinchara Jagadam
Swaranam Malinam Veede Aa Rendu
Yamudai Priyathamudai Chalagade
Monagaadu
Vairijanula Mucchamata Munchuta
Veedu Neerchina Modhati Mucchata
Vijrumbinchu Aa Sathuva Mundu
Tu Kya Main Kya Hatja Hatja
Toofan Toofan
Yelugitthi Yegasi Thodagottinade
Toofan Toofan
Shivametthi Alala Padagetthinade
Toofan Toofan
Yelugitthi Yegasi Thodagottinade
Toofan Toofan
Shivametthi Alala Padagetthinade` },
        { title: "BAGUNTUNDHI NUVVU NAVVITHE",cast:"Nutana Mohan, Shekar,Sid Sriram",image:"image2.jpg", src: "song3.mp3", lyrics :`Baguntundhi nuvvu navvithe
Baaguntundhi oosulaadithe
Baaguntundhi gunde meedha
Guvaalaaga nuvaa vaalithe
Baguntundhi ninnu thaakithe
Baagunthundhi nuvvu aapithe
Baagunthundhi kantikunna
Kaatukantha vontikantithe
Baagundhi varaasa
Neemidha koopam yenthundho thelusaa
Laaliste thaggipothundhi bahusaa
Ye manaasu premaa baanisa
Eithe bujjaginchu kuntaane
Ninne netthi nettukuntaane
Nuvve cheppinaattu vintaane
Cheeli cheeli jaalichoopave
Thaadi cheseddhaam pedhavulaani
Mudiveseddhaam manasulaani
Dhachesukundhaam maatalaani
Dhochesukundhaam haayini
Kaadhantanenti chustu nee choraava
Vaddhanna koddhi chestaavu godaava
Nee nunchi nenu thappukovadam suluva
Kowgillalloki laagava
Ammo nuvvu gadusu kadha
Anni neeku thelusukadha
Ainaa bayaata padava kadha
Paadha paadha yenthasepilaa
Veliveseddhaam veluthuraani
Paripaaliddhaam cheekatini
Pattinchukundhaam chematalani
Chuttesukundhaam premaani
Nuvvemo peduthute thondharalu
Naalona siggu chindaravandharaalu
Andhangaa sarduthu naa mungurulu
Moosaavu anni dharulu
Konchem vadhilante ninnilaa
Mottham jaaripovaa vennela
Vere dhaarileka nenilaa
Bandhinchaane anni vaipulaa
Baguntundhi nuvvu navvithe
Baaguntundhi oosulaadithe
Baaguntundhi gunde meedha
Guvaalaaga nuvaa vaalithe`},
        { title: " BHALEGUNDI BAALAA",cast:"Penchal Das,Penchal Das, Nutana Mohan",image:"image3.jpeg", src: "song4.mp3", lyrics :`
Vachaanantivo potaanantivo
Vagalu palukutaave
Vachhaanantivo potaanantivo
Vagalu palukutaave
Katminda haan kataminda
Valle kataminda vaiye alkalsilka
Balegundi bala
Daani edhaana
Ha daani edhaana
Ha daani edhaana vunde
Poola poola raika bhalegundi baalaa
Vachaanantivo potaanantivo
Vagalu palukutaave
Vachhaanantivo potaanantivo
Vagalu palukutaave
Katminda haan kataminda
Valle kataminda vaiye alkalsilka
Bhalegundi baalaa
Daani edhaana
Ha daani edhaana
Ha daani edhaana vunde
Poola poola raika bhalegundi baalaa
Arre re re re re
Naari naari vayyaari sundaree
Navvu magumudaana
Naari naari vayyaari sundaree
Navvu magumudaana
Ni navvomakam
Ni navvomakam
Ni navvomakammil angnachi alka
Bhalegundi baalaa
Ni navvomakammil angnachi alka
Balegundi baalaa
Vachhaanantivo potaanantivo
Vagalu palukutaave
Katminda haan kataminda
Valle kataminda vaiye alkalsilka
Bhalegundi baalaa
Daani edhaana vunde
Pola pola raika bhalegundi baalaa
Arre re re
Arre re re arre arre arre arre
Tikkaregi ekkinaavu komli
Alaka nulaka mancham
Tikkaregi ekkinaavu komli
Alaka nulaka mancham
Alasanda povanikku alatayelne
Agudu se yethuguna
Alasanda povanikku alatayelne
Agudu se yethuguna
Vachhaanantivo
Arre vachhaanantivo
Vachhaanantivo potaanantivo
Vagalu palukutaave
Kataminda vaiye alkalsilka
Bhalegundi baalaa
Daani edhaana vunde
Pola pola raika bhalegundi baalaa
Arre re re re re re
Suruku soopu surakattulisarke
Chinta ela baalaa
Suruku soopu surakattulisarke
Chinta ela baalaa
Kaara maina mudhikara maina
Mudhikara maina nee mooti rupulo
Bhalegundi baalaa
Nee alaka teeranu emi bharanamu
Ivvagunanu bhaamaa
Ennelainaa emanta nachhadu
Ennelainaa emanta nachhadu
Nuvvuleni chotaa
Ennelainaa emanta nachhadu
Nuvvuleni chotaa
Nuvvu pakkanunte
Nuvvu pakkanunte
Nuvvu pakkanunte inkemi vaddule
Chenta chevavaavaa
Inkanaina pattinchukuntanani
Maata ivvu maavaa
Turrumanta paikeyipoddi
Naa alaka chitikalona`},
        { title: "HI NANNA GLIMPSE",cast:"Hesham Abdul Wahab",image:"image4.jpg",src: "song5.mp3" },
        { title: "HOSAAHOREY",cast:"Ananth Sreeram,K.K., Lesle Lewis", image:"image5.jpeg",src: "song6.mp3",lyrics:`Hosahare... Hosahore...
        Saadhinche sattuva unnadhi gundelalo
        Preminche mettani manasula moolalalo
        Maa paata aksharamodalaka vinnado
        Painunna jacksonu kindhiki diguthado
        Hosahare hosahore hey.
        Gundello na paata guitar ai mogindhe
        Yeye yayiye yehe yayiye
        Chetullo na raatha chappatlai cherindhe
        Yehe yayiye yehe yayiye
        Kashtam neeku nesthamavaga
        Vijayam ninnu ishtapadadha
        Nee sangeetham nee radham
        Mundhuku saagupadha
        Premanna aayudham toduga undhi kada
        Hosaho hosaho hosahore hosaho... re
        Ye desam lo aina sandesam maa paate
        Yeye yayiye yehe he hey
        Ye vedika pai aina veduka ra ma aate
        Yehe yayiye yehe he he hey
        Ningi nela nadi madhyana
        Ponge ganga ma bhavana hey
        Pedilla gonthulu kalasina kaalam idhe
        Pedala vedini chaatina vela idhe he he he he hey
        Hosahare hosahore
        Saadhinche sattuva unnadhi gundelalo
        Preminche mettani manasula moolalalo
        Maa paata aksharamodalaka vinnado
        Painunna jacksonu kindhiki diguthado
        Hosahare hosaho hosaho hosaho hosaho
        Hosaho hosaho hosaho hosaho hosaho`},
        { title: "MR. PERFECT",cast:"Kedar,Babavi Sri Prasad & Rita",image:"image15.jpeg", src: "song7.mp3" , lyrics:`Hey tip top dora kadhilindo
Evadiki veedu dorakadulendo
Mudhurando.. Gadusando.. Thodigenu musugando
Uppu kappurambu nokka look nundo
Veedi look chusi mosapovukando
Edavando.. Badavando.. Valalo padakando
Come on Come on.. Most cunningu
Come on Come on.. Masth timingu
Come on Come on.. rightla lo wrongu
Come on Come on.. kothalalo kingu
Come on Come on.. Marche thana rangu
Come on Come on.. Pakka planningu
Mr.Perfect Perfect.. He's Mr.Perfect
Lense yesi vethuku dorakadhu ra ye defect (2)
Eedo pedha edava
Ee matter naaku matram telusu
Veedi gurinchi cheppi cheppi naalikantha kandipoindi
Kaani evadoo nammadu
Paiga ee rojullo ilantooluku
Demand konchem ekkuva
Ayina inko sari try chestha
Tappakunda eedi thaata teestha
Sorry nenu good boy la undalanukuntunnaanu
Anduke andari mundu kaalchanu
Hip lipputhunna cat walk lendo
Crocodile veedu kaalu jarakando
Brute ando bright ando
Live ye chusthundo
Medi pandu lanti man veedando
Man-hole lanti mind veedidhando
Cheatando cheapando
Gajibiji puzzle ando
Come on Come on.. He's got a bag of tricks
Come on Come on.. Beware you trendy chicks
Come on Come on.. Heart hijacker nammodhe
Come on Come on.. He's a jadhoogar
Come on Come on.. He gives u fever
Come on Come on.. He's a cool cracker taakkodhe
Mr.Perfect Perfect.. He's Mr.Perfect (THATS RIGHT)
Lense yesi vethuku dorakadhu ra ee defect
Mr.Perfect Perfect.. He's Mr.Perfect
Lense yesi vethuku dorakadhu ra ye defect
Come on Come on.. Ori govindhu
Come on Come on.. Veedu gurivindhu
Come on Come on.. Sandhu dorikindho dhochesthadayyo
Come on Come on.. Ariyabo sambo
Come on Come on.. Regindhi pambo
Come on Come on.. Veenni aapaali menako rambho..
Mr.Perfect Perfect.. He's Mr.Perfect
Lense yesi vethuku dorakadhu ra ye defect (2)
`},
        { title: "O RENDU PREMA MEGHAALILA",cast:"Ananta Sriram,Sreerama Chandra",image:"image6.webp", src: "song8.mp3", lyrics:`
Em maaye idi.. praayamaa
Are ee lokame.. maayamaa
Vere ye dhyaasaa lede.. aa gundello
Verayye oose raade.. tulle aasallo
Iddaridi.. oke prayaanamgaa
Iddaridi.. oke prapanchamgaa
Aa iddari.. oopiri.. okatayindi.. mellagaa.. mellagaa
O rendu prema meghaalilaa.. dookaayi vaanalaagaa
Aa vaana vaalu ye vaipuko.. telchedi kaalamegaa
O rendu prema meghaalilaa.. dookaayi vaanalaagaa
Aa vaana vaalu ye vaipuko.. telchedi kaalamegaa
Tochinde.. ee janta.. kalalake.. nijamulaa
Saaginde daarantaa.. chelimike.. rujuvulaa
Kanti reppa kanupaapalaagaa.. untaaremo kadadaaka
Sandamaamaa sirivennelalaagaa.. vandellayinaa vidipokaa`},
        { title: "OY OY",cast:"Chandrabose,Siddharth, Prashanthini",image:"image7.jpg", src: "song9.mp3", lyrics :`Noota debbai aaru beach
house lo prema devathaa
Yellow chudidaar white
chunni tho doche naa yedaa
Oye oye antu
casualga pilichero
Oye oye twenty saarlu
kallo kalisero
Oye oye empty gunde
ninda nilichero
Oye oo oo
Love at first sight
naalo kalige
Love at first sight
nannu kadipe
Love at first sight
naake dorke
Love at first sight
nannu korike
Noota debbai aaru beach
house lo prema devathaa
Roopamlona beautiful
chethallona dutyful
Maatallona fundamental
Annitlona capable
andarilona careful
antheleni sentimental
Cinemalo meriseti paapa
citylona dorakadu raa
Nijamgaane thagilenu thaara
Vizag nagarapu chivarana
Jhal jhal jarige
love at first sight
Chill kalige
love at first sight
Pal pal perige
love at first sight
paikedige
Hey hey
Dabbantene allergy
bhakthantene energy
Nammuthundi numerology
Inti mundu nursery
antaneedu allari
Oppukodu humorology
Oo
Undaalsindi
thana borderlo
Cheraalsindi
militarylo
Edo undi
something thanalo
Laagindi
manasunu chitikelo
Some sambarame
love at first sight
Wah varame
love at first sight
Oo oo kshaname
love at first sight
o yugame
Noota debbai aaru beach
house lo prema devathaa
Yellow chudidaar white
chunni tho doche
naa yedaa
Oye oye
antu casualga pilichero
Oye oye
twenty saarlu
kallo kalisero
Oye oye
empty gunde
ninda nilichero
Oye oo oo
Love at first sight
naalo kalige
Love at first sight
nannu kadipe
Love at first sight
naake dorke
Love at first sight
nannu korike
Love at first sight
naalo kalige
Love at first sight
nannu kadipe
Love at first sight
naake dorke
Love at first sight
nannu korike`},
        { title: "PUTTENE PREMA",cast:"Ram Miriyala",image:"image8.jpeg", src: "song10.mp3",lyrics:`Puttene premaa
Padagottene premaa
Emjesaavo emogadammaa
Inthalo premaa anthalo komaa
Athalaakuthalam avuthunnaanammaa
Nee perento cheppu
Konchem ottesukunta
Nee oorento cheppu
Pette sardhesukunta
Cellu numberni cheppu
Ringu ichhesukunta
Manchi date unte cheppu
Pelli chesesukunta
Puttene Puttene
Puttene premaa padagottene premaa
Emjesaavo emogadammaa
Inthalo premaa anthalo komaa
Athalaakuthalam avuthunnaanammaa
Katthulatho eppudu
Kallolamgaa unde dhaarullo
Puvvulaaga merisaave
Moga purugulatho chiraakugaa
Unde jeevithamlo
Aada vaasanipude choopaave
Nee caste yento cheppu
Nenu maarchesukunta
Nee tastento cheppu
Nenu vanta nerchesukunta
Nuvvu cheppedhi cheppu
Nenu oppesukunta
Naannakappunte cheppu
Nenu teerchesukunta
Puttene Puttene
Puttene premaa padagottene premaa
Emjesaavo emo gadammaa
Domatera laaga ussoorani
Unde naa life
Vendi tera chesaave
Okka navvuthone kundi laanti
Bujji gundelona
Prema vithanaale jallesaave
Nee ishtaalu jeppu
Listu raasesukunta
Nee kashtaalu jeppu
Netthimeedesukunta
Emi kaavaalo jeppu
Giftu ichchesukunta
Nuvvu kaadhante jeppu
Nenu uresukunta
Puttene Puttene
Puttene premaa padagottene premaa
Emjesaavo emogadammaa
Inthalo premaa anthalo komaa
Athalaakuthalam avuthunnaanammaa` },
        { title: "AVUNANAVAA",cast:"Ramajogayya Sastry,Sid Sriram",image:"image9.png", src: "song11.mp3", lyrics:`
Dheemthanana Dhirana
Dheemthanana Dhirana
Dheemthanana Dheemthanana
Dhire Dhire Naa
Dheemthanana Dhirana
Dheemthanana Dhirana
Dheemthanana Dheemthanana
Dhire Dhire Naa
Hmm Mm Mm 
Emani Anaalani
Thochani Kshanaalivi
Ye Malupo Edurayye
Payanamidhaa
Aamani Nuvvenani
Nee Jatha Cheraalani
Ye Thalapo Modhalayye
Mounamidhaa
Evo Guruthulu Nannadige Prashnalaki
Nuvve Badhulani Raagalanaa Nee Dhariki
Vidigaa Thadigaa Viraboose Kalaki
Cheliyaa Nee Kaanthi Nandhinchavaa
Avunanavaa Avunanavaa Avunanavaa
Manasunu Sambaalinchava
Avunanavaa Avunanavaa Avunanavaa
Maralaa Premaga Sameepinchavaa
Hmm Mm Mm 
Thelise Lope Nuvu Theliselope
Cheli Cheyi Jaarindhe Prapancham
Kaliselope Manam Kaliselope Ilaa
Edabaatai Ragilinadhe Kaalam
Kannedhute Vajraani Kanugontu Unna
Vethikaane O Theeraalani
Nijamedho Thelisaaka Ipudantu Unna
Ennatiki Nuvu Kaavaalani
Avunanavaa Avunanavaa Avunanavaa
Manasunu Sambaalinchavaa
Avunanavaa Avunanavaa Avunanavaa
Maralaa Premaga Sameepinchavaa
Avunanavaa Avunanavaa Avunanavaa
Dheemthanana Dhirana
Dheemthanana Dhirana
Dheemthanana Dheemthanana
Dhire Dhire Naa
Dheemthanana Dhirana
Dheemthanana Dhirana
Dheemthanana Dheemthanana
Dhire Dhire Naa
Avunanavaa Avunanavaa Avunanavaa
Manasunu Sambaalinchavaa
Avunanavaa Avunanavaa Avunanavaa
Maralaa Premaga Sameepinchavaa`},
        { title: "CHIRUNAVVE VISIRAVE",cast:"Vijay Prakash",image:"image10.jpg", src: "song12.mp3", lyrics:`Chirunavve visiraave nidurinche kalapai
Sirimuvvai nadichaave ninukoreti ee gundepai
Velugedo parichaave ninnu choosthunna naakallapai
Chirunavve visiraave nidurinche kalapai
Sirimuvvai nadichaave ninukoreti ee gundepai
Sarada saradalenno andinchaave
Samayam gurutheraani saavaasamtho
Viraham cheralo nanne bhandinchaave
Yepudu maruperaani nee andamtho
Ahvanam pampinchave Anandam rappinchaave
Reppallona thrulle choopultho
Aaraatam vurinchaave momaatam maarinchaave
Cheruvalona chese dooramtho
Cheliyaa aa aaa aaa
Chirunavve visiraave nidurinche kalapai
Sirimuvvai nadichaave ninukoreti ee gundepai
Asale vayase nannu tharimesthunte
Apude yedurouthaavu em cheyyale
Asali thadabatentani adigesthunte
Sariga namminche badulem cheppale
Thappedo chesthunnattu thappinchukuntunnattu
Yennalinka kaalam gadapaale
Neekosam nenunnattu neepranam nammetattu
Evvarithona kaburampinchaale
Cheliyaa aa aaa aaa
Chirunavve visiraave nidurinche kalapai
Sirimuvvai nadichaave ninukoreti ee gundepai
Velugedo parichaave ninnu choosthunna naakallapai
Chirunavve visiraave nidurinche kalapai
Sirimuvvai nadichaave ninukoreti ee gundepai`},
        { title: "KALALLO",cast:"Ananta Sriram,Kulkarni, Madhushree",image:"image11.jpg", src: "song13.mp3", lyrics:`Ne kalalo kooda anukoledhe
Manasu isthavani
Naa kannula ninda
Rangu rangula kalalu testhavani
Nee kaali muvvalu chese sadi
Vintu gadipestaane
Asalinko janma vundo ledo
Manaki endukule
Prathi rojoka janma anukuntune
Preminchukundaame
Asalinko janma vundo ledo
Manaki endukule
Prathi rojoka janma anukuntune
Preminchukundaame
Naa madhi tarapuna
Ney chebuthunna
Vadalanu vadalanu
Ninnepudu
Evarevarevaro emanukunna
Okariki okaram manamipudu
Nuvvu naa oopire
Brathikedela vadilithe
Gundelo vecchaga
Daachanu kada andhuke
Naa kalla mundu
Nuvvu leni nimishamaina
Adhorakam digulu
Mana madhyaki doore
Gaaliki kooda
Gaaladanivvodhe
Mana allari chuste nidharakaina
Niddhara pattodhe`},
        { title: "KANNULO UNNAVU",cast:"Hariharan,Saindhavi,Vijayalakshmi", image:"image12.jpg",src: "song14.mp3", lyrics :`
Kannullo Unnaavu
Naa Kanti Paapavai
Gundello Nindaavu
Naa Gunde Savvadai
Nee Ooha Naaku Oopirai
Naaloki Cherukunnadhi
Nee Peru Praananaadi Ayinadhi
Oo Oo OoOo Oo
Kannullo Unnaavu
Naa Kanti Paapavai
Gundello Nindaavu
Naa Gunde Savvadai
Ubhayakushala Chirajeevana
Prasthutha Bharitha Manjulathara
Shrungaare Sanchaare
Adhraruchitha Madhurithabhaga
Sudhanakanaka Prasamaniratha
Baandhavye Mangalye
Mamathamasaku Samadhasasatha
Mudhamanasutha Sumanalayiva
Susuthasahithagaamam
Viraharahitha Bhaavam
Aanandha Bhogam Aa
Jeevakaalam Paashaanubandham
Thaalaanukaalam
Dhaivaanukoolam Kaamyaardhasiddhim
Kaa Maye
Hrudhayaanni Thaake
Nee Navvu Naadhe
Udhayaanni Dhaache
Kurulinka Naave
Odilona Vaale Nee
Momu Naadhe
Madhuraalu Dhoche
Adharaalu Naave
Neelo Parimalam
Penchindhe Paravasham
Nee Choopu Nunchi
Prema Pongene
Oo OoOo Oo Oho Ho
Kannullo Unnaavu
Naa Kanti Paapavai
Gundello Nindaavu
Naa Gunde Savvadai
Edhedho Aasha
Kadhilindhi Naalo
Thelapaalanante
Saripodhu Janma
OoOo Ye Janmakainaa
Untaanu Neelo
Ye Chotanainaa
Ninu Veedanamma
Kaalam Mugisina Ee
Bandham Mugiyunaa
Nee Choopu Nunchi
Prema Pongene
Oo OoOo Oo Oho Ho
Kannullo Unnaavu
Naa Kanti Paapavai
Gundello Nindaavu
Naa Gunde Savvadai
Nee Ooha Naaku Oopirai
Naaloki Cherukunnadhi
Nee Peru Praananaadi
Ayinadhi
Oo Oo OoOo Oo
Kannullo Unnaavu
Naa Kanti Paapavai
Gundello Nindaavu
Naa Gunde Savvadai`},
        { title: "NEE CHOOPULE",cast:"Haricharan and K. S. Chithra",image:"image13.jpg", src: "song15.mp3", lyrics :`Nee choopule naa oopiri
Osarila choode cheli
Amavasanai unna mari
Andinchave deepavali
Enduke cheliya reppala valalo odhigina kalala..
Kanupapalu vethike repati velugunu chusi chudavela…
Nayanam hrudayam neeve neevai
Samayam venuke chesa payanam
Tadupari janmakaina jaali chuse veelundhante
Ee kshanaana oopiraapana…
aaa.aaa…aa…aa…aaa…
aaa.aaa…aa…aa…aaa…
Roju kotthaga nee sandarshanam
Ahaa annadi nalo spandanam
Nithyam nuvvila nakai choodatam
Entho vinthaga undhee anubhavam
Nadi vesavi lo marigisthune muripisthonde ni challadanam
Yedha mantantha dachesthu vennelayindhi prema gunam
Neekai veche nittoorupule thoorupu kanee
Nee thalapulalo talamunakavani enno janmalani
Nayanam hrudayam neeve neevai
Samayam venuke chesa payanam
Tadupari janmakaina jaali chuse veelundhante
Ee kshanaana oopiraapana…
Nitho bandhame raasindevvaro
Ninne nakila chupindevvaro
Nanneevaipuga laagindevvaro
Ninne choodaga aapindevvaro
Daridaapullo padigapullo nilicha neerai darullo
Tholi velugalle vastale kalise repati poddhullo
Nee choopule naa oopiri
Osarila choode cheli
Amavasanai unna mari
Andinchave deepavali
Enduke cheliya reppala valalo odhigina kalala..
Kanupapalu vethike repati velugunu chusi chudavela…
Nayanam aa.. hrudayam aa.. neeve aa.. neevai aa..
Samayam aa.. venuke aa.. chesa aa.. payanam
Tadupari janmakaina jaali chuse veelundhante
Ee kshanaana oopiraapana…
aaa.aaa…aa…aa…aaa…
aaa.aaa…aa…aa…aaa…`},
        { title: "EDO PRIYA RAGAM VINTUNNA",cast:"Sirivennela Seetharama Sastry,Sumangali", image:"image14.jpeg",src: "song17.mp3", lyrics :`yedo priyaraagam vintunnaa chirunavullo
premaa aa sandadi needenaa
yedo nava naatyam choostunnaa sirimuvvallo
premaa aa savvadi needenaa
ittaage kalakaalam choodaalanukuntunnaa
itupaina ee swapnam kariginchaku emaina
premaa o premaa chirakaalam naavente
nuvvunte nijamegaa swapnam
nuvvunte prati maata satyam
nuvvunte manasantaa edo teeyani sangeetam
nuvvunte prati adugu andam
nuvvunte prati kshanamu swargam
nuvvunte ika jeevitamantaa edo santosham

paata paadada mounam puri vippi aadada praanam
adavinaina poodota cheyada premabaatalo payanam
daarichoopada soonyam aracheta vaalada swargam
elladaati paravallu tokkada velluvaina aanandam
premaa nee saawaasam naa swaasaku sangeetam
premaa nee saannidhyam naa oohala saamraajyam
premaa o premaa gundello kalakaalam
nuvvunte prati aasa sontam
nuvvunte chirugaale gandham
nuvvunte endaina kaada challani saayantram
nuvvunte prati maata vedam
nuvvunte prati paluku raagam
nuvvunte chirunavvulatone nindenu ee lokam

unnachota unnaana aakasamandukunnaana
cheliyaloni ee kotta sambaram naaku rekka todigena
munigi telutunnaana ee mucchataina muripaana
aameloni aananda saagaram nannu munchu samayaana
hariville nannalle ee rangulu nee valle
sirimallela vaagalle ee vennela neevalle
premaa o premaa idi saaswatamanukona
nuvvunte digulantuu raade
nuvvunte velugantuu pode
nuvvunte mari maatalu kooda paataipotaaye
nuvvunte edurantuu lede
nuvvunte alupantuu raade
nuvvunte e kashtaalaina ento ishtaale
`},
        { title: "SAMAYAMA",cast:"Anantha Sriram,Kulkarni,Krishnakumar", image:"image4.jpg",src: "song18.mp3",lyrics:`
Samayamaa…
Bhale Saayam Chesaavamma
Ottugaa, Ottugaa
Kanulake..!
Thana Roopaannandhinchaave Guttuga
O Idhi Saripodhaa
Sare Sare Thondarapadako
Thadupari Katha Etuko
Etu Mari Thana Nadako
Chivariki Evarenako
Samayamaa…
Bhale Saayam Chesaavamma
Ottugaa, Ottugaa
Kanulake..!
Thana Roopaannandhinchaave Guttuga
Ho, Thanu Evare?
Nadiche Thaara, Thalukula Dhaara
Thanu Choosthunte, Raadhe Niddhura
Palike Yeraa, Kunuke Ouraa
Alalai Ponge Andham
Adhi Thana Peraa..!
Aakaashaanne Thaagesindhe
Thana Kannullo Neelam
Choopullone Edho Indrajaalam
Bangaru Vaanallo Ninda Munche Kaalam
Choosthaamanukoledhe Naalotallam
Bhoogolaanne Thippese
Aa Bungamoothi Vainam
Choopisthundhe Thanalo Inko Konam
Changavi Chempallo
Chengumantu Mounam
Choosthu Choosthu
Theesthu Undhe Praanam
Thanu Cherina Prathi Chotila
Chaala Chitrangunnadhe
Thanatho Ilaa Prathi Gnapakam
Chaaya Chitram Ayinadhe
Sare Sare Thondarapadako
Thadupari Katha Etuko
Etu Mari Thana Nadako
Chivariki Evarenako
Samayamaa…
Bhale Saayam Chesaavamma
Ottugaa, Ottugaa
Kanulake..!
Thana Roopaannandhinchaave Guttuga
O idhi Saripodhaa
Samayamaa…` },
        { title: "UPPENANTHA",cast:"Balaji,Devi Sri Prasad & KK", image:"image15.jpeg",src: "song19.mp3", lyrics :`
Uppenantha ee premaki..
Guppedantha gunde yemito..
Cheppaleni ee hayiki..
Ee bhashe enduko..
Thiyyanaina ee badhaki..
Uppu neeru kanta deniko
Reppapatu duuranike..
Viraham enduko..
Ninnu chuse ee kallaki..
Lokamantha inka enduko..
Rendu aksharala premaki..
Inni siksha lendukoo..
I love you..
Naa oopiri aagipoyina..
I love you..
Naa pranam poyina..
I loove you..
Naa oopiri aagipoyina..
I love you..
Naa pranam poyina..
Uppenantha ee premaki..
Guppedantha gunde yemito..
Cheppaleni ee hayiki..
Bhashe enduko..
Kanuloki vasthavu..
Kalalu narikesthavu..
Secondukosaraina champestavu…
Manchula untavu..
Manta peduthuntavu..
Venta padi naa manasu masi chesthavu..
Theesukunte nuvu oopiri..
Posukunta aayuve cheli
Guchukoke mullu la mari..
Gundello sara sari
I love you..
Naa oopiri aagipoyina..
I love you..
Naa pranam poyina..
I loove you..
Naa oopiri aagipoyina..
I love you..
Naa pranam poyina..
Uppenantha ee premaki..
Guppedantha gunde yemito..
Cheppaleni ee hayiki..
Bhashe enduko..
Chinukule ninu thaaki merisipothanante ..
Mabbule pogesi kalcheyana
Chelakale ni paluku..
Thirigi palikayante
Tholakare lekunda paatheyana
Ninnu kori poolu thakithe..
Narukuthanu poola thotane
Ninnu choosthe unna chotane..
Thodestha aa kallane..
I love you..
Naa oopiri aagipoyina..
I love you..
Naa pranam poyina..
I loove you..
Naa oopiri aagipoyina..
I love you..
Naa pranam poyina..
I loove you..
Naa oopiri aagipoyina..
I love you..
Naa pranam poyina..
Uppenantha ee premaki..
Guppedantha gunde yemito..
Cheppaleni ee hayiki..
Bhashe enduko..`},
        { title: "NEEVE",cast:"Ananth Sreeram,G. V. Prakash Kumar",image:"image5.jpeg", src: "song20.mp3", lyrics :`Neeve Neeve… Neeve Neeve…
Neeve Neeve… Neeve Neeve…
Neeve Neeve… Neeve Neeve…
Neeve Neeve… Neeve Neeve…
Edaina nee tharuvathe anipisthundhey ila…
Yemaina adhi nee valley jariguntundhey elaa
Edhirosthuney Vunnavey, ne Ey daarilo velthunna
Kadhilisthuney Vunnavey, ne nekantham lo Vunna
Maripisthuney Vuntavey, nakem Yem em gurthosthunna
Muripisthuney Vuntavey, na mundhey nuvvulekunna
Neeve Neeve ... Neeve Neeve
Neeve Neeve.... Neeve Neeve
Follow him around.. above to the town..Baby check me with u, I am with u, show me all around..hey
Follow him around.. above to the town..Baby check me with u, I am with u, show me all around
Na na na na naa....
Gonna get you gonna get you
Na na na na naa....
Gonna get you gonna gonna get you...
Oka nimisham lo na santhosham,
Oka nimisham lo na sandheham
Nidhurana kuda hey ni dhyaanam
vadhaladhu nanne oh nee roopam..
Nuvvey….Nuvvey.. Nuvvey
Alochisthu pichodnayya neney….cheliyaa
Edhirosthuney Vunnavey, ne Ey daarilo velthunna
Kadhilisthuney Vunnavey, ne nekantham lo Vunna
Maripisthuney Vuntavey, nakem em em gurthosthunna
Muripisthuney Vuntavey, na mundhey nuvvulekunna
Neeve Neeve ... Neeve Neeve
Neeve Neeve.... Neeve Neeve
Nadakalu saagedhi nee vaipe…palukulu aagindhi nee valle..
Evariki chebutunna nee oosey, chivariki neenayya nee laaney..
Nuvvey……hey hey…Nuvvey..Nuvvey
Chuttu antha thittesthunna neney…vinaney…
Edhirosthuney Vunnavey, ne Ey daarilo velthunna
Kadhilisthuney Vunnavey, ne nekantham lo Vunna
Maripisthuney Vuntavey, nakem em em gurthosthunna
Muripisthuney Vuntavey, na mundhey nuvvulekunna
Neevey..Neevey..Neevey…..Neevey……..
Neevey...Neevey..Neevey…..Neevey……..
Yedhyna nee tharuvathey anipisthundhey ila…
Yemaina adi nee valley jariguntundhey Yela…
`},
        { title: "SUTIGA CHOODAKU",cast:" Sreeram,Aravind Shankar,Saindhavi",image:"image16.jpeg", src: "song21.mp3", lyrics :`Aa AaAa AaAa AaAaa

Sutiga Choodaku… Sudila Navvaku

(Din Dinakau Dinna… Din Dinakau Dinna)

(Din Dinakau Dinna… Din Dinakau Dinna)


Eduruga Nilabaduthu Edhane Thinaku

Nadumuni Melipeduthu Usute Thiyyaku

Sogase Segale Pedithe Chedaradha Kunuku

(Din Dinakau Dinna… Din Dinakau Dinna)

(Din Dinakau Dinna… Din Dinakau Dinna)

Sootiga Choodaku… Soodila Navvaku



Ningilo Merupalle Thaakinadhi Nee Kalaa

Nelapai Maharani Chesinadi Nannilaa

Anthahpuram Santoshamai Veligindigaa

Andaalane Minche Andam Marugeyaga

Antha Neevalle Nimishamlo Maarindanta

Banthipoovalle Naa Choope Vichhindanta

Sootiga Choodaku Soodhila Navvaku



(Seetha Kalyana Vaibhogame)

(Rama Kalyana Vaibhogame)

(Gouri Kalyana Vaibhogame)

(Lakshmi Kalyana Vaibhogame)


Gantalo Modalaindi Kaadu Ee Bhaavana

Gatha Janmalo Kadilindho Emo Mana Madhyana

Undundi Naa Gundello Ee Eduremito, Oo

Indaakilaa Undaa Mari Epudendhuko

Neelo Ee Aasha Kalakaalam Jeevinchaali

Neetho Janmantha Ee Rojalle Undaali



Sootiga Choodaku Soodhila Navvaku

Eduruga Nilabaduthu Edhane Thinaku

Nadumuni Melipeduthu Usute Thiyyaku

Sogase Segale Pedithe Chedaradha Kunuku
`},
        { title: "WAITING FOR YOU",cast:"Vanamali,K.K.", image:"image7.jpg",src: "song22.mp3", lyrics :`Chiru navvee navvutu... nakosam vastavani
chigurase reputu.... ni premanu testavani
ninu vethikane.... nanne thake galulne araathistu
niluchunna ne nikai veche tiranne araadistuu...
prathi janma nithone...... iam waiting for u baby
prathi janma nithone.... iam waiting for u babee...
Oho Oho ooo ooo ooo.....
Oho Oho ooo ooo ooo .....................|| Chiru navvee ||
Nuvvu nenu....... Yekam ayye prema lona Ooo..
ponge prelayam...... ninnu nannu vanchinchenaaa..
puvve mullai katestonda.....aa aa aaa
Nire nippi kalchestonda..... aa aa aaa
vidinina veleyana... ninu gelicheyanaaa..
nikosam niriksana... iam waiting for u babee
prathi janma aa nithone.... iam waiting for u babe............
Premane oke matey ...... aamelo gatinchinnda
veedani bhayam edo .... gundane tholustonda
aaa ohey thana madilo kalathalee repena
vidinina veleyana.... ninu gelicheyanaaa..
nikosam niriksana.... iam waiting for u babe.....
Chiru navvee navvutu... nakosam vastavani
chigurase reputu.... ni premanu testavani
ninu vetikane.... nanne thake galulne aratistu
niluchunna ne nikai veche tiranne aradistuu...
prathi janma nithone...... iam waiting for u baby
prathi janma nithone.... iam waiting for u babee...`},
        { title: "CHINNADANA NEEKOSAM",cast:"Krishna Chaitanya,Raj Hasan,Sravani", image:"image16.jpeg",src: "song23.mp3", lyrics :`

Hoo Terebin Jaana
Kuchu Bhi Nahi Mai
Ishq Me Mein Deewanaa
Aalebaa Aalebaa
Aale Aale Aale Aalebaa
Nannananana Aalebaa
Nannananana Aalebaa
Nannananana Nannananana
Nannananana Nannananana
Ooo Adire Adire
Nee Nallani Kaatuka Kalle Adire
Adire Adire Naa Manase Eduru Chuse
Chinnadana Neekosam
O Chinnadana Neekosam
Chinnadana Neekosam
O Chinnadana Neekosam
Nachave Nachave
Antondi Manase Nimisham
Edaina Emaina Vechunna Nenu
Chinnavada Neekosam
Chinnavada Neekosam
Matalanni Neekosam
Mounam Antha Neekosam
Ooo Kuvvani Koyila Undade Raayila
Kotha Paata Paaduthondila
Tiyyani Haiyilo Telani Gaalilo
Pellidaka Parichayam Ila
Hey Etuvaipellina Ne Ninne Cherana
Melipeduthu Ila Mudipadipona
Oo Jaji Komme Na Chelli
Jaavalile Padenuro
Prema Ante Anthe Roo Anni Vinthe Ro
Vekuvantha Neekosam
Vennelantha Neekosam
Oosulanni Neekosam
Oopirundi Neekosamm
Aalebaa Aalebaa
Aale Aale Aale Aalebaa
Ooo Prema Pusthakalalo Lene Leni Polika
Raayatam Kadu Telika
Maatale Ravu Ga Mouname Haayiga
Bhavamaithe Boledundigaa
Nee Navve Sutiga Telipinde Raayika
Challe Tikamaka Alluku Pove
Hoo Galilone Raasina
Mana Prema Ithe Chedaradule
Alala Aduguna Munigina Teeram Cherunule
Khadalaina Neekosam Neekosam
Prema Ina Neekosam Neekosam
Love You Ina Neekosam Neekosam
Ishq Ina Neekosam Neekosam`},
        { title: "LEHARAAYI",cast:"Sid Sriram", image:"image17.jpeg",src: "song24.mp3", lyrics :`

Leharaayi leharaayi
Leharaayi leharaayi
Goruvechhanaina oosuladhiraayi
Leharaayi leharaayi
Goruvechhanaina oosuladhiraayi
Inninaallu entha entha vechaayi
Kallalone daagi unna ammaayi
Sonthamalle cheruthuntey
Praanamantha cheppaleni haayee
Leharaayi leharaayi
Gunde vechhanayye oohalegiraayi
Leharaayi leharaayi
Goruvechhanaina oosuladhiraayi
Roju chekkilitho siggula thaguvaaye
Roja pedhavulatho mudhdhula godavaaye
Vanta gadhilo mantalannee
Ontilokey omputhuntey
Mari ninna monna ontiga unna
Eedey nedey leharaayi
Leharaayi leharaayi
Gunde vechchanayye oohalegiraayi
Leharaayi leharaayi
Goruvechhanaina oosuladhiraayi
Velapaalalaney marichey sarasaaley
Thedhi vaaraaley
Cheripey cherasaaley
Chanuvu koncham penchukuntoo
Thanuvu baruvey panchukuntoo
Manalokam maikam ekam avuthu
Ekaanthaaley leharaayi
Leharaayi leharaayi
Gunde vechchanayye oohalegiraayi
Leharaayi leharaayi
Goruvechhanaina oosuladhiraayi
Inninaallu entha entha vechaayi
Kallalone daagi unna ammaayi
Sonthamalle cheruthuntey
Praanamantha cheppaleni haayee`},
        { title: "MEHABOOBA",cast:"Kinnal Raj,Ananya Bhat",image:"image1.png", src: "song25.mp3", lyrics :`
Mande Gundelo
Chirujallai Vastunna
Nindu Kaugililo
Marumalelo Poostunna
Ey Alazadi Velanaina
Talanimire Chelinai Lena
Ni Alasata Tircha Lena
Na Mamatala Odilona
Mehabooba Main Teri Mehbooba
Mehbooba Main Teri Mehbooba
Mehbooba Main Teri Mehbooba
Mehbooba Oh Main Teri Mehbooba
Chanuvaina Vennello Challayani
Alalai Na Dawanalam
Uppenai Egasina Swasa Pavanalaku
Jata Kavaali Andala Cheli Parimalam
Reppale Muyani
Vippu Kanudoyiki
Laali Padaali
Paruvala Gamada Vanam
Viradhi Virudivaina
Pasivadiga Ninu Chustunna
Ni Ekantala Velite
Porista Ikapaina
Mehabooba Main Teri Mehbooba
Mehbooba Main Teri Mehbooba
Mehbooba Main Teri Mehbooba
Mehbooba Oh Main Teri Mehbooba
`},
        { title: "OH PREMA",cast:"Krishnakanth,Kapil Kapilan, Chinmayi",image:"image18.jpeg", src: "song26.mp3" , lyrics:`Vastha Ne Ventane
Untaa Nee Ventane 
Maatokati Cheppenthalo
Payanaalu Modhalaayene

Oh Prema Avasarama
Maaye Nee (Maaye Nee) Ee Ee Ee
Chirunaama (Chirunaama) Aa AaAa

Manasantha Neeve Priya
Virahaanni Champedhelaa
Anthariksham Anchudhaaka
Prema Thaakindhigaa

Neetho Gnapakaale
Ee Manchula Avi Karagave
Ee Nee Parimalaale
Gundelo Nindele

Oh Prema (Oh Prema) Aa Aa
Avasarama (Avasarama) Aa AaAa
Maaye Nee (Maaye Nee) Ee Ee Ee
Chirunaama (Chirunaama) Aa AaAa

Itu Choodava Priyathama
Edabaatu Anukokumaa
Kaalikindhe Chikkukundhi
Choodu Naa Praaname

Dhooram Aaviraaye
Nee Vechhani Nishwaasalo
Nidhure Chedhirelope
Thirigiraa Swapnamaa

Oh Prema (Oh Prema) Aa Aa
Avasarama (Avasarama) Aa AaAa
Maaye Nee (Maaye Nee) Ee Ee Ee
Chirunaama (Chirunaama) Aa AaAa`},
        { title: "PREMISTHUNNA",cast:"Suresh Banisetti,P V N S Rohit", image:"image6.webp",src: "song27.mp3" },
        { title: "YEDHAKI OKA GAAYAM",cast:"Hesham Abdul Wahab,Divya S Menon", image:"image19.jpeg",src: "song28.mp3" },
        { title: "EM CHEPPANU",cast:"Sirivennela,Seetarama Sastry,Karthik", image:"image20.jpeg",src: "song29.mp3" },
        { title: "FEEL MY LOVE",cast:"Chandrabose,KK, Clinton Cerejo", image:"image14.jpeg",src: "song30.mp3", lyrics:`feel my love feel my love
naa premanu kopam gaano
naa premanu dwesham gaano
naa premanu saapam gaano cheliyaa  feel my love
naa premanu bharam gaano
naa premanu dooram gaano
naa premanu neram gaano sakhiyaa  feel my love
naa premanu mounaamu gaano
naa premanu heenaam gaano
naa premanu Soonyam gaano kaado ledo edo gaano
feel my love feel my love
feel my love feel my love

nenicche lekhalanni chinchestuu  feel my love
ne pampe puvvulane visirestuu  feel my love
ne cheppe kavitalanni chii kodutu  feel my love
naa chilipi cheshtalake visgoste  feel my love
naa uluke nacchadantuu naa oohe raadani
nenaante gittadu antuu naa maate chedani
naa jante cheranantu antuu antuu anukuntune feel my love

yerupekki choostuune kallaaraa feel my love
yedoti tidutuune noraaraa feel my love
vidilinchi kodutoone cheyyaaraa feel my love
vadilesi velutoone adugaaraa feel my love
adugulake alasatoste chetiki sramaperigite
kannulake kunuku vaste pedavula palukaagite
aa painaa okka saari hrudayam antu neekokatunte feel my love
feel my love…feel my love

feel my love…feel my love`},
        { title: "MANASANTA MUKKALU CHESI",cast:"KK",image:"image21.jpeg", src: "song31.mp3" },
        { title: "POVADHE PREMA",cast:"Vanamali,Yuvan Shankar Raja",image:"image7.jpg", src: "song32.mp3" },
        { title: "PRAANAMA",cast:"Ananth Sreeram,Rahul Nambiar",image:"image5.jpeg",src: "song33.mp3" },
        { title: "RIBAPAPPA",cast:"Suresh Banisetti,Sri Krishna",image:"image6.webp", src: "song34.mp3" },
        { title: "CHANTI PILLALA",cast:"Suresh Banisetti,Anudeep Dev",image:"image6.webp", src: "song35.mp3" },
        { title: "MY LOVE IS GONE",cast:"Chandrabose,Devi Sri Prasad",image:"image15.jpeg", src: "song36.mp3" },
        { title: "NUVVE NUVVE",cast:"Chitra, Vijay Prakash",image:"image21.jpeg", src: "song37.mp3" },
        { title: "VINARAA",cast:"Sachin Basrur",image:"image22.jpeg", src: "song38.mp3" },
        { title: "KALALO KOODA",cast:"Bhaskarabhatla,Tanishk,Sid Sriram",image:"image23.jpeg", src: "song39.mp3" },
        { title: "Theme of kalki",cast:"Chandrabose,Kaala Bhairava, Gowtham",image:"image24.jpeg", src: "song40.mp3" },
        // Add more songs as needed
    ];

    useEffect(() => {
        const audioElement = audioRef.current;
        const updateCurrentTime = () => setCurrentTime(audioElement.currentTime);
        const updateDuration = () => setDuration(audioElement.duration);

        audioElement.addEventListener('timeupdate', updateCurrentTime);
        audioElement.addEventListener('loadedmetadata', updateDuration);

        return () => {
            audioElement.removeEventListener('timeupdate', updateCurrentTime);
            audioElement.removeEventListener('loadedmetadata', updateDuration);
        };
    }, []);

    useEffect(() => {
        if (currentSongIndex !== null) {
            audioRef.current.play();
            setIsPlaying(true);
        }
    }, [currentSongIndex]);

    const playHandler = () => {
        audioRef.current.play();
        setIsPlaying(true);
    };

    const pauseHandler = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    };

    // const stopHandler = () => {
    //     audioRef.current.pause();
    //     audioRef.current.currentTime = 0;
    //     setIsPlaying(false);
    // };

    const nextSongHandler = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex + 1) % playlist.length);
    };

    const prevSongHandler = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex - 1 + playlist.length) % playlist.length);
    };

    const onEndedHandler = () => {
        nextSongHandler();
    };
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const [isExpanded, setIsExpanded] = useState(false);
    const [btnexpand,setbtnexpand]=useState(false)
    const handleExpand = () => {
        if (!isExpanded) {
            if(!btnexpand)
            setIsExpanded(true);
            setbtnexpand(true)
        }
    };
    const handleReset = () => {
        setIsExpanded(false);
        setbtnexpand(false);
    };
    const [color, setColor] = useState('#ffffff'); // Default color is white

    useEffect(() => {
      const interval = setInterval(() => {
        const randomColor = getRandomColor();
        setColor(randomColor);
      }, 1500); // Change color every 2 seconds (adjust interval as needed)
  
      return () => clearInterval(interval);
    }, []); // Empty dependency array ensures effect runs only once on mount
  
    const getRandomColor = () => {
      const letters = '0123456789ABCDEF';
      let randomColor = '#';
      for (let i = 0; i < 6; i++) {
        randomColor += letters[Math.floor(Math.random() * 16)];
      }
      return randomColor;
    };
    return (
        <div>
            <div>
                {playlist.map((song, index) => (
                    <div key={index} onClick={() => setCurrentSongIndex(index)} style={{ height:"60px",padding:"5px",backgroundColor:"transparent",color:"white",cursor: 'pointer', margin: '10px',display:"flex",justifyContent:"space-equaly",flexDirection:"column",border:"1px solid black"}}>
                        {song.title}
                        <div key={index} onClick={() => setCurrentSongIndex(index)} style={{ fontFamily:"Helvetica",color:"#8b8c89",display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                          {song.cast}
                           <div key={index} onClick={() => setCurrentSongIndex(index)} style={{height:"50px",width:"50px",backgroundColor:"white"}}>
                             <img id="image-size" src={song.image} alt=""/>  
                           </div>
                        </div>
                        
                    </div>
                ))}
    
            </div>
            <div  className={`nowplay ${isExpanded ? 'expanded' : 'collapsed'}`} >
                {currentSongIndex==null && (
                    <div id="man"  style={{ 
                        backgroundColor: color, 
                        display:"flex",
                        flexDirection:"row",
                        alignItems:"center",
                        justifyContent:"space-evenly"
                      }}>
                        <div>
                        <img id="play-walk" src="play-walk.gif" alt=" "/>
                         </div>
                      </div>
                )}
                {currentSongIndex !== null && (
                    <>
                    <div>
                       {isExpanded && <button className={`btn ${btnexpand ? 'expand' : 'collapse'}`}onClick={handleReset} style={{backgroundColor:"transparent",border:"none"}}><i class="fa-solid fa-xmark" style={{color:"black"}}></i></button>}
                    </div>
                    <button onClick={handleExpand} >
                        <img id="image-play" src="play.gif" alt=" "/>
                    </button>
                        <p>{playlist[currentSongIndex].title}</p>
                        <p>
                            {formatTime(currentTime)} / {formatTime(duration)}
                        </p>
                        <progress value={currentTime} max={duration}></progress>
                        { isExpanded && <div id="lyrics">
                            <div id="flow">{playlist[currentSongIndex].lyrics}</div></div>}
                        {isExpanded && <div id="hide"></div>}
                        <div id="controlbtn">
                          <button  className="songbtn1"onClick={prevSongHandler} disabled={currentSongIndex === null}>⏮</button>
                           {isPlaying ? (
                          <button  className="songbtn"onClick={pauseHandler} disabled={currentSongIndex === null}>⏸️</button>
                           ) : (
                         <button  className="songbtn"onClick={playHandler} disabled={currentSongIndex === null}>▶️</button>
                         )}
                          {/* <button  className="songbtn"onClick={handleplay} disabled={currentSongIndex === null}>⏹️</button> */}
                          <button  className="songbtn1"onClick={nextSongHandler} disabled={currentSongIndex === null}>⏭</button>
                        </div>
                    </>
                    
                )}
            </div>
            <audio id='play'
                ref={audioRef}
                src={currentSongIndex !== null ? playlist[currentSongIndex].src : ''}
                onEnded={onEndedHandler}
                onPause={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
                controls 
            />
        </div>
        
    );
};

export default AudioPlayer;
