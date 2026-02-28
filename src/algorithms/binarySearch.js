export function generateBinarySearchStates(array, target) {
  const states = []
  let left = 0
  let right = array.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    states.push({
      array: [...array],
      comparing: [mid],
      left,
      right,
      found: false,
      explanation: `Checking middle element ${array[mid]}`
    })

    if (array[mid] === target) {
      states.push({
        array: [...array],
        comparing: [mid],
        left,
        right,
        found: true,
        explanation: `Target ${target} found at index ${mid}`
      })
      return states
    }

    if (array[mid] < target) {
      states.push({
        array: [...array],
        comparing: [mid],
        left,
        right,
        found: false,
        explanation: `${array[mid]} is less than ${target}. Searching right half.`
      })
      left = mid + 1
    } else {
      states.push({
        array: [...array],
        comparing: [mid],
        left,
        right,
        found: false,
        explanation: `${array[mid]} is greater than ${target}. Searching left half.`
      })
      right = mid - 1
    }
  }

  states.push({
    array: [...array],
    comparing: [],
    left: -1,
    right: -1,
    found: false,
    explanation: `Target ${target} not found`
  })

  return states
}