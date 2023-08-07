const initialState = {
	age: 20,
	history: [],
	loading: false,
};

const reducer = (state = initialState, action) => {
	const newState = { ...state };

	switch (action.type) {
		case 'AGE_UP_ASYNC':
			return {
				...state,
				age: state.age + action.value,
				history: state.history.concat({
					id: Math.random(),
					age: state.age + action.value,
					loading: true,
				}),
			};
		// break;

		case 'AGE_DOWN':
			return {
				...state,
				age: state.age - action.value,
				history: state.history.concat({
					id: Math.random(),
					age: state.age - action.value,
				}),
			};
		// break;
		case 'DEL_ENTRY':
			return {
				...state,
				history: newState.history.filter((el) => el.id !== action.id),
			};
		// break;
		case 'LOADING':
			return {
				newState: (newState.loading = true),
				...state,
			};

		default:
			console.log('[reducer] - loading props & states...');
	}
	return newState;
};

export default reducer;
