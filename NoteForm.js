import { useState } from 'react';

const NoteForm = ({ onSubmit, initialData }) => {
  const [title, setTitle] = useState(initialData?.note_title || '');
  const [content, setContent] = useState(initialData?.note_content || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ note_title: title, note_content: content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Note Title"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Note Content"
        required
      />
      <button type="submit">Save Note</button>
    </form>
  );
};

export default NoteForm;
