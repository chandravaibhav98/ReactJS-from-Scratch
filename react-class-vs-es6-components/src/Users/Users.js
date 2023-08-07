import React, { Component } from 'react';
import User from './User';

class Users extends Component {
	render() {
		return (
			<div>
				<h5>{this.props.title}</h5>
				<User age="10">John</User>
				<User age="10">Jill</User>
				<User age="10">Peter</User>
			</div>
		);
	}
}
export default Users;
