import React from 'react';

const PageSelector = ({filters = {}, totalPages = 1, onSetPage = f => f}) => {
	let _input, options = [];

	for(let x = 1; x <= Math.min(20, totalPages); x++) {
		options.push(<option key={x} value={x}>{x}</option>);
	}

	return (
		<div>
			<label>Page</label>
			&nbsp;
			<select ref={input=>_input=input}
					defaultValue={filters.page}
					onChange={() => onSetPage({ ...filters, page: _input.value})}>
				{options}
			</select> &nbsp;of {totalPages}
			<hr/>
		</div>
	)
}

export default PageSelector