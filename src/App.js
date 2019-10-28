import React, { useState, useEffect } from 'react';
import NoteList from './components/NoteList';
import AddNote from './components/AddNote';
import FilterButton from './components/FilterButton';
import Notification from './components/Notification';
import Footer from './components/Footer';
import noteService from './services/notes';

const App = () => {
  const [ notes, setNotes ] = useState([]);
  const [ newNote, setNewNote ] = useState('');
  const [ showAll, setShowAll ] = useState(true);
  const [ errorMessage, setErrorMessage ] = useState(null);

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => setNotes(initialNotes))
  }, [])

  const handleNoteChange = event => {
    setNewNote(event.target.value);
  }

  const toggleImportance = id => {
    const note = notes.find(note => note.id === id);
    const changedNote = { ...note, important: !note.important }
    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      .catch(e => {
        setErrorMessage(
          `Note ${ note.content } was already removed from the server`
        );
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setNotes(notes.filter(note => note.id !== id))
      })
  }

  const addNote = event => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: notes.length + 1
    }
    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes([ ...notes, returnedNote ]);
        setNewNote('');
      });
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important);

  return (
    <div>
      <h2>Notebook</h2>
      <Notification message={ errorMessage } />
      <h6>Filter Notes</h6>
      <FilterButton
        showAll={ showAll }
        setShowAll={ setShowAll }
      />
      <h5>Notes: </h5>
      <NoteList
        notesToShow={ notesToShow }
        toggleImportance={ toggleImportance }
      />

      <h5>Add New Note</h5>
      <AddNote
        addNote={ addNote }
        newNote={ newNote }
        handleNoteChange={ handleNoteChange }
      />
      <Footer />
    </div>
  );
}

export default App;
