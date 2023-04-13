// NoteContext.js - Contexto para gerenciar o estado global das anotações
import { createContext, useContext, useState } from 'react';
import useNotes from '../hooks/notes';


// NoteContext
export const NoteContext = createContext();

// NoteProvider
export const NoteProvider = ({children}) => {
  //lembrar que a resposta do hook é um objeto, 'store' é um nome
    const store = useNotes()
    return (
        <NoteContext.Provider value={{...store}}>
            {children}
        </NoteContext.Provider>
    )
}

// useNoteContext
export const useNoteContext = () => useContext(NoteContext);