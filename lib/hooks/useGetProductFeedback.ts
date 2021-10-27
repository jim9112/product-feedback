import { useEffect, useState } from 'react';
interface IFeedback {
  id: number;
  title: string;
  description: string;
  category: string;
  upvotes: number;
  comments?: {
    id: number;
    content: string;
    user: { image: string; name: string; username: string };
    replies?: {
      id: number;
      content: string;
      replyingTo: string;
      user: { image: string; name: string; username: string };
    }[];
  }[];
}

const useGetProductFeedback = (productRequests: IFeedback[], cid: any) => {
  const [feedback, setFeedback] = useState<IFeedback>();
  useEffect(() => {
    // find product feedback that matches the ID passed through query
    function getProductFeedback() {
      const comment = productRequests.find((el) => el.id === parseInt(cid));
      setFeedback(comment);
    }
    if (productRequests && productRequests.length > 0) {
      getProductFeedback();
    }
  }, [productRequests, cid]);
  return { feedback };
};

export default useGetProductFeedback;
