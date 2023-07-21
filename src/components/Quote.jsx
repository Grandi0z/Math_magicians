import React, { useState } from 'react';
import useQuote from './utils/UseQuote';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const url = 'https://api.api-ninjas.com/v1/quotes';
  const key = 'vcW1XxJK+NMAGaaa4kT/aA==1EcvX42cN06t87qO';

  useQuote({
    url,
    key,
    setQuote,
    setIsLoading,
    setHasError,
  });

  if (hasError) return <p className="error-message">Something went wrong...!</p>;
  if (isLoading) return <div className="loading-message">Is loading... </div>;
  return (
    <div className="quote">
      <p className="quote-content">
        {quote.quote}
      </p>
      <p className="quoteAuthor">{quote.author}</p>
    </div>
  );
};

export default Quote;
