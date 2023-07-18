import SongsItem from './SongsItem'
import { useState, useEffect} from 'react'

const Songs = ({songs, setSongs, isRefresh, refresh}) => {
    

    useEffect(() => {
        if(isRefresh) {
            fetch('https://react-fullstack-mvp.onrender.com/song_tb')
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                refresh(false)

                setSongs(data)
            })
            .catch((err) => {
                refresh(false)
                
            });
        }
    }, [isRefresh, refresh])
    
    
    
    return songs.map((song) => (
        <SongsItem song={song} key={song.id} refresh={refresh} />
    ))
}


export default Songs