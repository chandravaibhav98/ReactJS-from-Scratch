import { Component } from 'react';
import './App.css';
import Child from './Components/ParentToChild/child';
import Parent from './Components/ParentToChild/parent';

class App extends Component {
	state = {
		title: 'Placeholder Title',
	};
	ChangeTheWorld = (newTitle) => {
		this.setState({ title: newTitle });
	};
	render() {
		return (
			<div className="App">
				<Parent
					ChangeTheWorldEvent={this.ChangeTheWorld.bind(this, 'New World')}
					KeepTheWorldEvent={this.ChangeTheWorld.bind(this, 'Same World')}
					title={this.state.title}
				/>
			</div>
		);
	}
}

export default App;
