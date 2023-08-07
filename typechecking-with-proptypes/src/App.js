import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

const Test = (props) => {
	return (
		<div>
			<h1>{props.str}</h1>
			<h1>{props.bool ? 'bool' : 'no-bool'}</h1>
			<h1>{props.strORnum}</h1>
			<h1>
				{props.arr.map((val) => {
					return <li key={val}>{val}</li>;
				})}
			</h1>
			<h1>
				{props.arrobj.map((val) => {
					return <li key={val.age}>{val.name}</li>;
				})}
			</h1>
			<h1>{props.children}</h1>
		</div>
	);
};

Test.propTypes = {
	str: PropTypes.string,
	bool: PropTypes.bool,
	strORnum: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	arr: PropTypes.arrayOf(PropTypes.number),
	arrOfObj: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.bool,
			age: PropTypes.number,
		}),
	),
	children: PropTypes.element,
};

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Hi</h1>
				<Test
					str={'chandravaibhav98'}
					bool
					strORnum={true}
					arr={[1, 2, 3]}
					arrobj={[
						{ name: 'Tom', age: 25 },
						{ name: 'Jayden', age: 19 },
					]}>
					<div>Child</div>
				</Test>
			</div>
		);
	}
}

export default App;
