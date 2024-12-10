// ProgressDashboard.jsx
import { useState, useEffect } from "react"
import ProgressBar from "react-bootstrap/ProgressBar"

const ProgressDashboard = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate progress update from API
    const interval = setInterval(() => {
      setProgress((prevProgress) => Math.min(prevProgress + 10, 100))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <h2>Project Progress</h2>
      <ProgressBar now={progress} label={`${progress}%`} />
      <p>Remaining Tasks: {100 - progress}%</p>
    </div>
  )
}

export default ProgressDashboard
