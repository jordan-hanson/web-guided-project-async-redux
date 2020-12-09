
const initialState = {
  quote: '',
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case('FETCHING_QUOTE_START'):
      return({
        ...state,
        isFetching: true,
        error: ''
      });
    case('FETCHING_QUOTE_SUCCESS')
    default:
      return state;
  }
};