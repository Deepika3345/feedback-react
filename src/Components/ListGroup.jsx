import React, { useContext } from 'react'
import ListItems from './ListItems'
import FeedbackContext from '../Context/FeedbackContext'

const ListGroup = () => {

    const {reviews}=useContext(FeedbackContext)
  return (
    <ul className="list-group">
       {
        reviews.map((review)=> <ListItems key={review.id} review={review}/>)
       }
    </ul>
  )
}

export default ListGroup