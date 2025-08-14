import { motion } from 'framer-motion';

const NoteCard = ({ note, onEdit, onDelete }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="note-card">
      <h3>{note.note_title}</h3>
      <p>{note.note_content}</p>
      <button onClick={() => onEdit(note)}>Edit</button>
      <button onClick={() => onDelete(note.note_id)}>Delete</button>
    </motion.div>
  );
};

export default NoteCard;
