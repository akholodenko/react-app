import C from './constants/actions';
import { load } from './models/contractors'

export const setMilesRadius = (milesRadius) => ({
	type: C.SET_MILES_RADIUS,
	payload: milesRadius
})

export const loadResults = (milesRadius) => dispatch => {
	load(milesRadius).then((response) => {
		console.log('loadResults', response.data);

		dispatch({
			type: C.SET_RESULTS,
			payload: response.data.results
		})
	});
}