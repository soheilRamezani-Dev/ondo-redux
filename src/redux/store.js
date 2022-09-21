import { createStore } from "redux";
import DoReducer from "./reducers/DoReducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(DoReducer,applyMiddleware(thunk));

export default store;