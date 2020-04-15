import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import rootSaga from '@redux/sagas'

import rootReducers from '@redux/reducers'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers(rootReducers),
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
)
sagaMiddleware.run(rootSaga)

export default store
