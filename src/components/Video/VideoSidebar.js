import React, { useState } from 'react';
import modules from './VideoSidebar.module.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
function VideoSideBar({ likes,messages,shares }) {
    const [liked,setLiked] = useState(false)
    const handleLike = () => {
        setLiked(!liked)
    }
    return (
        <div className={modules.videoSidebar}>
            <div className={modules.videoSidebarButton}>
                {
                    liked ? <FavoriteIcon onClick={handleLike}/> : 
                    <FavoriteBorderIcon onClick={handleLike}/>
                }
                <p>{liked ? likes+ 1: likes}</p>
            </div>
            <div className={modules.videoSidebarButton}>
                <MessageIcon/>
                <p>{messages}</p>
            </div>
            <div className={modules.videoSidebarButton}>
                <ShareIcon/>
                <p>{shares}</p>
            </div>
        </div>
    );
}

export default VideoSideBar;