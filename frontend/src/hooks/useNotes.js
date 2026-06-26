import { useEffect, useState } from "react";

import {
  getNotes,
  generateNote,
  deleteNote,
  favoriteNote,
} from "../services/notesService";

export default function useNotes() {
  const [notes, setNotes] = useState([]);

  const [selectedNote, setSelectedNote] = useState(null);

  const [loading, setLoading] = useState(true);

  const loadNotes = async () => {
    try {
      const data = await getNotes();

      setNotes(data);

      if (data.length > 0) {
        setSelectedNote(data[0]);
      }

    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadNotes();
  }, []);

  const createNote = async (topic, subject) => {
    await generateNote({
      topic,
      subject,
    });

    loadNotes();
  };

  const removeNote = async (id) => {
    await deleteNote(id);

    loadNotes();
  };

  const toggleFavorite = async (id) => {
    await favoriteNote(id);

    loadNotes();
  };

  return {
    notes,
    loading,
    selectedNote,
    setSelectedNote,
    createNote,
    removeNote,
    toggleFavorite,
  };
}