import { NoteList, NoteForm, NoteDetails, Navbar, NotFound } from './components/withRoutes'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

const AppWithRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<NoteList />} />
        <Route path='/create' element={<NoteForm />} />
        <Route path='/edit/:id' element={<NoteList />} />
        <Route path='/details/:id' element={<NoteDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppWithRoutes;
