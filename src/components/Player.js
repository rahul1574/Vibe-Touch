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
        { title: "MR. PERFECT",cast:"Kedar,Baba Sehgal, Devi Sri Prasad & Rita",image:"image15.jpeg", src: "song7.mp3" , lyrics:`Hey tip top dora kadhilindo
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
        { title: "O RENDU PREMA MEGHAALILA",cast:"Ananta Sriram,Sreerama Chandra",image:"image6.webp", src: "song8.mp3" },
        { title: "OY OY",cast:"Chandrabose,Siddharth, Prashanthini",image:"image7.jpg", src: "song9.mp3" },
        { title: "PUTTENE PREMA",cast:"Ram Miriyala",image:"image8.jpeg", src: "song10.mp3" },
        { title: "AVUNANAVAA",cast:"Ramajogayya Sastry,Sid Sriram",image:"image9.png", src: "song11.mp3" },
        { title: "CHIRUNAVVE VISIRAVE",cast:"Vijay Prakash",image:"image10.jpg", src: "song12.mp3" },
        { title: "KALALLO",cast:"Ananta Sriram,Kulkarni, Madhushree",image:"image11.jpg", src: "song13.mp3" },
        { title: "KANNULO UNNAVU",cast:"Hariharan,Saindhavi,Vijayalakshmi", image:"image12.jpg",src: "song14.mp3" },
        { title: "NEE CHOOPULE",cast:"Haricharan and K. S. Chithra",image:"image13.jpg", src: "song15.mp3" },
        { title: "EDO PRIYA RAGAM VINTUNNA",cast:"Sirivennela Seetharama Sastry,Sumangali", image:"image14.jpeg",src: "song17.mp3" },
        { title: "SAMAYAMA",cast:"Anantha Sriram,Kulkarni,Krishnakumar", image:"image4.jpg",src: "song18.mp3" },
        { title: "UPPENANTHA",cast:"Balaji,Devi Sri Prasad & KK", image:"image15.jpeg",src: "song19.mp3" },
        { title: "NEEVE",cast:"Ananth Sreeram,G. V. Prakash Kumar",image:"image5.jpeg", src: "song20.mp3" },
        { title: "SUTIGA CHOODAKU",cast:" Sreeram,Aravind Shankar,Saindhavi",image:"image16.jpeg", src: "song21.mp3" },
        { title: "WAITING FOR YOU",cast:"Vanamali,K.K.", image:"image7.jpg",src: "song22.mp3" },
        { title: "CHINNADANA NEEKOSAM",cast:"Krishna Chaitanya,Raj Hasan,Sravani", image:"image16.jpeg",src: "song23.mp3" },
        { title: "LEHARAAYI",cast:"Sid Sriram", image:"image17.jpeg",src: "song24.mp3" },
        { title: "MEHABOOBA",cast:"Kinnal Raj,Ananya Bhat",image:"image1.png", src: "song25.mp3" },
        { title: "OH PREMA",cast:"Krishnakanth,Kapil Kapilan, Chinmayi",image:"image18.jpeg", src: "song26.mp3" },
        { title: "PREMISTHUNNA",cast:"Suresh Banisetti,P V N S Rohit", image:"image6.webp",src: "song27.mp3" },
        { title: "YEDHAKI OKA GAAYAM",cast:"Hesham Abdul Wahab,Divya S Menon", image:"image19.jpeg",src: "song28.mp3" },
        { title: "EM CHEPPANU",cast:"Sirivennela,Seetarama Sastry,Karthik", image:"image20.jpeg",src: "song29.mp3" },
        { title: "FEEL MY LOVE",cast:"Chandrabose,KK, Clinton Cerejo", image:"image14.jpeg",src: "song30.mp3" },
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
