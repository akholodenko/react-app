import { combineReducers } from 'redux';
import { milesRadius } from './filters';
import { results } from './results';

const rootReducer = combineReducers({
	milesRadius,
	results
})

export default rootReducer