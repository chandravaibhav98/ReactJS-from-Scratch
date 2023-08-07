import React, { Component } from 'react';
import User from './User';

class Users extends Component {
	state = {
		users: [
			{ name: 'John', age: 20 },
			{ name: 'Jill', age: 30 },
			{ name: 'Peter', age: 40 },
			{ name: 'Gerald', age: 30 },
			{ name: 'Jack', age: 20 },
		],
		title: 'Users List',
	};

	MakeMeYounger = () => {
		const newState = this.state.users.map((user) => {
			const tempUser = user;
			tempUser.age = -10;
			return tempUser;
		});
		this.setState({
			newState,
		});
	};

	render() {
		return (
			<div>
				<button onClick={this.MakeMeYounger}>
					Make us 10 years younger
				</button>
				<br />
				<h6>{this.state.title}</h6>
				{this.state.users.map((user) => {
					return <User age={user.age}> {user.name} </User>;
				})}
			</div>
		);
	}
}

export default Users;
