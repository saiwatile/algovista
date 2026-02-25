export function generateBubbleSortStates(inputArray) {
  const arr = [...inputArray]
  const states = []

  const n = arr.length

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {

      states.push({
        array: [...arr],
        comparing: [j, j + 1],
        swapped: false,
        explanation: `Comparing ${arr[j]} and ${arr[j + 1]}`,
        codeLine: 3
      })

      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]

        states.push({
          array: [...arr],
          comparing: [j, j + 1],
          swapped: true,
          explanation: `Swapped ${arr[j]} and ${arr[j + 1]}`,
          codeLine: 4
        })
      }
    }
  }

  return states
}