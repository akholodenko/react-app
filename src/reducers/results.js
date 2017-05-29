import C from '../constants/actions';

export const results = (state = [], action) => {
	switch(action.type) {
		case C.SET_RESULTS :
			return action.payload

		default :
			return state
	}
}