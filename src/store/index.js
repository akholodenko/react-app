import reducer from '../reducers';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

const initialState = {
	filters: {
		milesRadius: 50,
		page: 1
	},
	results: []
}

const store = createStore(reducer, initialState, applyMiddleware(thunk))

export default store