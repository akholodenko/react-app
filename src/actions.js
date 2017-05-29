import C from './constants/actions';
import { load } from './models/contractors'

export const setMilesRadius = (milesRadius) => ({
	type: C.SET_MILES_RADIUS,
	payload: milesRadius
})

export const setPage = (page) => ({
	type: C.SET_PAGE,
	payload: page
})

export const loadResults = (filters) => dispatch => {
	load(filters).then((response) => {
		console.log('loadResults', response.data);

		dispatch({
			type: C.SET_RESULTS,
			payload: response.data.results
		})
	});
}