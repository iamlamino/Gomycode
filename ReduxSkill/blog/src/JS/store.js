import { createStore } from 'redux'
import rootReducer from './Reducers/rootReducers.js';

const store = createStore(rootReducer)
export default store;