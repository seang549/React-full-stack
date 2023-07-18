import { useState } from 'react'

import '../Header.css'

const Header = ({songs, setSongs, refresh}) => {
    const [songTitle, setSongTitle] = useState("")
    const [songAuthor, setSongAuthor] = useState("")

    const addSong = () => {
        
        const newSong = {song: songTitle, author: songAuthor}

        
        fetch('http://localhost:8002/song_tb', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newSong)
        }).then(() => {
            setSongTitle('')
            setSongAuthor('')
            console.log('new song added!')

            refresh(true)
        })
    }
    
    return (
    <div id ="song-header" className="header">
        <h1 className="header-title">🎧My Personal MixTape🎧</h1>
        <input type='text' className="input-field" value={songTitle} onChange={(e) => setSongTitle(e.target.value)} placeholder="Song title..."/>
        <input type='text' className="input-field" value={songAuthor} onChange={(e) => setSongAuthor(e.target.value)} placeholder="Song author..."/>
        <span className = 'add-button' onClick={addSong}>Add</span>
    </div>
    )
}

export default Header