import  { useState } from "react"
import { fetchPrediction } from "../../services/aiModelService" // Update the import path based on your folder structure

const CostEstimator = () => {
  const [size, setSize] = useState("")
  const [materialCost, setMaterialCost] = useState("")
  const [locationFactor, setLocationFactor] = useState("")
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setResult(null)

    try {
      const payload = {
        size: parseFloat(size), // Convert inputs to numbers
        material_cost: parseFloat(materialCost),
        location_factor: parseFloat(locationFactor),
      }

      const response = await fetchPrediction(payload)

      // Assuming API returns { estimated_cost: 6200 }
      if (response && response.estimated_cost !== undefined) {
        if (response) {
          setResult(
            `The estimated cost is ${response.estimated_cost} TZS.`)
        }
        //setResult(`The estimated cost is ${response.estimated_cost} TZS`)
      } else {
        throw new Error("Unexpected response from server")
      }
    } catch (err) {
      console.error(err)
      setError("Failed to fetch prediction. Please try again.")
    }
  }


  return (
    <div>
      <h1>Cost Estimator</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Size (sqft): </label>
          <input
            type="number"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Material Cost: </label>
          <input
            type="number"
            value={materialCost}
            onChange={(e) => setMaterialCost(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Location Factor: </label>
          <input
            type="number"
            step="0.1"
            value={locationFactor}
            onChange={(e) => setLocationFactor(e.target.value)}
            required
          />
        </div>
        <button type="submit">Get Prediction</button>
      </form>

      {result && (
        <div>
          <h2>Prediction Result</h2>
          <p>{result}</p>
        </div>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  )
}

export default CostEstimator
