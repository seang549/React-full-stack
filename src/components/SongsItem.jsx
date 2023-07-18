// const SongsItem = ({song, refresh}) => {
//     const handleClick = (e) => {
//         console.log(e.currentTarget.id)
//     }
// console.log(song)
//     const updatedData = {
//         song: song.song,
//         author: song.author
//     }

//     const updateSong = () => {
//         fetch(`http://localhost:8002/song_tb/${song.id}`, {
//             method: "PUT", 
//             headers: {
//                 "Content-type": "application/json"
//            },
//            body: JSON.stringify(updatedData)
//         })
//         .then(() => {
//             console.log("Song updated!")
//             refresh(true)
//         })
//     }


//     const deleteSong = () => {

//         fetch(`http://localhost:8002/song_tb/${song.id}`, {
//             method: "DELETE"
//         })
//         .then(() => {
//             console.log('Song deleted successfully')
//             refresh(true)
//         })
//         // fetch('http://localhost:8002/song_tb')
//         // .then((response) => response.json())
//         // .then((data) => {
//         //     setSongs(data)
//         // })
//     }


//     return (
//         <div className="card" onClick={handleClick} id={song.id}>
//             <h2 onClick={updateSong}>'{song.song}' by {song.author}</h2>
//             <span className='close' onClick={deleteSong}>❌</span> 

//         </div>
//     )
// }

// export default SongsItem

import React, { useState } from 'react';

const SongsItem = ({ song, refresh }) => {
  const [editMode, setEditMode] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    song: '',
    author: '',
  });

  const handleClick = (e) => {
    console.log(e.currentTarget.id);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const updateSong = () => {
    fetch(`http://localhost:8002/song_tb/${song.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then(response => {
        console.log('Song updated!');
        setEditMode(false)
        refresh(true);
      });
  };

  const deleteSong = () => {
    fetch(`http://localhost:8002/song_tb/${song.id}`, {
      method: 'DELETE',
    })
      .then(() => {
        console.log('Song deleted successfully');
        refresh(true);
      });
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    setUpdatedData({
      song: song.song,
      author: song.author,
    });
    setEditMode(false);
  };

  return (
    <div className="card" onClick={handleClick} id={song.id}>
      {editMode ? (
        <>
          <input
            type="text"
            name="song"
            value={updatedData.song}
            onChange={handleChange}
          />
          <input
            type="text"
            name="author"
            value={updatedData.author}
            onChange={handleChange}
          />
          <button onClick={updateSong}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </>
      ) : (
        <>
          <h2 onClick={handleEditClick}>
            '{song.song}' by {song.author}
          </h2>
          <span className="close" onClick={deleteSong}>
            ❌
          </span>
        </>
      )}
    </div>
  );
};

export default SongsItem;
