function RecentNotes() {

  const notes = [
    "Java Collections",
    "Operating System",
    "Computer Networks",
    "DBMS Transactions",
  ];

  return (
    <div className="bg-slate-900 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        Recent Notes
      </h2>

      <div className="space-y-3">

        {notes.map((note, index) => (

          <div
            key={index}
            className="bg-slate-800 rounded-xl p-4"
          >
            📝 {note}
          </div>

        ))}

      </div>

    </div>
  );
}

export default RecentNotes;