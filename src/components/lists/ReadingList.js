import React from 'react'
import SearchResult from '../dashboard/SearchResult'

const ReadingList = (props) => {
  console.log(props)
  const allBooks = props.readingList.map((book, index) => <Book key={index} book={book}/>)

      return(
        <div className="reading-list">
          <div className="ui cards">
            {allBooks}
          </div>
        </div>
      )
  }

  export default ReadingList

