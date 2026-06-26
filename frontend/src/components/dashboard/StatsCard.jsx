function StatsCard({ title, value, icon, color }) {
  return (
    <div
      className={`${color} rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300`}
    >
      <div className="text-4xl text-white">
        {icon}
      </div>

      <h3 className="text-white/80 mt-5">
        {title}
      </h3>

      <h1 className="text-4xl font-bold text-white mt-2">
        {value}
      </h1>
    </div>
  );
}

export default StatsCard;