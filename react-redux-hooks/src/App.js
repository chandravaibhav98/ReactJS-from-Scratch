import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
	const dispatch = useDispatch();
	const counter = useSelector((state) => state.counter);

	return (
		<div className="App">
			<header className="App-header">
				<div>
					<h1>Hi</h1>
				</div>
				<main>
					<div>
						<h1>Counter: {counter}</h1>
						<button onClick={() => dispatch({ type: 'INCREMENT' })}>
							INCREMENT
						</button>
						<button onClick={() => dispatch({ type: 'DECREMENT' })}>
							DECREMENT
						</button>
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
