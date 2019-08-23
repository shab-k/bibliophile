import React from 'react'
import { Link } from 'react-router-dom'
import BookSummary from './B‌ookSummary'
// import { fetchBooks } from '../../store/actions/BookListActions';

// class BookList extends Component {
  // componentWillMount() {
  //   this.props.fetchBooks();
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.newBook) {
  //     this.props.posts.unshift(nextProps.newPost);
  //   }
  // }
  // render(){
    // const { books } = this.props;
    const BookList = ({books}) => {
      
        return (
          <div className="book-list section">
            { books && books.map(book => {
              return (
                <Link to={'/book/' + book.id} key={book.id}>
                <BookSummary book={book} key={book.id} />
                </Link>
              )
            })}  
          </div>
        )
      }
 
  // }
// }

// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     books: state.firestore.ordered.books
//   }
// }

// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect([
//     { collection: 'books' }
//   ])
// )(BookList)

//    // const bookList = books.length ? (
    //   books.map(book => {
    //     return (
    //       <div className="book card" key={book.id}>
    //         <div className="card-content">
    //           <Link to={'/' + book.id}>
    //             <span className="card-title red-text">{book.title}</span>
    //           </Link>
    //           <p>{book.author}</p>
    //         </div>
    //       </div>
    //     )
    //   })
    // )
    //  : (
    //   <div className="center">No books to show</div>
    // );

    // return (
    //   <div>
    //     <div className="container BookList">
    //       <h4 className="center">BookList</h4>
    //       {bookList}
    //     </div>
    //   </div>
    // )

    export default BookList