const FeedbackReducer = (state, action) => {
    switch (action.type) {
        case "DELETE":
            return{
                ...state,
                reviews:state.reviews.filter((item)=>item.id!==action.payload)

            }

            case "SAVE":
            return{
                ...state,
                reviews:[action.payload,...state.reviews]
            }

        default:
            return state

    }

}
export default FeedbackReducer