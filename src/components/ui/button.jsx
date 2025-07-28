export function Button({ children, variant = "solid", className = "", ...props }) {
  const base = variant === "outline" ? "border border-blue-600 text-blue-600" : "bg-blue-600 text-white";
  return (
    <button className={`px-4 py-2 rounded-xl ${base} ${className}`} {...props}>
      {children}
    </button>
  );
}
