import React from 'react'
import { useGlobalContext } from './Context'

const Pagination = () => {

    const { page, nbPages, getPrevPage, getNextPage } = useGlobalContext();








    return (
        <div className='container' >
            <div className='searchButton'>

                <button onClick={() => getPrevPage()}>PREV</button>

                <p>  {page + 1} of {nbPages}  </p>

                <button onClick={() => getNextPage()}>NEXT</button>

            </div>
        </div>
    )
}



export default Pagination
