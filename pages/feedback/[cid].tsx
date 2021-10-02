import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import BackButton from '../../components/BackButton';
import ProductRequest from '../../components/ProductRequest';
import Comments from '../../components/Comments';
import AddCommentForm from '../../components/AddCommentForm';
import { useRecoilState } from 'recoil';
import { productRequestState } from '../../lib/atoms';
import useGetProductFeedback from '../../lib/hooks/useGetProductFeedback';

const Feedback = () => {
  const [productRequests, setProductRequests] =
    useRecoilState(productRequestState);

  const router = useRouter();
  const { cid }: any = router.query;
  const { feedback } = useGetProductFeedback(productRequests, cid);
  // To Do: move to custom hook

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
