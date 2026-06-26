import { useNavigate } from "react-router-dom";

function DangerZone(){

const navigate=useNavigate();

const logout=()=>{

localStorage.removeItem("token");

navigate("/login");

}

return(

<div className="bg-red-950 border border-red-700 rounded-3xl p-6">

<h2 className="text-2xl font-bold text-red-400">

Danger Zone

</h2>

<div className="flex gap-4 mt-6">

<button
className="bg-red-600 px-6 py-3 rounded-xl"
>

Delete Account

</button>

<button
onClick={logout}
className="bg-orange-600 px-6 py-3 rounded-xl"
>

Logout

</button>

</div>

</div>

)

}

export default DangerZone;