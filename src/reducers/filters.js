import C from '../constants/actions';

export const filters = (state = {}, action) => {
	switch(action.type) {
		case C.SET_MILES_RADIUS:
			return {
				...state,
				milesRadius: parseInt(action.payload, 10)
			}
		case C.SET_PAGE:
			return {
				...state,
				page: parseInt(action.payload, 10)
			}
		default:
			return state;
	}
}