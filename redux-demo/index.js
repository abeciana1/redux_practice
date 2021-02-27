// import redux from 'redux' //! if this was a react app
const redux = require('redux')
const combineReducers = redux.combineReducers
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware

const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = "BUY_ICECREAM"

const buyCake = () => {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

const buyIceCream = () => {
    return {
        type: BUY_ICECREAM,
    }
}

// (previousState, action) => newState

// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20
// }

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

const cakeReducer = (cakes = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...cakes,
            numOfCakes: cakes.numOfCakes - 1
        }
        default: return cakes
    }
}

const iceCreamReducer = (iceCreams = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...iceCreams,
            numOfIceCreams: iceCreams.numOfIceCreams - 1
        }
        default: return iceCreams
    }
}

//! need to use combineReducers function from redux

const rootReducer = combineReducers({
    iceCreamReducer,
    cakeReducer

})

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }
//         case BUY_ICECREAM: return {
//             ...state,
//             numOfIceCreams: state.numOfIceCreams - 1
//         }
//         default: return state
//     }
// }


const store = createStore(rootReducer, applyMiddleware(logger));
// const store = createStore(reducer) //! where we create our store
//! takes reducer as argument (usually the combined reducer)

console.log("initial state", store.getState())

const unsubscribe = store.subscribe(() => {})

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe()

