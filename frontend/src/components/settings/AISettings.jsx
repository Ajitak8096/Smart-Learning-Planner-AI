function AISettings(){

    return(

        <div className="bg-slate-900 rounded-3xl p-6">

            <h2 className="text-2xl font-bold mb-6">

                🤖 AI Settings

            </h2>

            <label className="block mb-3">

                AI Model

            </label>

            <select className="w-full p-3 rounded-xl bg-slate-800">

                <option>Gemma 4</option>

                <option>GPT</option>

                <option>DeepSeek</option>

            </select>

            <label className="block mt-6 mb-3">

                Response Length

            </label>

            <select className="w-full p-3 rounded-xl bg-slate-800">

                <option>Short</option>

                <option>Medium</option>

                <option>Long</option>

            </select>

        </div>

    )

}

export default AISettings;