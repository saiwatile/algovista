import { useNavigate } from "react-router-dom"

function Landing() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-6">

      <h1 className="text-5xl font-bold text-blue-400 mb-6">
        AlgoVista
      </h1>

      <p className="text-gray-400 mb-12 text-center max-w-xl">
        Interactive Data Structures & Algorithms Visualizer.
        Learn visually. Understand deeply.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Sorting */}
        <div
          onClick={() => navigate("/sort")}
          className="bg-gray-900 hover:bg-gray-800 transition cursor-pointer p-8 rounded-2xl border border-gray-800 w-80 text-center shadow-lg hover:scale-105 duration-300"
        >
          <h2 className="text-2xl font-semibold text-blue-300 mb-3">
            Sorting Algorithms
          </h2>
          <p className="text-gray-400 text-sm">
            Visualize different sorting techniques step-by-step.
          </p>
        </div>

        {/* Searching */}
        <div
          onClick={() => navigate("/search")}
          className="bg-gray-900 hover:bg-gray-800 transition cursor-pointer p-8 rounded-2xl border border-gray-800 w-80 text-center shadow-lg hover:scale-105 duration-300"
        >
          <h2 className="text-2xl font-semibold text-purple-300 mb-3">
            Searching Algorithms
          </h2>
          <p className="text-gray-400 text-sm">
            Learn how searching works visually.
          </p>
        </div>

      </div>

    </div>
  )
}

export default Landing