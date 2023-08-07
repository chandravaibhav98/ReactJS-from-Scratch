import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import FunctionalComp from './Components/FunctionalComp';

class App extends Component {
	state = {
		val: 1,
	};

	componentDidMount() {
		setInterval(() => {
			this.setState({ val: this.state.val + 1 });
		}, 1000);
	}
	render() {
		return (
			<div className="App">
				<h1>Hi</h1>
				<FunctionalComp val={this.state.val} />
			</div>
		);
	}
}

export default App;
