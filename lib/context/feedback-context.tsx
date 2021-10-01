import { createContext, useEffect, useState } from 'react';
import data from '../../lib/content/data.json';

type IRequest = {
  id: number;
  title: string;
  description: string;
  category: string;
  upvotes: number;
  comments: {
    id: number;
    content: string;
    user: { image: string; name: string; username: string };
    replies?:
      | {
          content: string;
          replyingTo: string;
          user: { image: string; name: string; username: string };
        }[]
      | undefined;
  }[];
}[];

const FeedbackContext = createContext({});
const FeedbackContextProvider = ({ children }: any) => {
  const [productRequests, setProductRequests] = useState<any>(null);
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
