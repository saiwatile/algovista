function VisualizerCanvas({ array, currentState }) {
  return (
    <div className="bg-gray-900 h-80 rounded-xl border border-gray-800 p-4 flex items-end gap-1">
      {array.map((value, index) => {
        let color = "bg-blue-500"

        if (
          currentState?.comparing &&
          currentState.comparing.includes(index)
        ) {
          color = currentState.swapped
            ? "bg-red-500"
            : "bg-yellow-400"
        }

        return (
          <div
            key={index}
            className={`${color} w-2 rounded-t-md transition-all duration-200`}
            style={{ height: `${value}px` }}
          />
        )
      })}
    </div>
  )
}

export default VisualizerCanvas