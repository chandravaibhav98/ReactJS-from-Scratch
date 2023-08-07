const initialState = {
	counter: 0,
};

export function rootReducer(state = initialState, action) {
	switch (action.type) {
		case 'INCREMENT':
			return { counter: state.counter + 1 };
			break;
		case 'DECREMENT':
			return { counter: state.counter - 1 };
			break;
		default:
			return state;
			break;
	}
}
