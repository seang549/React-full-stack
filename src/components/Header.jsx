import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Header.css';

const Header = ({ songs, setSongs, refresh }) => {
  const [songTitle, setSongTitle] = useState('');
  const [songAuthor, setSongAuthor] = useState('');
  const [showInputFields, setShowInputFields] = useState(false);

  const addSong = () => {
    const newSong = { song: songTitle, author: songAuthor };

    fetch('https://react-fullstack-mvp.onrender.com/song_tb', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newSong),
    })
      .then(() => {
        setSongTitle('');
        setSongAuthor('');
        console.log('new song added!');
        toast.success('Added song successfully!');
        refresh(true);
        setShowInputFields(false)
      })
      .catch((error) => {
        console.error(error.message);
        toast.error('Failed to add a song!');
      });
  };

  const handleCreateButton = () => {
    setShowInputFields(true);
  };

  return (
    <div id="song-header" className="header">
      <ToastContainer />
      <h1 className="header-title">🎧My Personal MixTape🎧</h1>
      {showInputFields ? (
        <>
          <input
            type="text"
            className="input-field"
            value={songTitle}
            onChange={(e) => setSongTitle(e.target.value)}
            placeholder="Song title..."
          />
          <input
            type="text"
            className="input-field"
            value={songAuthor}
            onChange={(e) => setSongAuthor(e.target.value)}
            placeholder="Song author..."
          />
          <span className="add-button" onClick={addSong}>
            Add
          </span>
        </>
      ) : (
        <button className="create-button" onClick={handleCreateButton}>
          Create
        </button>
      )}
    </div>
  );
};

export default Header;
