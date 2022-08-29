import React from 'react'
import { useGlobalContext } from './Context'

const Search = () => {

    const { query, searchPost } = useGlobalContext();
    return (
        <div className='search'>
            <h2>This is a Website </h2>

            <input type="text" placeholder="Search"
                value={query}
                onChange={(e) => searchPost(e.target.value)}
            />
        </div>
    )
}

export default Search
