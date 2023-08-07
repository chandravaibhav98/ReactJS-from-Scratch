import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actionCreator from './store/actions/actions';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="header">
					<div className="age">
						Your age: <span>{this.props.age}</span>
					</div>
					<button
						className="ageUp"
						onClick={this.props.onAgeUp}>
						Age ++
					</button>
					<button
						className="ageDown"
						onClick={this.props.onAgeDown}>
						Age --
					</button>
				</div>
				<hr />
				<div>History</div>
				<div>
					<ul>
						{this.props.history.map((el) => (
							<li
								className="historyItem"
								key={el.id}
								onClick={() => this.props.onDelEntry(el.id)}>
								{el.age}
							</li>
						))}
					</ul>
				</div>
				{this.props.loading && (
					<img
						src="./logo.svg"
						className="logo"
						alt="logo"></img>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		age: state.age,
		history: state.history,
		loading: state.loading,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAgeUp: () => dispatch(actionCreator.ageUp(1)),
		onAgeDown: () => dispatch(actionCreator.ageDown(1)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
