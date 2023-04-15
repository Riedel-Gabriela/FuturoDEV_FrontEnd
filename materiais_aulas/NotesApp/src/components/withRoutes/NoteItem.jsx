import { useNavigate } from "react-router-dom";
import { useNoteContext } from "../../contexts/NoteContext";


const NoteItem = ({ note }) => {
    const navigate = useNavigate()
    //o handleNoteSelect era utilizado no button Selecionar e foi trocado pelo navigate.
    const { deleteNote, handleNoteSelect, setSelectedNote } = useNoteContext()
    const handleDelete = () => {
        deleteNote(note.id);
        setSelectedNote(null);
      };
    
      return (
        <div className='note-item'>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={handleDelete}>Excluir</button>
          <button onClick={() => navigate(`/details/${note.id}`)}>Selecionar</button>
          <button onClick={() => navigate(`/edit/${note.id}`)}>Editar</button>
        </div>
      );
};

export default NoteItem;
