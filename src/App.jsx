import { useState, useEffect } from 'react'
import Loading from './components/Loading'
import Songs from './components/Songs'
import Header from './components/Header'

import './App.css'

function App() {
  const [songs, setSongs] = useState([])
  const [isRefresh, setIsRefresh] = useState(true)

  const refresh = (status) => {
    setIsRefresh(status)
  }

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://react-fullstack-mvp.onrender.com/song_tb')
      const data = await res.json()
      setSongs(data)
    }

    getData()
  }, [])

  if(songs.length === 0) return <Loading />
  return (
    <>
      <Header refresh={refresh} setSongs={setSongs}/>
      <Songs songs={songs} setSongs={setSongs} isRefresh={isRefresh} refresh={refresh}/>
    </>
  )
}

export default App
