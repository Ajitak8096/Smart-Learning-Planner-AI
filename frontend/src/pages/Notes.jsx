import MainLayout from "../components/layout/MainLayout";

import NotesSidebar from "../components/notes/NotesSidebar";
import NotesEditor from "../components/notes/NotesEditor";
import GenerateNoteModal from "../components/notes/GenerateNoteModal";

import useNotes from "../hooks/useNotes";

function Notes() {

  const {

    notes,

    selectedNote,

    setSelectedNote,

    createNote,

    removeNote,

    toggleFavorite,

  } = useNotes();

  return (

    <MainLayout>

      <GenerateNoteModal
        createNote={createNote}
      />

      <div className="grid grid-cols-12 gap-6 h-[80vh]">

        <div className="col-span-3">

          <NotesSidebar

            notes={notes}

            selectedNote={selectedNote}

            setSelectedNote={setSelectedNote}

            removeNote={removeNote}

            toggleFavorite={toggleFavorite}

          />

        </div>

        <div className="col-span-9">

          <NotesEditor

            note={selectedNote}

          />

        </div>

      </div>

    </MainLayout>

  );

}

export default Notes;