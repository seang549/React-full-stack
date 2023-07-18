import React from 'react'

const EditForm = ({song, updatedData, handleChange, updatedSong, handleCancelEdit}) => {
    console.log(updatedData)
    
    return (
        <>
            <input
            type='text'
            name='song'
            value={updatedData.song}
            onChange={handleChange}
            />
            <input
            type='text'
            name='author'
            value={updatedData.author}
            onChange={handleChange}
            />
            <button id='save-button' onClick={() => updatedSong(updatedData)}>Save</button>
            <button id='cancel-button' onClick={handleCancelEdit}>Cancel</button>
        </>
    )
}

export default EditForm