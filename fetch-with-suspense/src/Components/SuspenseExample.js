import React, { Suspense } from 'react';
import API from './API';
import { fetchData } from './API';

const getData = fetchData();

function Name() {
	const name = getData.name.read();
	return <p>fetchData.name : {name} </p>;
}
function Address() {
	const address = getData.address.read();
	return <p>fetchData.address : {address} </p>;
}

const SuspenseExample = () => {
	return (
		<div>
			<hr />
			<h1>Suspense Example</h1>
			<Suspense fallback={<h2>Loading...</h2>}>
				<Name />
				<Address />
			</Suspense>
			<API />
		</div>
	);
};

export default SuspenseExample;
