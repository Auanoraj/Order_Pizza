export const getPizzaSizeSelected = (state = {}, action) => {
    
    switch(action.type) {
        case "SMALL_SIZE":
            return {
                ...state,
                small: state.small + action.payload.small,
                child: state.child + action.payload.child
            } 
        case "MEDIUM_SIZE":
            return {
                ...state,
                medium: state.medium + action.payload.medium,
                adult: state.adult + action.payload.adult,
                child: state.child + action.payload.child
            }
        case "LARGE_SIZE":
            return {
                ...state,
                large: state.large + action.payload.large,
                adult: state.adult + action.payload.adult,
                child: state.child + action.payload.child
            } 

        case "MEDIUM_OVER_SMALL":
            return {
                ...state,
                medium: state.medium + action.payload.medium,
                small: state.small + action.payload.small,
                child: state.child + action.payload.child
            }

        case "LARGE_OVER_MEDIUM":
            return {
                ...state,
                large: state.large + action.payload.large,
                medium: state.medium + action.payload.medium,
                adult: state.adult + action.payload.adult
            }

        default:
    }
    
    return state;
}