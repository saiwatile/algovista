import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import VisualizerCanvas from "../components/VisualizerCanvas"
import Controls from "../components/Controls"
import ExplanationPanel from "../components/ExplanationPanel"
import PseudocodePanel from "../components/PseudocodePanel"

import { generateLinearSearchStates } from "../algorithms/linearSearch"
import { generateBinarySearchStates } from "../algorithms/binarySearch"

function Searching() {
  const [algorithm, setAlgorithm] = useState("linear")
  const [array, setArray] = useState([])
  const [states, setStates] = useState([])
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [speed, setSpeed] = useState(200)
  const [inputValue, setInputValue] = useState("")
  const [arraySize, setArraySize] = useState(20)
  const [target, setTarget] = useState("")

  // Generate Array
  const generateArray = () => {
    const size = Number(arraySize)
    const newArray = []

    for (let i = 0; i < size; i++) {
      newArray.push(Math.floor(Math.random() * 100) + 1)
    }

    if (algorithm === "binary") {
      newArray.sort((a, b) => a - b)
    }

    setArray(newArray)
    setInputValue(newArray.join(","))
    setStates([])
    setCurrentStep(0)
    setIsPlaying(false)
  }

  // Start Searching
  const startSearching = () => {
    if (!target) return

    let workingArray = array

    if (inputValue.trim() !== "") {
      workingArray = inputValue
        .split(",")
        .map((num) => Number(num.trim()))
        .filter((num) => !isNaN(num))

      if (algorithm === "binary") {
        workingArray.sort((a, b) => a - b)
      }

      setArray(workingArray)
    }

    let generatedStates

    if (algorithm === "linear") {
      generatedStates = generateLinearSearchStates(
        workingArray,
        Number(target)
      )
    } else {
      generatedStates = generateBinarySearchStates(
        workingArray,
        Number(target)
      )
    }

    setStates(generatedStates)
    setCurrentStep(0)
    setIsPlaying(true)
  }

  // Animation Engine
  useEffect(() => {
    if (!isPlaying) return
    if (states.length === 0) return

    if (currentStep >= states.length - 1) {
      setIsPlaying(false)
      return
    }

    const timer = setTimeout(() => {
      setCurrentStep((prev) => prev + 1)
    }, speed)

    return () => clearTimeout(timer)
  }, [isPlaying, currentStep, states, speed])

  const displayedArray =
    states.length > 0 && states[currentStep]
      ? states[currentStep].array
      : array

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      <div className="p-6 space-y-6">

        <h1 className="text-3xl font-bold text-purple-400">
          Searching Visualizer
        </h1>

        {/* Algorithm Dropdown */}
        <select
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value)}
          className="bg-gray-800 px-4 py-2 rounded-lg border border-gray-700"
        >
          <option value="linear">Linear Search</option>
          <option value="binary">Binary Search</option>
        </select>

        {/* Target Input */}
        <input
          type="number"
          placeholder="Enter target value"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          className="bg-gray-800 px-4 py-2 rounded-lg border border-gray-700 w-full"
        />

        {/* Visualizer */}
        <VisualizerCanvas
          array={displayedArray}
          currentState={
            states.length > 0
              ? states[Math.min(currentStep, states.length - 1)]
              : null
          }
        />

        {/* Controls */}
        <Controls
          generateArray={generateArray}
          startBubbleSort={startSearching}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          speed={speed}
          setSpeed={setSpeed}
          inputValue={inputValue}
          setInputValue={setInputValue}
          arraySize={arraySize}
          setArraySize={setArraySize}
        />

        {/* Steps + Complexity */}
        <ExplanationPanel
          states={states}
          currentStep={currentStep}
          algorithmType={algorithm}
        />

        <PseudocodePanel />

      </div>
    </div>
  )
}

export default Searching