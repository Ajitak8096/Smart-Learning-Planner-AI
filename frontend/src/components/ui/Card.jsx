function Card({ children, className = "" }) {
  return (
    <div
      className={`
      rounded-2xl
      bg-slate-800/60
      backdrop-blur-lg
      border
      border-slate-700
      shadow-xl
      p-6
      ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;