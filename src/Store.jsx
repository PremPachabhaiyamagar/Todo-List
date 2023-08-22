import {createStore,applyMiddleware} from 'redux'
import rootReducer from './services/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import {logger} from 'redux-logger'

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)))

export default store