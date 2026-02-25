import { useNavigate, useLocation } from "react-router-dom"

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const isHome = location.pathname === "/"

  return (
    <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex items-center justify-between">

      <h1
        onClick={() => navigate("/")}
        className="text-xl font-bold text-blue-400 cursor-pointer"
      >
        AlgoVista
      </h1>

      {!isHome && (
        <button
          onClick={() => navigate("/")}
          className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm transition"
        >
          ← Back to Home
        </button>
      )}
    </nav>
  )
}

export default Navbar