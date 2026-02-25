import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import VisualizerCanvas from "./components/VisualizerCanvas"
import Controls from "./components/Controls"
import PseudocodePanel from "./components/PseudocodePanel"
import ExplanationPanel from "./components/ExplanationPanel"
import { generateBubbleSortStates } from "./algorithms/bubbleSort"

function App() {
  const [array, setArray] = useState([])
  const [states, setStates] = useState([])
  const [currentStep, setCurrentStep] = useState(0)
  const [speed, setSpeed] = useState(200)

  const generateArray = () => {
    const newArray = []
    for (let i = 0; i < 30; i++) {
      newArray.push(Math.floor(Math.random() * 300) + 20)
    }
    setArray(newArray)
    setStates([])
    setCurrentStep(0)
    setIsPlaying(false)
  }

  useEffect(() => {
    generateArray()
  }, [])

  const startBubbleSort = () => {
    const generatedStates = generateBubbleSortStates(array)
    setStates(generatedStates)
    setCurrentStep(0)
    setIsPlaying(true)
  }

  useEffect(() => {
    if (!isPlaying) return

    if (currentStep >= states.length) {
      setIsPlaying(false)
      return
    }

    const timer = setTimeout(() => {
      setCurrentStep((prev) => prev + 1)
    }, speed)

    return () => clearTimeout(timer)
  }, [isPlaying, currentStep, states])

  const displayedArray =
    states.length > 0 && states[currentStep]
      ? states[currentStep].array
      : array

  const currentState =
    states.length > 0 && states[currentStep]
      ? states[currentStep]
      : null

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold text-blue-400">
          Bubble Sort Visualization
        </h1>

        <VisualizerCanvas
          array={displayedArray}
          currentState={currentState}
        />

        <Controls
          generateArray={generateArray}
          startBubbleSort={startBubbleSort}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          speed={speed}
          setSpeed={setSpeed}
        />

        <PseudocodePanel />
        <ExplanationPanel
          explanation={currentState?.explanation}
        />
      </div>
    </div>
  )
}

export default App