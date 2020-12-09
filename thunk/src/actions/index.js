import axios from 'axios';

export const getQuote = () => dispatch => {
    // 1. set isFetching = true;
    // 2. setoff our api call
    // 3. if our api call is successful, add result to quote
    // 4. if our api call is unsuccessful, add error message to error
    dispatch({type:'FETCHING_QUOTE_START'});

    setTimeout(()=>{
        dispatch({type:'FETCHING_QUOTE_SUCCESS', payload:"THIS IS A NEW QUOTE"});
    }, 3000);    
}