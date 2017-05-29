import Results from '../components/results';
import {connect} from 'react-redux';
import { loadResults } from '../actions'

const mapStateToProps = (state) => ({
	filters: state.filters,
	results: state.results
})

const mapDispatchToProps = dispatch => ({
	onLoadResults(filters) {
		dispatch(
			loadResults(filters)
		)
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Results)