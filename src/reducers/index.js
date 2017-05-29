import { combineReducers } from 'redux';
import { filters } from './filters';
import { results } from './results';

const rootReducer = combineReducers({
	filters,
	results
})

export default rootReducer