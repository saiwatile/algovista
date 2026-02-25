function PseudocodePanel() {
  return (
    <div className="bg-gray-900 p-4 rounded-xl border border-gray-800">
      <h3 className="text-lg font-semibold text-blue-400 mb-2">
        Pseudocode
      </h3>
      <pre className="text-sm text-gray-300">
{`for i from 0 to n-1
  for j from 0 to n-i-1
    if arr[j] > arr[j+1]
      swap(arr[j], arr[j+1])`}
      </pre>
    </div>
  )
}

export default PseudocodePanel
