import React, { useState, useEffect } from 'react';

const Address = () => {
	const [address, setAddress] = useState('');

	useEffect(() => {
		const getAddress = new Promise((resolve) => {
			setTimeout(() => {
				resolve('vaibhav.chandra1998@gmail.com');
			}, 4000);
		});

		getAddress.then((result) => {
			setAddress(result);
		});
	});

	if (!address) {
		console.log('Loading Address...');
		return <p>Loading Address...</p>;
	}

	return (
		<div>
			<h6>Address : {address}</h6>
		</div>
	);
};

export default Address;
