import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
	const [growth, setGrowth] = useState(0);
	const [nirvana, setNirvana] = useState(false);

	let born = false;

	function Growth() {
		setGrowth(growth + 1);
	}

	useEffect(() => {
		if (born) {
			document.title = 'Nirvana Attained';
		}
		console.log(`${document.title}`);
	}, []);

	useEffect(() => {
		console.log(`useEffect born : ${growth} ${born}`);
	}, []);

	useEffect(() => {
		if (born) {
			console.log(`useEffect next : ${growth} ${born}`);
		} else {
			born = true;
		}

		if (growth > 10) {
			setNirvana(true);
		}
		return function cleanup() {
			console.info(`---cleanup---`);
		};
	});

	return (
		<div className="App">
			<header className="App-header">
				<div>
					<h2>useEffect</h2>
					<p>growth:{growth}</p>
					<button onClick={Growth}>Grow</button>
				</div>
			</header>
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
		</div>
	);
}

export default App;
