import { combineReducers } from 'redux';

import {alertReducer} from './alert.reducer'
import {productsReducer} from './products.reducer'

const rootReducer = combineReducers({
    alertReducer,
    productsReducer
});

export default rootReducer;