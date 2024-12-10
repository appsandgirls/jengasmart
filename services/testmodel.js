import axios from "axios"

export async function fetchPrediction(payload) {
  try {
    const response = await axios.post("/api/predict", payload, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    return response.data
  } catch (error) {
    console.error("Error fetching prediction:", error)
    throw error
  }
}

// Usage example
const payload = {
  size: 100,
  material_cost: 50,
  location_factor: 1.2,
}

fetchPrediction(payload)
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
