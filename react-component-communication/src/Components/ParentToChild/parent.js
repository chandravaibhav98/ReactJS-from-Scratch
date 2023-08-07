import React from 'react';
import Child from './child';

const parent = (props) => {
	return (
		<div>
			<Child
				doWhatever={props.ChangeTheWorldEvent}
				title={props.title}
			/>
			<Child
				doWhatever={props.KeepTheWorldEvent}
				title={props.title}
			/>
		</div>
	);
};

export default parent;
