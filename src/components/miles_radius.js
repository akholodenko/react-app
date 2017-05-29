import React from 'react';

const MilesRadius = ({filters = {}, onSetMilesRadius = f => f}) => {
	let _input

	return (
		<div>
			<label>Miles radius</label>
			<input type="number"
				   ref={input=>_input=input}
				   defaultValue={filters.milesRadius}
				   onChange={() => onSetMilesRadius({ ...filters, milesRadius: _input.value})}/>
			<hr/>
		</div>
	)
}

export default MilesRadius