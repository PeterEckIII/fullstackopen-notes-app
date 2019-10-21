import React from 'react';
import Note from './Note';

const NoteList = ({ notesToShow, toggleImportance }) => (
    <ul>
        {notesToShow.map(note => {
            return (
                <Note
                    key={note.id}
                    note={note}
                    toggleImportance={toggleImportance}
                />
            )
        })}
    </ul>
);

export default NoteList;
