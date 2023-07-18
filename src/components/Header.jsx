import { useState } from 'react'

const Header = ({songs, setSongs, refresh}) => {
    const [songTitle, setSongTitle] = useState("")
    const [songAuthor, setSongAuthor] = useState("")

    const addSong = () => {
        
        const newSong = {song: songTitle, author: songAuthor}
        // const newAuthor = {songAuthor}
        
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

            // fetch('http://localhost:8002/song_tb')
            // .then((response) => response.json())
            // .then((data) => {
            //     setSongs(data)
            // })
        })
    }
    
    return (
    <div id ="song-header" className="header">
        <h1>🎧My Personal MixTape🎧</h1>
        <input type='text' value={songTitle} onChange={(e) => setSongTitle(e.target.value)}/>
        <input type='text' value={songAuthor} onChange={(e) => setSongAuthor(e.target.value)}/>
        <span className = 'add-button' onClick={addSong}>Add</span>
    </div>
    )
}

export default Header