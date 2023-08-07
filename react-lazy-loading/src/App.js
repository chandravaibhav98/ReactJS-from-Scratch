import logo from './logo.svg';
import './App.css';
import React, { Component, lazy, Suspense } from 'react';
// import LazyLoading from './Components/LazyLoading';

const LazyLoading = lazy(() => import('./Components/LazyLoading'));

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>
					Hi
					<img
						className="logo"
						src={logo}
						alt="logo"
					/>
				</h1>
				<Suspense
					fallback={
						<div className="Load">
							<h1>Loading...</h1>
						</div>
					}>
					<LazyLoading />
				</Suspense>
			</div>
		);
	}
}

export default App;
