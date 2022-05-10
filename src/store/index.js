import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import * as reducers from "./reducers";

const configureStore = (preloadedState) => {
  const store = createStore(
    combineReducers(reducers),
    preloadedState,
    composeWithDevTools()
  );

  return store;
};

export default configureStore;
