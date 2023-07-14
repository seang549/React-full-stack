import SongsItem from './SongsItem'

const Songs = ({songs, isRefresh, refresh}) => {
    
    // useEffect(() => {
    //     if(isRefresh) {

    //     }
    // })
    
    
    
    return songs.map((song) => (
        <SongsItem song={song} key={song.id} />
    ))
}


export default Songs