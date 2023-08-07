import React, { Component } from 'react';
import './App.css';

class App extends Component {
	state = {
		name: 'Vaibhav',
	};
	changeName = (newName) => {
		this.setState({
			name: newName,
		});
	};
	ChangeNamefromInput = (event) => {
		this.setState({
			name: event.target.value,
		});
	};
	render() {
		return (
			<div className="App">
				<h4>Two Way Binding</h4>
				<br></br>
				<button onClick={() => this.changeName('chandravaibhav98 :(')}>
					Change State using Anonymous Function
				</button>
				<button onClick={this.changeName.bind(this, 'chandravaibhav98 :)')}>
					Change State using Bind Function
				</button>
				<br></br>
				<input
					type="text"
					onChange={this.ChangeNamefromInput}
					value={this.state.name}
				/>
				<br></br>
				<div>{this.state.name}</div>
			</div>
		);
	}
}

export default App;
