import React, { useState } from 'react'

const Search = ({ handleSubmit }) => {
    const [value, setValue] = useState('')

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Look for something...'
                name="search"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button>Search!</button>
        </form>
    )
}

export default Search
