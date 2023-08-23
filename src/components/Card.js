import React from 'react';

import { QuoteCard, QuoteText, Author } from './Styles';

const Card = ({ children, cardText, author, errorMsg, loading }) => {
  return (
    <QuoteCard>
      <QuoteText>{cardText}</QuoteText>
      {errorMsg || loading ? (
        ''
      ) : author === null ? (
        <Author>- Unknow</Author>
      ) : (
        <Author> - {author}</Author>
      )}
      {children}
    </QuoteCard>
  );
};

export default Card;
