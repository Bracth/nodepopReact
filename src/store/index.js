import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import * as reducers from "./reducers";
import thunk from "redux-thunk";

const logger = (store) => (next) => (action) => {
  console.log("Before action", action, store.getState());
  const result = next(action);
  console.log("After action", action, store.getState());
  return result;
};

const timestamp = () => (next) => (action) => {
  const newAction = {
    ...action,
    meta: {
      ...action.meta,
      timestamp: new Date(),
    },
  };
  return next(newAction);
};

const configureStore = (preloadedState) => {
  const middlewares = [thunk, timestamp, logger];

  const store = createStore(
    combineReducers(reducers),
    preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  return store;
};

export default configureStore;
