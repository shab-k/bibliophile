import bookListReducer from './bookListReducer'
import APIListReducer from './APIListReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  book: bookListReducer, APIListReducer,
  firestore: firestoreReducer
});

// const initState = {
//   books: [
//     {id: '1', title: 'Dance in the rain', author: 'Mario'},
//     {id: '2', title: 'Read it later', author: 'Yoshi'},
//     {id: '3', title: 'Keep it real', author: 'Crystal'}
//   ]
// }

export default rootReducer;