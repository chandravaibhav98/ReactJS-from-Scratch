import React from 'react';

const FunctionalComp = (props) => {
	return (
		<div>
			return <div>Value: {props.val}</div>;
		</div>
	);
};

export default React.memo(FunctionalComp);
