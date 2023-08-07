import React from 'react';

const User = (props) => {
	return (
		<div>
			Name: {props.children} Age: {props.age},User
		</div>
	);
};

export default User;
