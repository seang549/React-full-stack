const SongsItem = ({song}) => {
    const handleClick = (e) => {
        console.log(e.currentTarget.id)
    }


    const deleteSong = () => {

        fetch(`http://localhost:8002/song_tb/${song.id}`, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(data => {
            console.log('Song deleted successfully')
        })
        fetch('http://localhost:8002/song_tb')
        .then((response) => response.json())
        .then((data) => {
            setSongs(data)
        })
    }


    return (
        <div className="card" onClick={handleClick} id={song.id}>
            <h2>'{song.song}' by {song.author}</h2> <span className='close' onClick={{deleteSong}}>❌</span>

        </div>
    )
}

export default SongsItem