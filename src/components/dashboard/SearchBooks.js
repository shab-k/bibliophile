import React from 'react'

const SearchBooks = (props) => {
    return (
        <div className="container">
        <form onSubmit={props.handleSearchSubmit}>
                <h5 className="center-align">Search For The books</h5>
                <input type="search" value={props.searchTerm} onChange={props.handleChange} required />
                <button type="submit">Search</button>
        </form>
        </div>
    )
}

export default SearchBooks