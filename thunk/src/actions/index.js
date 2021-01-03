import axios from 'axios'

export const FETCHING_QUOTE_START = 'FETCHING_QUOTE_START';
export const FETCHING_QUOTE_SUCCESS = 'FETCHING_QUOTE_SUCCESS';
export const FETCHING_QUOTE_FAIL = 'FETCHING_QUOTE_FAIL';

export const getQuote = () => dispatch => {
    dispatch({ type: FETCHING_QUOTE_START })

    axios
        .get('https://api.kanye.rest')
        .then(res => {
            console.log(res)
            console.log(res.data.quote)
            dispatch({ type: FETCHING_QUOTE_SUCCESS, payload: res.data.quote })
        })
        .catch(err => {
            dispatch({ type: FETCHING_QUOTE_FAIL, payload: err.response.message })
        })
}
