function TypingLoader() {
  return (
    <div className="flex gap-2 bg-slate-800 px-5 py-4 rounded-xl w-fit">
      <span className="animate-bounce">●</span>
      <span
        className="animate-bounce"
        style={{ animationDelay: "0.2s" }}
      >
        ●
      </span>
      <span
        className="animate-bounce"
        style={{ animationDelay: "0.4s" }}
      >
        ●
      </span>
    </div>
  );
}

export default TypingLoader;