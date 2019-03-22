
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers';
import promise from 'redux-promise-middleware'

const store = createStore(rootReducer, {}, applyMiddleware(thunk, promise));

export default store;