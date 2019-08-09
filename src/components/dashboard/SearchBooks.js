import React from 'react'

const SearchBooks = ({ onSubmitHandler, searchTerm, onInputChange, error }) => {
    return (
        <div className="container">
        <form onSubmit={onSubmitHandler}>
            <label>
                <h5 className="center-align">Search For The books</h5>
                <input
                    type="search" placeholder="Harry Potter" value={searchTerm} onChange={onInputChange} required />
                <button type="submit">Search</button>
            </label>
            {
                error && <div style={{ color: `red` }}>some error occurred, while fetching api</div>
            }
        </form>
        </div>
    )
}

export default SearchBooks