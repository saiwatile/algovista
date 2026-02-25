function ExplanationPanel({ states, currentStep }) {
  return (
    <div className="bg-gray-900 p-5 rounded-xl border border-gray-800 h-60 overflow-y-auto">
      <h3 className="text-lg font-semibold text-blue-400 mb-3">
        Steps
      </h3>

      {states.length === 0 && (
        <p className="text-gray-400">
          Press Start to visualize Bubble Sort.
        </p>
      )}

      {states.slice(0, currentStep + 1).map((state, index) => (
        <div
          key={index}
          className={`text-sm mb-2 ${
            index === currentStep
              ? "text-yellow-400"
              : "text-gray-300"
          }`}
        >
          Step {index + 1}: {state.explanation}
        </div>
      ))}
    </div>
  )
}

export default ExplanationPanel