import { createStore, applyMiddleware } from 'redux'
import PromiseMiddleware from 'redux-promise'
import reducer from '../reducers'

let store = createStore(
    reducer,
    applyMiddleware(PromiseMiddleware)
)

export default store
