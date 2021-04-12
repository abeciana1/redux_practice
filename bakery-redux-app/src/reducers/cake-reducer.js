import { SELL_CAKE, BAKE_CAKE } from '../actions/cake-actions'


const cakeInventory = {
    cake: 10
}

const cakeReducer = (state = cakeInventory, action) => {
    switch (action.type) {
    case BAKE_CAKE:
        return {
            ...state,
            cake: state.cake + 1,
        };
    case SELL_CAKE:
        return {
        ...state,
        cake: state.cake - 1,
        };
    default:
        return state;
    }
};

export default cakeReducer