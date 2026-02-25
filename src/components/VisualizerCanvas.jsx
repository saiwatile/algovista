function VisualizerCanvas({ array, currentState }) {
  const maxValue = array.length > 0 ? Math.max(...array, 1) : 1

  const barWidth =
    array.length > 0 ? Math.max(30, 600 / array.length) : 40

  const gap = 10

  return (
    <div className="relative bg-gray-900 h-[500px] rounded-2xl border border-gray-800 p-8 overflow-hidden flex items-center justify-center">

      {array.length === 0 && (
        <p className="text-gray-500 text-lg">
          Generate an array to begin visualization
        </p>
      )}

      {array.length > 0 &&
        array.map((value, index) => {
          let baseColor =
            "bg-gradient-to-t from-blue-600 to-blue-400"

          if (
            currentState &&
            currentState.comparing?.includes(index)
          ) {
            baseColor = currentState.swapped
              ? "bg-gradient-to-t from-red-600 to-red-400"
              : "bg-gradient-to-t from-yellow-500 to-yellow-300"
          }

          const heightPercent = (value / maxValue) * 100

          return (
            <div
              key={index}
              className={`absolute bottom-8 flex items-end justify-center rounded-xl shadow-lg transition-all duration-500 ease-in-out ${baseColor}`}
              style={{
                height: `${heightPercent}%`,
                width: `${barWidth}px`,
                left: `${index * (barWidth + gap)}px`,
              }}
            >
              <span className="absolute bottom-2 text-xs font-semibold text-white select-none">
                {value}
              </span>
            </div>
          )
        })}
    </div>
  )
}

export default VisualizerCanvas