import MusicNoteIcon from '@mui/icons-material/MusicNote';
import modules from './VideoFooter.module.css'
import Ticker from 'react-ticker'


function VideoFooter({ name,description,song }) {
    return (
        <div className={modules.videoFooter}>
            <div className={modules.videoFooterText}>
                <h3>@{name}</h3>   
                <p>{description}</p>
                <div className={modules.videoFooterTicker}>
                    <MusicNoteIcon className={modules.videoFooterIcon}/>
                    <Ticker mode='smooth'>
                        {({ index }) => (
                            <>
                                <p>{song}</p>
                            </>
                        )}
                    </Ticker>
                </div> 
            </div>
            <img src='https://cdn-icons.flaticon.com/png/512/829/premium/829655.png?token=exp=1647485057~hmac=7d1dda281151253a636b4481a7489205'
            className={modules.videoFooterRecord}
            alt='record'></img>
        </div>
    );
}

export default VideoFooter;