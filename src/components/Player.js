import './Style.css';
import React, { useRef, useState, useEffect } from 'react';
const AudioPlayer = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSongIndex, setCurrentSongIndex] = useState(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const playlist = [
        { title: "YADAGARA YADAGARA~Ramajogayya Sastry,Suchetha Basrur",src: "Song1.mp3" },
        { title: "TOOFAN~Ramajogayya Sastry,Prudhvi Chandra, Sachin Basrur, Ravi Basrur", src: "Song2.mp3" },
        { title: "BAGUNTUNDHI NUVVU NAVVITHE~Nutana Mohan, Shekar Chandra, and Sid Sriram", src: "song3.mp3" },
        { title: " BHALEGUNDI BAALAA~Penchal Das,Penchal Das, Nutana Mohan", src: "song4.mp3" },
        { title: "HI NANNA GLIMPSE", src: "song5.mp3" },
        { title: "HOSAAHOREY~Ananth Sreeram,K.K., Lesle Lewis", src: "song6.mp3" },
        { title: "MR. PERFECT~Kedar,Baba Sehgal, Devi Sri Prasad & Rita", src: "song7.mp3" },
        { title: "O RENDU PREMA MEGHAALILA~Ananta Sriram,Sreerama Chandra", src: "song8.mp3" },
        { title: "OY OY~Chandrabose,Siddharth, Prashanthini", src: "song9.mp3" },
        { title: "PUTTENE PREMA~Ram Miriyala", src: "song10.mp3" },
        { title: "AVUNANAVAA~Ramajogayya Sastry,Sid Sriram", src: "song11.mp3" },
        { title: "CHIRUNAVVE VISIRAVE~Vijay Prakash", src: "song12.mp3" },
        { title: "KALALLO~Ananta Sriram	Anurag Kulkarni, Madhushree", src: "song13.mp3" },
        { title: "KANNULO UNNAVU~Hariharan,Saindhavi,Vaikom Vijayalakshmi", src: "song14.mp3" },
        { title: "NEE CHOOPULE~Haricharan and K. S. Chithra", src: "song15.mp3" },
        { title: "EDO PRIYA RAGAM VINTUNNA~Sirivennela Seetharama Sastry,Sagar, Sumangali", src: "song17.mp3" },
        { title: "SAMAYAMA~Anantha Sriram,Anurag Kulkarni, Sithara Krishnakumar", src: "song18.mp3" },
        { title: "UPPENANTHA~Balaji,Devi Sri Prasad & KK", src: "song19.mp3" },
        { title: "NEEVE~Ananth Sreeram,G. V. Prakash Kumar", src: "song20.mp3" },
        { title: "SUTIGA CHOODAKU~Anantha Sreeram,Aravind Shankar,Hariharan, Saindhavi", src: "song21.mp3" },
        { title: "WAITING FOR YOU~Vanamali,K.K.", src: "song22.mp3" },
        { title: "CHINNADANA NEEKOSAM~	Krishna Chaitanya,Anup Rubens,Raj Hasan, Anoop Rubens, Sravani", src: "song23.mp3" },
        { title: "LEHARAAYI~Sid Sriram", src: "song24.mp3" },
        { title: "MEHABOOBA~Kinnal Raj,Ananya Bhat", src: "song25.mp3" },
        { title: "OH PREMA~Krishnakanth,Kapil Kapilan, Chinmayi Sripada", src: "song26.mp3" },
        { title: "PREMISTHUNNA~	Suresh Banisetti,P V N S Rohit", src: "song27.mp3" },
        { title: "YEDHAKI OKA GAAYAM~Hesham Abdul Wahab,Divya S Menon,Shiva Nirvana", src: "song28.mp3" },
        { title: "EM CHEPPANU~Sirivennela,Seetarama Sastry,Karthik", src: "song29.mp3" },
        { title: "FEEL MY LOVE~	Chandrabose,KK, Clinton Cerejo", src: "song30.mp3" },
        { title: "MANASANTA MUKKALU CHESI~KK", src: "song31.mp3" },
        { title: "POVADHE PREMA~Vanamali,Yuvan Shankar Raja	", src: "song32.mp3" },
        { title: "PRAANAMA~Ananth Sreeram,Rahul Nambiar", src: "song33.mp3" },
        { title: "RIBAPAPPA~Suresh Banisetti,Sri Krishna", src: "song34.mp3" },
        { title: "CHANTI PILLALA~Suresh Banisetti,Anudeep Dev", src: "song35.mp3" },
        { title: "MY LOVE IS GONE~Chandrabose,Devi Sri Prasad & K.G. Ranjith", src: "song36.mp3" },
        { title: "NUVVE NUVVE~Chitra, Vijay Prakash", src: "song37.mp3" },
        { title: "VINARAA~	Sachin Basrur", src: "song38.mp3" },
        { title: "KALALO KOODA~	Bhaskarabhatla,Tanishk Bagchi,Sid Sriram, Sagar, Vaishnavi Kovvuri", src: "song39.mp3" },
        { title: "Theme of Kalki~", src: "song40.mp3" },
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
                    <div key={index} onClick={() => setCurrentSongIndex(index)} style={{ height:"50px",padding:"5px",backgroundColor:"transparent",color:"white",cursor: 'pointer', margin: '10px 0',display:"flex",justifyContent:"space-equaly",flexDirection:"column",border:"1px solid black"}}>
                        {song.title}
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
            <div id="controlbtn">
                <button  className="songbtn1"onClick={prevSongHandler} disabled={currentSongIndex === null}>⏮</button>
                {isPlaying ? (
                    <button  className="songbtn"onClick={pauseHandler} disabled={currentSongIndex === null}>⏸️</button>
                ) : (
                    <button  className="songbtn"onClick={playHandler} disabled={currentSongIndex === null}>▶️</button>
                )}
                {/* <button  className="songbtn"onClick={stopHandler} disabled={currentSongIndex === null}>⏹️</button> */}
                <button  className="songbtn1"onClick={nextSongHandler} disabled={currentSongIndex === null}>⏭</button>
            </div>
        </div>
        
    );
};

export default AudioPlayer;
