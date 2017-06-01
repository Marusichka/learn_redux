import React from 'react';

import {render} from 'react-dom';

import css from './styles/style.styl';

import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
//import Main from './components/Main';


import { Router, Route, IndexRoute, browserHistory } from 'react-router';
//<Route path="/view/:postId" component={Single}></Route>

import { Provider } from 'react-redux';
import store, { history } from './store';

// заменим browserHistory на history  из ./store'
const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={PhotoGrid}></IndexRoute>
				<Route path="/view/:postId" component={Single}></Route>
			</Route>
		</Router>
	</Provider>
)

render(router, document.getElementById('root'));