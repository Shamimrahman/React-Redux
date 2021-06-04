import {createStore} from 'redux'

import rootReducer from './reducers/index'

//centralize store
export const store=createStore(rootReducer)