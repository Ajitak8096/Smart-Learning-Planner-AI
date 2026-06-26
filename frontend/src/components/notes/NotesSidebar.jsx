import { FaStar, FaTrash } from "react-icons/fa";

function NotesSidebar({
  notes,
  selectedNote,
  setSelectedNote,
  removeNote,
  toggleFavorite,
}) {
  return (
    <div className="bg-slate-900 rounded-2xl h-full p-5">

      <h2 className="text-2xl font-bold mb-6">
        📚 Notes
      </h2>

      <div className="space-y-3">

        {notes.map((note) => (

          <div
            key={note._id}
            onClick={() => setSelectedNote(note)}
            className={`cursor-pointer rounded-xl p-4 transition
            ${
              selectedNote?._id === note._id
                ? "bg-blue-600"
                : "bg-slate-800 hover:bg-slate-700"
            }`}
          >

            <div className="flex justify-between">

              <div>

                <h3 className="font-semibold">
                  {note.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {note.subject}
                </p>

              </div>

              <div className="flex gap-3">

                <FaStar
                  onClick={(e)=>{
                    e.stopPropagation();
                    toggleFavorite(note._id);
                  }}
                  className={
                    note.favorite
                      ? "text-yellow-400"
                      : "text-gray-500"
                  }
                />

                <FaTrash
                  onClick={(e)=>{
                    e.stopPropagation();
                    removeNote(note._id);
                  }}
                  className="text-red-500"
                />

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default NotesSidebar;