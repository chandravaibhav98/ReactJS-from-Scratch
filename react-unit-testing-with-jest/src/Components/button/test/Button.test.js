import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button';
import { isTSAnyKeyword } from '@babel/types';
import { createRoot } from 'react-dom/client';
import { render, screen, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';
import renderer from 'react-test-renderer';

// it('renders without crashing', () => {
// 	const div = document.createElement('div');
// 	ReactDOM.render(<Button />, div);
// });

afterEach(cleanup);

test('renders without crashing', () => {
	render(<Button />);
	const div = document.createElement('div');
	ReactDOM.render(<Button />, div);
});

it('renders correctly', () => {
	const { getByTestID } = render(<Button label="Click"></Button>);
	expect(getByTestID('button')).toHaveTextContent('Submit');
});

it('matches snapshot', () => {
	const tree = renderer.create(<Button label="Click"></Button>).toJSON();
	expect(tree).toMatchSnapshot();
});
