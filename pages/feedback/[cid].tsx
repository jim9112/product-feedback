import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import ProductRequest from '../../components/ProductRequest';

import FeedbackContext from '../../lib/context/feedback-context';

const Feedback = () => {
  const { productRequests, setProductRequests } = useContext<{}[] | {}>(
    FeedbackContext
  );
  const [feedback, setFeedback] = useState();
  const router = useRouter();
  const { cid } = router.query;
  useEffect(() => {
    // find product feedback that matches the ID passed through query
    function getComment() {
      const comment = productRequests.find((el) => el.id === parseInt(cid));
      setFeedback(comment);
    }
    if (productRequests && productRequests.length > 0) {
      getComment();
    }
  }, [productRequests, cid]);

  return (
    <div className='bg-text-grey min-h-screen'>
      <h1>Test</h1>
      {feedback && <ProductRequest request={feedback} />}
    </div>
  );
};

export default Feedback;
