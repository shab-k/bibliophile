    
const initState = {
  books: [
    {id: '1', title: 'Dance in the rain', author: 'Mario'},
    {id: '2', title: 'Read it later', author: 'Yoshi'},
    {id: '3', title: 'Keep it real', author: 'Crystal'}
  ]
}

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;