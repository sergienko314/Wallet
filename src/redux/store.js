
import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(
  reducer,
    composeWithDevTools(
      
  )
);

function reducer(state = { a: 21}, action) {
    return state     
}

export default store