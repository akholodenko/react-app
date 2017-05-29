import MilesRadius from '../components/miles_radius'
import {connect} from 'react-redux';
import { loadResults, setMilesRadius } from '../actions'

const mapStateToProps = (state) => ({
	milesRadius: state.milesRadius
})

const mapDispatchToProps = dispatch => ({
	onSetMilesRadius(milesRadius) {
		dispatch(
			setMilesRadius(milesRadius)
		)

		dispatch(
			loadResults(milesRadius)
		)
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(MilesRadius)