import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
	const [name, setName] = useState('Vaibhav');
	const [age, setAge] = useState(21);

	return (
		<div className="App">
			<header className="App-header">
				<div>
					<p>
						Name:{' '}
						<input
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</p>
					<p>
						Age :{' '}
						<input
							type="text"
							value={age}
						/>
					</p>
					<button onClick={() => setAge(age + 1)}>Age++</button>
					<div>
						{name} : {age}
					</div>
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
		</div>
	);
}

export default App;
