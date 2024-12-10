// ContractorRating.jsx
import { useState } from "react"
import ReactStars from "react-stars"

const ContractorRating = () => {
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState("")

  const handleRatingChange = (newRating) => {
    setRating(newRating)
  }

  const submitReview = () => {
    // Send rating and review to backend (e.g., POST /api/rating)
    console.log("Submitting review:", { rating, review })
  }

  return (
    <div>
      <h2>Rate Contractor</h2>
      <ReactStars
        count={5}
        value={rating}
        onChange={handleRatingChange}
        size={24}
        color2={"#ffd700"}
      />
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Leave a review"
      />
      <button onClick={submitReview}>Submit</button>
    </div>
  )
}

export default ContractorRating
