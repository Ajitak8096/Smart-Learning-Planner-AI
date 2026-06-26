import ReactMarkdown from "react-markdown";

function NotesEditor({ note }) {

  if (!note)
    return (
      <div className="bg-slate-900 rounded-2xl p-8">
        Select a Note
      </div>
    );

  return (

    <div className="bg-slate-900 rounded-2xl p-8 overflow-y-auto h-full">

      <h1 className="text-3xl font-bold mb-2">

        {note.title}

      </h1>

      <p className="text-gray-400 mb-8">

        {note.subject}

      </p>

      <article className="prose prose-invert max-w-none">

        <ReactMarkdown>

          {note.content}

        </ReactMarkdown>

      </article>

    </div>

  );
}

export default NotesEditor;