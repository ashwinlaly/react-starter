import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

// import { composeWithDevTools } from 'redux-devtools-extension'
// export default store = createStore(reducers, composeWithDevTools(
//     applyMiddleware(thunk)
// ));

const store = createStore(reducers, applyMiddleware(thunk));

export default store;