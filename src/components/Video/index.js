import React, { useEffect, useRef, useState } from 'react';
import modules from './Video.module.css'
import './ticker.css'
import VideoFooter from './VideoFooter'
import VideoSideBar  from './VideoSidebar';
function Video({url,name,description,song,likes,shares,messages,index},ref) {
    const videoRef = useRef(null)
    const divRef = useRef(null)
    const [play,setPlay] = useState(true)
    console.log(window.scrollY)
    const handlePlay = () => {
        console.log(videoRef.current)
        setPlay(!play)
        if (play) 
            videoRef.current.play()
        else 
            videoRef.current.pause()
    }
    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY)
          }
        window.addEventListener('scroll',handleScroll)
        return () => {
        window.removeEventListener('scroll',handleScroll)
        }
    },[])
    return (
        <>
        <div className={modules.video}
        data-index={index}
        key={index}
        ref={divRef}>
            <video className={modules.videoPlayer}
             src={url}
             loop
             ref={videoRef}
             onClick={handlePlay}>

            </video>
            <VideoFooter 
            name={name}
            description={description}
            song={song}/>
            <VideoSideBar 
            likes={likes}
            messages={messages}
            shares={shares}/>
        </div>
        </>
    );
}

export default Video;