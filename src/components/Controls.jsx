function Controls({
  generateArray,
  startBubbleSort,
  clearSorting,
  isPlaying,
  setIsPlaying,
  speed,
  setSpeed,
  inputValue,
  setInputValue,
  arraySize,
  setArraySize,
}) {
  return (
    <div className="bg-gray-900 p-5 rounded-xl border border-gray-800 space-y-5">

      {/* Custom Input */}
      <div>
        <input
          type="text"
          placeholder="Enter numbers (e.g. 5,3,8,1)"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="bg-gray-800 px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Random Count */}
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-400">
          Random Count:
        </span>

        <input
          type="number"
          min="1"
          max="200"
          value={arraySize}
          onChange={(e) => setArraySize(Number(e.target.value))}
          className="bg-gray-800 px-3 py-2 rounded-lg w-24"
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={generateArray}
          className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition"
        >
          Generate
        </button>

        <button
          onClick={() => {
            if (isPlaying) {
              setIsPlaying(false)
            } else {
              startBubbleSort()
            }
          }}
          className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          {isPlaying ? "Stop" : "Start"}
        </button>

        <button
          onClick={clearSorting}
          className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Clear
        </button>
      </div>

      {/* Speed */}
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-400">Speed</span>

        <input
          type="range"
          min="10"
          max="1000"
          step="10"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="w-full"
        />

        <span className="text-sm text-gray-400">
          {speed} ms
        </span>
      </div>
    </div>
  )
}

export default Controls