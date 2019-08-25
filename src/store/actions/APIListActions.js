export const createAPIList = (book) => {
  return (dispatch, getState, {getFirestore}) => {
    // make async call to database
    const firestore = getFirestore();
    console.log(book.title);
    firestore.collection('books').add({
      ...book,
      createdAt:new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_BOOK_LIST_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_BOOK_LIST_ERROR' }, err);
    });
  }
};