import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import User from './pages/User';
import Users from './pages/Users';

function App() {
	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<main>
						<h5>react-router-with-hooks</h5>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link
									to={{
										pathname: '/about',
										state: {
											from: 'root',
										},
									}}>
									About
								</Link>
							</li>
							<li>
								<Link to="/user/:firstName/:lastName">
									User
								</Link>
							</li>
							<li>
								<Link to="/user/:username">Users</Link>
							</li>
						</ul>
					</main>
					<div>
						<Routes>
							<Route
								exact
								path="/"
								Component={Home}
							/>
							<Route
								exact
								path="/about"
								Component={About}
							/>
							<Route
								exact
								path="/user/:firstName/:lastName"
								Component={User}
							/>
							<Route
								exact
								path="/user/:name"
								Component={Users}
							/>
						</Routes>
					</div>
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
						React
					</a>
				</header>
			</div>
		</Router>
	);
}

export default App;
