
/*
Crie um hook customizado para gerenciar o estado das anotações, como título, conteúdo e data de criação. 
O hook customizado deve permitir que as anotações sejam adicionadas, atualizadas e excluídas.
*/
import { useState, useEffect } from 'react';

const useNotes = () => {
    const [notes, setNotes] = useState([]);
    const [selectedNote, setSelectedNote] = useState(null);
    //useEffect espera fazer algo e 'observar' algo, nesse caso uma lista vazia,
    // que significa UMA VEZ SÓ, ASSIM QUE CARREGA A PÁGINA
    useEffect(() => {
        const resultado = JSON.parse(localStorage.getItem('noteList'))
        if(resultado) {
          setNotes(resultado)
        }
    }, [])
    //esse hooke substitui os 'localStorage' utilizados nas funções abaixo.
    useEffect(() => {
      localStorage.setItem('noteList', JSON.stringify(notes))
    }, [notes])

    const addNote = (note) => {
      const result = [...notes, note]
      setNotes(result);
      // localStorage.setItem('noteList', JSON.stringify(result))
    };
  
    const handleNoteSelect = (note) => {
      setSelectedNote(note);
    };
  
    const deleteNote = (id) => {
      const result = notes.filter((note) => note.id !== id)
      setNotes(result);
      // localStorage.setItem('noteList', JSON.stringify(result))
    };
  
    const updateNote = (id, updatedNote) => {
      const result = notes.map((note) => (note.id === id ? updatedNote : note))
      setNotes(result);
      // localStorage.setItem('noteList', JSON.stringify(result))
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
