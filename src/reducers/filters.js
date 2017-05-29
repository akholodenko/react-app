import C from '../constants/actions';

export const milesRadius = (state = 50, action) =>
	(action.type === C.SET_MILES_RADIUS) ?
		parseInt(action.payload, 10) :
		state