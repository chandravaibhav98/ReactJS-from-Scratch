import React from 'react';

export function fetchData() {
	let namePromise = fetchName();
	let addressPromise = fetchAddress();
	return {
		name: wrapPromise(namePromise),
		address: wrapPromise(addressPromise),
	};
}

function fetchName() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('API');
		}, 1000);
	});
}

function fetchAddress() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('./API.js');
		}, 2000);
	});
}

function wrapPromise(promise) {
	let status = 'pending';
	let result;
	let suspender = promise.then(
		(r) => {
			status = 'resolved';
			result = r;
		},
		(e) => {
			status = 'rejected';
			result = e;
		},
	);

	return {
		read() {
			if (status === 'pending') {
				throw suspender;
			} else if (status === 'rejected') {
				throw result;
			} else if (status === 'resolved') {
				return result;
			}
		},
	};
}

const API = () => {
	return (
		<div>
			<h5>API Component</h5>
			<p>fetchName: {fetchName}</p>
			<p>fetchAddress: {fetchAddress}</p>
		</div>
	);
};

export default API;
