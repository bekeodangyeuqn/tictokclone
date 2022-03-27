import { useEffect, useState } from 'react';
import { collection } from "firebase/firestore"; 
import { onSnapshot } from '@firebase/firestore'
import logo from './logo.svg';
import './App.css';
import Video from './components/Video/index'
import db from './firebase'

function App() {
  const [videos,setVideos] = useState([])
  useEffect(() => {
    //real time update
    onSnapshot(collection(db,"videos"), (snapshot) => {
        snapshot.docs.map((doc) => {
            setVideos((prev) => [...prev, doc.data()])
            // console.log("onsnapshot", doc.data());
        })
    })
}, [])
  return (
    <div className="app">
      <div className='app__videos'>
      {videos.map(({url,song,name,description,likes,messages,shares},index) => {
        return (
          <Video 
          url={url}
          song={song}
          name={name}
          description={description}
          likes={likes}
          messages={messages}
          shares={shares}
          key={index}/>
        )
      })}
    </div>
    </div>
  );
}

export default App;
