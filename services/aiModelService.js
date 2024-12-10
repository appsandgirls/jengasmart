import axios from "axios"

const FLASK_API_URL = "http://127.0.0.1:5000/predict"

export async function fetchPrediction(data) {
  try {
    const response = await axios.post(FLASK_API_URL, data, {
      headers: {
        "Content-Type": "application/json", // Explicitly set the content type
      },
    })
    return response.data
  } catch (error) {
    console.error("Error fetching prediction:", error)
    throw error
  }
}
