//@flow
import React, { Component } from 'react';
import './App.css';
import Test from './Test';

class App extends Component<{}> {
	render() {
		return (
			<div className="App">
				<>
					<Test
						str={'chandravaibhav98'}
						arr={[1, 2, 3]}
					/>
					<funcComp str={'chandravaibhav98'} />
				</>
			</div>
		);
	}
}

export default App;
