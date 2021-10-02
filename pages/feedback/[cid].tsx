import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import BackButton from '../../components/BackButton';
import ProductRequest from '../../components/ProductRequest';
import Comments from '../../components/Comments';
import AddCommentForm from '../../components/AddCommentForm';
import { useRecoilState } from 'recoil';
import { productRequestState } from '../../lib/atoms';

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
      content: string;
      replyingTo: string;
      user: { image: string; name: string; username: string };
    }[];
  }[];
}

const Feedback = () => {
  const [productRequests, setProductRequests] =
    useRecoilState(productRequestState);

  const [feedback, setFeedback] = useState<IFeedback>();
  const router = useRouter();
  const { cid }: any = router.query;
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
    <div className='bg-text-grey min-h-screen p-6'>
      <BackButton />
      <div className='flex flex-col gap-y-6'>
        {feedback && <ProductRequest request={feedback} />}
        {feedback?.comments && (
          <Comments comments={feedback.comments || null} />
        )}
        <AddCommentForm />
      </div>
    </div>
  );
};

export default Feedback;
