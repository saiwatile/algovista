export function generateSelectionSortStates(inputArray) {
  const states = []
  const arr = [...inputArray]
  const n = arr.length

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i

    for (let j = i + 1; j < n; j++) {
      // Comparing
      states.push({
        array: [...arr],
        comparing: [minIndex, j],
        swapped: false,
        explanation: `Comparing ${arr[minIndex]} and ${arr[j]}`
      })

      if (arr[j] < arr[minIndex]) {
        minIndex = j

        states.push({
          array: [...arr],
          comparing: [minIndex],
          swapped: false,
          explanation: `New minimum found: ${arr[minIndex]}`
        })
      }
    }

    if (minIndex !== i) {
      // Swap
      ;[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]

      states.push({
        array: [...arr],
        comparing: [i, minIndex],
        swapped: true,
        explanation: `Swapped ${arr[minIndex]} and ${arr[i]}`
      })
    }
  }

  // Final sorted state
  states.push({
    array: [...arr],
    comparing: [],
    swapped: false,
    explanation: "Array is fully sorted."
  })

  return states
}