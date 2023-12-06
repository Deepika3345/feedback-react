import React from 'react'
import Navbar from './Components/Navbar'
import Form from './Components/Form'
import ListGroup from './Components/ListGroup'
import { FeedbackProvider } from './Context/FeedbackContext'
import Quote from './Components/Quote'
import { QuoteProvider } from './Context/Quote/QuoteContext'

const App = () => {
  return (
    <FeedbackProvider>
   <Navbar/>
  <div className="container p-5">
 <QuoteProvider>
 <Quote/>
 </QuoteProvider>
 
    <Form/>
    <ListGroup/>
   </div>
    </FeedbackProvider>
  )
}

export default App