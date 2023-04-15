import { NoteList, NoteForm, NoteDetails, Navbar, NotFound } from './components/withRoutes'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { NoteProvider } from './contexts/NoteContext'

const AppWithRoutes = () => {
  return (
    <NoteProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<NoteList />} />
        <Route path='/create' element={<NoteForm />} />
        <Route path='/edit/:id' element={<NoteForm />} />
        <Route path='/details/:id' element={<NoteDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </NoteProvider>
  );
};

export default AppWithRoutes;
