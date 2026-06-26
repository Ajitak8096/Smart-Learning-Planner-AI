import {useState,useEffect} from "react";

function EditProfile({user,onSave}){

    const[data,setData]=useState({

        fullName:"",

        goal:"",

        targetExam:"",

        dailyHours:2,

        avatar:""

    });

    useEffect(()=>{

        if(user){

            setData({

                fullName:user.fullName||"",

                goal:user.goal||"",

                targetExam:user.targetExam||"",

                dailyHours:user.dailyHours||2,

                avatar:user.avatar||""

            });

        }

    },[user]);

    const change=(e)=>{

        setData({

            ...data,

            [e.target.name]:e.target.value

        });

    };

    return(

<div className="bg-slate-900 rounded-2xl p-8">

<h2 className="text-2xl font-bold mb-6">

Edit Profile

</h2>

<div className="space-y-4">

<input
name="fullName"
value={data.fullName}
onChange={change}
placeholder="Full Name"
className="w-full p-3 rounded-xl bg-slate-800"
/>

<input
name="goal"
value={data.goal}
onChange={change}
placeholder="Goal"
className="w-full p-3 rounded-xl bg-slate-800"
/>

<input
name="targetExam"
value={data.targetExam}
onChange={change}
placeholder="Target Exam"
className="w-full p-3 rounded-xl bg-slate-800"
/>

<input
type="number"
name="dailyHours"
value={data.dailyHours}
onChange={change}
className="w-full p-3 rounded-xl bg-slate-800"
/>

<input
name="avatar"
value={data.avatar}
onChange={change}
placeholder="Avatar URL"
className="w-full p-3 rounded-xl bg-slate-800"
/>

<button
onClick={()=>onSave(data)}
className="bg-blue-600 px-8 py-3 rounded-xl"
>

Save Changes

</button>

</div>

</div>

    );

}

export default EditProfile;