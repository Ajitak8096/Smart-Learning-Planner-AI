import { Mail, Target, Clock, Flame, Star, Calendar } from "lucide-react";

function ProfileCard({ user }) {
  if (!user) return null;

  return (
    <div className="bg-slate-900 rounded-3xl p-8 shadow-xl">

      <div className="flex flex-col md:flex-row items-center gap-8">

        <img
          src={
            user.avatar ||
            `https://ui-avatars.com/api/?name=${user.fullName}&background=2563eb&color=fff&size=200`
          }
          alt="avatar"
          className="w-40 h-40 rounded-full border-4 border-blue-500 object-cover"
        />

        <div className="flex-1">

          <h1 className="text-4xl font-bold">
            {user.fullName}
          </h1>

          <div className="flex items-center gap-3 mt-3 text-gray-400">
            <Mail size={18} />
            {user.email}
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-8">

            <InfoCard
              icon={<Target />}
              title="Target Exam"
              value={user.targetExam || "Not Set"}
            />

            <InfoCard
              icon={<Star />}
              title="Goal"
              value={user.goal || "Not Set"}
            />

            <InfoCard
              icon={<Clock />}
              title="Daily Study"
              value={`${user.dailyHours} Hours`}
            />

            <InfoCard
              icon={<Flame />}
              title="Study Streak"
              value={`${user.streak} Days`}
            />

            <InfoCard
              icon={<Star />}
              title="XP"
              value={user.xp}
            />

            <InfoCard
              icon={<Calendar />}
              title="Member Since"
              value={new Date(user.createdAt).toLocaleDateString()}
            />

          </div>

        </div>

      </div>

    </div>
  );
}

function InfoCard({ icon, title, value }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-4 flex items-center gap-4">

      <div className="text-blue-400">
        {icon}
      </div>

      <div>

        <p className="text-gray-400 text-sm">
          {title}
        </p>

        <p className="font-semibold text-lg">
          {value}
        </p>

      </div>

    </div>
  );
}

export default ProfileCard;