import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import VisualizerCanvas from "../components/VisualizerCanvas"
import Controls from "../components/Controls"
import PseudocodePanel from "../components/PseudocodePanel"
import ExplanationPanel from "../components/ExplanationPanel"

import { generateBubbleSortStates } from "../algorithms/bubbleSort"
import { generateSelectionSortStates } from "../algorithms/selectionSort"
import { generateInsertionSortStates } from "../algorithms/insertionSort"

function Sort() {
  const [algorithm, setAlgorithm] = useState("bubble")
  const [array, setArray] = useState([])
  const [states, setStates] = useState([])
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [speed, setSpeed] = useState(200)
  const [inputValue, setInputValue] = useState("")
  const [arraySize, setArraySize] = useState(30)

  const generateArray = () => {
    const size = Number(arraySize)
    const newArray = []

    for (let i = 0; i < size; i++) {
      newArray.push(Math.floor(Math.random() * 300) + 20)
    }

    setArray(newArray)
    setInputValue(newArray.join(","))
    setStates([])
    setCurrentStep(0)
    setIsPlaying(false)
  }

  const startSorting = () => {
    let workingArray = array

    if (inputValue.trim() !== "") {
      workingArray = inputValue
        .split(",")
        .map((num) => Number(num.trim()))
        .filter((num) => !isNaN(num))

      setArray(workingArray)
    }

    let generatedStates

    switch (algorithm) {
      case "bubble":
        generatedStates = generateBubbleSortStates(workingArray)
        break
      case "selection":
        generatedStates = generateSelectionSortStates(workingArray)
        break
      case "insertion":
        generatedStates = generateInsertionSortStates(workingArray)
        break
      default:
        generatedStates = generateBubbleSortStates(workingArray)
    }

    setStates(generatedStates)
    setCurrentStep(0)
    setIsPlaying(true)
  }

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

  const currentState =
    isPlaying && states.length > 0
      ? states[currentStep]
      : null

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      <div className="p-6 space-y-6">

        <h1 className="text-3xl font-bold text-blue-400">
          Sorting Visualizer
        </h1>

        {/* DROPDOWN */}
        <select
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value)}
          className="bg-gray-800 px-4 py-2 rounded-lg border border-gray-700"
        >
          <option value="bubble">Bubble Sort</option>
          <option value="selection">Selection Sort</option>
          <option value="insertion">Insertion Sort</option>
        </select>

        <VisualizerCanvas
          array={displayedArray}
          currentState={currentState}
        />

        <Controls
          generateArray={generateArray}
          startBubbleSort={startSorting}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          speed={speed}
          setSpeed={setSpeed}
          inputValue={inputValue}
          setInputValue={setInputValue}
          arraySize={arraySize}
          setArraySize={setArraySize}
        />

        <ExplanationPanel
          states={states}
          currentStep={currentStep}
        />

        <PseudocodePanel />

      </div>
    </div>
  )
}

export default Sort