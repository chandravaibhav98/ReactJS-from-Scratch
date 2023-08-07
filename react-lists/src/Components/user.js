import React from 'react';

const user = (props) => {
	return (
		<div>
			<li>
				<span>
					name: {props.children}, age:{props.age}
				</span>
				<input
					onChange={props.changeEvent}
					value={props.children}></input>
				<button onClick={props.delEvent}>Delete</button>
			</li>
		</div>
	);
};

export default user;
