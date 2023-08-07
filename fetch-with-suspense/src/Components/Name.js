import React, { useState, useEffect } from 'react';
import Address from './Address';

const Name = () => {
	const [name, setName] = useState('');

	useEffect(() => {
		const getName = new Promise((resolve) => {
			setTimeout(() => {
				resolve('chandravaibhav98');
			}, 4000);
		});

		getName.then((result) => {
			setName(result);
		});
	});

	if (!name) {
		console.log('Loading Name...');
		return <p>Loading Name...</p>;
	}

	return (
		<div>
			<h6>Name : {name}</h6>

			<Address />
		</div>
	);
};

export default Name;
