import Results from '../components/results';
import {connect} from 'react-redux';
import { setMilesRadius, loadResults } from '../actions'

const mapStateToProps = (state) => ({
	results: state.results
})

const mapDispatchToProps = dispatch => ({
	onSetMilesRadius(radius) {
		dispatch(
			setMilesRadius(radius)
		)
	},
	onLoadResults() {
		dispatch(
			loadResults()
		)
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Results)