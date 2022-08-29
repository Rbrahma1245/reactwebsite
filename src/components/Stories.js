import React, { useEffect } from 'react'
import { useGlobalContext } from './Context'

const Stories = () => {
    const { hits, isLoading, removePost } = useGlobalContext();


    if (isLoading) {
        return (
            <div>
                <h1>Loading....</h1>
            </div>
        )
    }


    return (
        <div>

            {
                hits.map((currPost) => {
                    const { title, author, objectID, num_comments, url } = currPost

                    return (
                        <div className='container' key={objectID}>

                            <div className='box'>
                                <h3>{title}</h3>
                                <p>
                                    <span>  By {author} </span> | <span>{num_comments}</span> comments
                                </p>
                                <div>
                                    <a href={url} target="blank"> Read More</a>
                                    <a href='#' onClick={() => removePost(objectID)} > Remove</a>
                                </div>

                            </div>
                        </div>

                    )
                })
            }
        </div>
    )
}



export default Stories
