import { useEffect } from 'react';

const useQuote = ({
  url, key, setQuote, setIsLoading, setHasError,
}) => {
  useEffect(() => {
    let isCancelled = false;// help to unsure that we disconnect before every re-render
    const getQuote = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url, {
          headers: {
            'X-Api-Key': key,
          },
        });
        if (!isCancelled) {
          const json = await res.json();
          setQuote(json[0]);
        }
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    getQuote();
    return () => {
      isCancelled = true;
    };
  }, [setQuote, setIsLoading, key, url, setHasError]);
};

export default useQuote;
