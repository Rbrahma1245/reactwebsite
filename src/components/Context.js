// 1)  context creation
// 2)  provider
// 3)  consumer lengthy, remove and replace with
// 3)  useContext hook


import React, { useContext, useReducer, useEffect } from "react";
import Reducer from './Reducer'

let API = "http://hn.algolia.com/api/v1/search?";

const initialState = {
    isLoading: true,
    query: "HTML",
    nbpages: 0,
    page: 0,
    hits: [],
};

const AppContext = React.createContext();




const AppProvider = ({ children }) => {

    const [state, dispatch,] = useReducer(Reducer, initialState);




    const fetchApiData = async (url) => {
        dispatch({ type: "LOADING" });


        try {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)

            dispatch({
                type: "GET_STORIES",
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages
                }
            })
        }

        catch (error) {
            console.log(error)
        }

    }



    //to remove the post

    const removePost = (id) => {
        dispatch({ type: "REMOVE_POST", payload: id })

    }


    //to Search 

    const searchPost = (searchQuery) => {
        dispatch({
            type: "SEARCH_QUERY",
            payload: searchQuery
        })

    }
    //Pagination

    const getNextPage = () => {
        dispatch({
            type: "NEXT_PAGE"
        })
    }

    const getPrevPage = () => {
        dispatch({
            type: "PREV_PAGE"
        })
    }

    useEffect(() => {
        fetchApiData(`${API}query=${state.query}&page=${state.page}`);
    }, [state.query, state.page])







    return (
        <AppContext.Provider value={{ ...state, removePost, searchPost, getNextPage, getPrevPage }}>
            {children}
        </AppContext.Provider>
    )
}




//creating custom Hook

const useGlobalContext = () => {
    return useContext(AppContext);
}




export { AppContext, AppProvider, useGlobalContext }