import React from 'react';
import { useParams } from 'react-router-dom';

const User = ({}) => {
	const user = useParams();
	return (
		<div>
			<h1>Page : User</h1>
			<div>
				<h6>User</h6>
				<input
					type="text"
					placeholder={user.name}
				/>
				<h6>Password</h6>
				<input
					type="text"
					placeholder="password"
				/>
			</div>
		</div>
	);
};

export default User;
