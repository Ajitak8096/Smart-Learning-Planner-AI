function Input({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="space-y-2">
      <label className="text-gray-300">
        {label}
      </label>

      <input
        className="
        w-full
        rounded-xl
        bg-slate-800
        border
        border-slate-700
        px-4
        py-3
        text-white
        outline-none
        focus:border-blue-500
        transition
        "
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;