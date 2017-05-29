import MilesRadius from '../components/miles_radius'
import {connect} from 'react-redux';
import { loadResults, setMilesRadius } from '../actions'

const mapStateToProps = (state) => ({
	filters: state.filters
})

const mapDispatchToProps = dispatch => ({
	onSetMilesRadius(filters) {
		dispatch(
			setMilesRadius(filters.milesRadius)
		)

		dispatch(
			loadResults(filters)
		)
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(MilesRadius)