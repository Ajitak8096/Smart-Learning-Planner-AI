function SecuritySettings(){

    return(

<div className="bg-slate-900 rounded-3xl p-6">

<h2 className="text-2xl font-bold mb-6">

🔒 Security

</h2>

<input
type="password"
placeholder="Current Password"
className="w-full mb-4 p-3 rounded-xl bg-slate-800"
/>

<input
type="password"
placeholder="New Password"
className="w-full mb-4 p-3 rounded-xl bg-slate-800"
/>

<input
type="password"
placeholder="Confirm Password"
className="w-full mb-6 p-3 rounded-xl bg-slate-800"
/>

<button
className="bg-blue-600 px-6 py-3 rounded-xl"
>

Update Password

</button>

</div>

    )

}

export default SecuritySettings;