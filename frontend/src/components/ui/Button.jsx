import { motion } from "framer-motion";

function Button({
  children,
  type = "button",
  onClick,
  className = "",
  disabled = false,
  loading = false,
}) {
  return (
    <motion.button
      whileHover={!disabled && !loading ? { scale: 1.03 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.97 } : {}}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        w-full
        rounded-xl
        bg-blue-600
        hover:bg-blue-700
        text-white
        font-semibold
        py-3
        transition-all
        duration-300
        shadow-lg
        disabled:opacity-50
        disabled:cursor-not-allowed
        flex
        justify-center
        items-center
        gap-2
        ${className}
      `}
    >
      {loading ? (
        <>
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          Signing In...
        </>
      ) : (
        children
      )}
    </motion.button>
  );
}

export default Button;