import PageSelector from '../components/page_selector'
import {connect} from 'react-redux';
import { loadResults, setPage } from '../actions'

const mapStateToProps = (state) => ({
	filters: state.filters,
	totalPages: Math.ceil(state.results.total / state.results.page_size) || null
})

const mapDispatchToProps = dispatch => ({
	onSetPage(filters) {
		dispatch(
			setPage(filters.page)
		)

		dispatch(
			loadResults(filters)
		)
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(PageSelector)