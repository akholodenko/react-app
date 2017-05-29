import React, {Component} from 'react';

class Results extends Component {
	componentWillMount() {
		this.props.onLoadResults(this.props.filters)
	}

	render() {
		return (
			<div>
				{(this.props.results.contractors !== undefined) ?
					this.props.results.contractors.map((contractor, index) =>
						<div key={index}>{contractor.business_name} - {contractor.score}</div>
					)
				 : null}
			</div>
		)
	}
}

export default Results