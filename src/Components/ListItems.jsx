import React, { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'

const ListItems = ({review}) => {
const {dispatch}=useContext(FeedbackContext)
    const handleDelete=(id)=>{
        dispatch({
            type:"DELETE",
            payload:id,
        })
    }

    return (
        <li className="list-group-item">
            <span>
                <h1 className="display-4">Rating :  {review.rating}</h1>
                <h1 className="display-5">Review : {review.review}</h1>
            </span>
           
            <button className="btn btn-danger btn-sm float-end rounded-0" onClick={()=>handleDelete(review.id)}>Delete</button>
             {/* <button className="btn btn-warning btn-sm float-end mx-1 rounded-0">Edit</button> */}


        </li>
    )
}

export default ListItems