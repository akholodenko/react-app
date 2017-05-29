import C from './constants/actions';
import { load } from './models/contractors'

export const setMilesRadius = (radius) => ({
	type: C.SET_MILES_RADIUS,
	payload: radius
})

export const loadResults = () => dispatch => {
	load().then((response) => {
		console.log('loadResults', response.data);

		dispatch({
			type: C.SET_RESULTS,
			payload: response.data.results
		})
	});
}