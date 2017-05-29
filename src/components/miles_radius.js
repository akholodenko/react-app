import React from 'react';

const MilesRadius = ({milesRadius = 50, onSetMilesRadius = f => f}) => {
	let _input

	return (
		<div>
			<label>Miles radius</label>
			<input type="number"
				   ref={input=>_input=input}
				   defaultValue={milesRadius}
				   onChange={() => onSetMilesRadius(_input.value)}/>
			<hr/>
		</div>
	)
}

export default MilesRadius