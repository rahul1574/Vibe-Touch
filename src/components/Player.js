import './Style.css';
import React, { useRef, useState, useEffect } from 'react';
const AudioPlayer = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSongIndex, setCurrentSongIndex] = useState(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const playlist = [
        { title: "YADAGARA YADAGARA",cast:"Ramajogayya Sastry,Suchetha Basrur",src: "Song1.mp3",image:"image1.png" },
        { title: "TOOFAN",cast:"Ramajogayya Sastry,Prudhvi,Ravi Basrur", src: "Song2.mp3",image:"image1.png"  },
        { title: "BAGUNTUNDHI NUVVU NAVVITHE",cast:"Nutana Mohan, Shekar,Sid Sriram",image:"image2.jpg", src: "song3.mp3" },
        { title: " BHALEGUNDI BAALAA",cast:"Penchal Das,Penchal Das, Nutana Mohan",image:"image3.jpeg", src: "song4.mp3" },
        { title: "HI NANNA GLIMPSE",cast:"Hesham Abdul Wahab",image:"image4.jpg",src: "song5.mp3" },
        { title: "HOSAAHOREY",cast:"Ananth Sreeram,K.K., Lesle Lewis", image:"image5.jpeg",src: "song6.mp3" },
        { title: "MR. PERFECT",cast:"Kedar,Baba Sehgal, Devi Sri Prasad & Rita",image:"image5.jpeg", src: "song7.mp3" },
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
        { title: "YEDHAKI OKA GAAYAM",cast:"Hesham Abdul Wahab,Divya S Menon", image:"image1.png",src: "song28.mp3" },
        { title: "EM CHEPPANU",cast:"Sirivennela,Seetarama Sastry,Karthik", image:"image1.png",src: "song29.mp3" },
        { title: "FEEL MY LOVE",cast:"Chandrabose,KK, Clinton Cerejo", image:"image1.png",src: "song30.mp3" },
        { title: "MANASANTA MUKKALU CHESI",cast:"KK",image:"image1.png", src: "song31.mp3" },
        { title: "POVADHE PREMA",cast:"Vanamali,Yuvan Shankar Raja",image:"image1.png", src: "song32.mp3" },
        { title: "PRAANAMA",cast:"Ananth Sreeram,Rahul Nambiar",image:"image1.png", src: "song33.mp3" },
        { title: "RIBAPAPPA",cast:"Suresh Banisetti,Sri Krishna",image:"image1.png", src: "song34.mp3" },
        { title: "CHANTI PILLALA",cast:"Suresh Banisetti,Anudeep Dev",image:"image1.png", src: "song35.mp3" },
        { title: "MY LOVE IS GONE",cast:"Chandrabose,Devi Sri Prasad",image:"image1.png", src: "song36.mp3" },
        { title: "NUVVE NUVVE",cast:"Chitra, Vijay Prakash",image:"image1.png", src: "song37.mp3" },
        { title: "VINARAA",cast:"Sachin Basrur",image:"image1.png", src: "song38.mp3" },
        { title: "KALALO KOODA",cast:"Bhaskarabhatla,Tanishk,Sid Sriram",image:"image1.png", src: "song39.mp3" },
        { title: "Theme of kalki",cast:"Chandrabose,Kaala Bhairava, Gowtham",image:"image1.png", src: "song40.mp3" },
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
            <div id="nowplay">
                {currentSongIndex !== null && (
                    <>
                        <p>{playlist[currentSongIndex].title}</p>
                        <p>
                            {formatTime(currentTime)} / {formatTime(duration)}
                        </p>
                        <progress value={currentTime} max={duration}></progress>
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
