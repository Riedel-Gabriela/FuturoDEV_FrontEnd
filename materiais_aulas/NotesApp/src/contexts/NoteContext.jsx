// NoteContext.js - Contexto para gerenciar o estado global das anotações
import { createContext, useContext, useState } from 'react';


// NoteContext
export const NoteContext = createContext();

// NoteProvider
export const NoteProvider = ({children}) => {
    const [notes, setNotes] = useState([]);
    const [selectedNote, setSelectedNote] = useState(null);
  
    const addNote = (note) => {
      setNotes([...notes, note]);
    };
  
    const handleNoteSelect = (note) => {
      setSelectedNote(note);
    };
  
    const deleteNote = (id) => {
      setNotes(notes.filter((note) => note.id !== id));
    };
  
    const updateNote = (id, updatedNote) => {
      setNotes(notes.map((note) => (note.id === id ? updatedNote : note)));
    };
    return (
        <NoteContext.Provider value={{
            addNote,
            selectedNote,
            updateNote,
            setSelectedNote,
            notes,
            deleteNote,
            handleNoteSelect
        }}>
            {children}
        </NoteContext.Provider>
    )
}

// useNoteContext
export const useNoteContext = () => useContext(NoteContext);