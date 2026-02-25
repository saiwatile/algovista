function Controls({
  generateArray,
  startBubbleSort,
  isPlaying,
  setIsPlaying,
  speed,
  setSpeed,
}) {
  return (
    <div className="bg-gray-900 p-4 rounded-xl border border-gray-800 space-y-4">
      <div className="flex gap-4">
        <button
          onClick={generateArray}
          className="bg-green-500 px-4 py-2 rounded-lg"
        >
          Generate
        </button>

        <button
          onClick={startBubbleSort}
          className="bg-blue-500 px-4 py-2 rounded-lg"
        >
          Start Bubble Sort
        </button>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-gray-700 px-4 py-2 rounded-lg"
        >
          {isPlaying ? "Pause" : "Resume"}
        </button>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-400">
          Speed
        </span>

        <input
          type="range"
          min="10"
          max="1000"
          step="10"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="w-64"
        />

        <span className="text-sm text-gray-400">
          {speed} ms
        </span>
      </div>
    </div>
  )
}

export default Controls