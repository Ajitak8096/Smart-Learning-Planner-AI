function ProfileStats() {
  const achievements = [
    "🏅 Consistent Learner",
    "🔥 7 Day Streak",
    "📚 100 Notes Generated",
    "🧠 50 AI Chats",
    "🏆 25 Quizzes Completed",
    "⭐ Top Performer",
  ];

  return (
    <div className="bg-slate-900 rounded-3xl p-8">

      <h2 className="text-3xl font-bold mb-6">
        Achievements
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

        {achievements.map((item) => (

          <div
            key={item}
            className="bg-slate-800 rounded-2xl p-6 text-center hover:bg-blue-600 transition"
          >
            <h3 className="font-semibold">
              {item}
            </h3>
          </div>

        ))}

      </div>

    </div>
  );
}

export default ProfileStats;