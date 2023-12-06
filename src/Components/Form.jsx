import React, { useContext, useState } from 'react'
import FeedbackContext from '../Context/FeedbackContext'

const Form = () => {

const {dispatch}=useContext(FeedbackContext)
  const [rating, setRating] = useState(1)
  const [review, setReview] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "SAVE", payload: { id: crypto.randomUUID, rating, review }
    })
    setRating("")
    setReview("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <select className='form-control' onChange={(e) => setRating(e.target.value)} value={rating}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>

        
      </select>
      <textarea required className='form-control my-2' onChange={(e) => setReview(e.target.value)} value={review}>Enter your Review...</textarea>

      <button className="btn btn-success my-1 w-100 rounded-0">Save</button>
    </form>
  )
}

export default Form