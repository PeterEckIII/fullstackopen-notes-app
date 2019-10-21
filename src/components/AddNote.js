import React from 'react'

const AddNote = ({ addNote, newNote, handleNoteChange }) =>(
    <form onSubmit={addNote}>
        <input
            type="text"
            value={newNote}
            onChange={handleNoteChange}
        />
        <button type="submit">Save</button>
    </form>
);

export default AddNote;