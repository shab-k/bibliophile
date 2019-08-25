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

// const rootReducer = (state = initState, action) => {
//   combineReducers({
//     // readingList: bookListReducer,
//     // firebase: firebaseReducer,
//     firestore: firestoreReducer
//   });
  
//   switch (action.type) {
//     case 'CREATE_READING_LIST_SUCCESS':
//       console.log('create reading list success');
//       return state;
//     case 'CREATE_READING_LIST_ERROR':
//       console.log('create reading list error');
//       return state;
//     default:
//       return state;
//   }
// };

export default rootReducer;