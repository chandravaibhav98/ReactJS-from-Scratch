import React from 'react';

function Input({ type, onKeyDown, placeholder }, ref) {
	return (
		<div>
			here :
			<input
				type={type}
				ref={ref}
				onKeyDown={onKeyDown}
				placeholder={placeholder || 'Input'}
			/>{' '}
		</div>
	);
}

const forwardedInput = React.forwardRef(Input);

export default forwardedInput;
