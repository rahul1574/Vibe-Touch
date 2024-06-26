import React,{useState,useEffect}from 'react'

export default function Cap() {
    const [text, setText] = useState('');
    const message = "HHello! This is Rahul. Welcome to My Playlist.......";
    
    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setText((prev) => prev + message.charAt(index));
            index++;
            if (index === message.length) {
                clearInterval(intervalId);
            }
        }, 100);
        
        return () => clearInterval(intervalId);
    }, []);
    
    return (
        <div className="intro">
            <div className="space">
            <span>{text}</span>
            </div>
        </div>
    );
}
