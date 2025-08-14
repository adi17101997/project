import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNotes } from '../redux/notesSlice';
import { fetchNotes } from '../utils/api';
import NoteCard from '../components/NoteCard';
import NoteForm from '../components/NoteForm';

const Home = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);
  const token = localStorage.getItem('token'); // Assuming token is stored in localStorage

  useEffect(() => {
    const loadNotes = async () => {
      const notesData = await fetchNotes(token);
      dispatch(setNotes(notesData));
    };
    loadNotes();
  }, [dispatch, token]);

  const handleAddNote = async (note) => {
    // Call createNote API and dispatch addNote action
  };

  const handleEditNote = (note) => {
    // Handle note editing
  };

  const handleDeleteNote = (noteId) => {
    // Call deleteNote API and dispatch deleteNote action
  };

  return (
    <div>
      <h1>Notes</h1>
      <NoteForm onSubmit={handleAddNote} />
      <div>
        {notes.map((note) => (
          <NoteCard
            key={note.note_id}
            note={note}
            onEdit={handleEditNote}
            onDelete={handleDeleteNote}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
