import Results from '../components/results';
import {connect} from 'react-redux';
import { loadResults } from '../actions'

const mapStateToProps = (state) => ({
	results: state.results
})

const mapDispatchToProps = dispatch => ({
	onLoadResults() {
		dispatch(
			loadResults()
		)
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Results)