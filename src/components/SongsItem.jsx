
import React, { useState } from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../SongsItem.css'
import EditForm from './EditForm'

const SongsItem = ({ song, refresh }) => {
  const [editMode, setEditMode] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    song: song.song,
    author: song.author,
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
      .then((response) => {
        console.log('Song updated!');
        setEditMode(false)
        refresh(true);
        toast.success('Edited song successfully!')
      })
      .catch((error) => {
        console.error(error.message)
        toast.error('Failed to edit song!')
      })
  };

  const deleteSong = () => {
    fetch(`http://localhost:8002/song_tb/${song.id}`, {
      method: 'DELETE',
    })
      .then(() => {
        console.log('Song deleted successfully');
        refresh(true);
        toast.success('Deleted song successfully!')
      }).catch((error) => {
        console.error(error.message)
        toast.error('Failed to delete song!')
      })
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    setUpdatedData({
      song: updatedData.song,
      author: updatedData.author,
    });
    setEditMode(false);
  };
  return (
    <div className="card" onClick={handleClick} id={song.id}>
      {editMode ? (
        <EditForm 
        song={song}
        updatedData={updatedData}
        handleChange={handleChange}
        updatedSong={updateSong}
        handleCancelEdit={handleCancelEdit}/>

      ) : (
        <>
          <h2 onClick={handleEditClick}>
            '{updatedData.song}' by {updatedData.author}
          </h2>
          <button className="close" onClick={deleteSong}>
            🗑
          </button>
          <button className="edit-btn" onClick={handleEditClick}>✏️</button>
        </>
      )}
    </div>
  );
};

export default SongsItem;
