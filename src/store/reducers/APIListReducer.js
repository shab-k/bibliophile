const initState = {}

const APIListReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_BOOK_LIST_SUCCESS':
      console.log('create reading list success');
      return state;
    case 'CREATE_BOOK_LIST_ERROR':
      console.log('create reading list error');
      return state;
    default:
      return state;
  }
};

export default APIListReducer;