import './App.css';
import { Component } from 'react';
import User from './Components/user';
import UniqueID from 'react-html-id';

class App extends Component {
	constructor() {
		super();
		UniqueID.enableUniqueIds(this);
		this.state = {
			users: [
				{ id: this.nextUniqueID, name: 'John', age: 20 },
				{ id: this.nextUniqueID, name: 'Peter', age: 30 },
				{ id: this.nextUniqueID, name: 'Jill', age: 40 },
			],
		};
		console.log(this.state);
	}
	deleteUser = (index, e) => {
		const users = Object.assign([], this.state.users);
		users.splice(index, 1);
		this.setState({ users: users });
	};
	changeUsername = (id, e) => {
		const index = this.state.users.findIndex((user) => {
			return user.id === id;
		});
		const user = Object.assign({}, this.state.users[index]);
		user.name = e.target.value;
		const users = Object.assign([], this.state.users);
		users[index] = user;
		this.setState({ users: users });
	};
	render() {
		return (
			<div className="App">
				<h6>React-Lists</h6>
				<ul>
					{this.state.users.map((user, index) => {
						return (
							<User
								age={user.age}
								key={user.id}
								delEvent={this.deleteUser.bind(this, index)}
								changeEvent={this.changeUsername.bind(
									this,
									user.id,
								)}>
								{user.name}
							</User>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default App;
