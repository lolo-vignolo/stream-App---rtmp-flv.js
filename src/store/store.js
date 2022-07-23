import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { formReducer } from '../reducers/formReducer';

import { layoutReducer } from '../reducers/layoutReducer';

const reducers = combineReducers({
  layout: layoutReducer,
  form: formReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
