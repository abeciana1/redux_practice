import { GET_BAKERS } from '../actions/baker-actions'

const bakers = {
    bakers: []
}

const bakerReducer = (state = bakers, action) => {
    switch (action.type) {
        case GET_BAKERS:
            return {
                ...state,
                bakers: action.payload
            }
        default:
            return state
    }
}

export default bakerReducer