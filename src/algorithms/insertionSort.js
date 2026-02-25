export function generateInsertionSortStates(inputArray) {
  const states = []
  const arr = [...inputArray]
  const n = arr.length

  for (let i = 1; i < n; i++) {
    let key = arr[i]
    let j = i - 1

    states.push({
      array: [...arr],
      comparing: [i],
      swapped: false,
      explanation: `Considering element ${key}`
    })

    while (j >= 0 && arr[j] > key) {
      states.push({
        array: [...arr],
        comparing: [j, j + 1],
        swapped: false,
        explanation: `Comparing ${arr[j]} and ${key}`
      })

      arr[j + 1] = arr[j]

      states.push({
        array: [...arr],
        comparing: [j, j + 1],
        swapped: true,
        explanation: `Shifting ${arr[j]} to the right`
      })

      j--
    }

    arr[j + 1] = key

    states.push({
      array: [...arr],
      comparing: [j + 1],
      swapped: false,
      explanation: `Placed ${key} in correct position`
    })
  }

  states.push({
    array: [...arr],
    comparing: [],
    swapped: false,
    explanation: "Array is fully sorted."
  })

  return states
}