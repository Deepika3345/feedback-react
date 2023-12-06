import React, { useContext, useEffect } from 'react'
import QuoteContext from '../Context/Quote/QuoteContext'

const Quote = () => {

    const {quoteData,dispatch}=useContext(QuoteContext)
    const fetchQuote = async()=>{
        const response= await fetch ("https://quotable.io/random")
        const data =await response.json()
       

        dispatch({
            type:"QUOTES",
            payload:data,
        })
    }
useEffect(()=>{
    fetchQuote()
},[])

  return (
   <marquee className="my-3" >
    {quoteData.content}-{quoteData.author}
   
   </marquee>
  )
}

export default Quote