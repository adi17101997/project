import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export const fetchNotes = async (token) => {
  const response = await axios.get(`${API_URL}/notes`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.notes;
};

export const createNote = async (note, token) => {
  const response = await axios.post(`${API_URL}/notes`, note, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const updateNote = async (noteId, note, token) => {
  const response = await axios.put(`${API_URL}/notes/${noteId}`, note, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const deleteNote = async (noteId, token) => {
  const response = await axios.delete(`${API_URL}/notes/${noteId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
