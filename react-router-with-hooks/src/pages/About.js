import React from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router';

const About = () => {
	function back() {
		// const history = useHistory(); // not found in react-router
		// history.goBack();

		window.history.back();
	}
	const location = useLocation();
	const state = useParams();
	return (
		<>
			<h1>Page : About</h1>
			<div>Location : {location.pathname} </div>
			<div>From : {/*location.state.from*/ state.from || 'root'}</div>
			<button onClick={back}>Back</button>
		</>
	);
};

export default About;
