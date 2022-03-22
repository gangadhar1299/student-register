import { FaCircleNotch } from "react-icons/fa";

export function Page({ children, className = "", ...props }) {
  return (
    <div className={`min-h-screen ${className ? className : ""}`} {...props}>
      {children}
    </div>
  );
}

export function Button({ children, isLoading = false, ...props }) {
  return (
    <button
      className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 flex place-items-center justify-center gap-2 rounded-sm w-full"
      {...props}
    >
      {children}
      {isLoading ? <FaCircleNotch className="animate-spin" /> : null}
    </button>
  );
}
