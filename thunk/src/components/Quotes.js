import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getQuote } from '../actions';

const Quotes = ({ quote, isFetching, error, getQuote }) => {
  useEffect(() => {
    getQuote()
  }, []);

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching quote for ya!</h2>;
  }

  const handleClick = () => {
    getQuote();
  }

  return (
    <>
      <h2>Kanye says: {quote}</h2>
      <button onClick={handleClick}>Get new quote</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getQuote })(Quotes);