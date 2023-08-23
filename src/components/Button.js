import React from 'react';

import { Btn } from './Styles';

const Button = ({ loading, fetchQuote, errorMsg }) => {
  return (
    <React.Fragment>
      <Btn onClick={fetchQuote}>
        {loading ? 'Loading...' : errorMsg ? 'Reload' : 'New Quote'}
      </Btn>
    </React.Fragment>
  );
};

export default Button;
