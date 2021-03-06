import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "../reducers/userReducer";

const rootReducer = combineReducers({
  sneakers: userReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
