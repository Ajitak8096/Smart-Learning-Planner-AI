function SubjectProgress({ weakSubjects = [] }) {

  return (

    <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6">

      <h2 className="text-2xl font-bold mb-6">

        📊 Weak Subjects

      </h2>

      <div className="space-y-4">

        {weakSubjects.map((subject, index) => (

          <div
            key={index}
            className="bg-slate-800 rounded-xl p-4 flex justify-between"
          >

            <span>

              {subject}

            </span>

            <span className="text-red-400">

              Needs Practice

            </span>

          </div>

        ))}

      </div>

    </div>

  );

}

export default SubjectProgress;