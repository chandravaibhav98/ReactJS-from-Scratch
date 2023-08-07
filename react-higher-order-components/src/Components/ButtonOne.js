import React from 'react';
import stylesWrapper from './HOC/stylesWrapper';
import styles from './styles/commonStyles';

const ButtonOne = (props) => {
	let _styles = { ...styles.default };
	if (props.disable) {
		_styles = { ..._styles, ...styles.disable };
	}

	return <button style={_styles}>I am ButtonOne</button>;
	return <button style={props.styles}>I am ButtonOne</button>;
};

export default stylesWrapper(ButtonOne);
