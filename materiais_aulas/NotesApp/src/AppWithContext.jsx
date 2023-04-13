import { NoteForm, NoteList, NoteDetails } from './components/withContext'
import { NoteProvider } from './contexts/NoteContext';

const AppWithContext = () => {
  return (
    <div>
      <h1>Plataforma de Anotações</h1>
      <NoteProvider>
        <NoteForm />
        <NoteList />
        <NoteDetails />
      </NoteProvider>
    </div>
  );
};

export default AppWithContext;
