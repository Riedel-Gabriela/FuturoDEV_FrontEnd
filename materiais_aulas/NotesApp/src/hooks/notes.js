
/*
Crie um hook customizado para gerenciar o estado das anotações, como título, conteúdo e data de criação. 
O hook customizado deve permitir que as anotações sejam adicionadas, atualizadas e excluídas.
*/
import { useState } from 'react';

const useNotes = () => {
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
    return {
        addNote,
        selectedNote,
        updateNote,
        setSelectedNote,
        notes,
        deleteNote,
        handleNoteSelect
    }
};

export default useNotes;
