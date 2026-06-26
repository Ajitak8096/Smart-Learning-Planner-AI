import { useEffect, useState } from "react";
import { updateProfile } from "../../services/userService";
import toast from "react-hot-toast";

function EditProfileModal({ user, onClose, refresh }) {
  const [form, setForm] = useState({
    fullName: "",
    goal: "",
    targetExam: "",
    dailyHours: 2,
    avatar: "",
  });

  useEffect(() => {
    if (user) {
      setForm({
        fullName: user.fullName || "",
        goal: user.goal || "",
        targetExam: user.targetExam || "",
        dailyHours: user.dailyHours || 2,
        avatar: user.avatar || "",
      });
    }
  }, [user]);

  const change = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const save = async () => {
    try {
      await updateProfile(form);

      toast.success("Profile Updated");

      refresh();

      onClose();
    } catch (err) {
      toast.error("Update Failed");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-slate-900 rounded-3xl w-[550px] p-8">

        <h2 className="text-3xl font-bold mb-6">
          Edit Profile
        </h2>

        <div className="space-y-4">

          <input
            name="fullName"
            value={form.fullName}
            onChange={change}
            placeholder="Full Name"
            className="w-full p-3 rounded-xl bg-slate-800"
          />

          <input
            name="targetExam"
            value={form.targetExam}
            onChange={change}
            placeholder="Target Exam"
            className="w-full p-3 rounded-xl bg-slate-800"
          />

          <input
            name="goal"
            value={form.goal}
            onChange={change}
            placeholder="Goal"
            className="w-full p-3 rounded-xl bg-slate-800"
          />

          <input
            type="number"
            name="dailyHours"
            value={form.dailyHours}
            onChange={change}
            className="w-full p-3 rounded-xl bg-slate-800"
          />

          <input
            name="avatar"
            value={form.avatar}
            onChange={change}
            placeholder="Avatar URL"
            className="w-full p-3 rounded-xl bg-slate-800"
          />

          <div className="flex gap-4 mt-6">

            <button
              onClick={save}
              className="flex-1 bg-blue-600 hover:bg-blue-700 rounded-xl py-3"
            >
              Save
            </button>

            <button
              onClick={onClose}
              className="flex-1 bg-slate-700 rounded-xl py-3"
            >
              Cancel
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default EditProfileModal;