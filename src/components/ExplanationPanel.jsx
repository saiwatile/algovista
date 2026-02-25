function ExplanationPanel({ explanation }) {
  return (
    <div className="bg-gray-900 p-4 rounded-xl border border-gray-800">
      <h3 className="text-lg font-semibold text-blue-400 mb-2">
        Explanation
      </h3>
      <p className="text-gray-300">
        {explanation || "Press Start to visualize Bubble Sort."}
      </p>
    </div>
  )
}

export default ExplanationPanel