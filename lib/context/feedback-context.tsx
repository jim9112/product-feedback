import { createContext, useEffect, useState } from 'react';
import data from '../../lib/content/data.json';
const FeedbackContext = createContext({});

type IRequest = {
  id: number;
  title: string;
  description: string;
  category: string;
  upvotes: number;
  comments: {}[];
}[];

const FeedbackContextProvider = ({ children }: any) => {
  const [productRequests, setProductRequests] = useState<IRequest | null>(null);
  // add data from JSON file to state
  useEffect(() => {
    setProductRequests(data.productRequests);
  }, []);
  const context = {
    productRequests,
    setProductRequests,
  };
  return (
    <FeedbackContext.Provider value={context}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

export { FeedbackContextProvider };
