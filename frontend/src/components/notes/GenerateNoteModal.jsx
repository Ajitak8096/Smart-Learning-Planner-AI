import { useState } from "react";

function GenerateNoteModal({ createNote }) {

  const [topic, setTopic] = useState("");

  const [subject, setSubject] = useState("");

  return (

    <div className="bg-slate-900 rounded-2xl p-6 mb-6">

      <h2 className="text-xl font-bold mb-4">

        ✨ AI Generate Notes

      </h2>

      <input
        className="w-full mb-3 p-3 rounded-xl bg-slate-800"
        placeholder="Topic"
        value={topic}
        onChange={(e)=>setTopic(e.target.value)}
      />

      <input
        className="w-full mb-4 p-3 rounded-xl bg-slate-800"
        placeholder="Subject"
        value={subject}
        onChange={(e)=>setSubject(e.target.value)}
      />

      <button
        onClick={()=>{
          createNote(topic,subject);
          setTopic("");
          setSubject("");
        }}
        className="bg-blue-600 px-5 py-3 rounded-xl"
      >
        Generate
      </button>

    </div>

  );

}

export default GenerateNoteModal;