import React from 'react';
import { useParams } from 'react-router-dom';

const User = ({}) => {
	const { firstName, lastName } = useParams();

	return (
		<div>
			<h1>Page : User</h1>

			<div>
				<h6>User</h6>
				<div>
					firstName: {firstName} <br /> lastName: {lastName}
				</div>
			</div>
		</div>
	);
};

export default User;
