function ExplanationPanel({ states, currentStep, algorithmType }) {

  const complexityMap = {
    linear: { time: "O(n)", space: "O(1)" },
    binary: { time: "O(log n)", space: "O(1)" },
    bubble: { time: "O(n²)", space: "O(1)" },
    selection: { time: "O(n²)", space: "O(1)" },
    insertion: { time: "O(n²)", space: "O(1)" }
  }

  const complexity = complexityMap[algorithmType] || {
    time: "-",
    space: "-"
  }

  const currentState =
    states.length > 0
      ? states[Math.min(currentStep, states.length - 1)]
      : null

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

      {/* Steps */}
      <div className="lg:col-span-2 bg-gray-900 border border-gray-800 rounded-2xl p-6 max-h-72 overflow-y-auto">
        <h2 className="text-xl font-bold text-purple-400 mb-4">
          Steps
        </h2>

        {states.length === 0 ? (
          <p className="text-gray-400">Press Start to visualize.</p>
        ) : (
          states.slice(0, currentStep + 1).map((state, index) => (
            <p
              key={index}
              className={`text-sm mb-1 ${
                index === currentStep
                  ? "text-blue-300 font-medium"
                  : "text-gray-400"
              }`}
            >
              Step {index + 1}: {state.explanation}
            </p>
          ))
        )}
      </div>

      {/* Complexity */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-purple-400 mb-4">
          Complexity
        </h2>

        <div className="space-y-4 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">Comparisons</span>
            <span className="text-yellow-400 font-bold">
              {currentState?.comparisons ?? 0}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Time Complexity</span>
            <span className="text-blue-400 font-semibold">
              {complexity.time}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Space Complexity</span>
            <span className="text-blue-400 font-semibold">
              {complexity.space}
            </span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ExplanationPanel