import logo from './logo.svg';
import './App.css';
import Input from './Components/Input';

import React, { useEffect, useRef } from 'react';

function App() {
	const firstNameRef = useRef(null);
	const lastNameRef = useRef(null);
	const submitRef = useRef(null);

	function firstKeyDown(e) {
		if (e.key === 'Enter') {
			lastNameRef.current.focus();
		}
		console.log('firstKey');
	}
	function lastKeyDown(e) {
		if (e.key === 'Enter') {
			submitRef.current.focus();
		}
		console.log('lastKey');
	}
	function submitKey(e) {
		firstNameRef.current.focus();

		console.group('Submit - Form submitted');
		console.table({
			firstNameRef: `${firstNameRef.current.value}`,
			lastNameRef: `${lastNameRef.current.value}`,
		});
		console.groupEnd();
	}

	useEffect(() => {
		console.info('page rendered');
		firstNameRef.current.focus();
		lastNameRef.current.focus();
		submitRef.current.focus();
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<main>
					<div>
						Enter First Name{' '}
						<Input
							type="text"
							placeholder="First-Name"
							ref={firstNameRef}
							onKeyDown={firstKeyDown}
						/>
					</div>
					<div>
						Enter Last Name{' '}
						<Input
							type="text"
							placeholder="Last-Name"
							ref={lastNameRef}
							onKeyDown={lastKeyDown}
						/>
					</div>
					<button
						ref={submitRef}
						onClick={submitKey}
						onKeyDown={submitKey}>
						Submit
					</button>
				</main>
				<img
					src={logo}
					className="App-logo"
					alt="logo"
				/>
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
