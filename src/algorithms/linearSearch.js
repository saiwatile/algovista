export function generateLinearSearchStates(array, target) {
  const states = []
  let comparisons = 0

  for (let i = 0; i < array.length; i++) {
    comparisons++

    states.push({
      array: [...array],
      comparing: [i],
      found: false,
      comparisons,
      explanation: `Comparing ${array[i]} with target ${target}`
    })

    if (array[i] === target) {
      states.push({
        array: [...array],
        comparing: [i],
        found: true,
        comparisons,
        explanation: `Target ${target} found at index ${i}`
      })

      return states
    }
  }

  states.push({
    array: [...array],
    comparing: [],
    found: false,
    comparisons,
    explanation: `Target ${target} not found`
  })

  return states
}