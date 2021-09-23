import { createContext, useState } from 'react';

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
