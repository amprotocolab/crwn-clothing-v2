import {compose, applyMiddleware,createStore} from 'redux';
import thunk from 'redux-thunk';
// import { legacy_createStore as createStore } from 'redux';
import {createLogger} from 'redux-logger';
import { rootReducer } from './root-reducer';

//root-reducer

const middleWare = [thunk,createLogger()];

//const composedEnhancers = compose(applyMiddleware(...middleWare));

//export const store = createStore(rootReducer, composedEnhancers);

export const store = createStore(rootReducer,applyMiddleware(...middleWare));
