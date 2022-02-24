import thunk from "redux-thunk";
import reducers from "./reducers";
import { applyMiddleware, createStore } from "redux";

export const store = createStore(reducers, {}, applyMiddleware(thunk));
