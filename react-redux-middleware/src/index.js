import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reducer from './store/reducers/reducer';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import CreateSagaMiddleware from 'redux-saga';
import { watchAgeUp } from './sagas/saga';

const sagaMiddleware = CreateSagaMiddleware();

// logaction
const logAction = (store) => {
	return (next) => {
		return (action) => {
			const result = next(action);
			console.log(
				`[middleware]---store.getState-->--(${JSON.stringify(
					store.getState(),
				)})`,
			);
			return result;
		};
	};
};

const store = createStore(
	reducer,
	applyMiddleware(logAction, thunk, sagaMiddleware),
);
sagaMiddleware.run(watchAgeUp);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
);
