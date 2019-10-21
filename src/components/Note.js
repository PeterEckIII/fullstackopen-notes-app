import React from 'react'

const Note = ({ note, toggleImportance }) => {
    const label = note.important ? 'Mark not important' : 'Mark important'

    return (
        <div key={note.id}>
            { note.content }
            <button onClick={() => toggleImportance(note.id)}>{ label }</button>
        </div>
    )
};

export default Note;
