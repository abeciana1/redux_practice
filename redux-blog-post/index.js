const redux = require("redux");
const combineReducers = redux.combineReducers;
const createStore = redux.createStore;

const applyMiddleware = redux.applyMiddleware;

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
// console.log(redux)

//! our state
const bakeryInventory = {
  cake: 10,
};

//! actions
// //! action types
const SELL_CAKE = "SELL_CAKE";
const BAKE_CAKE = "BAKE_CAKE";

const sellCake = () => {
  return {
    type: SELL_CAKE,
  };
};

const bakeCake = () => {
  return {
    type: BAKE_CAKE,
  };
};

//! reducers
const cakeReducer = (state = bakeryInventory, action) => {
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

//! store
const rootReducer = combineReducers({
  cakeReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
// const store = createStore(rootReducer)

console.log("initial state", store.getState());

// store.dispatch(sellCake());
// store.dispatch(sellCake());
// store.dispatch(sellCake());
store.dispatch(bakeCake());
store.dispatch(bakeCake());
store.dispatch(bakeCake());

console.log("new state", store.getState());
