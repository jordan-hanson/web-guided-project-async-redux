import axios from 'axios';

export const FETCHING_QUOTE_START = 'FETCHING_QUOTE_START';
export const FETCHING_QUOTE_SUCCESS = 'FETCHING_QUOTE_SUCCESS';
export const FETCHING_QUOTE_FAIL = 'FETCHING_QUOTE_FAIL';

export const getQuote = () => dispatch => {
    // 1. set isFetching = true;
    // 2. setoff our api call
    // 3. if our api call is successful, add result to quote
    // 4. if our api call is unsuccessful, add error message to error
    dispatch({type:FETCHING_QUOTE_START});

    setTimeout(()=>{
        dispatch({type:FETCHING_QUOTE_SUCCESS, payload:"THIS IS A NEW QUOTE"});
    }, 3000);    
}