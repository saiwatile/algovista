function VisualizerCanvas({ array, currentState }) {
  const maxValue = array.length > 0 ? Math.max(...array) : 1

  return (
    <div className="relative bg-gray-900 h-[500px] rounded-2xl border border-gray-800 p-8 overflow-hidden flex items-end justify-center">

      {/* Empty State */}
      {array.length === 0 && (
        <p className="text-gray-500 text-lg absolute top-1/2">
          Generate an array to begin visualization
        </p>
      )}

      {array.length > 0 && (
        <div className="flex items-end justify-center gap-2 w-full h-full relative">

          {array.map((value, index) => {
            let baseColor =
              "bg-gradient-to-t from-blue-600 to-blue-400"

            /* --------------------------------------------- */
            /* 1️⃣ Binary Search Range Fading */
            /* --------------------------------------------- */
            if (
              currentState?.left !== undefined &&
              currentState?.right !== undefined &&
              (index < currentState.left ||
                index > currentState.right)
            ) {
              baseColor = "bg-gray-700 opacity-40"
            }

            /* --------------------------------------------- */
            /* 2️⃣ Found Element */
            /* --------------------------------------------- */
            else if (
              currentState?.found &&
              currentState?.comparing?.includes(index)
            ) {
              baseColor =
                "bg-gradient-to-t from-purple-600 to-purple-400"
            }

            /* --------------------------------------------- */
            /* 3️⃣ Sorted Elements (Sorting Algorithms) */
            /* --------------------------------------------- */
            else if (
              currentState?.sorted?.includes(index)
            ) {
              baseColor =
                "bg-gradient-to-t from-green-600 to-green-400"
            }

            /* --------------------------------------------- */
            /* 4️⃣ Comparing / Swapping */
            /* --------------------------------------------- */
            else if (
              currentState?.comparing?.includes(index)
            ) {
              baseColor = currentState?.swapped
                ? "bg-gradient-to-t from-red-600 to-red-400"
                : "bg-gradient-to-t from-yellow-500 to-yellow-300"
            }

            const heightPercent =
              (value / maxValue) * 100

            return (
              <div
                key={index}
                className={`relative flex items-end justify-center rounded-xl shadow-lg transition-all duration-500 ease-in-out ${baseColor}`}
                style={{
                  height: `${heightPercent}%`,
                  width: `${Math.max(30, 100 / array.length)}%`
                }}
              >

                {/* 🔥 Pointer Labels (Binary Search) */}
                {currentState?.left === index && (
                  <span className="absolute -top-6 text-xs text-blue-400 font-bold">
                    L
                  </span>
                )}

                {currentState?.right === index && (
                  <span className="absolute -top-6 text-xs text-red-400 font-bold">
                    R
                  </span>
                )}

                {currentState?.comparing?.includes(index) &&
                  currentState?.left !== undefined && (
                  <span className="absolute -top-6 text-xs text-yellow-400 font-bold">
                    M
                  </span>
                )}

                {/* Value Label */}
                <span className="mb-2 text-xs font-semibold text-white select-none">
                  {value}
                </span>

              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default VisualizerCanvas