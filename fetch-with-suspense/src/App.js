import logo from './logo.svg';
import './App.css';
import Name from './Components/Name';
import SuspenseExample from './Components/SuspenseExample';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>
					fetch with Suspense
					<img
						src={logo}
						className="App-logo"
						alt="logo"
					/>
				</h1>

				<Name />
			</header>
			<div>
				<SuspenseExample />
			</div>
			<hr />
			<p>
				Edit <code>src/App.js</code> and save to reload--
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer">
					React
				</a>
				.
			</p>
		</div>
	);
}

export default App;
