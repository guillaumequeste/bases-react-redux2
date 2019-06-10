import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer"
import logger from 'redux-logger';

//create store
const store = createStore(
    rootReducer,
    applyMiddleware(logger)
);
export default store;