import logo from './logo.svg';
import './App.css';
import React, { useState, useMemo } from 'react';
import Child from './Components/Child';

function App() {
	const [i, setI] = useState(0);

	function Increment() {
		setI(i + 1);
	}

	const memoizedChild = useMemo(() => {
		return <Child />;
	}, [i]);

	return (
		<div className="App">
			<header className="App-header">
				<main>
					<div>
						<h1>Hi</h1>
						<h6>
							i: {i}{' '}
							<button onClick={Increment}>Increment</button>
						</h6>
						<h3>
							<Child />
						</h3>
						<hr />
						<h5>Memo Child</h5>
						{memoizedChild}
					</div>
				</main>
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
