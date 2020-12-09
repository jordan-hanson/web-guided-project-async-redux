import axios from 'axios';

export const FETCHING_QUOTE_START = 'FETCHING_QUOTE_START';
export const FETCHING_QUOTE_SUCCESS = 'FETCHING_QUOTE_SUCCESS';
export const FETCHING_QUOTE_FAIL = 'FETCHING_QUOTE_FAIL';


//thunk:
//0. dispatch, currentState, reducer
//1. get actioncreator.
//2. if typeof actionCreator === "object": currentState = reducer(actionCreator);
//3. if typeof actionCreator === "function": actionCreator(dispatch);

export const getQuote = () => {
    return (dispatch => {

        dispatch({type:FETCHING_QUOTE_START});

        axios
            .get(`https://api.kanye.rest`)
            .then(res=> {
                dispatch({type:FETCHING_QUOTE_SUCCESS, payload:res.data.quote});
            })
            .catch(err => {
                dispatch({type:FETCHING_QUOTE_FAIL, payload: err.response.message});
            });
    });
}

const setFetchStart = (name) => {
    return({type:FETCHING_QUOTE_START});
}

const setFetchSuccess = (name) => {
    return({type:FETCHING_QUOTE_SUCCESS});
}

const setFetchFail = (name) => {
    return({type:FETCHING_QUOTE_FAIL});
}