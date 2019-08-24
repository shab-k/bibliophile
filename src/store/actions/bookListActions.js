export const createBookList = (book) => {
  return (dispatch, getState, {getFirestore}) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('books').add({
      ...book,
      userFirstName: 'Shabi',
      userLastName: 'Kimi',
      authorId: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_BOOK_LIST_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_BOOK_LIST_ERROR' }, err);
    });
  }
};