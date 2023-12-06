import { createContext, useReducer } from "react";
import { QuoteReducer } from "./QuoteReducer";

const QuoteContext =createContext()

export const QuoteProvider =({children})=>{
    const initialState={
        quoteData:{
            content:"laughter is the best medicine",
            author:"-Unknown"
        }
    }
    const [state,dispatch]=useReducer(QuoteReducer,initialState)



    return(
        <QuoteContext.Provider value={{...state,dispatch}}>
            {children}
        </QuoteContext.Provider>
    )
}
export default QuoteContext