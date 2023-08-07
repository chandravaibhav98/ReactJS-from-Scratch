import React from 'react';
import './Button.css';

function Button({ label }) {
	return (
		<div data-test-id="Button">
			label : {label}
			<button className="button">Button</button>
		</div>
	);
}

export default Button;
