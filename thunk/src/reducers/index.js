import { FETCHING_QUOTE_START, FETCHING_QUOTE_SUCCESS, FETCHING_QUOTE_FAIL } from '../actions/index'

const initialState = {
  quote: '',
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (FETCHING_QUOTE_START):
      return ({
        ...state,
        isFetching: true,
        error: ''
      })
    case (FETCHING_QUOTE_SUCCESS):
      return ({
        ...state,
        quote: action.payload,
        isFetching: false
      })
    case (FETCHING_QUOTE_FAIL):
      return ({
        ...state,
        error: action.payload
      })
    default:
      return state;
  }
};