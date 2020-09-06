import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

// import { composeWithDevTools } from 'redux-devtools-extension'
// export default store = createStore(reducers, composeWithDevTools(
//     applyMiddleware(thunk)
// ));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;