export const QuoteReducer = (state, action) => {
    switch (action.type) {
        case "QUOTES":
            return {
                ...state,
                quoteData: action.payload,
            }

        default:
            return state

    }

}
